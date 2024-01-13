import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>Burn Journey</h1>
                <h3>Educational App for Kids</h3>
            </div>
            <div>
                iPad app designed to help children learn about bandage changes and the operating room (OR) experience.
                Children can use Burn Journey to explore the places, procedures, people and equipment they encounter
                during their stay in the hospital. They can also use the app to play games that are fun, yet help to
                further familiarize them with the experience of being in the hospital.
            </div>
            <div>
                <a
                    href="https://web.archive.org/web/20160324202636/https://itunes.apple.com/us/app/burn-journey/id631056629?mt=8"
                    target="_blank"
                    rel="noreferrer"
                >
                    Archived App Store Link
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-1.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-2.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-3.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-4.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-5.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-6.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-7.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-8.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-9.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/burn-journey-10.jpg`} width={650} height={500} alt={''} />
            </div>
        </div>
    );
}
