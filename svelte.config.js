import adapter from '@sveltejs/adapter-auto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';

function absoulute(path) {
	return join(dirname(fileURLToPath(import.meta.url)), path);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({}),
		markdoc({
			generateSchema: true,
			nodes: absoulute('./src/markdoc/nodes/_Module.svelte'),
			tags: absoulute('./src/markdoc/tags/_Module.svelte'),
			partials: absoulute('./src/lib/partials'),
			layouts: {
				default: absoulute('./src/markdoc/layouts/Article.svelte'),
				author: absoulute('./src/markdoc/layouts/Author.svelte')
			}
		})
	],
	extensions: ['.markdoc', '.svelte'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
