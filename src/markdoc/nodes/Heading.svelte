<!-- ./src/lib/Heading.svelte -->
<script lang="ts">
	export let level: 'h1' | 'h2';
</script>

<svelte:element this={`h${level}`}><slot /></svelte:element>
