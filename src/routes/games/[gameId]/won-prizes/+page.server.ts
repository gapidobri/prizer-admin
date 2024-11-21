import type { PageServerLoad } from './$types';
import { getWonPrizes } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getWonPrizes({ query: { game_id: params.gameId } });
	return { wonPrizes: res.data! };
};