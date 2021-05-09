# Reusable Tailwind Components

## Colors

- contrast: contrasting headline color
- main: normal text color (probably gray!)
- bg: primary background color

the following colors must be defined in your taiwlind.config.\*js file:

```javascript
	theme: {
		extend: {
			colors: {
				main: colors.gray,
				bg: colors.gray,
				contrast: colors.cyan,
			}
		}
	},
```

choose your own color options, as long as `main`, `bg`, `contrast` are defined. See full palette
here: [tailwind colors](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

## Using

Add this package to your package.json file:

```bash
  "dependencies": {
    ...
    "components": "github:cueblox/components",
    ...
  }
```

Install it with your favorite package manager:

```bash
pnpm i
```

Refresh it when you want to get updates:

```bash
pnpm update components
```

add these tailwind plugins:

```javascript
require('@tailwindcss/typography'),
require('@tailwindcss/forms'),
require('@tailwindcss/aspect-ratio'),
```


Import and use in your app:

```html
<script>
	import { ArticleCard } from 'components';
	import { getArticle } from '$lib/dataStore';
	export let title;
	export let heading;
	export let description;
	export let articles;
</script>

<header {title} {heading} {description}>
	<div
		class="max-w-md px-4 mx-auto mt-12 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
	>
		{#each articles as article (article.id)}
		<ArticleCard article="{getArticle(article.id)}" />
		{/each}
	</div>
</header>
```

Add this component's source files to your postcss purge config:

```
	purge: {
		content: [
			'./src/**/*.{html,js,svelte,ts}',
			'./node_modules/components/**/*.{html,js,svelte,ts}',
		],
```

This will prevent tailwind from purging styles it can't find in your project, but that exist in these components.

## TODO

There must be a more appropriate way to do this in tailwind using plugins or something?
