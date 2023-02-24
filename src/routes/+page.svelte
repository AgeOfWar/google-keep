<script>
	import WriteField from '$lib/components/WriteField.svelte';

	let notes = [];
	let pinnedNotes = [];
</script>

<main class="flex-grow">
	<div class="flex flex-col w-full">
		<WriteField />
	</div>
</main>
