import ProjectStats from "./ProjectStats";

type ProjectShowcaseModalProps = {
    media: React.ReactNode;
    title: string;
    tagline: string;
    actions: { githubUrl?: string; downloadUrl?: string; docsUrl?: string };
    features: { title: string; description: string; icon?: React.ReactNode }[];
    stats?: { stars?: number; downloads?: number };
};

export default function ProjectShowcaseModal({
                                                 media,
                                                 title,
                                                 tagline,
                                                 actions,
                                                 features,
                                                 stats,
                                             }: ProjectShowcaseModalProps) {
    return (
        <div className="flex flex-col gap-6 ">
            {/* Hero Media */}
            <div className="w-full ">{media}</div>

            {/* Title + Tagline */}
            <div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-400">{tagline}</p>
            </div>

            {/* Quick Links Row */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
                {actions.githubUrl && (
                    <a
                        href={actions.githubUrl}
                        target="_blank"
                        className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-200"
                    >
                        GitHub
                    </a>
                )}
                {actions.docsUrl && (
                    <a
                        href={actions.docsUrl}
                        target="_blank"
                        className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white"
                    >
                        Docs
                    </a>
                )}
                {actions.downloadUrl && (
                    <a
                        href={actions.downloadUrl}
                        target="_blank"
                        className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white"
                    >
                        Download
                    </a>
                )}
                {stats && (
                    <ProjectStats stars={stats.stars} downloads={stats.downloads} />
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
