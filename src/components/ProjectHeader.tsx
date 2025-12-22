import { Star, Download } from "lucide-react";

type ProjectHeaderProps = {
    title: string;
    subtitle?: string;
    githubUrl?: string;
    stars?: number | null;
    downloads?: number | null;
};

export default function ProjectHeader({
    title,
    subtitle,
    githubUrl,
    stars = null,
    downloads = null,
}: ProjectHeaderProps) {

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
