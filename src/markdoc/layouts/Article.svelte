<script>
	export let title = '';
	export let description = '';
</script>

<nav>This is an article</nav>
<p>Title: {title}</p>
<p>Description: {description}</p>
<div class="prose p-4">
	<slot />
</div>
