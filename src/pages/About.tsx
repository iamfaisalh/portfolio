import { useEffect } from "react";
import SkillRating from "../components/SkillRating";
import PFP from "../assets/FH-PFP.jpg"
import Divider from "../components/Divider";

export default function About() {

    useEffect(() => {
        try {
            document.title = "About | Faisal Hakimi";
            const layout = document.getElementById("layout-content");
            if (layout) layout.scrollTop = 0;
        } catch (error) {

        }
    }, []);

    const goToSection = (section_id: "about-skills" | "about-experience" | "about-education") => {
        document.getElementById(section_id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="w-full max-w-xl mx-auto relative my-6">
            <div className="sticky left-0 top-0 right-0 flex items-center z-20 max-w-xl mx-auto text-xl py-2 bg-brand-dark md:rounded-lg shadow-md">
                <button onClick={() => goToSection("about-skills")} className="flex-1 hover:underline">Skills</button>
                <button onClick={() => goToSection("about-experience")} className="flex-1 hover:underline">Experience</button>
                <button onClick={() => goToSection("about-education")} className="flex-1 hover:underline">Education</button>
            </div>
            <div className="px-6 flex flex-col items-center justify-center gap-4 pt-6">
                <img className=" w-32 h-32 rounded-full bounce-in-top" src={PFP} alt="Faisal Hakimi" />
                <p className="text-sm">
                    I'm a full-stack software engineer based in the San Francisco Bay Area with three years of professional
                    experience as the lead engineer of a high growth B2C SaaS startup and over seven years of
                    programming experience. Why "fizzle.dev"? My nickname is Fizzle, and I develop web and mobile
                    applications. Aside from coding, some things about me are that I like to explore new foods, cook,
                    go to the gym, watch sports, play Call of Duty, work on cars, and I love animals (especially cats).
                </p>
            </div>
            <Divider id={"about-skills"} label={"Skills"} labelSize={"text-lg"} className={"px-6"} />
            <div className="px-6 grid grid-cols-2 gap-4">
                <SkillRating skill={"React"} rating={9} />
                <SkillRating skill={"Node.js"} rating={9} />
                <SkillRating skill={"JavaScript"} rating={9} />
                <SkillRating skill={"TypeScript"} rating={8.5} />
                <SkillRating skill={"Python"} rating={8.5} />
                <SkillRating skill={"Django"} rating={8} />
                <SkillRating skill={"CSS"} rating={8} />
                <SkillRating skill={"Tailwind CSS"} rating={8} />
                <SkillRating skill={"Java"} rating={7} />
                <SkillRating skill={"C/C++"} rating={7} />
                <SkillRating skill={"Swift"} rating={6.5} />
                <SkillRating skill={"Ruby"} rating={5} />
            </div>
            <div className="px-6 pt-6 flex flex-col">
                <p className="font-semibold text-sm mt-2 mb-1">Overall List of Hard and Soft Skills</p>
                <p className="text-sm space-y-1">
                    React, Redux, Python, Django, Node.js, Next.js, TypeScript, JavaScript, MongoDB, Postgres, Tailwind CSS,
                    Git, GitHub, Java, C programming, C++, Swift, Ruby, Amazon Web Services AWS, OpenAI, Google Cloud Platform GCP,
                    Communication, Collaboration, Problem-solving, Adaptability, Time Management, Leadership, Creativity,
                    Client Management, Attention to Detail, Conflict Resolution.
                </p>
            </div>
            <Divider id={"about-experience"} label={"Experience"} labelSize={"text-lg"} className={"px-6"} />
            <div className="px-6 flex flex-col">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Software Engineer, Full Stack</p>
                    <p className="font-semibold text-sm">Puzzl | San Francisco, California</p>
                    <p className="font-semibold text-sm">2021 - 2024</p>
                    <p className="font-semibold text-sm mt-2 mb-1">Relevant Skills</p>
                    <p className="text-sm space-y-1">
                        Python, Django, Node.js, React, Redux, TypeScript, JavaScript, MongoDB, AWS, GCP, Git, GitHub,
                        TailwindCSS, Figma, Open AI Assistants API, Stripe API.
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">Key Responsibilities</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>
                            Developed robust web applications using <span className="text-brand-pink">modern front-end frameworks</span> adhering
                            to <span className="text-brand-pink">UI/UX design principles</span>, increasing user engagement by 30%.
                        </li>
                        <li>
                            Implemented a <span className="text-brand-pink">scalable back-end microservices architecture and REST API</span>,
                            enabling the system to handle a 3x increase in user traffic without any downtime.
                        </li>
                        <li>
                            Authored a comprehensive technical documentation, reducing onboarding time for new developers by 20%.
                        </li>
                        <li>
                            Applied <span className="text-brand-pink">automated testing procedures</span>, reducing the number of bugs by 60% improving
                            overall software reliability, and saving approximately 20 hours per week in testing cycles.
                        </li>
                        <li>
                            Conducted <span className="text-brand-pink">code reviews</span>, resulting in a 40% improvement in code quality metrics and
                            a 25% decrease in post-release defects.
                        </li>
                        <li>
                            <span className="text-brand-pink">Streamlined deployment process</span>, reducing deployment time by 70%, leading to an
                            increase in the frequency of software releases, exceeding stakeholder expectations.
                        </li>
                    </ul>
                </div>
            </div>
            <Divider id={"about-education"} label={"Education"} labelSize={"text-lg"} className={"px-6"} />
            <div className="px-6 flex flex-col">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Bachelor of Science | Computer Science</p>
                    <p className="font-semibold text-sm">San Francisco State University</p>
                    <p className="font-semibold text-sm">2022</p>
                    <p className="font-semibold text-sm mt-2 mb-1">Relevant Courses</p>
                    <p className="text-sm space-y-1">
                        Software Engineering, Artificial Intelligence, Analysis of Algorithms, Operating System Principles, Databases,
                        Multimedia Systems, Internet Application Design and Development, Programming Paradigms and Languages.
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">Key Projects</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>
                            Used <span className="text-brand-pink">Python</span> and <span className="text-brand-pink">MATLAB</span> for a multimedia
                            project to determine motion fields using optic flow and Kalman filtering to detect and track zebrafish.
                        </li>
                        <li>
                            Worked on a Pac-Man game using <span className="text-brand-pink">Python</span> in an <span className="text-brand-pink">Artificial Intelligence</span> course.
                        </li>
                        <li>
                            Built the game "UNO" on a web application with a team of 4 using the <span className="text-brand-pink">PERN stack (PostgreSQL, Express, React and Node.js) </span>
                            and deployed on <span className="text-brand-pink">Heroku</span>.
                        </li>
                        <li>
                            Applied <span className="text-brand-pink">agile methodologies</span> and <span className="text-brand-pink">scrum framework</span> leading a team of 5.
                            Created a web application for NFTs using the <span className="text-brand-pink">MERN stack (MongoDB, Express, React, Node.js)</span> and deployed the app
                            on an <span className="text-brand-pink">AWS EC2</span> instance.
                        </li>
                        <li>
                            Created a file system with a team of 4 using <span className="text-brand-pink">C programming language</span> on a Debian VirtualBox, as well as worked with device drivers.
                        </li>
                        <li>
                            Developed an item listing service similar to craigslist with a fellow student. Used a <span className="text-brand-pink">Spark server</span> with
                            <span className="text-brand-pink"> Java</span> for the back end, <span className="text-brand-pink">MongoDB</span> for the database,
                            and <span className="text-brand-pink">React</span> for the front end.
                        </li>
                        <li>
                            Built a social media platform similar to Instagram with user authentication where users can perform actions such as creating,
                            viewing, and commenting on a post. Used <span className="text-brand-pink">Node.js / Express</span> with <span className="text-brand-pink">Handlebars</span> as
                            the templating view engine, and <span className="text-brand-pink">MySQL</span> for the database.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}