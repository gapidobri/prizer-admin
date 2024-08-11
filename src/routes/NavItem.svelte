<script lang="ts">
	export let href: string;
	export let active: boolean;

	let classes: string;
	$: classes = active ? 'bg-muted text-primary' : 'text-muted-foreground';
</script>

<a
	{href}
	class="{classes} text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
>
	<slot />
</a>