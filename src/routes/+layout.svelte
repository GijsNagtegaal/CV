<script>
	import { onNavigate } from '$app/navigation';
	import CursorGlow from '$lib/components/CursorGlow.svelte';
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let { children, data } = $props();
	

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Head />
<Header />

<main class="home">

	<CursorGlow />
	{@render children()}
</main>

<Footer data={data} />

<style>
	main.home {
		display: flex;
		flex-wrap: wrap;
	}
</style>
