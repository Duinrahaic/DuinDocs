import Image from "next/image";
import CommunityPageWrapper from "../communityPageWrapper";

export default function RhythmPage() {
  return (
    <CommunityPageWrapper>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-shrink-0">
          <Image
            src="/docs/communities/RhythmLogo.png"
            alt="Rhythm"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Rhythm</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Music and rhythm community
          </p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2>About Rhythm</h2>
        <p>
          A community dedicated to music, rhythm games, and creative expression in VR.
          Connect with musicians, rhythm game enthusiasts, and music lovers.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>Rhythm game sessions</li>
          <li>Music sharing and discovery</li>
          <li>Virtual performances</li>
          <li>Creative collaboration</li>
        </ul>
      </div>
    </CommunityPageWrapper>
  );
}
