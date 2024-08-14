import type { PageServerLoad } from './$types';
import { getDrawMethods } from '$lib/api';

export const load: PageServerLoad = async () => {
	const res = await getDrawMethods();
	return { drawMethods: res.data! };
};