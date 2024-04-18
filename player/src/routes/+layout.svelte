<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<ModeWatcher />
<Header />
<Toaster />
<slot />
