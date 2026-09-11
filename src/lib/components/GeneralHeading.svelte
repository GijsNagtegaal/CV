<script>
    let { heading_level, class: className = '', children } = $props();
    
    let tag = $derived(`h${Math.min(6, Math.max(1, Math.floor(heading_level)))}`);
</script>
<svelte:element this={tag} class={className}>
    {@render children()}
</svelte:element>

<style>
    .big {
        margin-top: 5rem;
        margin-bottom: 1rem;
    }
</style>