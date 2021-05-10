import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, format: 'es' },
		{ file: pkg.main, format: 'umd', name }
	],
	plugins: [
		svelte({
			dev: !production,
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [require('tailwindcss'), require('autoprefixer')]
				}
			}),
			css: (css) => {
				css.write('bundle.css');
			}
		}),
		resolve()
	]
};
