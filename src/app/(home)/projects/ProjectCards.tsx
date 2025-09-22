"use client";

import {ProjectCard} from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectCards() {
    // Split into personal vs collaborative
    const personalProjects = projects.filter((p) => !p.collaborative);
    const collabProjects = projects.filter((p) => p.collaborative);

    return (
        <div className="flex flex-col gap-12">
            {/* Personal Projects */}
            {personalProjects.length > 0 && (
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Personal Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {personalProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                title={project.title}
                                subtitle={project.tagline}
                                href={`/projects/${project.slug}`} // ✅ dynamic page
                                icon={project.icon ?? "💻"}
                                backgroundImage={project.backgroundImage}
                                backgroundColor={project.backgroundColor}
                                githubUrl={project.actions?.githubUrl}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Collaborative Projects */}
            {collabProjects.length > 0 && (
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Collaborative Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collabProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                title={project.title}
                                subtitle={project.tagline}
                                href={`/projects/${project.slug}`}
                                icon={project.icon ?? "🤝"}
                                backgroundImage={project.backgroundImage}
                                backgroundColor={project.backgroundColor}
                                githubUrl={project.actions?.githubUrl}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
