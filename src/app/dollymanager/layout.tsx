import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/dollymanager-source'


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
                            src="/docs/dollymanager/DollyManagerLogo.png"
                            alt="DollyManager"
                            width={36}
                            height={36}
                        />
                        <span className="font-semibold text-xl">DollyManager</span>
                    </div>
                )
            }}
        >
            {children}
        </DocsLayout>
    )
}
