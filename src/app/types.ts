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

export interface Treadmill {
    Id: string;
    Make: string;
    Model: string;
    Driver: string;
    Weight: {
        maxUser: number;
        unit: string;
    } | null;
    SpeedRange: {
        min: number;
        max: number;
        unit: string;
    } | null;
    Source: {
        name: string;
        url: string;
    };
    Features: {
        bluetooth: boolean;
        ftms: boolean;
        speed_read: boolean;
        speed_control: boolean;
        incline_read: boolean;
        incline_control: boolean;
        distance: boolean;
        steps: boolean;
        cadence: boolean;
        calories: boolean;
        heart_rate: boolean;
        remote_start: boolean;
    };
    Applications: {
        fitosc: {
            supported: boolean;
            notes: string[];
        };
        vrti: {
            supported: boolean;
            notes: string[];
        };
    };
    SharedNotes: string[];
    UpdatedAt: string;
}
