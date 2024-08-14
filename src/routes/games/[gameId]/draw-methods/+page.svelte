<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import DataTable from './DataTable.svelte';
	import type { PageServerData } from './$types';
	import Subtitle from '$lib/components/Subtitle.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Prizer - Draw Methods</title>
</svelte:head>


<div>
	<Title>Draw Methods</Title>
	<Subtitle>Manage how winners are selected</Subtitle>
</div>

<DataTable drawMethods={data.drawMethods} />