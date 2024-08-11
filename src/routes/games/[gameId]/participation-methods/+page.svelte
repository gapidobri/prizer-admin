<script lang="ts">
	import type { PageServerData } from './$types';
	import Title from '$lib/components/Title.svelte';
	import DataTable from './DataTable.svelte';

	export let data: PageServerData;
</script>

<Title>Participation Methods</Title>

<DataTable participationMethods={data.participationMethods} />