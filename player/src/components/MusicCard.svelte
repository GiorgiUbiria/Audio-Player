<script lang="ts">
	import { onMount } from 'svelte';

	export let song: string;
    // last part after /
    let name = song.split('/')[song.split('/').length - 1];
	export let index: number;
	export let currentSongIndex: number;
	export let playSong: (index: number) => void;
</script>

<div
	class="border rounded-md p-2 cursor-pointer bg-white"
	on:click={() => playSong(index)}
	class:selected={index === currentSongIndex}
>
	<p>{name}</p>
</div>

