<script lang="ts">
	/** @type {import('./$types').PageData} */

	import type { PageData } from './$types';
	import SlugPageTemplete from '../../../../components/templates/100days-of-code/+Slug.svelte'
	export let data: PageData;
</script>

<SlugPageTemplete html={data.html}/>

