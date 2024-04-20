<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(async (event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<ModeWatcher />
<Toaster />
<nav class="flex justify-between align-middle h-12">
	<div class="flex gap-2">
		<a href="/">Home</a>
		{#if session}
			<a href="/convert">Convert</a>
			<img
				style="width: 32px; height: 32px; border-radius: 9999px;"
				src={session.user.user_metadata.avatar_url}
				alt="person_avatar"
			/>
			<form method="POST" action="auth?/signout">
				<button>Logout</button>
			</form>
		{:else}
			<a href="/auth">Login</a>
		{/if}
	</div>

	<ThemeToggle />
</nav>
<slot />
