<script lang="ts">
	import type { PageServerData } from './$types';
	import DataTable from './DataTable.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data: PageServerData;
</script>

<Title>Users</Title>

<DataTable users={data.users} />