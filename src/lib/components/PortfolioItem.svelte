<script>
	import Picture from '$lib/picture.svelte';

	let { project, customclass = '' } = $props();
</script>

<article class="portfolio-item {customclass}">
	<a class="card" href="/portfolio/project/{project.slug}">
		{#if project.image}
			<Picture imagesrc={project.image} width="650" height="400" alt={project.Opdrachtgever ?? ''} class="landscape" loading="lazy" />
		{/if}
		<section class="tags">
			{#each project.tags ?? [] as tag}<span class="tag">{tag}</span>{/each}
		</section>
		<section class="contentwrapper">
			<h3>{project.type_site} for {project.Opdrachtgever}</h3>
			<p class="opdracht">{project.opdracht}</p>
		</section>
	</a>
	<a class="project" href="/portfolio/project/{project.slug}">View the full project <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12H19M12 19L19 12L12 5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg></a>
</article>

<style>
article.portfolio-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	background-color: var(--accent-card);
	border-radius: var(--border-card);
	outline: 3px solid var(--accent-card);

	section.tags {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-inline: 1rem;
		padding-top: .5rem;

		.tag {
			min-width: 25%;
			width: fit-content;
			padding: .5rem 1rem;
			border-radius: var(--border-badge);
			background-color: var(--accent-button);
			color: var(--always-light);
			font-size: var(--heading-small);
			text-align: center;
		}
	}

	section.contentwrapper {
		padding: 1rem;
		color: var(--always-light);
		h3 { color: inherit; }
		p.opdracht { margin-block: .5rem; }
	}

	img { border-radius: var(--border-card); }
}
</style>