<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="page article">{@html data?.html}</article>

<style>
	.article > h2 {
		font-style: normal;
		color: var(--theme-color-mango) !important;
	}
	.article {
		font-size: 1.5rem;
		font-weight: 700;
		position: relative;
		top: 0;
		height: max-content;
		
	}
	
</style>
