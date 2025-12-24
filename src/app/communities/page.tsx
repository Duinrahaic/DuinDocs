import Image from "next/image";
import Link from "next/link";
import { communities } from "@/lib/communities-data";

export default function CommunitiesPage() {
  return (
    <main className="container max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Communities</h1>
        <p className="text-lg text-muted-foreground">
          Communities I actively contribute to and support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
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
    </main>
  );
}
