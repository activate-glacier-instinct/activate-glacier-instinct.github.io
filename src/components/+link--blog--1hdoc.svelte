<script lang="ts">
	export let title: string;
	export let path: string;
	export let parsedTitle:string = path.split('.')[0];
</script>

<li><a href={parsedTitle}>{title}</a></li>
