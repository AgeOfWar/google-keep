<script>
	import { clickOutside } from './clickOutside.js';

	export let onselect;
	export let currentValue;
	export let values = ['#FFFFFF', '#DAAFE9', '#C7DBF5', '#ADE5DA', '#B0EDC3', '#FDF0A4', '#F8D6A2'];
	export let visible = false;
</script>

{#if visible}
	<div class="relative ml-[-12px]">
		<div
			class="flex absolute top-4 shadow-[0_0_7px_#00000050] p-2 rounded-md gap-2 bg-white"
			use:clickOutside
			on:click_outside={() => (visible = false)}
		>
			{#each values as value}
				<button
					class="rounded-full w-6 h-6 hover:border {value === '#FFFFFF'
						? 'border border-[#00000050]'
						: ''} {currentValue === value ? 'border-2 border-[#9e49ef]' : 'border-[#555555]'}"
					style="background-color: {value};"
					on:click={() => onselect(value)}
				/>
			{/each}
		</div>
	</div>
{/if}
