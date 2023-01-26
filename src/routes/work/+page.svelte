<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	export let data: PageData;
	export const { cards } = data;
</script>

<section class="page page--center">
	<h1 class="accent">Work Experience</h1>
	<ul>
		{#each cards as card}
			<li>
				<article>
					<p>{card.title}</p>
					<p>{card.where}</p>
					<p>{card.type}</p>
				</article>
			</li>
		{/each}
	</ul>
</section>
