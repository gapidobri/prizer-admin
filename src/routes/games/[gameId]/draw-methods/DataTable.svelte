<script lang="ts">
	import { createTable, Subscribe, Render } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import type { DrawMethod } from '$lib/api';


	export let drawMethods: DrawMethod[];

	const table = createTable(readable(drawMethods));

	const columns = table.createColumns([
		table.column({
			accessor: 'name',
			header: 'Name',
		}),
		table.column({
			accessor: 'method',
			header: 'Method',
			cell: ({ value }) => {
				if (!value) return '';
				return value.split('_').map((v) => v.charAt(0).toUpperCase() + v.substring(1)).join(' ');
			},
		}),
		table.column({
			accessor: 'data',
			header: 'Data',
		}),
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="rounded-md border">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
								<Table.Head {...attrs}>
									<Render of={cell.render()} />
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell {...attrs}>
									<Render of={cell.render()} />
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>
</div>