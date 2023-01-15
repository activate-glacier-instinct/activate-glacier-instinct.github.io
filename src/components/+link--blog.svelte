<script lang="ts">
	export let title: string;
	export const url = '/blog/' + title;
</script>

<li><a href={url}>{title}</a></li>
