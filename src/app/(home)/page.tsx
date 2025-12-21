
import Link from "next/link";
import { MessageCircle, Bird, Users, Heart, ShoppingBag } from "lucide-react";
import SupportersPills from "./SupportersPills";

export default function HomePage() {

    return (
        <main className="relative px-6 py-20 flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
                {/* Left Column - Hero Image */}
                <div className="relative flex justify-center">
                    <img
                        src="/Duin_Merusault_T.png"
                        alt="Duinrahaic Hero"
                        className="
                              w-[500px] h-auto object-contain
                              [mask-image:radial-gradient(circle,white_85%,transparent_100%)]
                              [mask-repeat:no-repeat]
                              [mask-position:center]
                              [mask-size:cover]
                            "
                    />
                </div>

                {/* Right Column - Text + CTA */}
                <div className="flex flex-col items-start text-left">
                    <div className="flex flex-row items-baseline">
                        <h1 className="text-5xl font-bold text-white mb-2">Duinrahaic  </h1>
                        <i className="flex-grow-1">(doo-IN-rah-ik)</i>
                    </div>
                    <i className="mb-4">But you can call me `Duin`.</i>

                    <p className="text-lg text-gray-300 mb-10 max-w-lg">
                        A self-taught developer passionate about building tools for VR,
                        streaming, and creative communities. I focus on .NET, Blazor, and
                        immersive integrations - making complex systems more accessible and fun.
                    </p>

                    {/* Frameless main CTA */}
                    <Link
                        href="/projects"
                        className="text-white-800 hover:text-gray-300 text-lg font-semibold mb-12 ps-12"
                    >
                        → Check out projects
                    </Link>

                    {/* Contact / Socials Section */}
                    <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">
                        Connect
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mb-10">
                        <Link
                            href="https://discord.gg/aZQfy6H9fA"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <img className="w-8 h-8" src="/brands/discord-256.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Discord</span>
                                <span className="text-xs text-gray-400">@Duinrahaic</span>
                            </div>
                        </Link>

                        <Link
                            href="https://bsky.app/profile/duinrahaic.app"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >

                            <img className="w-8 h-8" src="/brands/bluesky-256.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Bluesky</span>
                                <span className="text-xs text-gray-400">@duinrahaic.app</span>
                            </div>
                        </Link>

                        <Link
                            href="https://x.com/duinrahaic"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <img className="w-8 h-8" src="/brands/twitter-x-256.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Twitter / X</span>
                                <span className="text-xs text-gray-400">@duinrahaic</span>
                            </div>
                        </Link>

                        <Link
                            href="https://vrchat.com/home/user/usr_30b4e812-e6b1-4200-b563-ef74e89ea266"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <img className="w-8 h-8" src="/brands/VRC-256.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">VRChat</span>
                                <span className="text-xs text-gray-400">@Duin</span>
                            </div>
                        </Link>
                        <Link
                            href="https://github.com/duinrahaic"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <img className="w-8 h-8" src="/brands/github-256.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Github</span>
                                <span className="text-xs text-gray-400">@Duinrahaic</span>
                            </div>
                        </Link>
                    </div>

                    {/* Support Section */}
                    <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">
                        Support
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="https://duinrahaic.booth.pm/"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <img className="w-8 h-8" src="/brands/booth-256.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Booth</span>
                                <span className="text-xs text-gray-400">@Duinrahaic</span>
                            </div>
                        </Link>
                        <Link
                            href="https://ko-fi.com/duinrahaic"
                            target="_blank"
                            className="flex items-center gap-3 p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                        >
                            <img className="w-8 h-8" src="/brands/ko-fi-icon.png"></img>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">Ko-Fi</span>
                                <span className="text-xs text-gray-400">@Duinrahaic</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <SupportersPills />

            </div>
        </main>
    );
}
