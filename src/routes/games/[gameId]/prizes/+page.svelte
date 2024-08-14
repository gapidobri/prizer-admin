<script lang="ts">
	import type { PageData } from './$types';
	import DataTable from './DataTable.svelte';
	import Title from '$lib/components/Title.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Prizer - Prizes</title>
</svelte:head>

<div>
	<Title>Prizes</Title>
	<Subtitle>Manage the prizes available for winning in the game</Subtitle>
</div>


<DataTable prizes={data.prizes} />


