<script lang="ts">
	import Nav from '../components/+nav.svelte';
	import Backdrop from '../components/+backdrop.svelte';
</script>

<svelte:window/>

<Nav />

<div>
	<Backdrop/>
	<main class="layout">
		<slot />
	</main>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		max-width: 1024px;
		margin: 0 auto;
	}

	:global(body) {
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
		--theme-color-mango: rgb(247, 184, 1);
		--theme-color-purple: rgb(61, 52, 139);
		--theme-color-purple-light: #7678ed;
		--theme-color-tangerine: #f18701;
		--theme-color-jet-black: rgb(48, 50, 61);
		box-sizing: border-box;
		margin: 0;
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		background-color: var(--theme-color-jet-black);
		color: var(--theme-color-purple-light);
		transition: background-color 0.3s;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
	}
	:global(body.dark-mode) {
		/* TODO: add dark-mode toggle */
	}
	:global(a) {
		font-size: 2rem;
		font-weight: 900;
		text-decoration: none;
		color: var(--theme-color-tangerine);
	}
	:global(a:hover) {
		color: var(--theme-color-purple-light);
	}
</style>
