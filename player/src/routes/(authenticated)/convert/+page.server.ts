import type { Actions } from '../convert/$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';

export const load = async ({ locals: { getSession } }) => {
	const session = await getSession();

	if (!session) redirect(307, '/auth');
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const url = form.data.video_url;
		const name = form.data.audio_name;
		const body = JSON.stringify({ url, name });
		await fetch('http://localhost:8080/', {
			method: 'POST',
			body: body
		});
		return {
			form
		};
	}
};
