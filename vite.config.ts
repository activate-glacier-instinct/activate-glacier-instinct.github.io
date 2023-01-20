import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as markdown } from 'vite-plugin-markdown'
import { Mode } from 'vite-plugin-markdown'
import type { UserConfig } from 'vite';

// markdown({ mode: [Mode.HTML]})
const config: UserConfig = {
	plugins: [sveltekit(), markdown({ mode: [Mode.HTML] })],
	// assetsInclude: ['**/*.md'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
