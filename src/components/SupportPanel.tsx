import Link from "next/link";

export function SupportPanel() {
    return (

        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 w-full">
                <Link
                    href="https://discord.gg/aZQfy6H9fA"
                    target="_blank"
                    className="flex items-center gap-3 p-3 h-20 no-underline rounded-md bg-gray-800 hover:bg-gray-700 transition"
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
                    className="flex items-center gap-3 p-3 h-20 no-underline rounded-md bg-gray-800 hover:bg-gray-700 transition"
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
                    className="flex items-center gap-3 p-3 h-20 no-underline rounded-md bg-gray-800 hover:bg-gray-700 transition"
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
                    className="flex items-center gap-3 p-3 h-20 no-underline rounded-md bg-gray-800 hover:bg-gray-700 transition"
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
                    className="flex items-center gap-3 p-3 h-20 no-underline rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                    <img className="w-8 h-8" src="/brands/github-256.png"></img>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">Github</span>
                        <span className="text-xs text-gray-400">@Duinrahaic</span>
                    </div>
                </Link>
            </div>
        </div>


    );
}
