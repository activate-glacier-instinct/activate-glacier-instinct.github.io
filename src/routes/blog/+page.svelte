<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	import type { BlogPosts } from './+page';
	import BlogPostLink from '../../components/+link--blog.svelte';
	export let data: PageData;
	const { posts } = data;
	export let loadedData: BlogPosts;
	if (posts) {
		loadedData = posts
	}
</script>

{#await posts}
	<!-- optionally show something while promise is pending -->
{:then posts}
	<!-- promise was fulfilled -->
	<h1 class="accent">Blog</h1>
	<p class="subtitle">Read more of my articles below:</p>
	<ul class="urlList">
		{#each loadedData as post}
			<BlogPostLink title={post.name} githubUrl={post.html_url} />
		{/each}
	</ul>
{:catch error}
	<!-- optionally show something while promise was rejected -->
{/await}

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
