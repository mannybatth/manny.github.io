import Image from 'next/image';
import { REPO_PREFIX } from '../constants';

export default function Contact() {
    return (
        <div className="flex flex-col text-center pt-16 px-4">
            <h1>Get in contact with me</h1>
            <div className="flex flex-col items-center justify-center space-y-4 m-8 mb-12">
                <div>317-224-5337</div>
                <div>
                    <a href="mailto:likebeats@gmail.com">likebeats@gmail.com</a>
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/likebeats" target="_blank">
                    <Image src={`${REPO_PREFIX}/images/linkedin-icon.png`} alt="LinkedIn" width={40} height={40} />
                </a>
                <a href="https://github.com/mannybatth" target="_blank">
                    <Image src={`${REPO_PREFIX}/images/github-icon.png`} alt="Github" width={40} height={40} />
                </a>
                <a href="https://wellfound.com/u/likebeats" target="_blank">
                    <Image src={`${REPO_PREFIX}/images/angel-list-icon.png`} alt="wellfound" width={40} height={40} />
                </a>
            </div>
        </div>
    );
}
