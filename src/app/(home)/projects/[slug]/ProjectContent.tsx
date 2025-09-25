import ProjectStats from "./ProjectStats";
import {ReactNode} from "react";
import { Github, BookOpen, Download, Square, Link as LinkIcon } from "lucide-react";


type Props = {
    media: React.ReactNode;
    title: string;
    tagline: string;
    githubUrl?: string;
    docsUrl?: string;
    downloadUrl?: string;
    boothUrl?: string;
    externalUrl?: {href:string, label:string, icon?:ReactNode};
    features: { title: string; description: string; icon?: React.ReactNode }[];
};

export default function ProjectContent({
                                                media,
                                                title,
                                                tagline,
                                                githubUrl,
                                                docsUrl,
                                                downloadUrl,
                                                boothUrl,
                                                externalUrl,
                                                features,
                                            }: Props) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">{media}</div>

            <div>

                <div className="flex flex-row gap-6">
                    <h2 className="text-2xl font-bold text-white">{title} </h2>
                    {githubUrl && ( <>
                        <ProjectStats githubUrl={githubUrl} />
                    </>)}
                </div>

                <p className="text-gray-400">{tagline}</p>
            </div>

            {/* Quick Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                )}
                {docsUrl && (
                    <a
                        href={docsUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white"
                    >
                        <BookOpen className="w-4 h-4" />
                        Docs
                    </a>
                )}
                {downloadUrl && (
                    <a
                        href={downloadUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </a>
                )}
                {boothUrl && (
                    <a
                        href={boothUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded bg-[#fc4d50] hover:bg-[#e14447] text-white"
                    >
                        <img src="/brands/booth-256.png" className="w-4 h-4" />
                        Booth
                    </a>
                )}
                {externalUrl && (
                    <a
                        href={externalUrl.href}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white"
                    >
                        <LinkIcon className="w-4 h-4" />
                        {externalUrl.label}
                    </a>
                )}
            </div>


            {/* Features Grid */}
            <div>
                <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-750 transition"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                {f.icon}
                                <p className="font-medium text-white">{f.title}</p>
                            </div>
                            <p className="text-sm text-gray-400">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
