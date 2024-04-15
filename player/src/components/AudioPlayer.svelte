<script lang="ts">
	let audio: HTMLAudioElement;
	export let songs: { data: string[] };

	let src = songs.data[0];
	let currentSongIndex = 0;

	let playbackState = 'stopped';

	function play() {
		audio
			.play()
			.then(() => {
				playbackState = 'playing';
			})
			.catch((error) => {
				console.error('Failed to play:', error);
			});
	}

	function pause() {
		audio.pause();
		playbackState = 'paused';
	}

	function stop() {
		audio.pause();
		audio.currentTime = 0;
		playbackState = 'stopped';
	}

	function nextSong() {
		if (playbackState === 'stopped' || currentSongIndex < songs.data.length - 1) {
			currentSongIndex++;
			audio.src = songs.data[currentSongIndex];
			play();
		}
	}

	function prevSong() {
		if (playbackState === 'stopped' || currentSongIndex > 0) {
			currentSongIndex--;
			audio.src = songs.data[currentSongIndex];
			play();
		}
	}
</script>

<audio {src} bind:this={audio}></audio>

<div class="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2">
	<h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Music Player</h2>
	<div class="flex space-x-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-gray-900 dark:text-gray-100"
			><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path><path d="M3 16.2V21m0 0h4.8M3 21l6-6"
			></path><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path><path d="M3 7.8V3m0 0h4.8M3 3l6 6"
			></path></svg
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-gray-900 dark:text-gray-100"
			><rect x="2" y="6" width="20" height="8" rx="1"></rect><path d="M17 14v7"></path><path
				d="M7 14v7"
			></path><path d="M17 3v3"></path><path d="M7 3v3"></path><path d="M10 14 2.3 6.3"></path><path
				d="m14 6 7.7 7.7"
			></path><path d="m8 6 8 8"></path></svg
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-gray-900 dark:text-gray-100"
			><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line
				x1="4"
				x2="20"
				y1="18"
				y2="18"
			></line></svg
		>
	</div>
</div>

<div class="flex flex-col space-y-4 p-4">
	<div class="flex items-center justify-between">
		<button
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
			on:click={prevSong}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="text-gray-900 dark:text-gray-100"
				><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg
			></button
		>

		<button
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 p-2"
			on:click={playbackState === 'playing' ? pause : play}
		>
			{#if playbackState === 'playing'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0  0  24  24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-900 dark:text-gray-100"
					><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"
					></rect></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0  0  24  24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-900 dark:text-gray-100"
					><polygon points="5  3  19  12  5  21  5  3"></polygon></svg
				>
			{/if}
		</button>

		<button
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
			on:click={nextSong}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="text-gray-900 dark:text-gray-100"
				><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg
			></button
		>
	</div>
</div>
<div class="p-4">
	<h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Playlist</h2>
	<ul>
		{#each songs.data as song, index}
			<li class:current={index === currentSongIndex}>{song}</li>
		{/each}
	</ul>
</div>
