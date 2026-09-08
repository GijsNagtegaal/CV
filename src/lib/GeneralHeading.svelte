<script>
    let { heading_level, my_class = '', children } = $props();
    let tag = $derived(`h${Math.min(6, Math.max(1, Math.floor(heading_level)))}`);
</script>

<svelte:element this={tag} class={my_class}>{@render children()}</svelte:element>