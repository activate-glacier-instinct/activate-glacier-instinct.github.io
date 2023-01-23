<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="page article">{@html data?.html}</article>

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
</style>
