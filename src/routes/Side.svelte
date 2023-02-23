<script>
	import SideItem from './SideItem.svelte';
	import Lightbulb from 'svelte-material-icons/LightbulbOutline.svelte';
	import Bell from 'svelte-material-icons/BellOutline.svelte';
	import Pencil from 'svelte-material-icons/PencilOutline.svelte';
	import Archive from 'svelte-material-icons/ArchiveOutline.svelte';
	import TrashCan from 'svelte-material-icons/TrashCanOutline.svelte';
</script>

<aside>
	<div class="w-[280px] flex-col py-2">
		<SideItem icon={Lightbulb} text="Note" active="true" />
		<SideItem icon={Bell} text="Promemoria" />
		<SideItem icon={Pencil} text="Modifica etichette" />
		<SideItem icon={Archive} text="Archivio" />
		<SideItem icon={TrashCan} text="Cestino" />
	</div>
</aside>
