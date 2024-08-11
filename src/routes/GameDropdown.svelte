<script lang="ts">
	import type { Game } from '$lib/api/models';
	import * as Select from '$lib/components/ui/select/index.js';

	export let games: Game[];
	export let selectedId: string | null = null;
	export let onSelect: (game?: Game) => void;

	const items = games.map((g) => ({ value: g.id, label: g.name }));
	const selected = items.find((g) => g.value === selectedId);
</script>

<Select.Root
	portal={null} {items} {selected}
	onSelectedChange={(v) => onSelect(games.find((g) => g.id === (v?.value ?? '')))}
>
	<Select.Trigger>
		<Select.Value placeholder="Select a game" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Games</Select.Label>
			{#each games as game}
				<Select.Item value={game.id} label={game.name}>
					{game.name}
				</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="game" />
</Select.Root>