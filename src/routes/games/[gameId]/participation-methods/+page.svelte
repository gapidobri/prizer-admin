<script lang="ts">
	import type { PageServerData } from './$types';
	import Title from '$lib/components/Title.svelte';
	import DataTable from './DataTable.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Prizer - Participation Methods</title>
</svelte:head>

<div>
	<Title>Participation Methods</Title>
	<Subtitle>Manage how users can participate in the game</Subtitle>
</div>

<DataTable participationMethods={data.participationMethods} />