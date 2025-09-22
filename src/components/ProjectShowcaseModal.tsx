import ProjectActions from "./ProjectActions";
import ProjectStats from "./ProjectStats";

type ProjectShowcaseModalProps = {
    media: React.ReactNode; // video/gif/image
    title: string;
    tagline: string;
    actions: {
        githubUrl?: string;
        stars?: number;
        docsUrl?: string;
        boothUrl?: string;
        externalUrl?: string;
        externalLabel?: string;
    };
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
        <div className="flex flex-col gap-6">
            {/* Hero Media */}
            <div className="w-full">{media}</div>

            {/* Title + Tagline */}
            <div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-400">{tagline}</p>
            </div>

            {/* Quick Actions Row */}
            <ProjectActions
                githubUrl={actions.githubUrl}
                stars={actions.stars}
                docsUrl={actions.docsUrl}
                boothUrl={actions.boothUrl}
                externalUrl={actions.externalUrl}
                externalLabel={actions.externalLabel}
            />

            {/* Features as Grid */}
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

            {/* Stats */}
            {stats && (
                <ProjectStats stars={stats.stars} downloads={stats.downloads} />
            )}
        </div>
    );
}
