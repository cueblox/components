# Reusable Tailwind Components

## Colors

- contrast: contrasting headline color
- main: normal text color (probably gray!)
- bg: primary background color

## Using

Add this package to your package.json file:

```
  "dependencies": {
    ...
    "components": "github:cueblox/components",
    ...
  }
```

Install it with your favorite package manager:

```
pnpm i
```

Refresh it when you want to get updates:

```
pnpm update components
```

Define each of the above colors in your tailwind.config.cjs file:

```js
const colors = require('tailwindcss/colors');

module.exports = {
	theme: {
		extend: {
			colors: {
				contrast: colors.red,
				main: colors.gray,
				...etc
			}
		}
	}
};
```

Import and use in your app:

```html
<script>
	import { ArticleCard } from 'components';
	import { getArticle } from '$lib/dataStore';
	import Header from '$lib/containers/Header.svelte';
	export let title;
	export let heading;
	export let description;
	export let articles;
</script>

<header {title} {heading} {description}>
	<div
		class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
	>
		{#each articles as article (article.id)}
		<ArticleCard article="{getArticle(article.id)}" />
		{/each}
	</div>
</header>
```
