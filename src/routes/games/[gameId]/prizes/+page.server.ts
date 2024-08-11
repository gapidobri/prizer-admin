import type { PageServerLoad } from './$types';
import { getPrizes } from '$lib/api/api';

export const load: PageServerLoad = async ({ params }) => {
	const prizes = await getPrizes(params.gameId);
	return { prizes };
};