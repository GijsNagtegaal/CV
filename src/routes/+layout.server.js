import { getFuelPrice } from '$lib/server/api';

export const prerender = true;

export async function load({ fetch }) {
    const fuelPriceE95 = await getFuelPrice(fetch);

    return {
        fuelPriceE95
    };
}
