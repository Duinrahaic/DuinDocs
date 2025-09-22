type ProjectStatsProps = {
    stars?: number;
    downloads?: number;
};

export default function ProjectStats({ stars, downloads }: ProjectStatsProps) {
    return (
        <div className="flex gap-4 text-sm text-gray-400">
            {stars !== undefined && <span>⭐ {stars.toLocaleString()} Stars</span>}
            {downloads !== undefined && (
                <span>⬇ {downloads.toLocaleString()} Downloads</span>
            )}
        </div>
    );
}
