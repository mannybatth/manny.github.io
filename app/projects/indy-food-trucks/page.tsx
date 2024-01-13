import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>IndyFoodTrucks</h1>
                <h3>iOS App</h3>
            </div>
            <div>Fun little app for finding food trucks near your location.</div>
            <div>
                <a href="https://github.com/mannybatth/IndyFoodTruck-iOS" target="_blank" rel="noreferrer">
                    Source Github
                </a>
                <br />
                <a
                    href="https://web.archive.org/web/20140826211010/https://www.topcoder.com/blog/feedthehack-hackathon/"
                    target="_blank"
                >
                    FeedTheHack hackathon by Appirio
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/indy-food-truck-1.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/indy-food-truck-2.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/indy-food-truck-3.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/indy-food-truck-4.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/indy-food-truck-5.jpg`} width={300} height={500} alt={''} />
            </div>
        </div>
    );
}
