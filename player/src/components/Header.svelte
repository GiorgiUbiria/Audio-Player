<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	export let data: any;
	let session: any;

	$: session = data?.session;
	$: user = session?.user;
</script>

<div class="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2">
	<ul class="flex space-x-4">
		<li>
			<a href="/" class="text-gray-900 dark:text-gray-100">Home</a>
		</li>
		<li>
			<a href="/convert" class="text-gray-900 dark:text-gray-100">Convert</a>
		</li>
		{#if user}
			<li>
				<a href="auth/sign-out" class="text-gray-900 dark:text-gray-100"> Sign Out </a>
			</li>
		{:else}
			<li>
				<a href="auth/sign-in" class="text-gray-900 dark:text-gray-100"> Sign In </a>
			</li>
		{/if}
	</ul>
	<ThemeToggle />
</div>
