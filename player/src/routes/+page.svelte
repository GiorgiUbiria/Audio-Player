<script lang="ts">
	import AudioPlayer from '../components/AudioPlayer.svelte';
	export let data;
</script>

<div class="mx-auto max-w-3xl p-4 w-full">
	<AudioPlayer songs={data} />
</div>
