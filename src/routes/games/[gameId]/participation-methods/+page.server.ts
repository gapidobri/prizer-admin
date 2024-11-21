import type { PageServerLoad, Actions } from './$types';
import { getParticipationMethods, updateParticipationMethod, type UpdateParticipationMethodRequest } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getParticipationMethods({ query: { gameId: params.gameId } });
	return { participationMethods: res.data! };
};

export const actions = {
	updateParticipationMethod: async ({ request }) => {
		const data = await request.formData();

		const participationMethodId = data.get('participationMethodId') as string;

		const participationMethod: UpdateParticipationMethodRequest = {
			name: data.get('name') as string,
			participation_limit: data.get('participation_limit') as 'none' | 'daily',
			fields: JSON.parse(data.get('fields') as string),
			win_mail_template_id: data.get('win_mail_template_id') as string,
			lose_mail_template_id: data.get('lose_mail_template_id') as string,
		};

		await updateParticipationMethod({ path: { participationMethodId }, body: participationMethod });

		return { success: true };
	},
} satisfies Actions;