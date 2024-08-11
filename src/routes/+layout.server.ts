import type { LayoutServerLoad } from './$types';
import { getGames } from '$lib/api/api';

export const load: LayoutServerLoad = async ({ params }) => {
	const games = await getGames();
	return {
		games,
		selectedGameId: params.gameId,
	};
};