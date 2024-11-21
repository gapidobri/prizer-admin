<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import type { ParticipationMethod } from '$lib/api';
	import { toast } from 'svelte-sonner';
	import EditParticipationMethod from './EditParticipationMethod.svelte';

	export let participationMethod: ParticipationMethod;

	let editOpen = false;

	function handleCopyId() {
		navigator.clipboard.writeText(participationMethod.id);
		toast.success('ID copied to clipboard');
	}

	function handleEdit() {
		editOpen = true;
	}

	function handleDelete() {

	}
</script>

<EditParticipationMethod bind:open={editOpen} {participationMethod} />

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