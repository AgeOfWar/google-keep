export async function load() {
	let notes = [];
	let pinnedNotes = [];
	let response = await fetch('https://jsonplaceholder.typicode.com/photos');
	let albums = await response.json();
	for (let i = 0; i < 4; i++) {
		let title =
			Math.random() < 0.5 ? null : albums[Math.floor(Math.random() * albums.length)].title;
		let note =
			title !== null && Math.random() < 0.5
				? null
				: albums[Math.floor(Math.random() * albums.length)].title;
		if (Math.random() < 0.25) {
			pinnedNotes.push({ title, note });
		} else {
			notes.push({ title, note });
		}
	}
	return { notes, pinnedNotes };
}
