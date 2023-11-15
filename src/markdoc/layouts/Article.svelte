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

<main>
	<article class="max-w-2xl mx-auto">
		<header class="my-4">
			<h1 class="text-5xl font-bold">{title}</h1>
			<p>{description}</p>
		</header>

		<div class="border rounded-md shadow p-4" bind:this={toc}>
			<p class="font-bold">Table of contents</p>
		</div>

		<div class="prose p-4 prose-zinc" bind:this={article}>
			<slot />
		</div>
	</article>
</main>
