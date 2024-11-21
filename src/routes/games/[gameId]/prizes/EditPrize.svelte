<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { LoaderCircle } from 'lucide-svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import type { Prize } from '$lib/api';

	export let open = false;
	export let prize: Prize;

	let loading = false;
	let imgError = false;
	$: {
		prize.image_url;
		imgError = false;
	}
</script>

<Sheet.Root bind:open>
	<Sheet.Content side="right">
		<form method="post" action="?/updatePrize" use:enhance={() => {
			loading = true;
				return async () => {
					await invalidateAll();
					open = false;
					loading = false;
				}
		}}>
			<input type="hidden" name="prizeId" value={prize.id} />
			<Sheet.Header>
				<Sheet.Title>Edit {prize.name}</Sheet.Title>
			</Sheet.Header>
			<div class="grid gap-4 py-4">
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="name">Name</Label>
					<Input id="name" name="name" value={prize.name} />
				</div>
				<div class="grid w-full gap-1.5">
					<Label for="description">Description</Label>
					<Textarea id="description" name="description" value={prize.description} />
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="imageUrl">Image URL</Label>
					<Input id="imageUrl" name="imageUrl" bind:value={prize.image_url} />
					{#if prize.image_url && !imgError}
						<img class="mt-2 rounded" on:error={() => imgError = true} src={prize.image_url} alt="prize">
					{/if}
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="count">Prize Count</Label>
					<Input id="count" name="count" type="number" min={0} value={prize.count} />
				</div>
			</div>
			<Sheet.Footer>
				<Button type="submit" disabled={loading}>
					{#if loading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Save
				</Button>
			</Sheet.Footer>
		</form>
	</Sheet.Content>
</Sheet.Root>
