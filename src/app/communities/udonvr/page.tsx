import Link from "next/link";
import Image from "next/image";

export default function UdonVRPage() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-20">
      <div className="mb-8">
        <Link href="/communities" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Communities
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-shrink-0">
          <Image
            src="/docs/communities/UdonVRLogo.png"
            alt="UdonVR"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">UdonVR</h1>
          <p className="text-xl text-muted-foreground mb-6">
            VRChat Udon programming community
          </p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2>About UdonVR</h2>
        <p>
          UdonVR is a community focused on VRChat world creation using Udon and UdonSharp.
          Share knowledge, get help with projects, and collaborate with other creators.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>Udon programming tutorials and resources</li>
          <li>World creation collaboration</li>
          <li>Code reviews and feedback</li>
          <li>Community projects</li>
        </ul>
      </div>
    </main>
  );
}
