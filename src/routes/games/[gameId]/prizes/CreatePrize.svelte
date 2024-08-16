<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { LoaderCircle, Plus } from 'lucide-svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	let loading = false;
	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]}>
			<Plus class="mr-2 h-4 w-4" />
			Add Prize
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<form method="post" action="?/createPrize" use:enhance={() => {
			loading = true;
				return async () => {
					await invalidateAll();
					open = false;
					loading = false;
				}
		}}>
			<Sheet.Header>
				<Sheet.Title>Add prize</Sheet.Title>
			</Sheet.Header>
			<div class="grid gap-4 py-4">
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="name">Name</Label>
					<Input id="name" name="name" />
				</div>
				<div class="grid w-full gap-1.5">
					<Label for="description">Description</Label>
					<Textarea id="description" name="description" />
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="imageUrl">Image URL</Label>
					<Input id="imageUrl" name="imageUrl" placeholder="https://example.com/image.png" />
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="count">Prize Count</Label>
					<Input id="count" name="count" type="number" min={0} />
				</div>
			</div>
			<Sheet.Footer>
				<Button type="submit" disabled={loading}>
					{#if loading}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{/if}
					Add prize
				</Button>
			</Sheet.Footer>
		</form>
	</Sheet.Content>
</Sheet.Root>
