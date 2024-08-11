<script lang="ts">
	import type { PageData } from './$types';
	import DataTable from './DataTable.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data: PageData;
</script>

<Title>Prizes</Title>

<DataTable prizes={data.prizes} />


