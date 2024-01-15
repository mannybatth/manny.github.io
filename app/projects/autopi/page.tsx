import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function Page() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>AutoPi</h1>
                <h3>Home Automation System</h3>
            </div>
            <div>
                Django-based app for controlling RaspberryPi home automation system from the web. Allows user to turn
                lights, blinds, and door alarms on and off, immediately or on a schedule, as well as providing a remote
                video stream that can be accessed on the site
            </div>
            <div>
                <a href="https://github.com/mannybatth/AutoPiAndroid" target="_blank" rel="noreferrer">
                    Android App Source Github
                </a>
                <br />
                <a href="https://github.com/stemchan/AutoPi" target="_blank" rel="noreferrer">
                    Backend Source Github
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/auto-pi-1.png`} width={320} height={500} alt={''} />
            </div>
        </div>
    );
}
