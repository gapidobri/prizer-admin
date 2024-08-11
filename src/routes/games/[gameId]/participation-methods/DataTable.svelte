<script lang="ts">
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import type { ParticipationMethod } from '$lib/api';
	import EditParticipationMethod from './EditParticipationMethod.svelte';

	export let participationMethods: ParticipationMethod[];

	const table = createTable(readable(participationMethods));

	const columns = table.createColumns([
		table.column({
			accessor: 'name',
			header: 'Name',
		}),
		table.column({
			accessor: 'limit',
			header: 'Limit',
			cell: ({ value }) => {
				if (!value) return '';
				return value.charAt(0).toUpperCase() + value.substring(1);
			},
		}),
		table.column({
			accessor: (item) => item.fields.user,
			header: 'User Fields',
			cell: ({ value }) => Object.keys(value).join(', '),
		}),
		table.column({
			accessor: (item) => item.fields.participation,
			header: 'Participation Fields',
			cell: ({ value }) => Object.keys(value).join(', '),
		}),
		table.column({
			accessor: (item) => item,
			header: '',
			cell: ({ value }) => {
				return createRender(EditParticipationMethod, { participationMethod: value });
			},
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