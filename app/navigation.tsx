'use client';

import { REPO_PREFIX } from './constants';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="absolute top-0 w-full pt-5 h-21 text-sm font-normal">
            {/* <a href="/" className="block mx-auto w-22 h-20 navIcon">
                        <Image src={`${REPO_PREFIX}/images/about-me-icon.png`} alt={''} width={100} height={100} />
                    </a> */}
            <ul className="flex flex-row items-center justify-center p-0 m-auto list-none space-x-7">
                <li className="uppercase tracking-widest mr-7.5 first:ml-2.5 last:mr-0">
                    <a
                        className={`inline-block leading-[50px] hover:no-underline hoverLine ${
                            isActive('/') ? 'active' : ''
                        }`}
                        href={`${REPO_PREFIX}/`}
                    >
                        ABOUT ME <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
                <li className="uppercase tracking-widest mr-7.5 first:ml-2.5 last:mr-0">
                    <a
                        className={`inline-block leading-[50px] hover:no-underline hoverLine ${
                            isActive('/projects') ? 'active' : ''
                        }`}
                        href={`${REPO_PREFIX}/projects`}
                    >
                        WORK <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
                <li className="uppercase tracking-widest mr-7.5 first:ml-2.5 last:mr-0">
                    <a
                        className={`inline-block leading-[50px] hover:no-underline hoverLine`}
                        href={`${REPO_PREFIX}/files/resume.pdf`}
                        target="_blank"
                    >
                        RESUME <span className="block h-0.5 bg-gray-800 line css3Animate"></span>
                    </a>
                </li>
                <li className="uppercase tracking-widest mr-7.5 first:ml-2.5 last:mr-0">
                    <a
                        className={`inline-block leading-[50px] hover:no-underline hoverLine ${
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
