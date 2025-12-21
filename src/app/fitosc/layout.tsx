import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/fitosc-source'
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            {...baseOptions()}
            links={[]}
            sidebar={{
                banner: (
                    <div className="flex justify-center items-center gap-2 px-4 pt-3">
                        <Image
                            src="/docs/fitosc/FitOSCLogo.png"
                            alt="fitosc"
                            width={40}
                            height={40}
                        />
                        <span className="font-semibold text-xl">FitOSC</span>
                    </div>
                )
            }}
        >
            {children}
        </DocsLayout>
    )
}
