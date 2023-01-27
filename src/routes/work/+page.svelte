<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	import Tilt from 'vanilla-tilt';
	import { onMount } from 'svelte';
	export let data: PageData;
	import Card from '../../components/molecules/Card/+Card.svelte';
	export const { cards } = data;

	onMount(() => {
		// TYPES: This was interesting:
		// querySelectorAll => NodeListOf<HTMLElement>, which is an array-like structure but misses array features
		// Array.from() => casts that array-like structure as an array
		// finaly we need to recast each array element as HTMLElement eg Array<HTMLElement>
		const cards = Array.from(document.querySelectorAll('.card')) as Array<HTMLElement>;
		Tilt.init(cards, {
			scale: 0.9,
			perspective: 500,
			glare: true,
			'max-glare': 0.5
		});
	});
</script>

<section class="page screen">
	<h1 class="accent">Work Experience</h1>
	<ul class="card-list">
		{#each cards as card}
			<Card cardData={card} />
		{/each}
	</ul>
</section>

<style>
	.card-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
		height: 100%;
		width: 100%;
	}
	.page.screen {
		display: flex;
		flex-direction: column;
		height: calc(90vh - 5rem);
		padding-bottom: 5rem;
	}
</style>
