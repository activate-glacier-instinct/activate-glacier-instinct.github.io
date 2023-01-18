<script lang="ts">
	export let title: string;
	export let parsedTitle:string = title.split('.')[0];
	export const url = '/blog/' + parsedTitle;
</script>

<li><a href={url}>{parsedTitle}</a></li>
