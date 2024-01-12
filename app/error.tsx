'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex pt-16 m-auto">
            <div className="mx-auto">
                <h1 className="inline-block border-r-2 border-gray-500  mr-5 pr-6 text-2xl font-medium leading-[49px]">
                    404
                </h1>
                <div className="inline-block text-left align-middle">
                    <h2>Something went wrong!</h2>
                </div>
                <div className="mt-6 text-center">
                    <a
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                    >
                        Try again
                    </a>
                </div>
            </div>
        </div>
    );
}
