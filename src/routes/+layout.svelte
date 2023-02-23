<script>
	import '../app.postcss';
	import SearchBar from './SearchBar.svelte';
	import Logo from '$lib/images/Logo.png';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Reload from 'svelte-material-icons/Reload.svelte';
	import ListView from 'svelte-material-icons/ViewAgendaOutline.svelte';
	import Settings from 'svelte-material-icons/CogOutline.svelte';
	import DotsGrid from 'svelte-material-icons/DotsGrid.svelte';
</script>

<div class="flex flex-col h-full">
	<nav>
		<div class="flex items-center border-b-2 h-12 p-2 box-content justify-between">
			<div class="flex items-center flex-grow h-full">
				<div class="flex items-center justify-start w-[242px]">
					<Menu
						class="box-content p-3 mx-1 hover:bg-[#e3e5e6] rounded-full cursor-pointer"
						size="24"
						color="#5f6368"
					/>
					<a href="/" class="font-googlesans text-[22px] text-[#5f6368] flex items-center">
						<img class="w-[40px] h-[40px] pr-[8px] box-content" src={Logo} alt="Keep" />
						Keep
					</a>
				</div>
				<SearchBar />
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
	<slot />
</div>
