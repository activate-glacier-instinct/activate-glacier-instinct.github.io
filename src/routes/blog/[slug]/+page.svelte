<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article>{@html data?.html}</article>

<style>
	h1,
	h2,
	p {
		font-size: 2rem;
		font-weight: 900;
	}
	.accent {
		font-style: normal;
		color: var(--theme-color-mango);
	}
</style>
