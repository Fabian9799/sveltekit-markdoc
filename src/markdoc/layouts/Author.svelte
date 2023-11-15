<script lang="ts">
	export let title = '';
	export let description = '';
</script>

<main class="max-w-2xl mx-auto">
	<header class="my-4 border p-4 rounded-md shadow">
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
		<div class="flex gap-2">
			<svg
				class="h-10 my-auto text-zinc-700"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle
					cx="12"
					cy="12"
					r="10"
				/></svg
			>
			<h1 class="text-5xl font-bold">{title}</h1>
		</div>
		<p class="text-xl">{description}</p>
	</header>

	<div class="prose p-4 prose-zinc">
		<slot />
	</div>
</main>
