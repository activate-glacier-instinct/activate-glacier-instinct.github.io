<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	import BlogPostLink from '../../components/+link--blog.svelte';
	export let data: PageData;
	const { posts } = data;
</script>

<h1 class="accent">Blog</h1>
<p class="subtitle">
	Read more of my articles below:
</p>
<ul class="urlList">
	{#each posts as post}
		<BlogPostLink title={post.title}/>
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
