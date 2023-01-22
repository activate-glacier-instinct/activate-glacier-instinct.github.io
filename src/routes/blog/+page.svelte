<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
	export const { posts } = data;
	import BlogPostLink from '../../components/+link--blog.svelte';
</script>

<section>
	<h1 class="accent">Blog</h1>
	<p class="subtitle">Read more of my articles below:</p>
	
	<ul class="urlList">
		{#each posts as post}
			<BlogPostLink title={post.title}/>
		{/each}
	</ul>
</section>
