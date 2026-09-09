<script>
import Head from '$lib/Head.svelte';
import Header from '$lib/Header.svelte';
import Picture from '$lib/picture.svelte';
import Link from '$lib/Link.svelte';
import Heading from '$lib/GeneralHeading.svelte';

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
            class="memo"
            fetch="high"
        />

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
        
        <Heading 
            heading_level={2} 
        >Hoi! ik ben <em>Gijs</em> <em>Nagtegaal</em></Heading>
        
        <p>
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


</main>