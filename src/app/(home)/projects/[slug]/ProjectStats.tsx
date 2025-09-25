"use client";

import { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";
import { Api } from "@/app/lib/apiClient";

type Props = {
    githubUrl: string;
};

export default function ProjectStats({ githubUrl }: Props) {
    const [stars, setStars] = useState<number | null>(null);
    const [downloads, setDownloads] = useState<number | null>(null);

    useEffect(() => {
        if (!githubUrl) return;
        const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return;

        const [, owner, repo] = match;

        Api.getGithubProject(owner, repo)
            .then((data) => {
                if (!data) return;
                setStars(data.Stars ?? null);
                setDownloads(data.Downloads ?? null);
            })
            .catch((err) => console.error("Failed to load GitHub stats:", err));
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
