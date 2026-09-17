
<script>
    let { data = {} } = $props();

    const fuelPrice = $derived(data?.fuelPriceE95 ?? null);
    const fuelPriceNumber = $derived(
        fuelPrice ? Number(String(fuelPrice).replace(',', '.').replace(/\s+/g, '')) : null
    );

    const fuelPriceLabel = $derived(
        fuelPrice
            ? `Een liter benzine kost vandaag €${fuelPrice}`
            : 'Benzine E5: update in aantocht'
    );

    const comparisonRanges = [
        { min: 1.8, max: 1.9, label: 'al het statiegeld dat nu in je kofferbak rolt' },
        { min: 1.9, max: 2.1, label: 'een kwartier parkeren in een gemiddelde provinciestad' },
        { min: 2.1, max: 2.3, label: 'de transactiekosten van een Tikkie van 50 cent' },
        { min: 2.3, max: 2.5, label: 'een handjevol eerste pepernoten in augustus' },
        { min: 2.5, max: 2.7, label: 'een bakje voorgesneden mango in de supermarkt' },
        { min: 2.7, max: 3.0, label: 'twee minuten ademen in Amsterdam-Zuid' }
    ];

    const comparisonSentence = $derived(
        fuelPriceNumber == null
            ? ''
            : (() => {
                const match = comparisonRanges.find((item) => fuelPriceNumber >= item.min && fuelPriceNumber < item.max)
                    ?? comparisonRanges[comparisonRanges.length - 1];

                return `Dat is nog meer dan ${match.label}.`;
            })()
    );
</script>

<footer>
    <article>
        <section>
            <h3>Over mezelf</h3>
            <h4>Gijs Nagtegaal</h4>
            <div>
                <p>💡 Wist je dat een recruiter gemiddeld 7,4 seconden naar een CV kijkt? Jij hebt dat record ruimschoots verbroken! Zullen we die extra tijd besteden aan een (virtuele) kop koffie?</p>
                <a href="mailto:info@gijsnagtegaal.nl">Stuur me een mailtje</a>
            </div>
        </section>

        <section>
            <h3>Nerd weetjes</h3>
            <p>Ik ben momenteel SvelteKit aan het leren</p>
            {#if fuelPriceLabel && comparisonSentence}
                <p>{fuelPriceLabel} {comparisonSentence}</p>
            {:else if fuelPriceLabel}
                <p>{fuelPriceLabel}</p>
            {/if}
        </section>

        <nav>
            <h3>Navigatie</h3>
            <a href="#overmij">Over mij</a>
            <a href="#werkervaring">Werkervaring</a>
            <a href="#techstack">Techstack</a>
            <a href="#opleidingen">Opleidingen</a>
        </nav>

        <section>
            <h3>Contact en Socials</h3>
            <a href="https://www.linkedin.com/in/gijs-nagtegaal-500373284/">Linkedin</a>
            <a href="https://github.com/GijsNagtegaal">Github</a>
            <a href="mailto:info@gijsnagtegaal.nl">Email</a>
        </section>

        <p class="footer-meta">&copy; Gijs Nagtegaal - 2026 made with sveltekit</p>
        <p>Je hebt het einde gehaald. +100 XP 🍄</p>
    </article>
</footer>

<style>
    footer {
        display: grid;
        background-color: var(--accent-button);
        border-top: 1px solid var(--body-background-green);
    }

    h3 {
        font-size: 1rem;
        color: var(--dark-text);
    }

    article {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 2rem 1rem;
        gap: 2rem;

        @media (min-width: 600px) {
            display: grid;
            grid-template-rows: 1fr auto auto;
            width: 95%;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1200px) {
            width: 90%;
            margin: 0 auto;
            grid-template-columns: 3fr 2fr 1fr 1fr;
        }

        p:nth-of-type(1) {
            grid-row: 2;
        }

        p:nth-of-type(2) {
            grid-row: 3;
        }
    }

    section:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;

        div {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            border: 2px solid var(--dark-text);
            border-radius: var(--border-card);
            background-color: var(--background-grey);

            a {
                display: flex;
                width: fit-content;
                padding: 0.5rem 1rem;
                background-color: var(--accent-button-inverted);
                border-radius: var(--border-button);
                margin-top: 1rem;
            }
        }
    }

    section:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }

    section:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }
</style>