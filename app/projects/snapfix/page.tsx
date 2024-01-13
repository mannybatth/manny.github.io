import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>Google Glass SnapFix</h1>
                <h3>App for Google Glass</h3>
            </div>
            <div>
                Mash-up that combines the best of Google Glass and the Angie&apos;s List SnapFix app. Using this app,
                Google Glass customers can submit a service request to SnapFix by a snap of a photo. The google glass
                app automatically sends the photo and the customer&apos;s contact information to SnapFix. SnapFix will
                then contact the customer and schedule an appointment.
            </div>
            <div>
                <a
                    href="https://web.archive.org/web/20140826211010/https://www.topcoder.com/blog/feedthehack-hackathon/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Angies List Hackathon Link
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-1.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-2.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-3.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-4.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-5.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-6.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-7.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-8.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-9.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-10.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-11.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-12.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-13.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-14.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-15.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-16.jpg`} width={330} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/snapfix-17.jpg`} width={330} height={500} alt={''} />
            </div>
        </div>
    );
}
