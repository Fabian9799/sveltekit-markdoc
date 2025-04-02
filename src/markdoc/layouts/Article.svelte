<script lang="ts">
	import { generateTableOfContents } from '$lib/toc';
	import { onMount } from 'svelte';

	interface Props {
		title?: string;
		description?: string;
		children?: import('svelte').Snippet;
	}

	let { title = '', description = '', children }: Props = $props();

	let article: HTMLDivElement | undefined = $state();
	let toc: HTMLDivElement | undefined = $state();

	onMount(() => {
		if (!article || !toc) return;
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

		<details class=" open:ring ring-zinc-200 rounded-xl group">
			<summary
				class="cursor-pointer list-none text-lg font-semibold px-2 py-2 rounded-xl group-open:rounded-b-none group-open:bg-zinc-200 duration-200 flex gap-1"
			>
				<svg
					class="w-4 ml-2 transition-transform group-open:rotate-90 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 256 256"
					><rect width="256" height="256" fill="none" /><path
						d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34Z"
					/></svg
				>

				Table of Contents
			</summary>
			<div class="text-grey-200 px-2 py-4 toc">
				<div bind:this={toc}></div>
			</div>
		</details>

		<div class="prose p-4 prose-zinc" bind:this={article}>
			{@render children?.()}
		</div>
	</article>
</main>
