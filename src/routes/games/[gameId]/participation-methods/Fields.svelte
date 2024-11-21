<script lang="ts">
	import type { Field } from '$lib/api';
	import { Label } from '$lib/components/ui/label';
	import TypeSelect from './TypeSelect.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Plus, Trash } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { Checkbox } from '$lib/components/ui/checkbox';

	export let fields: Record<string, Field>;

	let newFieldName: string;

	function handleAddField() {
		const key = newFieldName.trim();
		if (!Object.keys(fields).includes(key)) {
			fields[key] = {
				type: 'string',
				unique: false,
				required: false,
			};
		}
		newFieldName = '';
	}

	function handleRemoveField(key: string) {
		delete fields[key];
		fields = fields;
	}
</script>

<div class="flex flex-col gap-2">
	{#each Object.keys(fields) as key}
		<div class="rounded-md border px-4 py-3 flex flex-col gap-3">
			<div class="flex">
				<span class="font-bold font-mono grow">{key}</span>
				<button type="button" class="text-gray-400 hover:text-red-500 transition"
								on:click={() => handleRemoveField(key)}>
					<Trash class="w-4" />
				</button>
			</div>
			<div class="flex items-center space-x-2">
				<Label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Type
				</Label>
				<TypeSelect bind:value={fields[key].type} />
			</div>
			<div class="flex gap-4">
				<div class="flex items-center space-x-2">
					<Checkbox bind:checked={fields[key].unique} />
					<Label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Unique
					</Label>
				</div>
				<div class="flex items-center space-x-2">
					<Checkbox bind:checked={fields[key].required} />
					<Label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Required
					</Label>
				</div>
			</div>
		</div>
	{/each}
	<div class="flex gap-2">
		<Input placeholder="Add new field" bind:value={newFieldName} />
		<Button variant="outline" on:click={handleAddField}>
			<Plus />
		</Button>
	</div>
</div>
