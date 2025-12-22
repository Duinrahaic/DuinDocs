import { ApiServer } from "@/app/lib/apiServer";
import ProjectHeader from "./ProjectHeader";

type ProjectHeaderServerProps = {
    title: string;
    subtitle?: string;
    githubUrl?: string;
};

export default async function ProjectHeaderServer({
    title,
    subtitle,
    githubUrl,
}: ProjectHeaderServerProps) {
    let stars: number | null = null;
    let downloads: number | null = null;

    if (githubUrl) {
        const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (match) {
            const [, owner, repo] = match;
            const data = await ApiServer.getGithubProject(owner, repo);
            if (data) {
                stars = data.Stars;
                downloads = data.Downloads;
            }
        }
    }

    return (
        <ProjectHeader
            title={title}
            subtitle={subtitle}
            githubUrl={githubUrl}
            stars={stars}
            downloads={downloads}
        />
    );
}
