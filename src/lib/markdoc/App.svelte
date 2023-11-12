<script>
	// a single Markdoc component
	import Markdoc from './Markdoc.svelte';

	// the doc itself (lifted from https://markdoc.io/sandbox?mode=preview)
	const doc = `---
title: What is Markdoc?
---

# {% $markdoc.frontmatter.title %} {% #overview %}

Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

{% callout type="check" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}

## How is Markdoc different?

Markdoc uses a fully declarative approach to composition and flow control, where other solutions… [Read more](/docs/overview).

## Next steps
- [Install Markdoc](/docs/getting-started)
- [Explore the syntax](/docs/syntax)
`;

	// markdoc config
	const config = {
		tags: {
			callout: {
				render: 'Callout',
				description: 'Display the enclosed content in a callout box',
				children: ['paragraph', 'tag', 'list'],
				attributes: {
					type: {
						type: String,
						default: 'note',
						matches: ['check', 'error', 'note', 'warning']
					}
				}
			}
		}
	};

	// any custom components (tags) that you want to pass in
	import Callout from './tags/Callout.svelte';
	const components = new Map([['Callout', Callout]]);
</script>

<Markdoc {doc} {config} {components} />
