<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
	export const { posts } = data;
	import BlogPostLink from '../../components/+link--blog.svelte';
	// // import { posts } from '$lib/shared/stores/blog'
	// let localPosts = [];
	// if (posts) {
	// 	for (const post in posts) {

	// 	}
	// }
</script>

<h1 class="accent">Blog</h1>
<p class="subtitle">Read more of my articles below:</p>

<ul class="urlList">
	{#each posts as post}
		<BlogPostLink title={post}/>
	{/each}
</ul>

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
	.urlList {
		margin: 0;
		list-style: none;
		padding-left: 1rem;
	}
	.subtitle {
		margin-bottom: 0.25rem;
	}
</style>
