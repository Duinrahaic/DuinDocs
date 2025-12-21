import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import Image from 'next/image'

import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            {...baseOptions()}
            links={[]}
            sidebar={{
                tabs: {
                    transform: (option, node) => {
                        // Custom image icon for DollyManager root
                        if (node.name === 'dollymanager') {
                            return {
                                ...option,
                                icon: (
                                    <Image
                                        src="/docs/dollymanager/DollyManager_Icon.png"
                                        alt="Dolly Manager"
                                        width={18}
                                        height={18}
                                        className="rounded-sm"
                                    />
                                ),
                            }
                        }

                        // Fallback: use default behavior (Lucide / emoji)
                        return option
                    },
                },
            }}
        >
            {children}
        </DocsLayout>
    )
}
