import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function YikesGuest() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>CourseNetworking iOS App</h1>
                <h3>LMS + MOOC Social Platform</h3>
            </div>
            <div>
                Course Networking (theCN.com) is an academic social networking site with an innovative LMS and MOOC
                platform that empowers learning throughout the world. I worked on the iOS app for theCN.com, which
                allows users to access the platform on the go.
            </div>
            <div>
                <a href="https://www.thecn.com" target="_blank" rel="noreferrer">
                    Company Web Link
                </a>
                <br></br>
                <a
                    href="https://web.archive.org/web/20151127205459/https://itunes.apple.com/us/app/course-networking/id531484941"
                    target="_blank"
                    rel="noreferrer"
                >
                    Archived App Store Link
                </a>
                <br></br>
                <a href="https://github.com/mannybatth/CNiPhoneApp" target="_blank" rel="noreferrer">
                    iOS App Github Source
                </a>
                <br></br>
                <a href="https://github.com/mannybatth/CNAndroidApp" target="_blank" rel="noreferrer">
                    Android App Github Source
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/cn-1.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/cn-2.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/cn-3.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/cn-4.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/cn-5.jpg`} width={300} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/cn-6.jpg`} width={300} height={500} alt={''} />
            </div>
        </div>
    );
}
