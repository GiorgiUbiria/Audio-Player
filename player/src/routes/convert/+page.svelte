<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from '../../components/FormComponent.svelte';
	export let data: PageData;
</script>

<div class="mx-auto max-w-3xl p-4 w-full">
	<SettingsForm data={data.form} />
</div>
