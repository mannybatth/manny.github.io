import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function Page() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>Airstack</h1>
                <h3>Tech Stack Management</h3>
            </div>
            <div>
                Airstack makes it easy for teams to organize and share digital tools across the business, so everyone
                can get visibility into what apps you have and how to use them. I worked on the frontend team, mainly
                focusing on the frontend of the web app and the chrome browser extension. The chrome browser extension
                was used as a password manager and to help users easily add apps to their Airstack account.
            </div>
            <div>
                <a
                    href="https://web.archive.org/web/20210818035750/https://airstack.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Archived Product Website
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/airstack-1.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-2.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-3.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-4.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-5.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-6.png`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-7.png`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-8.png`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-9.png`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-10.png`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/airstack-11.png`} width={650} height={500} alt={''} />
            </div>
        </div>
    );
}
