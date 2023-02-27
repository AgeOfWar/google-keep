<script>
	import { searchInput } from './stores.js';
	import Note from './Note.svelte';

	export let notes;
	export let onmodify;

	function swapNotes(i, j) {
		let temp = notes[i];
		notes[i] = notes[j];
		notes[j] = temp;
		notes = notes;
	}

	let draggedNote;

	function ondragstart(i, e) {
		draggedNote = i;
	}

	function ondragenter(i) {
		if (draggedNote !== i) {
			console.log(draggedNote + ' ' + i);
			swapNotes(draggedNote, i);
		}
	}

	function ondragend(i) {
		draggedNote = null;
	}
</script>

<div class="flex flex-wrap gap-4 px-6">
	{#each notes as note, i}
		{#if note.title?.includes($searchInput) || note.note?.includes($searchInput)}
			<Note
				{note}
				on:dragenter={(e) => ondragenter(i, e)}
				on:dragstart={(e) => ondragstart(i, e)}
				on:dragend={(e) => ondragend(i, e)}
				onremove={() => (notes = notes.filter((n) => n !== note))}
				dragged={draggedNote === i}
				{onmodify}
			/>
		{/if}
	{/each}
</div>
