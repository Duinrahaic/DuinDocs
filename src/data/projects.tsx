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

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    tagline: string;
    collaborative: boolean;
    icon: ReactNode | string;
    backgroundImage?: string;
    backgroundColor?: string;

    // Links
    githubUrl?: string;
    docsUrl?: string;
    downloadUrl?: string;
    boothUrl?: string;
    externalUrl?: {href:string, label:string, icon?:ReactNode};

    // Showcase
    media: ReactNode;

    // Features
    features: {
        title: string;
        description: string;
        icon?: ReactNode;
    }[];
}


export const projects: Project[] = [
    {
        slug: "dollymanager",
        title: "DollyManager",
        subtitle: "VRChat Dolly Camera Path Tool",
        tagline: "Create, manage, and load camera paths with ease in VRChat",
        collaborative: false,
        icon: <Video className="w-8 h-8 text-purple-300" />,
        backgroundColor: "bg-purple-800",

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
                src="https://github.com/Duinrahaic/VRCDollyManager/blob/main/assets/DM-Example.gif?raw=true"
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
    {
        slug: "rhythmrouter",
        title: "RhythmRouter",
        subtitle: "MediaMTX-powered stream router",
        tagline: "Route and manage live VRChat streams with FFmpeg + YARP",
        collaborative: true,
        icon: <Server className="w-8 h-8 text-sky-300" />,
        backgroundImage: "/images/rhythmrouter-bg.png",

        githubUrl: "https://github.com/Duinrahaic/RhythmRouter",

        media: (
            <div className="bg-black text-white p-8 rounded-lg">
                RhythmRouter showcase coming soon…
            </div>
        ),

        features: [
            {
                title: "MediaMTX Core",
                description: "Handles RTMP/RTSP ingress and egress routing.",
            },
            {
                title: "FFmpeg Integration",
                description: "Supports on-the-fly video/audio processing and muxing.",
            },
        ],
    },
    {
        slug: "jurassicbingo",
        title: "JurassicBingo",
        subtitle: "Jurassic Park themed bingo night",
        tagline: "Generate themed bingo cards with images and quotes",
        collaborative: true,
        icon: "🦖",
        backgroundColor: "bg-green-800",

        media: (
            <div className="bg-black text-white p-8 rounded-lg">
                Jurassic Bingo showcase coming soon…
            </div>
        ),

        features: [
            {
                title: "Custom Cards",
                description:
                    "Generates bingo cards with Jurassic Park characters, quotes, and scenes.",
            },
            {
                title: "Web Export",
                description: "Playable in-browser with printable export support.",
            },
        ],
    },
];
