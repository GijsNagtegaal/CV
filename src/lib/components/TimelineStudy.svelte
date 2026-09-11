<script>
    import Heading from '$lib/components/GeneralHeading.svelte';

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

<Heading class="fadeinup margin big" heading_level={2} >Mijn <em>Opleidingen</em></Heading>
<section class="study-timeline">
    {#each sortedStudies as opleiding}
        <article class="study-card">
            <div class="timeline-marker"></div>
            
            <div class="content-wrapper">
                <div class="card-header">
                    <h3>{opleiding.Opleiding}</h3>
                    <span class="year-badge">{opleiding.Jaar_begonnen} - {opleiding.Jaar_gestopt}</span>
                </div>
                <p class="school">{opleiding.School}</p>
                <p class="desc">
                    {opleiding.Omschrijving}
                </p>
            </div>
        </article>
    {/each}
</section>

<style>

</style>