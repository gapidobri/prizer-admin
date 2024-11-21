<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import type { Prize } from '$lib/api';

	export let open = false;
	export let prize: Prize;
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>
				Prize {prize.name} can't be deleted, because is has already been won.
			</AlertDialog.Title>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action>OK</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>