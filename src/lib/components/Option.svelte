<script>
	export let onclick;
</script>

<button
	class="text-xs px-4 py-2 hover:bg-[#00000010] w-full text-start font-semibold {onclick
		? ''
		: 'text-[#00000066]'}"
	on:click={onclick}
>
	<slot />
</button>
