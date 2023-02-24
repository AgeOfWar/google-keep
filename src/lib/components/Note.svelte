<script>
	import BellPlus from 'svelte-material-icons/BellPlusOutline.svelte';
	import AccountPlus from 'svelte-material-icons/AccountPlusOutline.svelte';
	import Palette from 'svelte-material-icons/PaletteOutline.svelte';
	import Image from 'svelte-material-icons/ImageOutline.svelte';
	import Archive from 'svelte-material-icons/ArchiveOutline.svelte';
	import DotsVertical from 'svelte-material-icons/DotsVertical.svelte';
	import ColorPicker from './ColorPicker.svelte';

	export let note;
	let hideOptions = true;
	let colorPickerVisible;
</script>

<div
	class="w-[240px] h-min rounded-lg border hover:drop-shadow {colorPickerVisible
		? 'drop-shadow'
		: ''} border-[#e2e2e2] px-4 py-2 flex flex-col justify-between"
	style="background-color: {note.color ?? 'white'};"
	on:mouseenter={() => (hideOptions = false)}
	on:mouseleave={() => (hideOptions = true)}
>
	<div class="flex flex-col break-words">
		{#if note.title}
			<span class="font-semibold">{note.title}</span>
		{/if}
		{#if note.note}
			<span class={note.title ? 'pt-2' : ''}>{note.note}</span>
		{/if}
	</div>
	<div
		class="flex justify-between mt-8 mx-[-8px] {hideOptions && !colorPickerVisible
			? 'invisible'
			: ''}"
	>
		<BellPlus
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
		<AccountPlus
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
		<button
			on:click={() => {
				colorPickerVisible = true;
				console.log(colorPickerVisible);
			}}
		>
			<Palette
				class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
				size="16"
				color="#202124"
			/>
		</button>
		<Image
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
		<Archive
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
		<DotsVertical
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
	</div>
	<ColorPicker
		bind:visible={colorPickerVisible}
		onselect={(color) => (note.color = color)}
		currentValue={note.color}
	/>
</div>
