import Image from 'next/image';
import { REPO_PREFIX } from '../../constants';

export default function Page() {
    return (
        <div className="block px-4 pb-12 space-y-4">
            <div className="space-y-1">
                <h1>LanSchool</h1>
                <h3>Cloud-based classroom management solution</h3>
            </div>
            <div>
                LanSchool is a classroom management software developed by Lenovo, designed to help teachers monitor and
                control student computer screens in educational settings. Helped create the cloud-based version of the
                software, mainly the teacher portal to monitor and control student devices.
            </div>
            <div>
                <a href="https://lanschool.com/" target="_blank" rel="noreferrer">
                    Company Website
                </a>
            </div>

            <div className="flex justify-center flex-wrap gap-y-9 gap-x-2 pt-4">
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-1.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-2.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-3.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-4.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-5.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-6.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-7.jpg`} width={650} height={500} alt={''} />
                <Image src={`${REPO_PREFIX}/images/projects/lanschool-8.jpg`} width={650} height={500} alt={''} />
            </div>
        </div>
    );
}
