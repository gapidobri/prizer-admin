<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import type { ParticipationMethod } from '$lib/api';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import LimitSelect from './LimitSelect.svelte';
	import Fields from './Fields.svelte';

	export let participationMethod: ParticipationMethod;
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline">Edit</Button>
	</Sheet.Trigger>
	<Sheet.Content class="overflow-y-scroll">
		<Sheet.Header>
			<Sheet.Title>Edit {participationMethod.name}</Sheet.Title>
		</Sheet.Header>
		<form method="post" action="?/updateParticipationMethod" class="grid gap-4 py-4" use:enhance>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Name</Label>
				<Input id="name" bind:value={participationMethod.name} class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="limit" class="text-right">Limit</Label>
				<LimitSelect class="col-span-3" bind:value={participationMethod.limit} />
			</div>
			<div class="flex flex-col gap-2">
				<span class="text-lg font-semibold">User Fields</span>
				<Fields bind:fields={participationMethod.fields.user} />
			</div>
			<div class="flex flex-col gap-2">
				<span class="text-lg font-semibold">Participation Fields</span>
				<Fields bind:fields={participationMethod.fields.participation} />
			</div>
		</form>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit">Save changes</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>