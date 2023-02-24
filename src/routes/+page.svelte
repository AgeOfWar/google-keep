<script>
	import WriteField from '$lib/components/WriteField.svelte';
	import NoteFlow from '$lib/components/NoteFlow.svelte';

	let notes = [
		{
			title: 'qest',
			note: 'Iow'
		},
		{
			title: 'test'
		},
		{
			note: 'wow'
		}
	];
	let pinnedNotes = [
		{
			title: 'qest',
			note: 'Iow'
		}
	];
</script>

<main class="flex-grow">
	<div class="flex flex-col w-full">
		<WriteField onwrite={(note) => (notes = [...notes, note])} />
		{#if pinnedNotes.length > 0}
			<span class="text-xs text-[#5f6368] font-semibold ml-10 mb-2">APPUNTATE</span>
			<NoteFlow notes={pinnedNotes} />
			<span class="text-xs text-[#5f6368] font-semibold ml-10 mb-2 mt-16">ALTRE</span>
		{/if}
		<NoteFlow {notes} />
	</div>
</main>
