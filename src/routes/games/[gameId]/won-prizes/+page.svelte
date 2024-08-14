<script lang="ts">
	import type { PageServerData } from './$types';
	import Title from '$lib/components/Title.svelte';
	import DataTable from './DataTable.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Prizer - Won Prizes</title>
</svelte:head>

<div>
	<Title>Won Prizes</Title>
	<Subtitle>All prizes that have been won</Subtitle>
</div>

<DataTable wonPrizes={data.wonPrizes} />