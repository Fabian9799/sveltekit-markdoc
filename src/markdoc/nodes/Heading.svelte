<!-- ./src/lib/Heading.svelte -->
<script lang="ts">
	interface Props {
		level: string;
		children?: import('svelte').Snippet;
	}

	let { level, children }: Props = $props();
</script>

<svelte:element this={`h${level}`}>{@render children?.()}</svelte:element>
