<script>
	import { onMount } from 'svelte';
	import WriteField from '$lib/components/WriteField.svelte';
	import NoteFlow from '$lib/components/NoteFlow.svelte';

	export let data;

	let initialized = false;
	let notes = [];
	let pinnedNotes = [];

	$: if (initialized) localStorage.notes = JSON.stringify(notes);
	$: if (initialized) localStorage.pinnedNotes = JSON.stringify(pinnedNotes);

	onMount(() => {
		notes = JSON.parse(localStorage.notes) ?? data.notes;
		pinnedNotes = JSON.parse(localStorage.pinnedNotes) ?? data.pinnedNotes;
		initialized = true;
	});
</script>

<main class="flex-grow p-6">
	<div class="flex flex-col w-full">
		<WriteField onwrite={(note) => (notes = [...notes, note])} />
		{#if pinnedNotes.length > 0}
			<span class="text-xs text-[#5f6368] font-semibold ml-10 mb-2">APPUNTATE</span>
			<NoteFlow notes={pinnedNotes} onmodify={() => (pinnedNotes = pinnedNotes)} />
			<span class="text-xs text-[#5f6368] font-semibold ml-10 mb-2 mt-16">ALTRE</span>
		{/if}
		<NoteFlow {notes} onmodify={() => (notes = notes)} />
	</div>
</main>
