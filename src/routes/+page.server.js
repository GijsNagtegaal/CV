import { getPortfolio, getTechStack, getCvWerkervaring, getCvOpleidingen } from '$lib/server/api';

export const load = async ({ fetch }) => {

    const [projects, techStack, werkervaring, opleidingen] = await Promise.all([
        getPortfolio(fetch),
        getTechStack(fetch),
        getCvWerkervaring(fetch),
        getCvOpleidingen(fetch)
    ]);

    return {
        projects,
        techStack,
        werkervaring,
        opleidingen
    };
};