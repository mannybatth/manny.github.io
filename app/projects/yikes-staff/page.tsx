import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>yikes Staff App</h1>
                <h3>Management App for yikes</h3>
            </div>
            <div>
                App created for hotel staff to use as a tool for maintaining y!kes hardware. Features include hardware
                installations, OTA firmware updates, updates to RFID key data, unlock reporting, battery reporting,
                staff mobile key access.
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-1.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-2.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-3.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-4.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-5.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-6.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-7.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-8.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-staff-app-9.jpg`} width={300} height={500} alt={''} />
                <Image
                    src={`${REPO_PREFIX}/images/projects/yikes-staff-app-10.jpg`}
                    width={300}
                    height={500}
                    alt={''}
                />
                <Image
                    src={`${REPO_PREFIX}/images/projects/yikes-staff-app-11.jpg`}
                    width={300}
                    height={500}
                    alt={''}
                />
            </div>
        </div>
    );
}
