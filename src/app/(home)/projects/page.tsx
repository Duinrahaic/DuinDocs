import { ProjectCard } from "@/app/(home)/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const personalProjects = projects.filter((p) => !p.collaborative);
    const collabProjects = projects.filter((p) => p.collaborative);

    return (
        <main className="px-6 py-20">
            <div className="max-w-7xl mx-auto">


                <div className="flex flex-col gap-20">
                    {personalProjects.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-6">
                                Personal Projects
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {personalProjects.map((project) => (
                                    <ProjectCard
                                        key={project.slug}
                                        title={project.title}
                                        subtitle={project.tagline}
                                        href={`/projects/${project.slug}`}
                                        icon={project.icon ?? "💻"}
                                        backgroundImage={project.coverImage}
                                        backgroundColor={project.backgroundColor}
                                        githubUrl={project.githubUrl}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {collabProjects.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-6">
                                Contributed Projects
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {collabProjects.map((project) => (
                                    <ProjectCard
                                        key={project.slug}
                                        title={project.title}
                                        subtitle={project.tagline}
                                        href={`/projects/${project.slug}`}
                                        icon={project.icon ?? "🤝"}
                                        backgroundImage={project.coverImage}
                                        backgroundColor={project.backgroundColor}
                                        githubUrl={project.githubUrl}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
}
