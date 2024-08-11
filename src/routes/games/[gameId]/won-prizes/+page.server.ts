import type { PageServerLoad } from './$types';
import { getWonPrizes } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getWonPrizes({ query: { gameId: params.gameId } });
	return { wonPrizes: res.data! };
};