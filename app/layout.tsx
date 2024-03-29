import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Manny Singh',
    description: 'Full Stack Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                <main className="pt-24 pb-10 max-w-[720px] m-auto flex min-h-screen">
                    <div className="w-full">{children}</div>
                </main>
                <footer className="m-auto text-center h-32.5"></footer>
            </body>
        </html>
    );
}
