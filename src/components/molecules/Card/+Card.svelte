<script lang="ts">
	type Card = {
		title: string;
		where: string;
		type: string;
		cardSize: string;
	};
	export let cardData: Card;
</script>

<li class="card hologram {cardData.cardSize}" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
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
		min-width: 0;
		position: relative;
		border-radius: 0.5rem;
		overflow: hidden;
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
		z-index: 2;
		color: var(--theme-color-purple-light);
	}
	.card-container > p {
		margin: 0.5rem 0rem;
		/* color: white */
	}
	.hologram ::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(45deg, #f0cdc2 0%, #b8faf6 25%, #88aaf1 50%, #c9b3f5 75%) repeat 0%
			0% / 300% 100%;
		border-radius: 0.5rem;
		filter: blur(0.5rem);
		inset: -1rem;
		opacity: 0;
		transform: translateZ(-1rem);
		animation: shine 6s linear infinite;
		
	}
	.hologram:hover > ::after {
		opacity: 0.7;
		transition: opacity 500ms linear;
	}
	.hologram:hover > .card-container {
		color: white;
		transition: color 500ms linear;
	}
	@keyframes shine {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
