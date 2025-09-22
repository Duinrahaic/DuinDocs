import { Coffee, ShoppingBag } from "lucide-react";

export type SupportPlatform = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

export const supports: SupportPlatform[] = [
    {
        name: "Ko-Fi",
        href: "https://www.ko-fi.com/duinrahaic",
        icon: <Coffee className="w-6 h-6 text-amber-400" />,
    },
    {
        name: "Booth.pm",
        href: "https://booth.pm/en/users/duinrahaic",
        icon: <ShoppingBag className="w-6 h-6 text-red-600" />,
    },
];
