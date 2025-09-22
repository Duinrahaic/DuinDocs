"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Star, Download } from "lucide-react";
import { useEffect, useState } from "react";

type ProjectCardProps = {
    title: string;
    subtitle: string;
    href: string;
    icon: React.ReactNode | string;
    backgroundImage?: string;
    backgroundColor?: string;
    githubUrl?: string; // from projects.ts
};

export function ProjectCard({
                                title,
                                subtitle,
                                href,
                                icon,
                                backgroundImage,
                                backgroundColor = "bg-gray-800",
                                githubUrl,
                            }: ProjectCardProps) {
    const [stars, setStars] = useState<number | null>(null);
    const [downloads, setDownloads] = useState<number | null>(null);

    // Build API path from GitHub URL
    const getApiUrl = (url: string) => {
        const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return null;
        const [, owner, repo] = match;
        return `/api/github/${owner}/${repo}`;
    };

    useEffect(() => {
        if (!githubUrl) return;
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
                console.error("Failed to fetch cached GitHub stats:", err);
            }
        }

        fetchStats();
    }, [githubUrl]);

    const isImagePath =
        typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http"));

    return (
        <Link href={href}>
            <div
                className={clsx(
                    "relative rounded-xl overflow-hidden flex items-center p-6 min-h-[160px]",
                    "transition-all duration-300 ease-out",
                    "hover:scale-[1.03] hover:shadow-xl",
                    "border border-gray-700",
                    !backgroundImage && backgroundColor
                )}
                style={
                    backgroundImage
                        ? {
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }
                        : undefined
                }
            >
                {backgroundImage && <div className="absolute inset-0 bg-black/50"/>}

                {/* Content */}
                <div className="relative z-10 flex items-center gap-6 w-full">
                    {/* Icon */}
                    <div
                        className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-black/40 rounded-lg text-4xl">
                        {isImagePath ? (
                            <Image
                                src={icon as string}
                                alt={`${title} icon`}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        ) : typeof icon === "string" ? (
                            icon
                        ) : (
                            icon
                        )}
                    </div>

                    {/* Text + Stats */}
                    <div>
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <p className="text-base text-gray-300">{subtitle}</p>

                        {(stars !== null || downloads !== null) && (
                            <div className="mt-2 flex items-center gap-4 text-sm text-gray-400">
                                {stars !== null && (
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400"/>
                                        <span>{stars}</span>
                                    </div>
                                )}
                                {downloads !== null && (
                                    <div className="flex items-center gap-1">
                                        <Download className="w-4 h-4 text-blue-400"/>
                                        <span>{downloads}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
