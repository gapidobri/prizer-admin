import type { PageServerLoad } from './$types';
import { getPrizes } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getPrizes({ query: { gameId: params.gameId } });
	return { prizes: res.data! };
};