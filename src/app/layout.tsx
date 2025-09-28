import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" />
        <body className={`flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-white overflow-y-auto ${inter.className}`}>


        {/* Ensure children sit above */}
        <div className="relative z-10">
            <RootProvider>{children}</RootProvider>
        </div>
        </body>
        </html>
    );
}
