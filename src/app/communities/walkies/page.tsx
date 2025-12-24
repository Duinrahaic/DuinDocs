import Image from "next/image";
import Link from "next/link";

export default function WalkiesPage() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-20">
      <div className="mb-8">
        <Link href="/communities" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Communities
        </Link>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex items-start justify-center">
          <img
              src="/communities/WalkiesPoster.png"
              alt="FitOSC Community"
              className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Walkies?</h1>

          <div className="text-lg mb-6">
            Join our vibrant community of virtual walkers who use FitOSC to stay active
            and connect with others in VRChat while exercising.
          </div>

          <h2 className="text-2xl font-semibold mb-3">About the Community</h2>
          <div className="mb-4">
            Our community brings together fitness enthusiasts from around the world who
            enjoy combining physical activity with social VR experiences. Whether you're
            walking on a treadmill or walking in circles, you'll find supportive
            members ready to join you on virtual adventures.
          </div>

          <h2 className="text-2xl font-semibold mb-3">How to Join</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Join our VRChat group: <a href="https://vrchat.com/home/group/grp_cefd37c8-5f4b-4933-9346-75ab850329c9" target="_blank" className="text-blue-500 hover:underline">Walkies.0659</a></li>
            <li>Follow event announcements for scheduled group walks</li>
          </ul>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <div className="font-semibold mb-2">💡 Getting Started</div>
            <div className="text-sm">
              New to the community? Check out the links in the VRChat Group and we can help you get started!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
