# Reusable Tailwind Components

## Colors

* contrast: contrasting headline color
* main: normal text color (probably gray!)

## Using

Define each of the above colors in your tailwind.config.cjs file:

```js
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		extend: {
			colors: {
				contrast: colors.red,
				main: colors.gray,
                ... etc
			}
		}
	},
};
```
