<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: PageData;
    import type { PageData } from './$types';
	const { posts } = data;
</script>

<slot />