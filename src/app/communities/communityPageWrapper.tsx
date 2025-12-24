import Link from "next/link";
import { ReactNode } from "react";

interface CommunityPageWrapperProps {
  children: ReactNode;
}

export default function CommunityPageWrapper({ children }: CommunityPageWrapperProps) {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-20">
      <div className="mb-8">
        <Link
          href="/communities"
          className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
        >
          ← Back to Communities
        </Link>
      </div>
      {children}
    </main>
  );
}
