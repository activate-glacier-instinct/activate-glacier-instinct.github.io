<script lang="ts">
	import Nav from '../components/atoms/+nav.svelte';
	import Backdrop from '../components/atoms/+backdrop.svelte';
</script>

<svelte:window />

<Backdrop />
<div class="container fullscreen">
	<Nav />
	<slot />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr max(1025px) 1fr;
		grid-template-rows: 5rem auto;
		grid-template-areas:
			'nav navcenter navright'
			'left center right';
		gap: 1rem;
		overflow: hidden;
		overflow-y: auto;
	}
	.fullscreen {
		height: 100vh;
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
		width: 100%;
		position: absolute;
		background-color: var(--theme-color-jet-black);
		color: var(--theme-color-purple-light);
		transition: background-color 0.3s;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
	}
	:global(h1, h2, p) {
		font-size: 2rem;
		font-weight: 900;
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
	:global(.accent) {
		font-style: normal;
		color: var(--theme-color-mango);
	}
	:global(.page) {
		grid-area: center;
		width: 100%;
	}
	:global(.page--center) {
		grid-area: center;
		/* align-self: center; */
		width: 100%;
		padding-top: 16rem;
	}
</style>
