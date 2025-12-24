"use client";

import Link from "next/link";
import type { Subscriber } from "@/app/types";
import { HandHeart } from "lucide-react";

type SupportersPillsProps = {
    supporters: Subscriber[];
};

export default function SupportersPills({ supporters }: SupportersPillsProps) {

    const isActive = (supporter: Subscriber) => {
        if (supporter.Status !== "active") return false;
        if (!supporter.EndsAt) return true;
        return new Date(supporter.EndsAt) > new Date();
    };

    return (
        <div className="w-full">
            <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3 flex items-center gap-2">
                <HandHeart className="w-4 h-4" />
                Supporters
            </h2>

            <div className="flex flex-wrap gap-2">
                {supporters
                    .sort((a, b) => {
                        const aActive = isActive(a);
                        const bActive = isActive(b);
                        if (aActive === bActive) {
                            return a.Name.localeCompare(b.Name);
                        }
                        return aActive ? -1 : 1;
                    })
                    .map((s) => {
                        const active = isActive(s);
                        return (
                            <span
                                key={s.Id}
                                className={
                                    active
                                        ? "px-3 py-1 rounded-full text-sm bg-blue-600 text-white shadow-[0_0_12px_3px_rgba(37,99,235,0.75)] transition"
                                        : "px-3 py-1 rounded-full text-sm bg-gray-600 text-gray-300 transition"
                                }
                            >
                                {s.Name}
                            </span>
                        );
                    })}
            </div>

            {/* Always show Ko-fi CTA */}
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
                <Link
                    href="https://ko-fi.com/duinrahaic"
                    target="_blank"
                    className="flex items-center gap-3 px-5 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                    <img
                        className="w-8 h-8"
                        src="/brands/ko-fi-icon.png"
                        alt="Ko-fi"
                    />
                    <span className="text-white font-medium">Support Me On Ko-fi</span>
                </Link>
            </div>
        </div>
    );
}
