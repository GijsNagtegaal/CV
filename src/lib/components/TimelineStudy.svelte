<script>
    import Heading from '$lib/components/GeneralHeading.svelte';
    import ArrowRight from "./icons/ArrowRight.svelte";

    let { data } = $props();

    let sortedStudies = $derived(
        [...data.opleidingen].sort((a, b) => {
            const aIsHeden = a.Jaar_gestopt === 'Heden';
            const bIsHeden = b.Jaar_gestopt === 'Heden';

            if (aIsHeden && !bIsHeden) return -1;
            if (!aIsHeden && bIsHeden) return 1;

            return Number(b.Jaar_begonnen) - Number(a.Jaar_begonnen);
        })
    );
</script>

<Heading id="opleidingen" class="fadeinup margin big" heading_level={2} >Mijn <em>Opleidingen</em></Heading>

<section class="study">
    {#each sortedStudies as opleiding}
        <article class="study-card">
            <div class="timeline-marker"></div>
            
            <div class="study-wrapper">
                <div class="card-header">
                    <h3>{opleiding.Opleiding}</h3>
                    <div class="time">
                        <time datetime="{opleiding.Jaar_begonnen}">{opleiding.Jaar_begonnen}</time>
                        <ArrowRight size="1.5rem" />
                        <time datetime="{opleiding.Jaar_gestopt}">{opleiding.Jaar_gestopt}</time>
                    </div>
                </div>
                <p>{opleiding.School}</p>
                <p>
                    {opleiding.Omschrijving}
                </p>
            </div>
        </article>
    {/each}
</section>


<style>
section.study {
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

        
        color: var(--always-light); 

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

        div.study-wrapper {
            background-color: var(--accent-button-inverted); 
            padding: 1rem;
            border-radius: var(--border-badge);
            border: 2px solid var(--dark-background);
            
        }

        h3 {
            color: var(--always-light); 
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
                color: var(--always-light); 
            }
        }

        p {
            color: var(--always-light); 
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
    
    section.study article div {
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
        section.study article:nth-child(odd) div {
            animation-name: slide-in-right;
        }

        section.study article:nth-child(even) div {
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