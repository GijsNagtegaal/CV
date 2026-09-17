<script>
    let {
        left="20px",
        top="20px",
        glowcolor="#fffff"
	} = $props();
</script>

<div style="--top: {top}; --left: {left}; --glowcoor: {glowcolor};"></div>

<style>
    div {
        position: fixed;
        top: var(--top);
        left: var(--left);
        display: flex;
        width: 8rem;
        height: 8rem;
        border-radius: 50%; 
        cursor: none;
        background: color-mix(in srgb, var(--glowcolor) 16%, transparent);
        filter: blur(2.5rem);
        mix-blend-mode: screen;
    }
</style>