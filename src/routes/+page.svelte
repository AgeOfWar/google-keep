<script>
	import { onMount } from 'svelte';
	import WriteField from '$lib/components/WriteField.svelte';
	import NoteFlow from '$lib/components/NoteFlow.svelte';

	let notes = [];
	let pinnedNotes = [];

	async function loadNotes() {
		let response = await fetch('https://jsonplaceholder.typicode.com/photos');
		let albums = await response.json();
		for (let i = 0; i < 4; i++) {
			let title =
				Math.random() < 0.5 ? null : albums[Math.floor(Math.random() * albums.length)].title;
			let note =
				title !== null && Math.random() < 0.5
					? null
					: albums[Math.floor(Math.random() * albums.length)].title;
			if (Math.random() < 0.25) {
				pinnedNotes = [...pinnedNotes, { title, note }];
			} else {
				notes = [...notes, { title, note }];
			}
		}
	}

	onMount(loadNotes);
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
