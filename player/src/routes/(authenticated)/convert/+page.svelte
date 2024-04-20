<script lang="ts">
	import FormComponent from '../../../components/FormComponent.svelte';
	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<div class="mx-auto max-w-3xl p-4 w-full">
	<FormComponent data={data.form} />
</div>
