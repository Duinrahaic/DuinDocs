import Link from "next/link";
import { ReactNode } from "react";

interface CommunityPageWrapperProps {
  children: ReactNode;
}

export default function CommunityPageWrapper({ children }: CommunityPageWrapperProps) {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-20">
      {children}
    </main>
  );
}
