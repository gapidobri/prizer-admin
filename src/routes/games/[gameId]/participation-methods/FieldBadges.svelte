<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	export let fields: string[];
</script>

<div class="flex gap-2">
	{#each fields as field}
		<Badge variant="secondary">{field}</Badge>
	{/each}
</div>
