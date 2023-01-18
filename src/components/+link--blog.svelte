<script lang="ts">
	export let title: string;
	export let parsedTitle:string = title.split('.')[0];
	export const url = '/blog/' + parsedTitle;
    export let githubUrl: string
</script>

<li><a href={url} data-github-url={githubUrl}>{parsedTitle}</a></li>
