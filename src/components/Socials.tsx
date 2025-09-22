import { Globe, Twitter, MessageCircle, Users, Gamepad } from "lucide-react";

export type SocialPlatform = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

export const socials: SocialPlatform[] = [
    {
        name: "X / Twitter",
        href: "https://www.x.com/duinrahaic",
        icon: <Twitter className="w-6 h-6 text-sky-400" />,
    },
    {
        name: "Bluesky",
        href: "https://bsky.app/profile/duinrahaic.app",
        icon: <Globe className="w-6 h-6 text-blue-500" />,
    },
    {
        name: "Discord",
        href: "https://discord.gg/yourInviteCode",
        icon: <MessageCircle className="w-6 h-6 text-indigo-500" />,
    },
    {
        name: "VRChat",
        href: "https://vrchat.com/home/user/usr_123",
        icon: <Gamepad className="w-6 h-6 text-green-500" />,
    },
];
