"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";
import clsx from "clsx";
import { ProjectCardProps } from "@/app/types";
import { Api } from "@/app/lib/apiClient";

export function ProjectCard({
                                title,
                                subtitle,
                                href,
                                backgroundImage,
                                githubUrl,
                            }: ProjectCardProps) {
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
        <Link href={href} className="block group">
            <div
                className={clsx(
                    "relative flex flex-col justify-end rounded-xl overflow-hidden",
                    "w-full h-80",
                    "border border-gray-700 shadow-md",
                    "transition-transform duration-300 ease-out hover:scale-[1.02]"
                )}
                style={{ backgroundColor: backgroundImage ? undefined : "#000" }}
            >
                {backgroundImage && (
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                )}

                <div
                    className={clsx(
                        "absolute bottom-0 left-0 right-0",
                        "bg-black/40 backdrop-blur-md",
                        "transition-all duration-300 ease-in-out",
                        "group-hover:h-28 h-16"
                    )}
                >
                    <div className="px-4 py-2 flex flex-col justify-center h-full">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-white truncate">{title}</h3>
                            <div className="flex gap-4 text-sm text-gray-200">
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
                        </div>
                        <p
                            className={clsx(
                                "text-sm text-gray-300 mt-1 overflow-hidden transition-all duration-300",
                                "max-h-0 group-hover:max-h-16"
                            )}
                        >
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
