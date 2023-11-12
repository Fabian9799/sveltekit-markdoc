// place files you want to import through the `$lib` alias in this folder.
import type { Config, ConfigType, Node } from '@markdoc/markdoc';
import yaml from 'js-yaml';

export function add_frontmatter(ast: Node, config: Config): ConfigType {
	const frontmatter = ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {};
	const markdoc = Object.assign(config?.variables?.markdoc || {}, { frontmatter });
	const variables = Object.assign(config?.variables || {}, { markdoc });
	return Object.assign(config, { variables });
}