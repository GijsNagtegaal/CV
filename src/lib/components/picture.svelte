<script>
  let {
    imagesrc,
    imagesrc_dark = null,
    class: cssClass = '',
    width,
    height,
    fetch: fetchPriority = 'auto',
    loading,
    style = '',
    alt = ''
  } = $props();

  let hasRealDarkMode = $derived(Boolean(imagesrc_dark && imagesrc_dark !== '/assets/images/gijsmemo.webp'));
  let isLocalAsset = $derived(imagesrc.includes('/assets/images'));
  let finalLoading = $derived(loading ?? (isLocalAsset ? 'eager' : 'lazy'));
</script>

{#if isLocalAsset}
  
  <picture class={cssClass}>
    {#if hasRealDarkMode}
      <source srcset="{imagesrc_dark}.avif?width={width}&height={height}&quality=90" type="image/avif" media="(prefers-color-scheme: dark)" />
      <source srcset="{imagesrc_dark}.webp?width={width}&height={height}&quality=90" type="image/webp" media="(prefers-color-scheme: dark)" />
    {/if}

    <source srcset="{imagesrc}.avif?width={width}&height={height}&quality=90" type="image/avif" />
    <source srcset="{imagesrc}.webp?width={width}&height={height}&quality=90" type="image/webp" />
    
    <img 
      class={cssClass} 
      src="{imagesrc}?width={width}&height={height}&quality=60" 
      fetchpriority={fetchPriority}
      loading={finalLoading} 
      {style} 
      {alt}
    >
  </picture>

{:else}
  
  <picture class={cssClass}>
    {#if hasRealDarkMode}
      <source srcset="{imagesrc_dark}?width={width}&height={height}&format=avif&quality=90" type="image/avif" media="(prefers-color-scheme: dark)" />
      <source srcset="{imagesrc_dark}?width={width}&height={height}&format=webp&quality=90" type="image/webp" media="(prefers-color-scheme: dark)" />
    {/if}

    <source srcset="{imagesrc}?width={width}&height={height}&format=avif&quality=90" type="image/avif" />
    <source srcset="{imagesrc}?width={width}&height={height}&format=webp&quality=90" type="image/webp" />
    
    <img 
    class={cssClass}
    src="{imagesrc}?width={width}&height={height}&quality=60"
    fetchpriority={fetchPriority}
    loading={finalLoading} 
    {style} 
    {alt}
    >
  </picture>

{/if}

<style>
picture {
    display: flex;
}

picture.memo {
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: var(--border-round);
    background-image: radial-gradient(
    ellipse at center,
    var(--primary) 0%,
    color-mix(in srgb, var(--accent) 50%, transparent) 15%,
    color-mix(in srgb, var(--accent) 15%, transparent) 35%,
    transparent 75%
    );
}

img.memo {
    position: relative;
    min-width: 20rem;
    width: 100%;
    max-width: 20rem;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: var(--border-round);
    animation: imageani 4s ease-in-out forwards;
}

picture.techstack {
    position: absolute;
    width: 3rem;
    height: auto;
    z-index: 2;

    &.pos-1 { top: 10%; right: 20%; --mx: 30vw;  --mxh: 60vw;  --mxm: 10vw;  --my: 230vh; --myh: 60vh;  --mym: 90vh;  --rot: 45deg;  --roth: 90deg;  --rotm: 20deg; }
    &.pos-2 { top: 45%; right: 10%; --mx: 40vw;  --mxh: 70vw;  --mxm: 15vw;  --my: 210vh; --myh: 50vh;  --mym: 85vh;  --rot: 90deg;  --roth: 135deg; --rotm: 45deg; }
    &.pos-3 { top: 75%; right: 15%; --mx: 30vw;  --mxh: 65vw;  --mxm: 10vw;  --my: 240vh; --myh: 70vh;  --mym: 100vh; --rot: -45deg; --roth: -90deg; --rotm: -20deg;}
    &.pos-4 { top: 5%;  left: 20%;  --mx: -20vw; --mxh: -60vw; --mxm: -10vw; --my: 240vh; --myh: 60vh;  --mym: 95vh;  --rot: -60deg; --roth: -120deg; --rotm: -30deg;}
    &.pos-5 { top: 25%; left: 5%;   --mx: -40vw; --mxh: -70vw; --mxm: -15vw; --my: 210vh; --myh: 50vh;  --mym: 85vh;  --rot: -90deg; --roth: -135deg; --rotm: -45deg;}
    &.pos-6 { top: 50%; left: 15%;  --mx: -50vw; --mxh: -75vw; --mxm: -20vw; --my: 220vh; --myh: 55vh;  --mym: 90vh;  --rot: -30deg; --roth: -75deg; --rotm: -15deg;}
    &.pos-7 { top: 78%; left: 10%;  --mx: -30vw; --mxh: -65vw; --mxm: -10vw; --my: 250vh; --myh: 75vh;  --mym: 105vh; --rot: 60deg;  --roth: 120deg; --rotm: 30deg; }

    @media (min-width: 800px) {
        width: 2rem;

        &.pos-1 { top: 10%; right: 10%; }
        &.pos-2 { top: 50%; right: 0%; }
        &.pos-3 { top: 90%; right: 20%; }
        &.pos-4 { top: 25%; left: 10%; }
        &.pos-5 { top: 60%; left: 5%; }
        &.pos-6 { top: 90%; left: 20%; }
        &.pos-7 { top: 0%; left: 25%; }
    }
}

@keyframes imageani {
    0% { border-radius: 5%; }
    20% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    50% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
    80% { border-radius: 30% 70% 70% 30% / 50% 60% 40% 50%; }
    100% { border-radius: var(--border-round, 50%); }
}

@supports (animation-timeline: scroll()) {
    picture.techstack {
        animation-timeline: scroll(root);
        animation-range: 0 200vh; 
        animation-name: float-away;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }

    @keyframes float-away {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
        }

        15% {
            opacity: 0.8;
        }

        /* Smoothly glide off-screen by 25% */
        25% {
            transform: translate(var(--mxh), var(--myh)) rotate(var(--roth)) scale(1.1);
            opacity: 0; 
        }

        100% {
            transform: translate(var(--mxm), var(--mym)) rotate(var(--rotm)) scale(1.1);
            opacity: 0;
        }

    }
}
</style>