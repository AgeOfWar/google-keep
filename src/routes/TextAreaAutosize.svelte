<script>
	export let value = '';
	export let minRows = 1;
	export let maxRows;
	export let placeholder;
	export let clazz;

	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
</script>

<div class="container">
	<pre aria-hidden="true" style="min-height: {minHeight}; max-height: {maxHeight}">{value +
			'\n'}</pre>

	<textarea class={clazz} {placeholder} bind:value />
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
