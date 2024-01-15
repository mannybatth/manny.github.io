import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function Page() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>yikes Guest App</h1>
                <h3>Mobile Key Access Solution</h3>
            </div>
            <div>
                yikes is a mobile key access solution that provides guests seamless, hands-free entry in hotel rooms of
                yikes-enabled properties. I worked on the iOS app for yikes, which allows guests to access their hotel
                room with their mobile device.
            </div>
            <div>
                <a
                    href="https://web.archive.org/web/20190808100210/https://apps.apple.com/us/app/yikes/id537680360"
                    target="_blank"
                    rel="noreferrer"
                >
                    Archived App Store Link
                </a>
                <br></br>
                <a href="https://github.com/mannybatth/GuestApp" target="_blank" rel="noreferrer">
                    Github Source
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-1.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-2.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-3.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-4.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-5.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-6.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/yikes-guest-app-7.jpg`} width={300} height={500} alt={''} />
            </div>
        </div>
    );
}
