import { Github, BookOpen, ShoppingBag, ExternalLink } from "lucide-react";

type ProjectActionsProps = {
    githubUrl?: string;
    stars?: number;
    docsUrl?: string;
    boothUrl?: string;
    externalUrl?: string;
    externalLabel?: string; // custom text for external link
};

export default function ProjectActions({
                                           githubUrl,
                                           stars,
                                           docsUrl,
                                           boothUrl,
                                           externalUrl,
                                           externalLabel,
                                       }: ProjectActionsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {/* GitHub */}
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
                >
                    <Github className="w-4 h-4" /> GitHub
                    {stars !== undefined && (
                        <span className="ml-1 text-yellow-400">⭐ {stars}</span>
                    )}
                </a>
            )}

            {/* Docs */}
            {docsUrl && (
                <a
                    href={docsUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white"
                >
                    <BookOpen className="w-4 h-4" /> Docs
                </a>
            )}

            {/* Booth */}
            {boothUrl && (
                <a
                    href={boothUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1 rounded bg-pink-600 hover:bg-pink-500 text-white"
                >
                    <ShoppingBag className="w-4 h-4" /> Booth
                </a>
            )}

            {/* External */}
            {externalUrl && (
                <a
                    href={externalUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                    <ExternalLink className="w-4 h-4" /> {externalLabel ?? "Visit"}
                </a>
            )}
        </div>
    );
}
