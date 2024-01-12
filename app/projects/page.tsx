import Image from 'next/image';
import { REPO_PREFIX } from '../constants';

export default function Projects() {
    return (
        <div className="block pb-12">
            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2">
                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/yikes-guest-app-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">yikes Guest App</div>
                        <div className="text-sm">Mobile Key Access Solution</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/yikes-staff-app-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Staff App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">yikes Staff App</div>
                        <div className="text-sm">Management App for yikes</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/cn-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">CourseNetworking iOS</div>
                        <div className="text-sm">LMS + MOOC Social Platform</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/snapfix-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">Google Glass SnapFix</div>
                        <div className="text-sm">App for Google Glass</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/burn-journey-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">Burn Journey</div>
                        <div className="text-sm">Educational App for Kids</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/panda-toss-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">PandaToss</div>
                        <div className="text-sm">iOS Game</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/indy-food-truck-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">IndyFoodTrucks</div>
                        <div className="text-sm">iOS App</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/project-default-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">AutoPi</div>
                        <div className="text-sm">Home Automation System</div>
                    </div>
                </div>

                <div className="space-y-1 flex flex-col">
                    <div>
                        <Image
                            src={`${REPO_PREFIX}/images/projects/project-default-thumb.png`}
                            width={200}
                            height={200}
                            alt="yikes Guest App"
                        />
                    </div>
                    <div>
                        <div className="text-lg">SmartClip</div>
                        <div className="text-sm">Chrome Extension</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
