<script>
	import { clickOutside } from './clickOutside.js';

	import TextAreaAutosize from './TextAreaAutosize.svelte';
	import BellPlus from 'svelte-material-icons/BellPlusOutline.svelte';
	import AccountPlus from 'svelte-material-icons/AccountPlusOutline.svelte';
	import PaletteOutline from 'svelte-material-icons/PaletteOutline.svelte';
	import ImageOutline from 'svelte-material-icons/ImageOutline.svelte';
	import Archive from 'svelte-material-icons/ArchiveOutline.svelte';
	import DotsVertical from 'svelte-material-icons/DotsVertical.svelte';
	import ArrowULeftTop from 'svelte-material-icons/ArrowULeftTop.svelte';
	import ArrowURightTop from 'svelte-material-icons/ArrowURightTop.svelte';
	import PinOutline from 'svelte-material-icons/PinOutline.svelte';

	let focused = false;

	function init(title) {
		title.focus();
	}
</script>

<div
	class="self-center w-[600px] px-4 py-3 shadow-md shadow-[#00000050] rounded-md my-7 flex flex-col gap-6"
	use:clickOutside
	on:clickOutside={() => (focused = false)}
>
	{#if focused}
		<div class="flex items-center">
			<input
				class="outline-none placeholder-[#4c4c4c] flex-grow"
				type="text"
				placeholder="Titolo"
				use:init
			/>
			<PinOutline
				class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
				size="24"
				color="#202124"
			/>
		</div>
		<TextAreaAutosize
			clazz="outline-none placeholder-[#4c4c4c] resize-none m-0 min-h-full h-auto text-sm"
			placeholder="Scrivi una nota..."
		/>
		<div class="flex justify-between items-center">
			<div class="ml-[-6px] flex items-center gap-4">
				<BellPlus
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<AccountPlus
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<PaletteOutline
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<ImageOutline
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<Archive
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<DotsVertical
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<ArrowULeftTop
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
				<ArrowURightTop
					class="box-content p-2 cursor-pointer rounded-full hover:bg-[#e3e5e6]"
					size="16"
					color="#202124"
				/>
			</div>
			<div>Chiudi</div>
		</div>
	{:else}
		<input
			class="outline-none placeholder-[#4c4c4c]"
			type="text"
			placeholder="Scrivi una nota..."
			on:focus={() => (focused = true)}
		/>
	{/if}
</div>
