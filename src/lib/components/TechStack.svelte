<script>
    import Picture from '$lib/components/Picture.svelte';
    let { items = [] } = $props();
</script>

<section class="techstack-wrapper" id="techstack">
    <div class="techstack-sticky">
        <div class="content-container">
            <h3>Mijn Huidige <em>Skills</em></h3>

            <div class="tech-marquee" aria-label="Technologische vaardigheden">
                <section class="tech-track">
                    {#each [...items, ...items] as tech}
                        <figure>
                            <Picture
                                imagesrc={tech.image}
                                imagesrc_dark={tech.image_dark}
                                width="100"
                                height="100"
                                alt={tech.name}
                                class="round badge staticstack"
                                fetch="high"
                            />
                            <figcaption>{tech.name}</figcaption>
                        </figure>
                    {/each}
                </section>
            </div>
        </div>
    </div>
</section>

<style>
    .techstack-wrapper {
        position: relative;
        background: transparent;
        overflow-x: hidden;
        padding: 2rem 0 3rem;
    }

    .techstack-sticky {
        position: relative;
        min-height: auto;
        display: flex;
        align-items: center;
        background: transparent;
    }

    .content-container {
        width: 100%;
        padding-left: clamp(1.25rem, 4vw, 5vw);
    }

    .tech-marquee {
        position: relative;
        overflow-x: hidden;
        mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
    }

    .tech-track {
        --gap: clamp(1rem, 2vw, 2.5rem);
        display: flex;
        align-items: center;
        width: max-content;
        gap: var(--gap);
        animation: marquee 22s linear infinite;
        will-change: transform;
    }

    figure {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        width: clamp(112px, 12vw, 155px);
        min-height: 170px;
        padding: 1rem 0.9rem 0.8rem;
        border-radius: 18px;
        background: var(--dark-background);
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;

		figcaption {
			color: var(--light-text);
			font-weight: 700;
		}
    }



    @keyframes marquee {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-50% - (var(--gap) / 2)));
        }
    }

    @media (max-width: 640px) {
        .techstack-wrapper {
            padding-top: 1.5rem;
        }

        .tech-track {
            animation-duration: 18s;
        }
    }
</style>
