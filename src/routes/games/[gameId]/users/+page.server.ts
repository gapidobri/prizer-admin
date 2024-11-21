import type { PageServerLoad } from './$types';
import { getUsers } from '$lib/api';

export const load: PageServerLoad = async ({ params }) => {
	const res = await getUsers({ query: { game_id: params.gameId } });
	return { users: res.data! };
};