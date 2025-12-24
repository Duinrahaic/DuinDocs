"use client";

import Image from "next/image";
import Link from "next/link";
import { communities } from "@/lib/communities-data";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommunities = useMemo(() => {
    if (!searchQuery) return communities;

    const query = searchQuery.toLowerCase();
    return communities.filter(
      (community) =>
        community.name.toLowerCase().includes(query) ||
        community.description.toLowerCase().includes(query) ||
        community.id.toLowerCase().includes(query) ||
        community.vrchatGroupCode?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <main className="container max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Communities</h1>
        <p className="text-lg text-muted-foreground">
          Communities I actively contribute to and support
        </p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <Link
            key={community.id}
            href={community.href}
            className="group block p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={community.image}
                alt={community.name}
                width={200}
                height={200}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {community.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {community.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredCommunities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No communities found matching "{searchQuery}"</p>
        </div>
      )}
    </main>
  );
}
