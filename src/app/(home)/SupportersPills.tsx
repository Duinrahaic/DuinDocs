"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Api } from "@/app/lib/apiClient";
import type { Subscriber } from "@/app/types";

export default function SupportersPills() {
    const [supporters, setSupporters] = useState<Subscriber[]>([]);

    useEffect(() => {
        Api.getSubscribers()
            .then((data) => {
                if (!data) return;
                setSupporters(data);
            })
            .catch((err) => console.error("Failed to load supporters:", err));
    }, []);

    return (
        <div className="mt-12 col-span-2">
            <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">
                Supporters
            </h2>

            <div className="flex flex-wrap gap-2">
                {supporters
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((s) => (
                        <span
                            key={s.id}
                            className="px-3 py-1 rounded-full text-sm bg-blue-600 text-white shadow-[0_0_12px_3px_rgba(37,99,235,0.75)] transition"
                        >
              {s.name}
            </span>
                    ))}
            </div>

            {/* Always show Ko-fi CTA */}
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
                <Link
                    href="https://ko-fi.com/duinrahaic"
                    target="_blank"
                    className="flex items-center gap-3 px-5 py-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                    <img className="w-8 h-8" src="/brands/ko-fi-icon.png" alt="Ko-fi" />
                    <span className="text-white font-medium">Support on Ko-fi</span>
                </Link>
            </div>
        </div>
    );
}
