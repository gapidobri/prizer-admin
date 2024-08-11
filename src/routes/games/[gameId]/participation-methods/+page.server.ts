import type { PageServerLoad } from './$types';
import { getParticipationMethods } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getParticipationMethods({ query: { gameId: params.gameId } });
	return { participationMethods: res.data! };
};