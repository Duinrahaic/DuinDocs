import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import type { SupportPlatform } from "./Support";

export default function SupportCard({ name, href, icon }: SupportPlatform) {
    return (
        <Link href={href} target="_blank">
            <Card className="cursor-pointer">
                <CardContent className="flex items-center gap-3">
                    {icon}
                    <span className="text-lg font-medium text-white">{name}</span>
                </CardContent>
            </Card>
        </Link>
    );
}
