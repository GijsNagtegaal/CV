const API_BASE = 'https://api.gijsnagtegaal.nl/items';
const ASSET_BASE = 'https://api.gijsnagtegaal.nl/assets';
const PLACEHOLDER_IMAGE = '/assets/images/gijsmemo.webp';

export function assetUrl(asset) {
    if (!asset) return PLACEHOLDER_IMAGE;

    const id = typeof asset === 'object' ? asset.id ?? asset.memoji : asset;
    return typeof id === 'string' && id ? `${ASSET_BASE}/${id}` : PLACEHOLDER_IMAGE;
}

async function fetchData(endpoint, fetcher) {
    try {
        const response = await fetcher(`${API_BASE}/${endpoint}`);
        if (!response.ok) return null;
        const result = await response.json();
        return result.data ?? null;
    } catch (error) {
        console.error(`Fetch error for ${endpoint}:`, error);
        return null;
    }
}

export function processItems(items) {
    const array = items ? (Array.isArray(items) ? items : [items]) : [];
    return array.map((item) => ({
        ...item,
        image: assetUrl(item.image),
        image_dark: assetUrl(item.image_dark)
    }));
}

export async function getPortfolio(fetcher) {
    const items = await fetchData('portfolio_items', fetcher);
    return processItems(items);
}

export async function getTechStack(fetcher) {
    const items = await fetchData('tech_stack', fetcher);
    return processItems(items);
}

export async function getProject(slug, fetcher) {
    const items = await fetchData(`portfolio_items?filter[slug][_eq]=${encodeURIComponent(slug)}`, fetcher);
    return processItems(items)[0] ?? null;
}

export async function getCvWerkervaring(fetcher) {
    const items = await fetchData('cv_werkervaring', fetcher);
    return processItems(items);
}

export async function getCvOpleidingen(fetcher) {
    const items = await fetchData('cv_opleidingen', fetcher);
    return processItems(items);
}