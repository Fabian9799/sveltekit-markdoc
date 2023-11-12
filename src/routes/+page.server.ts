export function load() {
	const modules = import.meta.glob('./article/**/*.markdoc', {
		eager: true
	});

	const articles = Object.entries(modules).map(([filepath, module]) => {
		const { frontmatter } = module;
		return {
			filepath,
			title: frontmatter.title,
			description: frontmatter.description
		};
	});

	return {
		articles
	};
}
