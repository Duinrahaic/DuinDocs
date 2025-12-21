import {Github, BookOpen, ShoppingBag, ExternalLink, Download} from "lucide-react";

type ProjectActionsProps = {
    githubUrl?: string;
    stars?: number;
    docsUrl?: string;
    downloadUrl?: string;
    boothUrl?: string;
    externalUrl?: string;
    externalLabel?: string; // custom text for external link
};

export default function ProjectActions({
                                           githubUrl,
                                           docsUrl,
                                           downloadUrl,
                                           boothUrl,
                                           externalUrl,
                                           externalLabel,
                                       }: ProjectActionsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm p-4">
            {/* GitHub */}
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1  h-7 rounded bg-gray-800 hover:bg-gray-700 text-gray-200 no-underline"
                >
                    <Github className="w-4 h-4" /> GitHub

                </a>
            )}
            {downloadUrl && (
                <a
                    href={downloadUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1  h-7 rounded bg-indigo-600 hover:bg-indigo-500 text-white no-underline"
                >
                    <Download className="w-4 h-4" />
                    Download
                </a>
            )}
            {/* Docs */}
            {docsUrl && (
                <a
                    href={docsUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1  h-7 rounded bg-blue-600 hover:bg-blue-500 text-white no-underline"
                >
                    <BookOpen className="w-4 h-4" /> Docs
                </a>
            )}

            {/* Booth */}
            {boothUrl && (
                <a
                    href={boothUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1 h-7 rounded bg-[#fc4d50] hover:bg-[#e14447] text-white no-underline"
                >
                    <img src="/brands/booth-256.png" className="w-4 h-4" />
                    Booth
                </a>
            )}

            {/* External */}
            {externalUrl && (
                <a
                    href={externalUrl}
                    target="_blank"
                    className="flex items-center gap-1 px-3 py-1  h-7 rounded bg-indigo-600 hover:bg-indigo-500 text-white no-underline"
                >
                    <ExternalLink className="w-4 h-4" /> {externalLabel ?? "Visit"}
                </a>
            )}
        </div>
    );
}
