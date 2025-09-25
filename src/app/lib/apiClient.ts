// app/lib/apiClient.ts
/// <reference lib="dom" />
import {Subscriber} from "@/app/types";

const API_HOST =
    process.env.NEXT_PUBLIC_API_HOST || "https://api.duinrahaic.app";

// Shared fetch wrapper
async function apiFetch<T>(path: string, options?: RequestInit): Promise<T | null> {
    try {
        const res = await fetch(`${API_HOST}${path}`, {
            headers: {
                "Content-Type": "application/json",
                ...(options?.headers || {}),
            },
            ...options,
        });

        if (!res.ok) {
            console.error(`API request failed: ${res.status} ${res.statusText}`);
            return null;
        }

        return (await res.json()) as T;
    } catch (err) {
        console.error("API fetch error:", err);
        return null;
    }
}

// --- Public endpoints (safe to expose client-side) ---
export const Api = {
    getGithubProject(owner: string, repo: string) {
        return apiFetch<{ Stars: number; Downloads: number }>(
            `/github/${owner}/${repo}`
        );
    },

    getProjects() {
        return apiFetch<{ Name: string; Stars: number; Downloads: number; UpdatedAt: string }[]>(
            "/projects"
        );
    },

    getHealth() {
        return apiFetch<{ status: string }>("/health");
    },

    // --- Private endpoints (maybe lock down later) ---
    storeProject(project: {
        name: string;
        stars: number;
        downloads: number;
    }) {
        return apiFetch<{ success: boolean; message: string }>("/project", {
            method: "POST",
            body: JSON.stringify(project),
        });
    },

    getSubscribers() {
        return apiFetch<Subscriber[]>(
            "/subscribers"
        );
    },
};
