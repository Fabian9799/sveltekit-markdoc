<script lang="ts">
	let { data } = $props();
</script>

<main class="p-8 max-w-2xl mx-auto">
	<p class="text-3xl font-bold mb-4">Articles</p>
	<ul class=" grid grid-cols-2 flex-wrap gap-2">
		{#each data.articles as { slug, description, title }}
			<li>
				<a href={slug} class="group">
					<article class="p-4 rounded-md shadow ring ring-zinc-200 hover:ring-zinc-400">
						<h2 class="font-semibold">{title}</h2>
						<p>{description}</p>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</main>
