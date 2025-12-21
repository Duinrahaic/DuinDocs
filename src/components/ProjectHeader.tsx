"use client";

import { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";

type ProjectHeaderProps = {
    title: string;
    subtitle?: string;
    githubUrl?: string;
};

export default function ProjectHeader({
    title,
    subtitle,
    githubUrl,
}: ProjectHeaderProps) {
    const [stars, setStars] = useState<number | null>(null);
    const [downloads, setDownloads] = useState<number | null>(null);

    useEffect(() => {
        if (!githubUrl) return;
        const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return;

        const [, owner, repo] = match;

        // Fetch GitHub stats
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.stargazers_count !== undefined) {
                    setStars(data.stargazers_count);
                }
            })
            .catch((err) => console.error("Failed to load GitHub stars:", err));

        // Fetch latest release downloads
        fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
            .then((res) => res.json())
            .then((data) => {
                if (data.assets && Array.isArray(data.assets)) {
                    const totalDownloads = data.assets.reduce(
                        (sum: number, asset: any) => sum + (asset.download_count || 0),
                        0
                    );
                    setDownloads(totalDownloads);
                }
            })
            .catch((err) => console.error("Failed to load downloads:", err));
    }, [githubUrl]);

    return (
        <div className="gap-1 text-start flex flex-col">
            <div className="flex flex-row gap-8 items-center h-3">
                <h1 className="text-4xl font-bold gap-4 mb-0">{title}</h1>
                {githubUrl && (
                    <div className="flex items-center align-bottom justify-center gap-6 text-md text-muted-foreground">
                        {stars !== null && (
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                <span>{stars.toLocaleString()} stars</span>
                            </div>
                        )}
                        {downloads !== null && (
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-blue-500" />
                                <span>{downloads.toLocaleString()} downloads</span>
                            </div>
                        )}
                    </div>
                )}

            </div>
            <div className="flex flex-row">
                {subtitle && <p className="text-xl text-muted-foreground mb-4">{subtitle}</p>}
            </div>

        </div>
    );
}
