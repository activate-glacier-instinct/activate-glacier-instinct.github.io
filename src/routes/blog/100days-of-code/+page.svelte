<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
	export const { posts } = data;
	import BlogPostLink1HDOC from '../../../components/+link--blog--1hdoc.svelte';
</script>

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
		<a target="_blank" href="https://twitter.com/ActivateGlacier">Twitter</a> is where I post my updates
	</p>
	<p>
		All projects can be found on <a
			target="_blank"
			href="https://github.com/activate-glacier-instinct">my Github account</a
		>
	</p>
	<p class="subtitle">Read my daily logs below:</p>

	<ul class="urlList">
		{#each posts as post}
			<BlogPostLink1HDOC title={post.title} path={post.path} />
		{/each}
	</ul>
</section>

<style>
</style>
