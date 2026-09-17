<script>
    import Picture from '$lib/components/Picture.svelte';
    let { items = [] } = $props();

    const languageNames = ['html', 'css', 'js'];
    let languageItems = $derived(items.filter((tech) => languageNames.includes(tech.name?.toLowerCase())));
    let toolItems = $derived(items.filter((tech) => !languageNames.includes(tech.name?.toLowerCase())));
</script>

<article id="techstack">
    <section>
        <div>
            <h3>Mijn Huidige <em>Skills</em></h3>

            <div>
                <section>
                    {#each [...languageItems, ...languageItems] as tech}
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

            <div>
                <section>
                    {#each [...toolItems, ...toolItems] as tech}
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
    </section>
</article>

<style>
    article {
        position: relative;
        overflow-x: hidden;
        padding: 2rem 0 3rem;

        section {
            position: relative;
            min-height: auto;
            display: flex;
            align-items: center;

            h3 {
                margin-bottom: 2rem;
            }

            div:nth-of-type(1) {
                width: 100%;

                div {
                    position: relative;
                    overflow-x: hidden;
                    mask-image: linear-gradient(to right, transparent, var(--dark-background) 6%, var(--dark-background) 94%, transparent);

                    section {
                        --gap: clamp(1rem, 2vw, 2.5rem);
                        display: flex;
                        align-items: center;
                        width: max-content;
                        gap: var(--gap);
                        animation: marquee 22s linear infinite;
                        will-change: transform;

                        figure {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            gap: 0.6rem;
                            width: clamp(112px, 12vw, 155px);
                            padding: 0.5rem 1rem;
                            border-radius: 18px;
                            background: var(--dark-background);
                            border: 1px solid rgba(255, 255, 255, 0.06);
                            transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
                            flex-shrink: 0;

                            figcaption {
                                color: var(--light-text);
                                font-weight: 700;
                            }
                        }
                    }
                }

                div:nth-of-type(2) section {
                    margin-top: 1rem;
                    animation-direction: reverse;
                }
            }
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
        article {
            padding-top: 1.5rem;

            section div:nth-of-type(1) {
                div {
                    overflow-x: auto;
                    mask-image: none;
                    scrollbar-width: none;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    section {
                        animation: marquee 18s linear infinite;
                        padding-right: 1rem;
                    }

                    &:nth-of-type(2) section {
                        animation-direction: reverse;
                    }
                }
            }
        }
    }
</style>
