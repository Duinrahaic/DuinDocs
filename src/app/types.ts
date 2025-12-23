import {ReactNode} from "react";

export interface Env {
    API_HOST: string;
}

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    href: string;
    icon: React.ReactNode | string;
    backgroundImage?: string;
    backgroundColor?: string;
    githubUrl?: string; // from projects.ts
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    tagline: string;
    collaborative: boolean;
    icon: ReactNode | string;
    backgroundImage?: string;
    backgroundColor?: string;
    coverImage?: string;

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

export interface Subscriber {
    Id: string;
    Name: string;
    Status: string;
    StartedAt: string;
    UpdatedAt: string;
    EndsAt: string | null;
}
