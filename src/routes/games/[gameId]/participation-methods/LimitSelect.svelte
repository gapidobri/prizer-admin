<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import type { Selected } from 'bits-ui';

	export let value: string;

	const items: Selected<string>[] = [
		{ value: 'none', label: 'None' },
		{ value: 'daily', label: 'Daily' },
	];

	let selected: Selected<string> | undefined = items.find((i) => i.value === value);
</script>

<Select.Root
	portal={null}
	name="limit"
	{items}
	bind:selected={selected}
	onSelectedChange={(v) => value = v?.value ?? value}
>
	<Select.Trigger {...$$restProps}>
		<Select.Value placeholder="Limit" />
	</Select.Trigger>
	<Select.Content>
		{#each items as item}
			<Select.Item value={item.value} label={item.label} />
		{/each}
	</Select.Content>
</Select.Root>