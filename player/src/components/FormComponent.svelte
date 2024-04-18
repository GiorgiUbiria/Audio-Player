<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from '../routes/convert/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="video_url">
		<Form.Control let:attrs>
			<Form.Label>URL:</Form.Label>
			<Input {...attrs} bind:value={$formData.video_url} />
		</Form.Control>
		<Form.Description>URL of a Youtube video you want to convert.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="audio_name">
		<Form.Control let:attrs>
			<Form.Label>Name:</Form.Label>
			<Input {...attrs} bind:value={$formData.audio_name} />
		</Form.Control>
		<Form.Description>How to save the converted file.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Convert</Form.Button>
</form>
