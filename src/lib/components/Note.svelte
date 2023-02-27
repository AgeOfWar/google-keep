<script>
	import { fileToBase64 } from './images';
	import BellPlus from 'svelte-material-icons/BellPlusOutline.svelte';
	import AccountPlus from 'svelte-material-icons/AccountPlusOutline.svelte';
	import Palette from 'svelte-material-icons/PaletteOutline.svelte';
	import Image from 'svelte-material-icons/ImageOutline.svelte';
	import Archive from 'svelte-material-icons/ArchiveOutline.svelte';
	import ColorPicker from './ColorPicker.svelte';
	import Options from './Options.svelte';
	import Option from './Option.svelte';

	export let note;
	export let onremove;
	export let dragged;
	export let onmodify;
	let hideOptions = true;
	let colorPickerVisible;
	let optionsVisible;
	let filePicker;
	let images;

	$: if (images) {
		upload(images[0]);
	}

	async function upload(image) {
		const base64 = await fileToBase64(image);
		note.image = base64;
		onmodify();
	}
</script>

<div
	class="w-[240px] h-min rounded-lg border hover:drop-shadow {colorPickerVisible
		? 'drop-shadow'
		: ''} border-[#e2e2e2] px-4 py-2 flex flex-col justify-between"
	style="background-color: {note.color ?? 'white'}; cursor: {dragged ? 'move' : 'pointer'};"
	draggable="true"
	on:mouseenter={() => (hideOptions = false)}
	on:mouseleave={() => (hideOptions = true)}
	on:dragenter
	on:dragleave
	on:dragstart
	on:dragend
	on:drag
>
	<div class="flex flex-col break-words">
		{#if note.image}
			<img class="ml-[-16px] mt-[-8px] min-w-[238px] rounded-t-lg" src={note.image} alt />
		{/if}
		{#if note.title}
			<span class="select-none font-semibold">{note.title}</span>
		{/if}
		{#if note.note}
			<span class="select-none {note.title ? 'pt-2' : ''}">{note.note}</span>
		{/if}
	</div>
	<div
		class="flex justify-between mt-8 mx-[-8px] {hideOptions &&
		!colorPickerVisible &&
		!optionsVisible
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
		<button class="h-fit" on:click={() => (colorPickerVisible = true)}>
			<Palette
				class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
				size="16"
				color="#202124"
			/>
		</button>
		<button class="h-fit" on:click={() => filePicker.click()}>
			<Image
				class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
				size="16"
				color="#202124"
			/>
		</button>
		<Archive
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
		<Options bind:visible={optionsVisible} width="200px">
			<Option onclick={onremove}>Elimina nota</Option>
			<Option>Aggiungi etichetta</Option>
			<Option>Aggiungi disegno</Option>
			<Option>Crea una copia</Option>
			<Option>Mostra caselle di controllo</Option>
			<Option>Copia in Documenti Google</Option>
		</Options>
	</div>
	<ColorPicker
		bind:visible={colorPickerVisible}
		onselect={(color) => {
			note.color = color;
			onmodify();
		}}
		currentValue={note.color}
	/>
	<input
		bind:this={filePicker}
		bind:files={images}
		type="file"
		class="hidden"
		accept="image/png, image/jpeg"
	/>
</div>
