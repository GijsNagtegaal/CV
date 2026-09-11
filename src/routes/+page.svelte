<script>
import Head from '$lib/components/Head.svelte';
import Header from '$lib/components/Header.svelte';
import Picture from '$lib/components/picture.svelte';
import Heading from '$lib/components/GeneralHeading.svelte';
import TimelineWork from '$lib/components/TimelineWork.svelte';
import TimelineStudy from '$lib/components/TimelineStudy.svelte';

let { data } = $props();
</script>

<Head />
<Header />

<main class="home">

    <section class="imgijs">
        <Picture 
            imagesrc="/assets/images/Gijs"
            width="280"
            height="280"
            alt="Gijs Nagtegaal"
            class="memo imageani" 
            fetch="high"
        />
        
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

    <section class="about" id="overmij">
        
        <Heading class="fadeinup" heading_level={2} >Hoi! ik ben <em>Gijs</em> <em>Nagtegaal</em></Heading>
        
        <p class="fadeinup">
            Ik studeer HBO Frontend Design en Development en ben graag lekker praktisch bezig. 
            Van het bouwen van WordPress- en Shopify-sites tot het vliegen met drones, ik vind het tof om te ondernemen.
            Ook houd ik van puzzelen met code (HTML, CSS en JavaScript) en bedenk graag oplossingen die goed en snel werken.
        </p>
    </section>

    <TimelineWork data={data} />
    <TimelineStudy data={data} />
</main>

<style>
:global(body) {
    overflow-x: hidden;
}

.fadeinup {
    animation: fadeInUp 0.3s ease-out;
}
main.home {
    display: flex;
    flex-wrap: wrap;
}

section.imgijs {
    width: 100%;
    height: fit-content;
    position: relative;

    @media (min-width: 800px) {
        width: 45%;
        margin-right: 5%;
    }
}

section.imgijs, section.about {
    margin-top: 2rem;

    @media (min-width:500px) {
        margin-top: 10rem;
    }
}

section.about {
    color: var(--dark-text);

    @media (min-width: 800px) {
        width: 50%;
    }

    p {
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

</style>