<script lang="ts">
	import type { PageServerData } from './$types';
	import DataTable from './DataTable.svelte';
	import Title from '$lib/components/Title.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';
	import CreatePrize from './CreatePrize.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Prizer - Prizes</title>
</svelte:head>

<div class="flex items-center">
	<div class="grow">
		<Title>Prizes</Title>
		<Subtitle>Manage the prizes available for winning in the game</Subtitle>
	</div>
	<CreatePrize />
</div>

<DataTable prizes={data.prizes} />
