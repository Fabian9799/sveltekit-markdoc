export function generateTableOfContents(article: HTMLElement) {
	const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
	const tocList = document.createElement('ol');
	headings.forEach((heading, index) => {
		if (!heading.id) {
			heading.id = 'toc-heading-' + index;
		}
		const tocItem = document.createElement('li');
		const tocLink = document.createElement('a');
		tocLink.href = '#' + heading.id;
		tocLink.textContent = heading.textContent;
		tocItem.appendChild(tocLink);
		tocList.appendChild(tocItem);
	});

	return tocList;
}
