import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>SmartClip</h1>
                <h3>Chrome Extension</h3>
            </div>
            <div>
                The smart way to capture the web. Clip now, read later. With the SmartClip Google Chrome extension, you
                can capture text, links, and images seamlessly to your SmartClip account. Gather anything from the web
                when inspiration hits, whether it&apos;s for business or pleasure. Powered by SmartFile.
            </div>
            <div>
                <a href="https://github.com/stemchan/smartclip" target="_blank" rel="noreferrer">
                    Source Github
                </a>
                <br></br>
                <a href="https://github.com/stemchan/smartclip-extension" target="_blank" rel="noreferrer">
                    Source Extension Github
                </a>
                <br></br>
                <a
                    href="https://www.smartfile.com/blog/2013-smartfile-platform-bake-off-the-party-recap/"
                    target="_blank"
                >
                    2013 SmartFile Platform Bake-Off
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/smartclip-1.png`} width={688} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/smartclip-2.png`} width={688} height={500} alt={''} />
            </div>
        </div>
    );
}
