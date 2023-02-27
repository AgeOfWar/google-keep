<script>
	import { clickOutside } from './clickOutside.js';
	import { fileToBase64 } from './images';

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
	import ColorPicker from './ColorPicker.svelte';

	export let onwrite;

	let focused = false;
	let title;
	let note;
	let color;
	let image;
	let colorPickerVisible;
	let filePicker;
	let images;

	function handleClose() {
		focused = false;
		colorPickerVisible = false;
		if (title || note || image) {
			onwrite({
				title: title ?? null,
				note: note ?? null,
				color: color ?? null,
				image: image ?? null
			});
		}
		title = '';
		note = '';
		color = null;
		image = null;
	}

	$: if (images) {
		upload(images[0]);
		focused = true;
	} else {
		image = null;
	}

	async function upload(file) {
		const base64 = await fileToBase64(file);
		image = base64;
	}
</script>

<div
	class="self-center w-[600px] px-4 py-3 shadow-[0_0_7px_#00000050] rounded-md mb-8 mt-4 flex flex-col gap-6"
	style="background-color: {color ?? 'white'};"
	use:clickOutside
	on:click_outside={handleClose}
>
	{#if focused}
		{#if image}
			<img src={image} alt />
		{/if}
		<div class="flex items-center">
			<input
				class="outline-none placeholder-[#4c4c4c] flex-grow bg-transparent"
				type="text"
				placeholder="Titolo"
				bind:value={title}
			/>
			<PinOutline
				class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
				size="24"
				color="#202124"
			/>
		</div>
		<TextAreaAutosize
			class="outline-none placeholder-[#4c4c4c] resize-none m-0 min-h-full h-auto text-sm"
			placeholder="Scrivi una nota..."
			autofocus="true"
			bind:value={note}
		/>
		<div class="flex flex-col">
			<div class="flex justify-between items-center">
				<div class="ml-[-6px] flex items-center gap-4">
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
					<button on:click={() => (colorPickerVisible = true)}>
						<PaletteOutline
							class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
							size="16"
							color="#202124"
						/>
					</button>
					<button class="h-fit" on:click={() => filePicker.click()}>
						<ImageOutline
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
					<DotsVertical
						class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
						size="16"
						color="#202124"
					/>
					<ArrowULeftTop
						class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
						size="16"
						color="#202124"
					/>
					<ArrowURightTop
						class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
						size="16"
						color="#202124"
					/>
				</div>
				<button class="px-6 py-[6px] hover:bg-[#00000020]" on:click={handleClose}>Chiudi</button>
			</div>
			<ColorPicker
				bind:visible={colorPickerVisible}
				onselect={(c) => (color = c)}
				currentValue={color}
			/>
		</div>
	{:else}
		<div class="flex items-center">
			<input
				class="outline-none placeholder-[#4c4c4c] placeholder:font-semibold flex-grow"
				type="text"
				placeholder="Scrivi una nota..."
				on:focus={() => (focused = true)}
			/>
			<button class="h-fit" on:click={() => filePicker.click()}>
				<ImageOutline
					class="box-content p-1 cursor-pointer rounded-full hover:bg-[#00000020]"
					size="16"
					color="#202124"
				/>
			</button>
		</div>
	{/if}
	<input
		bind:this={filePicker}
		bind:files={images}
		type="file"
		class="hidden"
		accept="image/png, image/jpeg"
	/>
</div>
