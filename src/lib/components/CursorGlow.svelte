<script>
    import { onMount } from 'svelte';

    let cursor;
    let glow;

    onMount(() => {
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (!finePointer.matches || reducedMotion.matches) return;

        document.documentElement.classList.add('custom-cursor');

        let frame = null;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let targetX = x;
        let targetY = y;

        const render = () => {
                x += (targetX - x) * 0.2;
                y += (targetY - y) * 0.2;
                cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;

                if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
                    frame = requestAnimationFrame(render);
                } else {
                    frame = null;
                }
        };

        const updatePosition = (event) => {
            targetX = event.clientX;
            targetY = event.clientY;

            if (!frame) frame = requestAnimationFrame(render);
        };

        const hideCursor = () => document.documentElement.classList.add('cursor-hidden');
        const showCursor = () => document.documentElement.classList.remove('cursor-hidden');

        window.addEventListener('pointermove', updatePosition, { passive: true });
        document.addEventListener('pointerleave', hideCursor);
        document.addEventListener('pointerenter', showCursor);

        return () => {
            document.documentElement.classList.remove('custom-cursor', 'cursor-hidden');
            window.removeEventListener('pointermove', updatePosition);
            document.removeEventListener('pointerleave', hideCursor);
            document.removeEventListener('pointerenter', showCursor);
            if (frame) cancelAnimationFrame(frame);
        };
    });
</script>

<span bind:this={glow} class="cursor-glow" aria-hidden="true"></span>
<span bind:this={cursor} class="cursor-dot" aria-hidden="true"></span>

<style>
    .cursor-dot,
    .cursor-glow {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 999;
        opacity: 0;
    }

    .cursor-dot {
        width: 0.75rem;
        height: 0.75rem;
        margin: -0.375rem 0 0 -0.375rem;
        border: 2px solid var(--always-light);
        border-radius: 50%;
        background: var(--accent-button-inverted);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-button-inverted) 35%, transparent);
    }

    .cursor-glow {
        width: 14rem;
        height: 14rem;
        margin: -7rem 0 0 -7rem;
        border-radius: 50%;
        background: color-mix(in srgb, var(--accent-button-inverted) 16%, transparent);
        filter: blur(2rem);
        mix-blend-mode: screen;
        transition: opacity 0.2s ease;
    }

    :global(.custom-cursor),
    :global(.custom-cursor) * {
        cursor: none;
    }

    :global(.custom-cursor) .cursor-dot,
    :global(.custom-cursor) .cursor-glow {
        opacity: 1;
    }

    :global(.custom-cursor.cursor-hidden) .cursor-dot,
    :global(.custom-cursor.cursor-hidden) .cursor-glow {
        opacity: 0;
    }
</style>
