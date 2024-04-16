<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Header />
<div class="w-full h-screen bg-cyan-500 flex items-center justify-center">
	<div class="w-96 h-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
		<slot />
	</div>
</div>
