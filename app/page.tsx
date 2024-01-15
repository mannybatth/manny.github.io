import Image from 'next/image';
import { REPO_PREFIX } from './constants';

export default function AboutMeHome() {
    return (
        <div className="flex flex-col px-4 space-y-8 sm:space-x-8 sm:flex-row pb-10">
            <div className="flex-none flex justify-center">
                <div>
                    <Image src={`${REPO_PREFIX}/images/pic.png`} width={145} height={145} alt="Manny" />
                </div>
            </div>
            <div className="flex-1">
                <h1>Manpreet “Manny” Singh</h1>
                <h3>Full Stack Software Engineer</h3>

                <br />
                <p>
                    Self-proclaimed hacker junky. Hackathon enthusiast. Creative engineer with a focus on design. Colts
                    fan. Lover of folk music. Favorite language is Swift. Apple & Tesla fanboy.
                </p>

                <p>
                    I love bringing ideas to life. I have a passion for creating any kind of software, large or small,
                    that helps improve peoples lives. Always hungry to learn about new technology and better ways to do
                    things. In todays world, technology is the center of success and progress. Technology done right can
                    be powerful for an individual/business.
                </p>

                <br />
                <h2>Skills</h2>

                <p>
                    Swift · Objective-C · JavaScript · TypeScript · Python · Java · C# · MERN/MEAN Stack · Node.js ·
                    React.js · Next.js · Angular · Vue.js · Xamarin · React Native · HTML5 · CSS3 · TailwindCSS ·
                    Bootstrap · Git · Xcode · Android Studio · Sketch · OOP · FP · MongoDB · PostgreSQL · AWS · OpenAI ·
                    Google Cloud · Vertex AI · Heroku · Vercel · Firebase · Docker · Linux · Windows · macOS · iOS ·
                    Android
                </p>

                <br />
                <h2>Past Hackathons</h2>

                <ul className="list-disc list-inside sm:list-outside">
                    <li>
                        First place winner of{' '}
                        <a
                            href="https://www.smartfile.com/blog/2013-smartfile-platform-bake-off-the-party-recap/"
                            target="_blank"
                        >
                            2013 SmartFile Platform Bake-Off
                        </a>{' '}
                        for creating <a href={`${REPO_PREFIX}/projects/smartclip`}>SmartClip</a>, a Google Chrome
                        extension that enables you to capture text, links, and images from articles and save them for
                        later reading.
                    </li>
                    <li>
                        First place in{' '}
                        <a
                            href="https://www.marketscreener.com/quote/stock/ANGI-HOMESERVICES-INC-9431478/news/Angie-List-Team-GlassWorks-Cracks-the-Best-Code-at-Angie-s-List-Inaugural-Hack-Day-18549337/"
                            target="_blank"
                        >
                            Angie’s List Hack Day
                        </a>{' '}
                        event. Created the first{' '}
                        <a href={`${REPO_PREFIX}/projects/snapfix`}>Google Glass app for Angie&apos;s List SnapFix</a>.
                    </li>
                    <li>
                        Second place winner in{' '}
                        <a
                            href="https://web.archive.org/web/20140826211010/https://www.topcoder.com/blog/feedthehack-hackathon/"
                            target="_blank"
                        >
                            FeedTheHack hackathon by Appirio
                        </a>{' '}
                        for <a href={`${REPO_PREFIX}/projects/indy-food-trucks`}>IndyFoodTrucks</a>, an iOS app that
                        allowed food truck customers to find their favorite food trucks throughout Indy.
                    </li>
                </ul>
            </div>
        </div>
    );
}
