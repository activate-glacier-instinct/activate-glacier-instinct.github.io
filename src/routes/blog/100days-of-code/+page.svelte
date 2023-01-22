<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
	export const { posts } = data;
	import BlogPostLink from '../../../components/+link--blog.svelte';
</script>

<!-- <section>
	<h1 class="accent">Blog</h1>
	<p class="subtitle">Read more of my articles below:</p>
	
	<ul class="urlList">
		{#each posts as post}
			<BlogPostLink title={post}/>
		{/each}
	</ul>
</section> -->


<section class="page">
	<h1 class="accent">100days-of-code Challenge</h1>
	<p>Started on <time datetime="6:22 PM · Jan 7, 2023">7th January 2023</time></p>
	<p>
		My plan for the challenge can be found <a
			target="_blank"
			href="https://github.com/activate-glacier-instinct/100-days-of-code/blob/master/plan.md"
			>here (Github)</a
		>
	</p>
	<p>
		<a target="_blank" href="https://twitter.com/ActivateGlacier"
			>Twitter</a
		> is where I post my updates
	</p>
	<p>
		All projects can be found on <a target="_blank" href="https://github.com/activate-glacier-instinct"
			>my Github account</a
		>
	</p>
	<p class="subtitle">Read my daily logs below:</p>
	
	<ul class="urlList">
		{#each posts as post}
			<BlogPostLink title={post}/>
		{/each}
	</ul>
</section>

<style>
	/* h1,
	h2,
	p {
		font-size: 2rem;
		font-weight: 900;
	}
	.accent {
		font-style: normal;
		color: var(--theme-color-mango);
	} */
</style>
