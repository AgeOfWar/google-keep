<script>
	import { clickOutside } from './clickOutside.js';
	import DotsVertical from 'svelte-material-icons/DotsVertical.svelte';

	export let visible = false;
	export let width = 'auto';
</script>

<div>
	<button on:click={() => (visible = true)}>
		<DotsVertical
			class="box-content p-2 cursor-pointer rounded-full hover:bg-[#00000020]"
			size="16"
			color="#202124"
		/>
	</button>
	{#if visible}
		<div class="relative ml-1">
			<div
				class="absolute flex flex-col items-start top-1 shadow-[0_0_7px_#00000050] py-2 rounded-md bg-white "
				style="width: {width};"
				use:clickOutside
				on:click_outside={() => (visible = false)}
			>
				<slot />
			</div>
		</div>
	{/if}
</div>
