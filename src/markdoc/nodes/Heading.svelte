<!-- ./src/lib/Heading.svelte -->
<script lang="ts">
	export let level: string;
</script>

<svelte:element this={`h${level}`}><slot /></svelte:element>
