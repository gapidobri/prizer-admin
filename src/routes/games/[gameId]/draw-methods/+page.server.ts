import type { PageServerLoad } from './$types';
import { getDrawMethods } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getDrawMethods({ query: { game_id: params.gameId } });
	return { drawMethods: res.data! };
};