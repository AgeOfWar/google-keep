<script>
	export let value = '';
	export let minRows = 1;
	export let maxRows = 20;
	export let placeholder;
	let clazz;
	export let autofocus = false;
	export let color;

	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;

	function init(title) {
		if (autofocus) {
			title.focus();
		}
	}

	export { clazz as class };
</script>

<div class="container" style="background-color: {color ?? 'transparent'};">
	<pre aria-hidden="true" style="min-height: {minHeight}; max-height: {maxHeight}">{value +
			'\n'}</pre>

	<textarea
		class={clazz}
		{placeholder}
		bind:value
		use:init
		style="background-color: {color ?? 'transparent'};"
	/>
</div>

<style>
	.container {
		position: relative;
	}

	pre,
	textarea {
		padding: 0.5em;
		box-sizing: border-box;
		line-height: 1.2;
		overflow: hidden;
	}

	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		padding: 0;
		resize: none;
	}
</style>
