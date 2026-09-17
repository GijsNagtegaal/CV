import { getPortfolio, getTechStack, getCvWerkervaring, getCvOpleidingen, getFuelPrice } from '$lib/server/api';

export const load = async ({ fetch }) => {

    const [projects, techStack, werkervaring, opleidingen, fuelPriceE95] = await Promise.all([
        getPortfolio(fetch),
        getTechStack(fetch),
        getCvWerkervaring(fetch),
        getCvOpleidingen(fetch),
        getFuelPrice(fetch)
    ]);

    return {
        projects,
        techStack,
        werkervaring,
        opleidingen,
        fuelPriceE95
    };
};