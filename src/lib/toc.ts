export function generateTableOfContents(article: HTMLElement) {
	const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
	const tocList = document.createElement('ol');

	headings.forEach((heading) => {
		if (!heading.id && heading.textContent) {
			heading.id = heading.textContent.toLowerCase().replace(/\s/g, '-');
		}
		const tocItem = document.createElement('li');
		tocItem.style.marginLeft = `${(parseInt(heading.tagName[1]) - 1) * 20}px`;
		const tocLink = document.createElement('a');
		tocLink.href = '#' + heading.id;
		tocLink.textContent = heading.textContent;
		tocItem.appendChild(tocLink);
		tocList.appendChild(tocItem);
	});

	return tocList;
}
