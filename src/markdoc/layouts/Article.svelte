<script lang="ts">
	import { generateTableOfContents } from '$lib/toc';
	import { onMount } from 'svelte';

	export let title = '';
	export let description = '';

	let article: HTMLDivElement;
	let toc: HTMLDivElement;

	onMount(() => {
		const tocElements = generateTableOfContents(article);
		toc.appendChild(tocElements);
	});
</script>

<nav>This is an article</nav>
<p>Title: {title}</p>
<p>Description: {description}</p>

<div class="border border-sky-500" bind:this={toc}>
	<p class="font-bold">Table of contents</p>
</div>

<div class="prose p-4" bind:this={article}>
	<slot />
</div>
