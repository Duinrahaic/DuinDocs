import { Subscriber } from "@/app/types";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "https://api.duinrahaic.app";

async function apiFetch<T>(path: string): Promise<T | null> {
    try {
        const res = await fetch(`${API_HOST}${path}`, {
            headers: {
                "Content-Type": "application/json",
            },
            // Revalidate every 5 minutes
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            console.error(`API request failed: ${res.status} ${res.statusText}`);
            return null;
        }

        const data = (await res.json()) as T;
        return data;
    } catch (err) {
        console.error("API fetch error:", err);
        return null;
    }
}

export const ApiServer = {
    async getGithubProject(owner: string, repo: string) {
        const response = await apiFetch<{
            success: boolean;
            data: { Name: string; Stars: number; Downloads: number; UpdatedAt: string };
            cached: boolean;
        }>(`/github/${owner}/${repo}`);
        return response?.data || null;
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
