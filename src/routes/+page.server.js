import { getPortfolio, getTechStack, getCvWerkervaring } from '$lib/server/api';

export const load = async ({ fetch }) => {
    // Fire all three API calls simultaneously
    const [projects, techStack, werkervaring] = await Promise.all([
        getPortfolio(fetch),
        getTechStack(fetch),
        getCvWerkervaring(fetch)
    ]);

    return {
        projects,
        techStack,
        werkervaring
    };
};