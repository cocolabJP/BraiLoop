import type { Pavement } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;

//=== Generic request function ===//
async function request<T>(path: string, init: RequestInit = {}) {
    const headers = new Headers(init?.headers);
    if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");

    const finalInit: RequestInit = { ...init, headers };
    if (!path.startsWith('/')) path = `/${path}`;
    const url = `${BASE_URL}${path}`;

    const method = (finalInit.method || 'GET').toUpperCase();
    const res = await fetch(url, finalInit);
    const json = await res.json();
    
    if (!res.ok) {
        const message = `[${res.status}] ${method} ${url} | ${json.error}`
        throw new Error(message);
    }
    
    console.log(`[${res.status}] ${method} ${url}`);
    return json as T;
}

//=== Fetch functions ===//
export async function getPavements({
    tactile_paving,
}: {
    tactile_paving?: 'all' | 'warning' | 'guiding' | 'none'
} = {}) {
    const params = new URLSearchParams();
    if (tactile_paving) params.set('tactile_paving', tactile_paving);

    const query = params.toString();
    const url = query ? `/pavements?${query}` : '/pavements';

    return request<Pavement[]>(url);
}