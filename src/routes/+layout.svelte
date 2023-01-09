<script>
	export const prerender = true;
	export const trailingSlash = 'always';
	import Nav from '../components/+nav.svelte';
</script>

<Nav />

<main class="layout__main">
	<slot />
</main>

<style>
	.layout__main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 1024px;
		margin: 0 auto;
		padding: 2rem;
	}
	:global(body) {
		--theme-color-mango: #f7b801;
		--theme-color-purple: #3d348b;
		--theme-color-purple-light: #7678ed;
		--theme-color-tangerine: #f18701;
		--theme-color-jet-black: #30323d;
		box-sizing: border-box;
		margin: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		background-color: var(--theme-color-jet-black);
		color: var(--theme-color-purple-light);
		transition: background-color 0.3s;
		font-size: 16px;
	}
	:global(body.dark-mode) {
		/* TODO: add dark-mode toggle */
	}
</style>
