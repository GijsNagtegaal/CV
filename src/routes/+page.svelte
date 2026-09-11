<script>
import Head from '$lib/components/Head.svelte';
import Header from '$lib/components/Header.svelte';
import Picture from '$lib/components/picture.svelte';
import Link from '$lib/components/Link.svelte';
import Heading from '$lib/components/GeneralHeading.svelte';
import Timeline from '$lib/components/Timeline.svelte';

let { data } = $props();
</script>

<Head />
<Header />

<main class="home">

    <!-- section wsith me and my tech stack -->
    <section class="imgijs">

        <!-- partial to render a picture, requires a src, width and height to work -->
        <Picture 
            imagesrc="/assets/images/Gijs"
            width="280"
            height="280"
            alt="Gijs Nagtegaal"
            class="memo imageani" 
            fetch="high"
        />
        
        <!-- The text cloud -->
        <p class="text-cloud">Hoi! Ik ben Gijs</p>

        {#each data.techStack.slice(0, 7) as tech, i}
            <Picture 
                imagesrc={tech.image}
                imagesrc_dark={tech.image_dark}
                width="80"
                height="80"
                alt={tech.name}
                class="round badge techstack pos-{i + 1}"
                fetch="high"
            />
        {/each}

    </section>

    <!-- About me + portfolio button-->
    <section class="about" id="overmij">
        
        <Heading class="fadeinup" heading_level={2} >Hoi! ik ben <em>Gijs</em> <em>Nagtegaal</em></Heading>
        
        <p class="fadeinup">
            Ik studeer HBO Frontend Design en Development en ben graag lekker praktisch bezig. 
            Van het bouwen van WordPress- en Shopify-sites tot het vliegen met drones, ik vind het tof om te ondernemen.
            Ook houd ik van puzzelen met code (HTML, CSS en JavaScript) en bedenk graag oplossingen die goed en snel werken.
        </p>
        
        <Link 
            content="Gelijk naar mijn werkervaring"
            custom_class="primary"
            svg="true"
        />
    </section>

    <Timeline data="{data}" />
</main>

<style>

:global(body) {
    overflow-x: hidden;
}

:global(.fadeinup) {
    animation: fadeInUp 0.3s ease-out;
}

:global(.imageani) {
    animation: imageani 4s ease-in-out forwards;
}

:global(main.home) {
    display: flex;
    flex-wrap: wrap;
}

:global(main.home) :global(section.imgijs) {
    width: 100%;
    height: fit-content;
    position: relative;

    @media (min-width: 800px) {
        width: 45%;
        margin-right: 5%;
    }
}

:global(section.imgijs) :global(picture.memo) {
    display: flex;
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

:global(section.imgijs) :global(img.memo) {
    position: relative;
    min-width: 20rem;
    width: 100%;
    max-width: 20rem;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: var(--border-round);
}

:global(section.imgijs img.techstack) {
    position: absolute;
    width: calc(1vw + 3rem + 2%);
    height: auto;

    &:global(.pos-1) { top: 10%; right: 10%;}
    &:global(.pos-2) { top: 45%; right: 0%;}
    &:global(.pos-3) { top: 85%; right: 5%;}
    &:global(.pos-4) { top: 10%; left: 20%;}
    &:global(.pos-5) { top: 20%; left: 0%;}
    &:global(.pos-6) { top: 50%; left: 5%;}
    &:global(.pos-7) { top: 78%; left: 10%;}

    @media (min-width: 800px) {
        &:global(.pos-1) { top: 10%; right: 10%; }
        &:global(.pos-2) { top: 50%; right: 0%; }
        &:global(.pos-3) { top: 90%; right: 20%; }
        &:global(.pos-4) { top: 25%; left: 10%; }
        &:global(.pos-5) { top: 60%; left: 5%; }
        &:global(.pos-6) { top: 90%; left: 20%; }
        &:global(.pos-7) { top: 0%; left: 25%; }
    }
}

:global(section.about) {
    color: var(--dark-text);

    @media (min-width: 800px) {
        width: 50%;
    }

:global(h2) { margin-top: 2rem; }

    :global(p) {
        color: inherit;
        margin-block: 3dvh;
    }
}

.text-cloud {
    position: absolute;
    top: -20px;
    right: 40px;
    background: var(--dark-background);
    color: var(--light-text);
    padding: 0.625rem 1.125rem;
    border-radius: var(--border-badge);
    font-weight: bold;
    font-size: 0.9rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    opacity: 0;
    z-index: 0;
    transform: scale(0.5) translateY(0.625rem);
    transform-origin: bottom left;
    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation-delay: 4s; 
}
.text-cloud::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 20px;
    border-width: 8px 8px 0;
    border-style: solid;
    border-color: var(--dark-background) transparent transparent transparent;
}

@keyframes popIn {
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes imageani {
    0% {
        border-radius: 5%;
    }
    20% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; 
    }
    50% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; 
    }
    80% {
        border-radius: 30% 70% 70% 30% / 50% 60% 40% 50%; 
    }
    100% {
        border-radius: var(--border-round, 50%); 
    }
}
</style>