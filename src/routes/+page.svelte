<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul class="p-8 flex gap-2">
	{#each data.articles as { slug, description, title }}
		<li class="border p-2">
			<a href={slug}>
				<h2 class="font-semibold">{title}</h2>
				<p>{description}</p>
			</a>
		</li>
	{/each}
</ul>
