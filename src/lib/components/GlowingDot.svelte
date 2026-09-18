<script>
    let {
        left = "",
        bottom = "",
        glowColorLight = "",
        glowColorDark = "",
        strength= "",
        leftdesktop="",
        topdesktop="",
        width="",
        height="",
        widthdesktop="",
        heightdesktop="",
        column=""
    } = $props();
</script>

<div 
    style="
    --leftdesktop: {leftdesktop}; 
    --topdesktop: {topdesktop}; 
    --bottom: {bottom}; 
    --left: {left}; 
    --glowcolor: light-dark({glowColorLight}, {glowColorDark}); 
    --strength: {strength}; 
    --width:{width}; 
    --height:{height}; 
    --widthdesktop:{widthdesktop}; 
    --heightdesktop:{heightdesktop};
    --column:{column};"
    >
</div>

<style>
    div {
        position: absolute;
        bottom: var(--bottom);
        left: var(--left);
        display: flex;
        width: var(--width);
        height: var(--height);
        border-radius: 90% 90% 90% 90% / 60% 60% 60% 60%;
        cursor: none;
        background: color-mix(in srgb, var(--glowcolor) var(--strength), transparent);
        filter: blur(2rem);
        pointer-events: none;
        grid-column: var(--column);
        z-index: 0;

        @media (min-width: 800px) {
            top: var(--topdesktop);
            left: var(--leftdesktop);
            width: var(--widthdesktop);
            height: var(--heightdesktop);
        }
    }
</style>