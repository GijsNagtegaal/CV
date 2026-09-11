<script>
	import Picture from '$lib/picture.svelte';

	let { items } = $props();
</script>

<section class="techstack">
	<h3>My Current <em>tech stack</em></h3>
	<section>
		{#each items as tech, i}
			<figure>
				<Picture imagesrc={tech.image} imagesrc_dark={tech.image_dark} width="100" height="100" alt={tech.name} class="round badge techstack pos-{i + 1}" fetch="high" />
				<figcaption>{tech.name}</figcaption>
			</figure>
		{/each}
	</section>
</section>

<style>
section.techstack {
	margin-top: 3rem;
	overflow-x: scroll;
	color: var(--dark-text);

	@media (min-width: 800px) { margin-top: 30dvh; }

	section {
		display: flex;
		gap: 2rem;
		margin-block: 1rem;
		overflow-x: scroll;
		overflow-y: hidden;
		color: var(--dark-text);
	}

	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--dark-text);
	}

	:global(img.techstack) {
		width: 7rem;
		height: 7rem;
		border-radius: var(--border-round);
	}
}
</style>