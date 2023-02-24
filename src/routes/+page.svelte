<script>
	import WriteField from '$lib/components/WriteField.svelte';
	import NoteFlow from '$lib/components/NoteFlow.svelte';

	export let data;
</script>

<main class="flex-grow p-6">
	<div class="flex flex-col w-full">
		<WriteField onwrite={(note) => (data.notes = [...data.notes, note])} />
		{#if data.pinnedNotes.length > 0}
			<span class="text-xs text-[#5f6368] font-semibold ml-10 mb-2">APPUNTATE</span>
			<NoteFlow notes={data.pinnedNotes} />
			<span class="text-xs text-[#5f6368] font-semibold ml-10 mb-2 mt-16">ALTRE</span>
		{/if}
		<NoteFlow notes={data.notes} />
	</div>
</main>
