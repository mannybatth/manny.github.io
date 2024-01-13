import Image from 'next/image';
import { REPO_PREFIX } from '../constants';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className="block pb-12 px-4">
            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2">
                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/lanschool">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/lanschool-thumb.jpg`}
                                width={200}
                                height={200}
                                alt="LanSchool"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">LanSchool</div>
                        <div className="text-sm">
                            Classroom Management <br />
                            Solution
                        </div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/airstack">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/airstack-thumb.jpg`}
                                width={200}
                                height={200}
                                alt="Airstack"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">Airstack</div>
                        <div className="text-sm">Tech Stack Management</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/yikes-guest">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/yikes-guest-app-thumb.png`}
                                width={200}
                                height={200}
                                alt="yikes Guest App"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">yikes Guest App</div>
                        <div className="text-sm">Mobile Key Access Solution</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/yikes-staff">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/yikes-staff-app-thumb.png`}
                                width={200}
                                height={200}
                                alt="yikes Staff App"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">yikes Staff App</div>
                        <div className="text-sm">Management App for yikes</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/coursenetworking">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/cn-thumb.png`}
                                width={200}
                                height={200}
                                alt="CourseNetworking iOS"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">CourseNetworking iOS</div>
                        <div className="text-sm">LMS + MOOC Social Platform</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/snapfix">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/snapfix-thumb.png`}
                                width={200}
                                height={200}
                                alt="Google Glass SnapFix"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">Google Glass SnapFix</div>
                        <div className="text-sm">App for Google Glass</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/burn-journey">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/burn-journey-thumb.png`}
                                width={200}
                                height={200}
                                alt="Burn Journey"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">Burn Journey</div>
                        <div className="text-sm">Educational App for Kids</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/panda-toss">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/panda-toss-thumb.png`}
                                width={200}
                                height={200}
                                alt="PandaToss"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">PandaToss</div>
                        <div className="text-sm">iOS Game</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/indy-food-trucks">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/indy-food-truck-thumb.png`}
                                width={200}
                                height={200}
                                alt="IndyFoodTrucks"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">IndyFoodTrucks</div>
                        <div className="text-sm">iOS App</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/smartclip">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/smartclip-thumb.jpg`}
                                width={200}
                                height={200}
                                alt="SmartClip"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">SmartClip</div>
                        <div className="text-sm">Chrome Extension</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Link href="projects/autopi">
                            <Image
                                src={`${REPO_PREFIX}/images/projects/project-default-thumb.png`}
                                width={200}
                                height={200}
                                alt="AutoPi"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-lg">AutoPi</div>
                        <div className="text-sm">Home Automation System</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
