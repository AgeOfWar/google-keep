<script>
	import SideItem from './SideItem.svelte';
	import Lightbulb from 'svelte-material-icons/LightbulbOutline.svelte';
	import Bell from 'svelte-material-icons/BellOutline.svelte';
	import Pencil from 'svelte-material-icons/PencilOutline.svelte';
	import Archive from 'svelte-material-icons/ArchiveOutline.svelte';
	import TrashCan from 'svelte-material-icons/TrashCanOutline.svelte';

	export let collapse;
</script>

<aside>
	<div class="{collapse ? '' : 'w-[280px]'} flex-col py-2">
		<SideItem icon={Lightbulb} text="Note" active="true" {collapse} />
		<SideItem icon={Bell} text="Promemoria" {collapse} />
		<SideItem icon={Pencil} text="Modifica etichette" {collapse} />
		<SideItem icon={Archive} text="Archivio" {collapse} />
		<SideItem icon={TrashCan} text="Cestino" {collapse} />
	</div>
</aside>
