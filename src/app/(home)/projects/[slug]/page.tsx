import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectContent from "@/app/(home)/projects/[slug]/ProjectContent";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <ProjectContent
                media={project.media}
                title={project.title}
                tagline={project.tagline}
                githubUrl={project.githubUrl}
                docsUrl={project.docsUrl}
                downloadUrl={project.downloadUrl}
                boothUrl={project.boothUrl}
                externalUrl={project.externalUrl}
                features={project.features}
            />
        </main>
    );
}
