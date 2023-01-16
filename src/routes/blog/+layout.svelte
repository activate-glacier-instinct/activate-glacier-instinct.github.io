<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: PageData;
    import type { PageData } from './$types';
	const { posts } = data;
    console.log('layout / posts ::', posts)
</script>

<slot />