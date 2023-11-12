<script lang="ts">
	import Markdoc, {
		Tag,
		type Config,
		type ConfigType,
		type RenderableTreeNode
	} from '@markdoc/markdoc';

	export let doc: string = '';
	export let config: Config = {};
	export let components = new Map();

	import Tags from './Tags.svelte';
	import { add_frontmatter } from './frontmatter';

	const ast = Markdoc.parse(doc);
	const config_with_frontmatter = add_frontmatter(ast, config);
	const content = Markdoc.transform(ast, config_with_frontmatter);
</script>

<Tags children={content.children} {components} />
