<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import DeletePrizeDialog from './DeletePrizeDialog.svelte';
	import type { Prize } from '$lib/api';
	import CantDeletePrizeDialog from './CantDeletePrizeDialog.svelte';
	import EditPrize from './EditPrize.svelte';

	export let prize: Prize;

	let editDialogOpen = false;
	let deleteDialogOpen = false;
	let cantDeleteDialogOpen = false;

	function handleCopyId() {
		navigator.clipboard.writeText(prize.id);
		toast.success('ID copied to clipboard');
	}

	function handleEdit() {
		editDialogOpen = true;
	}

	function handleDelete() {
		if (prize.won_count === 0) {
			deleteDialogOpen = true;
		} else {
			cantDeleteDialogOpen = true;
		}
	}
</script>

<EditPrize bind:open={editDialogOpen} {prize} />
<DeletePrizeDialog bind:open={deleteDialogOpen} {prize} />
<CantDeletePrizeDialog bind:open={cantDeleteDialogOpen} {prize} />

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			variant="ghost"
			builders={[builder]}
			size="icon"
			class="relative h-8 w-8 p-0"
		>
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Actions</DropdownMenu.Label>
			<DropdownMenu.Item on:click={handleCopyId}>Copy ID</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item on:click={handleEdit}>Edit</DropdownMenu.Item>
		<DropdownMenu.Item on:click={handleDelete}>Delete</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>