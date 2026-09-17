<script>
    let { heading_level, class: className = '', id = '', children } = $props();

    let tag = $derived(`h${Math.min(6, Math.max(1, Math.floor(heading_level)))}`);
</script>
<svelte:element this={tag} class={className} {id}>
    {@render children()}
</svelte:element>

<style>
    .big {
        margin-top: 5rem;
        margin-bottom: 1rem;
    }

    .biggest {
        margin-top: 10dvh;
        margin-bottom: 5dvh;

        @media ( min-width: 600px) {
            margin-top: 31dvh;

        }

    }
</style>