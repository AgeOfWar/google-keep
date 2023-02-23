<script>
	export let icon;
	export let active = false;
	export let text;
</script>

<div
	class="flex items-center cursor-pointer rounded-r-full pl-3 {active
		? 'bg-[#fceec6]'
		: 'hover:bg-[#f1f3f4]'}"
>
	<svelte:component
		this={icon}
		class="box-content p-3 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
		size="24"
		color={active ? 'black' : '#83878b'}
	/>
	<span class="ml-[20px] text-sm font-googlesans font-medium">
		{text}
	</span>
</div>
