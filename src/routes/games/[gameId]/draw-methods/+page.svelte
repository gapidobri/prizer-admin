<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import DataTable from './DataTable.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Title>Draw Methods</Title>

<DataTable drawMethods={data.drawMethods} />