<script lang="ts">
	/** @type {import('./$types').PageData} */

	export let html: string;
</script>

<article class="page article">{@html html}</article>

<style>
	.article {
		font-size: 1.5rem;
		font-weight: 700;
		position: relative;
		top: 0;
		height: max-content;
	}
	.article :global(h2) {
		font-size: 5rem;
		font-style: normal;
		color: var(--theme-color-mango);
		margin: 2rem 0;
	}
	.article :global(h3) {
		font-size: 2rem;
		font-weight: 900;
		font-style: italic;
		color: var(--theme-color-mango);
	}
	.article :global(hr) {
		background-color: var(--theme-color-tangerine);
		border: none;
		height: 4px;
	}

	.article :global(li) {
		font-size: 1.5rem;
		font-weight: 900;
	}

	.article :global(a) {
		font-size: 1.5rem;
		font-weight: 900;
		text-decoration: none;
		color: var(--theme-color-tangerine);
	}
</style>
