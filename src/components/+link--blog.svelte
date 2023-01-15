<script lang="ts">
	export let title: string;
	export const url = '/blog/' + title;
    export let githubUrl: string
</script>

<li><a href={url} data-github-url={githubUrl}>{title}</a></li>
