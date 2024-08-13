import { env } from '$env/dynamic/private';
import { client } from '$lib/api';

client.setConfig({
	baseUrl: env.ADMIN_API_URL,
});