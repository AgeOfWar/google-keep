<script>
	import '../app.postcss';
	import { searchInput } from '$lib/components/stores.js';
	import Side from '$lib/components/Side.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Logo from '$lib/images/Logo.png';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Reload from 'svelte-material-icons/Reload.svelte';
	import ListView from 'svelte-material-icons/ViewAgendaOutline.svelte';
	import Settings from 'svelte-material-icons/CogOutline.svelte';
	import DotsGrid from 'svelte-material-icons/DotsGrid.svelte';

	let collapseSide = true;
	let search;

	$: searchInput.set(search ?? '');
</script>

<div class="flex flex-col h-full">
	<nav>
		<div class="flex items-center border-b-2 h-12 p-2 box-content justify-between">
			<div class="flex items-center flex-grow h-full flex-shrink">
				<div class="flex items-center justify-start w-[242px] flex-shrink-0">
					<button on:click={() => (collapseSide ^= true)}>
						<Menu
							class="box-content p-3 mx-1 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
							size="24"
							color="#5f6368"
						/>
					</button>
					<a href="/" class="font-googlesans text-[22px] text-[#5f6368] flex items-center">
						<img class="w-[40px] h-[40px] pr-[8px] box-content" src={Logo} alt="Keep" />
						Keep
					</a>
				</div>
				<SearchBar bind:value={search} />
			</div>
			<div class="flex items-center h-full">
				<Reload
					class="box-content p-3 mx-1 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
					size="24"
					color="#5f6368"
				/>
				<ListView
					class="box-content p-3 mx-1 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
					size="24"
					color="#5f6368"
				/>
				<Settings
					class="box-content p-3 mx-1 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
					size="24"
					color="#5f6368"
				/>
				<DotsGrid
					class="box-content p-3 mx-1 ml-7 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
					size="24"
					color="#5f6368"
				/>
			</div>
		</div>
	</nav>
	<div class="h-full flex">
		<div class="h-full flex flex-col justify-between">
			<Side collapse={collapseSide} />
			{#if !collapseSide}
				<a
					class="ml-[30px] mb-[18px] text-xs text-[#5f6368]"
					href="https://ssl.gstatic.com/keep/licenses/web_client_licenses.txt"
					>Licenze open-source
				</a>
			{/if}
		</div>
		<slot />
	</div>
</div>
