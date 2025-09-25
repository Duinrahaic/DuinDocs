import {
    Layers,
    Eye,
    BookOpen,
    Download,
    Github,
    Share2,
    Video,
    Server,
} from "lucide-react";

import { ReactNode } from "react";
import {Project} from "@/app/types";




export const projects: Project[] = [
    {
        slug: "dollymanager",
        title: "DollyManager",
        subtitle: "VRChat Dolly Camera Path Tool",
        tagline: "Create, manage, and load camera paths with ease in VRChat",
        collaborative: false,
        icon: <Video className="w-8 h-8 text-purple-300" />,
        backgroundColor: "bg-purple-800",
        coverImage: "/projects/DollyManager.png",
        // links
        githubUrl: "https://github.com/Duinrahaic/VRCDollyManager",
        docsUrl: "https://github.com/Duinrahaic/VRCDollyManager#readme",
        downloadUrl: "https://github.com/Duinrahaic/VRCDollyManager/releases",
        boothUrl: "https://github.com/Duinrahaic/VRCDollyManager/releases",
        externalUrl: {href: "www.google.com",label:"Google"},

        // showcase media
        media: (
            <img
                alt="Dolly Manager in action"
                src="/projects/DollyManager_Demo.gif"
                className="rounded-lg shadow-md w-full"
            />
        ),

        // feature set
        features: [
            {
                title: "Labeling & Tagging",
                description: "Tag & rename your dolly paths so finding them is fast.",
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
                description: "Does not modify original files; manages externally.",
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
        ],
    },
    {
        slug: "fitosc",
        title: "FitOSC",
        subtitle: "Run in VR with your treadmill",
        tagline: "Connect your treadmill to VRChat with OSC",
        collaborative: false,
        icon: "🏃",
        backgroundImage: "/images/fitosc-bg.jpg",

        githubUrl: "https://github.com/Duinrahaic/FitOSC",

        media: (
            <div className="bg-black text-white p-8 rounded-lg">
                FitOSC demo coming soon…
            </div>
        ),

        features: [
            {
                title: "Native BLE",
                description: "Connects directly to treadmills using Bluetooth Low Energy.",
            },
            {
                title: "OSC Support",
                description: "Streams real-time treadmill telemetry into VRChat.",
            },
        ],
    },

];
