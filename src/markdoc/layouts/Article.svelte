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
			<a class="flex gap-1 w-fit" href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg
				>
				<span>Back</span>
			</a>
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
