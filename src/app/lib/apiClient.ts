import { Subscriber } from "@/app/types";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "https://api.duinrahaic.app";

interface CacheEntry<T> {
    data: T;
    timestamp: number;
}

const cache = new Map<string, CacheEntry<any>>();

type ApiFetchOptions = Omit<RequestInit, 'cache'> & {
    cache?: { ttl?: number }
};

async function apiFetch<T>(
    path: string,
    options?: ApiFetchOptions
): Promise<T | null> {
    const cacheKey = `${path}`;
    const cacheTTL = options?.cache?.ttl;

    if (cacheTTL) {
        const cached = cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < cacheTTL) {
            return cached.data as T;
        }
    }

    try {
        // Separate custom cache option from fetch options
        const { cache: _, ...fetchOptions } = options || {};

        const res = await fetch(`${API_HOST}${path}`, {
            headers: {
                "Content-Type": "application/json",
                ...(fetchOptions?.headers || {}),
            },
            ...fetchOptions,
        });

        if (!res.ok) {
            console.error(`API request failed: ${res.status} ${res.statusText}`);
            return null;
        }

        const data = (await res.json()) as T;

        if (cacheTTL) {
            cache.set(cacheKey, { data, timestamp: Date.now() });
        }

        return data;
    } catch (err) {
        console.error("API fetch error:", err);
        return null;
    }
}

export const Api = {
    async getGithubProject(owner: string, repo: string) {
        const response = await apiFetch<{
            success: boolean;
            data: { Name: string; Stars: number; Downloads: number; UpdatedAt: string };
            cached: boolean;
        }>(`/github/${owner}/${repo}`, {
            cache: { ttl: 5 * 60 * 1000 }, // Cache for 5 minutes
        });
        return response?.data || null;
    },

    async getHealth() {
        const response = await apiFetch<{ status: string; timestamp: string }>("/health");
        return response || null;
    },

    async getSubscribers() {
        const response = await apiFetch<{
            success: boolean;
            data: Subscriber[];
            count: number;
            filters: { status: string | null; limit: number | null; offset: number | null };
        }>("/subscribers");
        return response?.data || null;
    },
};
