import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
	client: '@hey-api/client-fetch',
	input: '../prizer/api/admin.yaml',
	output: 'src/lib/api',
	types: {
		enums: 'javascript',
	},
});