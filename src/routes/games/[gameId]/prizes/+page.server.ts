import type { PageServerLoad, Actions } from './$types';
import {
	createPrize,
	type CreatePrizeRequest,
	deletePrize,
	getPrizes,
	updatePrize,
	type UpdatePrizeRequest,
} from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getPrizes({ query: { game_id: params.gameId } });
	return { prizes: res.data! };
};

export const actions = {
	createPrize: async ({ request, params }) => {
		const data = await request.formData();

		const prize: CreatePrizeRequest = {
			name: data.get('name') as string,
			description: data.get('description') as string,
			game_id: params.gameId,
			image_url: data.get('imageUrl') as string,
			count: parseInt(data.get('count') as string),
		};

		await createPrize({ body: prize });

		return { success: true };
	},
	updatePrize: async ({ request }) => {
		const data = await request.formData();

		const prizeId = data.get('prizeId') as string;

		const prize: UpdatePrizeRequest = {
			name: data.get('name') as string,
			description: data.get('description') as string,
			image_url: data.get('imageUrl') as string,
			count: data.has('count') ? parseInt(data.get('count') as string) : undefined,
		};

		await updatePrize({ path: { prizeId }, body: prize });

		return { success: true };
	},
	deletePrize: async ({ request }) => {
		const data = await request.formData();

		await deletePrize({
			path: {
				prizeId: data.get('prizeId') as string,
			},
		});

		return { success: true };
	},
} satisfies Actions;