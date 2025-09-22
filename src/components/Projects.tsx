import {
    Github,
    Download,
    BookOpen,
    Home,
    Eye,
    Layers,
    Share2,
} from "lucide-react";
import ProjectShowcaseModal from "./ProjectShowcaseModal";

export const projects = [
    {
        icon: <Home className="w-6 h-6 text-teal-400" />,
        title: "DollyManager",
        subtitle: "A Dolly Manager for VRChat",
        modalContent: (
            <ProjectShowcaseModal
                media={
                    <img
                        alt="Dolly Manager in action"
                        src="https://github.com/Duinrahaic/VRCDollyManager/blob/main/assets/DM-Example.gif?raw=true"
                        className="rounded-lg shadow-md w-full"
                    />
                }
                title="DollyManager"
                tagline="Create, manage, and load camera paths with ease in VRChat"
                actions={{
                    githubUrl: "https://github.com/Duinrahaic/VRCDollyManager",
                    stars: 22,
                    docsUrl: "https://github.com/Duinrahaic/VRCDollyManager#readme",
                    boothUrl: "https://booth.pm/duinrahaic",
                    externalUrl: "https://dollymanager.app",
                    externalLabel: "Website",
                }}
                features={[
                    {
                        title: "Labeling & Tagging",
                        description:
                            "Tag & rename your dolly paths so finding them is fast.",
                        icon: <Layers className="w-5 h-5 text-blue-400" />,
                    },
                    {
                        title: "3D Preview",
                        description:
                            "View your dolly paths in a 3D preview before loading into VRChat.",
                        icon: <Eye className="w-5 h-5 text-green-400" />,
                    },
                    {
                        title: "Non-Invasive",
                        description:
                            "Does not modify original files; manages externally.",
                        icon: <BookOpen className="w-5 h-5 text-gray-400" />,
                    },
                    {
                        title: "Lightweight",
                        description: "Small footprint, few dependencies, fast performance.",
                        icon: <Download className="w-5 h-5 text-orange-400" />,
                    },
                    {
                        title: "OSC Enabled",
                        description:
                            "Uses OSC Query for integration; load dolly with a single click.",
                        icon: <Github className="w-5 h-5 text-cyan-400" />,
                    },
                    {
                        title: "Monitoring & Sharing",
                        description:
                            "Auto-ingests new dollies and allows sharing via clipboard.",
                        icon: <Share2 className="w-5 h-5 text-pink-400" />,
                    },
                ]}
            />
        ),
    },
];
