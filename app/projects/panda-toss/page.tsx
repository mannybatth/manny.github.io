import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>PandaToss</h1>
                <h3>iOS Game</h3>
            </div>
            <div>iOS game similar to Toss The Turtle with a panda twist</div>
            <div>
                <a href="https://github.com/mannybatth/PandaToss" target="_blank" rel="noreferrer">
                    Source Github
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/panda-toss-1.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/panda-toss-2.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/panda-toss-3.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/panda-toss-4.jpg`} width={650} height={500} alt={''} />
            </div>
        </div>
    );
}
