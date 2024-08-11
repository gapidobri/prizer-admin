import type { Game, Prize } from '$lib/api/models';

const apiUrl = 'http://localhost:8081';

export async function getPrizes(gameId: string): Promise<Prize[]> {
	const res = await fetch(`${apiUrl}/prizes?gameId=${gameId}`);
	return await res.json();
}

export async function getGames(): Promise<Game[]> {
	const res = await fetch(`${apiUrl}/games`);
	return await res.json();
}