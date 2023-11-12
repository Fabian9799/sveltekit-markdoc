<!-- adapted from https://github.com/movingbrands/svelte-portable-text -->
<script lang="ts">
	import type { Tag } from '@markdoc/markdoc';

	export let children: Tag[] = [];
	export let components = new Map();
</script>

{#each children as child}
	{#if typeof child === 'string'}{child}{/if}
	{#if child.children}
		{#if components.has(child.name)}
			<svelte:component this={components.get(child.name)} {...child.attributes}>
				<svelte:self children={child.children} />
			</svelte:component>
		{:else}
			<svelte:element this={child.name} {...child.attributes}>
				<svelte:self children={child.children} />
			</svelte:element>
		{/if}
	{/if}
{/each}
