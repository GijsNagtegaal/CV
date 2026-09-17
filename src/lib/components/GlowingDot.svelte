<script>
    let {
        left = "",
        top = "",
        glowColor = ""
    } = $props();
</script>

<div style="--top: {top}; --left: {left}; --glowcolor: {glowColor};"></div>

<style>
    div {
        position: absolute;
        top: var(--top);
        left: var(--left);
        display: flex;
        width: 9rem;
        height: 9rem;
        border-radius: 50%; 
        cursor: none;
        background: color-mix(in srgb, var(--glowcolor) 36%, transparent);
        filter: blur(1.5rem);
        z-index: 0;
    }
</style>