<script>
	import Note from './Note.svelte';

	export let notes;
</script>

<div class="flex flex-wrap gap-4 px-6">
	{#each notes as note}
		<Note {note} />
	{/each}
</div>
