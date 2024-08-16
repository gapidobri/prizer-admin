<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import type { Prize } from '$lib/api';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { LoaderCircle } from 'lucide-svelte';

	export let open = false;
	export let prize: Prize;

	let loading = false;
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Content>
		<form method="post" action="?/deletePrize" use:enhance={() => {
			loading = true;
			return async () => {
				await invalidateAll();
				open = false;
				loading = false;
			}
		}}>
			<input type="hidden" name="prizeId" value={prize.id} />
			<AlertDialog.Header>
				<AlertDialog.Title>
					Are you sure you want to delete {prize.name}?
				</AlertDialog.Title>
				<AlertDialog.Description>
					This action cannot be undone. This will permanently delete this prize and all associated participations.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel type="button" disabled={loading}>
					Cancel
				</AlertDialog.Cancel>
				<AlertDialog.Action type="submit" disabled={loading}>
					{#if loading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Delete
				</AlertDialog.Action>
			</AlertDialog.Footer>
		</form>
	</AlertDialog.Content>
</AlertDialog.Root>