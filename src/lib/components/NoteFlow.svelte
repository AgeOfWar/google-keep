<script>
	import { searchInput } from './stores.js';
	import Note from './Note.svelte';

	export let notes;
	let search = '';

	searchInput.subscribe((s) => (search = s));
</script>

<div class="flex flex-wrap gap-4 px-6">
	{#each notes as note}
		{#if note.title?.includes(search) || note.note?.includes(search)}
			<Note {note} onremove={() => (notes = notes.filter((n) => n !== note))} />
		{/if}
	{/each}
</div>
