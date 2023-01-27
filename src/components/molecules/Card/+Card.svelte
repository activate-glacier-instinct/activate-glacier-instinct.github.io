<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	type Card = {
		title: string;
		where: string;
		type: string;
		cardSize: string;
	};
	export let cardData: Card;
	// VanillaTilt.init(document.querySelectorAll('.card'), {
	// 	glare: true
	// });
</script>

<li class="card {cardData.cardSize}" data-tilt>
	<article class="card-container">
		<p>{cardData.title}</p>
		<p>{cardData.where}</p>
		<p>{cardData.type}</p>
	</article>
</li>

<style>
	.card {
		height: 100%;
		background-color: #1f1f1f;
		color: var(--theme-color-purple-light);
		min-width: 0;
	}
	.card.hero {
		grid-column: span 2;
		grid-row: span 2;
	}
	.card.regular {
		grid-column: span 1;
		grid-row: span 2;
	}
	.card.small {
		grid-column: span 1;
		grid-row: span 1;
	}
	.card.full {
		grid-column: span 3;
		grid-row: span 2;
	}
	.card-container {
		display: flex;
		flex-direction: column;
		height: fit-content;
		margin: 1rem;
	}
	.card-container > p {
		margin: 0.5rem 0rem;
	}
</style>
