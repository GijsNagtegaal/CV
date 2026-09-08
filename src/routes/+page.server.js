import { getPortfolio, getTechStack } from '$lib/server/api';

export const load = async ({ fetch }) => ({
	projects: await getPortfolio(fetch),
	techStack: await getTechStack(fetch)
});