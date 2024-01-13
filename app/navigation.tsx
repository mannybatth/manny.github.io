'use client';

import { REPO_PREFIX } from './constants';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (path: string, allowChild = false) => (allowChild ? pathname.includes(path) : pathname === path);

    return (
        <nav className="absolute top-0 w-full pt-5 h-21 text-xs sm:text-base">
            <ul className="flex flex-row items-center justify-center p-0 list-none space-x-7 uppercase tracking-widest">
                <li>
                    <a
                        className={`inline-block leading-[50px] hover:no-underline ${isActive('/') ? 'active' : ''}`}
                        href={`${REPO_PREFIX}/`}
                    >
                        ABOUT ME <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
                <li>
                    <a
                        className={`inline-block leading-[50px] hover:no-underline ${
                            isActive('/projects', true) ? 'active' : ''
                        }`}
                        href={`${REPO_PREFIX}/projects`}
                    >
                        WORK <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
                <li>
                    <a
                        className={`inline-block leading-[50px] hover:no-underline`}
                        href={`${REPO_PREFIX}/files/resume.pdf`}
                        target="_blank"
                    >
                        RESUME <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
                <li>
                    <a
                        className={`inline-block leading-[50px] hover:no-underline ${
                            isActive('/contact') ? 'active' : ''
                        }`}
                        href={`${REPO_PREFIX}/contact`}
                    >
                        CONTACT <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
