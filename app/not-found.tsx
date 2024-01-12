'use client'; // Error components must be Client Components

import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="flex pt-16 m-auto">
            <div className="mx-auto">
                <h1 className="inline-block border-r-2 border-gray-500  mr-5 pr-6 text-2xl font-medium leading-[49px]">
                    404
                </h1>
                <div className="inline-block text-left align-middle">
                    <h2>This page could not be found.</h2>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/">Return Home</Link>
                </div>
            </div>
        </div>
    );
}
