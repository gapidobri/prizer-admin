import type { LayoutServerLoad } from './$types';
import { getGames } from '$lib/api';

export const load: LayoutServerLoad = async ({ params }) => {
	const response = await getGames();

	return {
		games: response.data!,
		selectedGame: response.data?.find((game) => game.id === params.gameId),
	};
};