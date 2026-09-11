<script>
    import ArrowRight from "./icons/ArrowRight.svelte";
    import Heading from '$lib/components/GeneralHeading.svelte';

    let { data } = $props();

    let sortedJobs = $derived(
        [...data.werkervaring].sort((a, b) => {
            const aIsHeden = a.Jaar_gestopt === 'Heden';
            const bIsHeden = b.Jaar_gestopt === 'Heden';

            if (aIsHeden && !bIsHeden) return -1;
            
            if (!aIsHeden && bIsHeden) return 1;

            return Number(b.Jaar_begonnen) - Number(a.Jaar_begonnen);
        })
    );
</script>

<Heading class="fadeinup margin big" heading_level={2} >Mijn <em>Werkervaring</em></Heading>
<section class="timeline">
    {#each sortedJobs as job}
        <article>
            <div class="workwrapper" >
                <h3>{job.Functie}</h3>
                <p>{job.Werkgever}</p>
                <div class="time">
                    <time datetime="{job.Jaar_begonnen}">{job.Jaar_begonnen}</time>
                    <ArrowRight size="1.5rem" />
                    <time datetime="{job.Jaar_gestopt}">{job.Jaar_gestopt}</time>
                </div>
                <p>
                    {job.Omschrijving}
                </p>
            </div>
        </article>
    {/each}
</section>

<style>
section.timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 6rem;
    width: 100%;

    @media (min-width:500px) {
        margin-bottom: 10rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        background-color: var(--dark-background);
    }

    article {
        position: relative;
        display: grid;
        grid-template-columns: 45% 45%;
        gap: 2rem; 
        width: 100%;

        @media (min-width:500px) {
            grid-template-columns: 1fr 1fr;
        }

        &::before {
            content: '';
            position: absolute;
            top: 0; 
            left: 50%;
            transform: translate(-50%, 0);
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: var(--light-text);
            border: 4px solid var(--dark-background, #1a1a1a); 
            z-index: 1;
        }

        div.workwrapper {
            background-color: var(--light-background); 
            padding: 1rem;
            border-radius: var(--border-badge);
            border: 2px solid var(--dark-background);
            
        }

        h3 {
            color: var(--accent-card); 
            font-size: 1.25rem; 
            font-style: italic; 
        }
        
        div.time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-block: .5rem;

            time { 
                font-size: var(--heading-medium);
            }
        }

        &:nth-child(odd) div { 
            grid-column: 2; 
            border-radius: var(--border-badge);
        }

        &:nth-child(even) div { 
            grid-column: 1;
            border-radius: var(--border-badge);
        }
    }
}

@supports (animation-timeline: view()) {
    
    section.timeline article div {
        opacity: 0;
        will-change: transform, opacity;
        animation-duration: 1ms;
        animation-fill-mode: both;
        animation-timeline: view();
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        animation-range: entry 40% cover 80%; 
        animation-name: slide-up;
    }

    @media (min-width: 789px) {
        section.timeline article:nth-child(odd) div {
            animation-name: slide-in-right;
        }

        section.timeline article:nth-child(even) div {
            animation-name: slide-in-left;
        }
    }

    @keyframes slide-up {
        0% { 
            transform: translateY(100px); 
            opacity: 0;
        }
        100% {
            transform: translateY(0%); 
            opacity: 1;
        }
    }

    @keyframes slide-in-left {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slide-in-right {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
}

</style>