<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';
	export let data: PageData;
	export let rootList;
	import Tilt from "preact-tilt";
	import Card from '../../components/molecules/Card/+Card.svelte';
	export const { cards } = data;

	onMount(() => {
		let cards: Array<HTMLElement> = document.querySelectorAll('.card') as Array<HTMLElement>
		VanillaTilt.init(cards, {
			glare: true
		});
	});
</script>

<section class="page screen" bind:this={rootList}>
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
