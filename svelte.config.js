// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'out',
			assets: 'out',
			fallback: null,
			precompress: true, // brotli and gzip
			strict: true,
			// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
			// For example, instead of '_app', use 'app_', 'internal', etc.
			appDir: 'internal',
			prerender: { entries: ["*"] },
			paths: {
				base: dev ? '' : '/activate-glacier-instinct.github.io',
			},
		})
	},
};

export default config;
