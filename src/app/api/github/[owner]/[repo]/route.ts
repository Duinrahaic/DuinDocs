import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ owner: string; repo: string }> }
) {
    const { owner, repo } = await params;

    console.log(`[API] Fetching stats for ${owner}/${repo}...`);

    try {
        // --- Repo info (stars) ---
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoRes.ok) {
            return NextResponse.json(
                { error: "Failed to fetch repo info" },
                { status: repoRes.status }
            );
        }
        const repoData = await repoRes.json();
        const stars = repoData.stargazers_count ?? 0;

        // --- Releases (lifetime downloads) ---
        let downloads = 0;
        let page = 1;

        while (true) {
            const releasesRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/releases?per_page=100&page=${page}`
            );
            if (!releasesRes.ok) break;

            const releases = await releasesRes.json();
            if (!Array.isArray(releases) || releases.length === 0) break;

            for (const release of releases) {
                if (release.assets) {
                    downloads += release.assets.reduce(
                        (acc: number, asset: any) => acc + (asset.download_count ?? 0),
                        0
                    );
                }
            }

            page++;
        }

        const ts = Date.now();

        // --- Return cached response ---
        return NextResponse.json(
            { stars, downloads, cached: true, ts },
            {
                headers: {
                    // Cache at Cloudflare edge for 1 hour
                    // Serve stale while revalidating up to 1 day
                    "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
                },
            }
        );
    } catch (err) {
        console.error("GitHub API error:", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
