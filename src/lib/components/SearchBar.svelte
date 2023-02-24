<script>
	import Search from 'svelte-material-icons/Magnify.svelte';
	import Close from 'svelte-material-icons/Close.svelte';

	let value;
</script>

<div
	class="bg-[#f1f3f4] h-full flex items-center rounded-lg p-[5px] basis-[722px] flex-shrink drop-shadow-sm"
>
	<Search
		class="box-content h-auto p-2 m-[3px] hover:bg-[#e3e5e6] rounded-full cursor-pointer"
		size="24"
		color="#5f6368"
	/>
	<input
		type="text"
		class="bg-[#f1f3f4] outline-none font-googlesans placeholder:font-googlesans placeholder:font-extralight text-lg flex-grow"
		placeholder="Cerca"
		bind:value
	/>
	{#if value !== undefined}
		<Close
			class="box-content h-auto p-2 m-[3px] hover:bg-[#e3e5e6] rounded-full cursor-pointer"
			size="24"
			color="#5f6368"
		/>
	{/if}
</div>
