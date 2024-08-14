<script lang="ts">
	import type { PageServerData } from './$types';
	import DataTable from './DataTable.svelte';
	import Title from '$lib/components/Title.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Prizer - Users</title>
</svelte:head>

<div>
	<Title>Users</Title>
	<Subtitle>Users that participated in the game</Subtitle>
</div>

<DataTable users={data.users} />