import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/games/[gameId]/prizes/$types';
import { getGames } from '$lib/api/api';

export const load: PageServerLoad = async () => {
	const games = await getGames();
	return { games };
};