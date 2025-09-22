"use client";

import { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";

type Props = {
    githubUrl: string;
};

export default function ProjectStats({ githubUrl }: Props) {
    const [stars, setStars] = useState<number | null>(null);
    const [downloads, setDownloads] = useState<number | null>(null);

    const getApiUrl = (url: string): string | null => {
        const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return null;
        const [, owner, repo] = match;
        return `/api/github/${owner}/${repo}`;
    };

    useEffect(() => {
        const apiUrl = getApiUrl(githubUrl);
        if (!apiUrl) return;

        async function fetchStats() {
            try {
                const res = await fetch(apiUrl as string);
                if (!res.ok) return;
                const data = await res.json();

                if (typeof data.stars === "number") setStars(data.stars);
                if (typeof data.downloads === "number") setDownloads(data.downloads);
            } catch (err) {
                console.error("Failed to fetch stats:", err);
            }
        }

        fetchStats();
    }, [githubUrl]);

    return (
        <div className="flex gap-6 text-sm text-gray-400 mt-2">
            {stars !== null && (
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{stars}</span>
                </div>
            )}
            {downloads !== null && (
                <div className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-blue-400" />
                    <span>{downloads}</span>
                </div>
            )}
        </div>
    );
}
