<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
	console.log('slug fe /post ::', data)
</script>

<!-- <h1 class="accent">{post && post.title}</h1>
<p>{@html post?.body}</p> -->

<!-- TODO : read more about this  -->
<!-- <svelte:component this={post} /> -->

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
