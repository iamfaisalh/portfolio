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
                    I'm a software engineer based in the San Francisco Bay Area with three years of professional
                    experience as the lead engineer of a SaaS startup and over seven years of programming experience.
                    Why "fizzle.dev"? My nickname is Fizzle, and I develop web and mobile applications.
                    Aside from coding, some things about me are that I like to explore new foods, cook,
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
            <Divider id={"about-experience"} label={"Experience"} labelSize={"text-lg"} className={"px-6"} />
            <div className="px-6 flex flex-col">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Software Engineer, Full Stack</p>
                    <p className="font-semibold text-sm">Puzzl</p>
                    <p className="font-semibold text-sm">2021 - 2024</p>
                    <p className="font-semibold text-sm mt-2 mb-1">Relevant Skills</p>
                    <p className="text-sm space-y-1">
                        Python, Django, Node.js, React, JavaScript, TypeScript, MongoDB, AWS, Figma, GitHub, Tailwind CSS.
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">Key Responsibilities</p>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>
                            Built a <span className="text-brand-pink">B2C SaaS</span> payment system for invoicing using the <span className="text-brand-pink">Stripe API</span>.
                        </li>
                        <li>
                            Employed <span className="text-brand-pink">agile methodologies</span> to manage project scope, prioritize tasks, and allocate resources efficiently,
                            resulting in on-time delivery and <span className="text-brand-pink">exceeding stakeholder expectations</span>.
                        </li>
                        <li>
                            <span className="text-brand-pink">Optimized algorithms</span> for faster processing, reducing overall computation time.
                        </li>
                        <li>
                            Established efficient communication channels within the team, leading to better <span className="text-brand-pink">collaboration</span> among
                            members during project development phases.
                        </li>
                        <li>
                            Conducted <span className="text-brand-pink">thorough code reviews</span> to identify potential areas for improvement, ultimately enhancing
                            code quality across all projects handled by the team.
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