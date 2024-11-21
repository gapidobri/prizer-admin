<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import type { ParticipationMethod } from '$lib/api';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import LimitSelect from './LimitSelect.svelte';
	import Fields from './Fields.svelte';
	import { invalidateAll } from '$app/navigation';
	import { LoaderCircle } from 'lucide-svelte';

	export let open = false;
	export let participationMethod: ParticipationMethod;

	let fields = structuredClone(participationMethod.fields);
	let loading = false;

	$: if (!open) {
		fields = structuredClone(participationMethod.fields);
	}
</script>

<Sheet.Root bind:open>
	<Sheet.Content class="overflow-y-scroll">
		<form method="post" action="?/updateParticipationMethod" use:enhance={({formData}) => {
			loading = true;
			formData.set('fields', JSON.stringify(fields));
			return async () => {
				await invalidateAll();
				open = false;
				loading = false;
			}
		}}>
			<input type="hidden" name="participationMethodId" value={participationMethod.id} />
			<Sheet.Header>
				<Sheet.Title>Edit {participationMethod.name}</Sheet.Title>
			</Sheet.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Name</Label>
					<Input id="name" name="name" value={participationMethod.name} class="col-span-3" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label class="text-right">Limit</Label>
					<LimitSelect class="col-span-3" value={participationMethod.participation_limit} />
				</div>
				<div class="flex flex-col gap-2">
					<span class="text-lg font-semibold">User Fields</span>
					<Fields bind:fields={fields.user} />
				</div>
				<div class="flex flex-col gap-2">
					<span class="text-lg font-semibold">Participation Fields</span>
					<Fields bind:fields={fields.participation} />
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