<script>
	import { onNavigate } from '$app/navigation';
	import CursorGlow from '$lib/components/CursorGlow.svelte';

	let { children } = $props();

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

<CursorGlow />
{@render children()}
