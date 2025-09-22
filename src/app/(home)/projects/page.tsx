import ProjectCards from "./ProjectCards";

export default function ProjectsPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
            <p className="text-gray-400 mb-12">
                A showcase of my personal and collaborative projects.
            </p>
            <ProjectCards />
        </main>
    );
}
