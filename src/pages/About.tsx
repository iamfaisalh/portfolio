import { useEffect } from "react";
import SkillRating from "../components/SkillRating";
import PFP from "../assets/FH-PFP.jpg";
import Divider from "../components/Divider";
import Button from "../components/Button";

export default function About() {
  const fileName = "Faisal_Hakimi_SoftwareEngineer_Resume.pdf";

  useEffect(() => {
    try {
      document.title = "About | Faisal Hakimi";
      const layout = document.getElementById("layout-content");
      if (layout) layout.scrollTop = 0;
    } catch (error) {}
  }, []);

  const downloadFile = () => {
    const fileURL = `${process.env.PUBLIC_URL}/${fileName}`;
    const link = document.createElement("a");

    link.href = fileURL;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();

    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  };

  const goToSection = (
    section_id: "about-skills" | "about-experience" | "about-education"
  ) => {
    document.getElementById(section_id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-xl mx-auto relative my-6">
      <div className="sticky left-0 top-0 right-0 flex items-center z-20 max-w-xl mx-auto text-xl py-2 bg-brand-dark md:rounded-lg shadow-md">
        <button
          onClick={() => goToSection("about-skills")}
          className="flex-1 hover:underline"
        >
          Skills
        </button>
        <button
          onClick={() => goToSection("about-experience")}
          className="flex-1 hover:underline"
        >
          Experience
        </button>
        <button
          onClick={() => goToSection("about-education")}
          className="flex-1 hover:underline"
        >
          Education
        </button>
      </div>
      <div className="px-6 flex flex-col items-center justify-center gap-4 pt-6">
        <img
          className=" w-32 h-32 rounded-full bounce-in-top"
          src={PFP}
          alt="Faisal Hakimi"
        />
        <p className="text-sm">
          I'm a full-stack software engineer based in the San Francisco Bay Area
          with 3 years of professional experience and over 7 years of coding
          experience.
          <br></br>
          <br></br>
          Why "fizzle.dev"? My nickname is Fizzle, and I've developed robust,
          scalable applications and APIs, leading to a successful startup
          acquisition.
          <br></br>
          <br></br>
          Aside from coding, I like to explore nature, try new foods, go to the
          gym, watch sports, play Call of Duty, work on cars, and I love animals
          (especially cats).
        </p>
        <Button variant="Secondary" onClick={downloadFile}>Download Resume</Button>
      </div>
      <Divider
        id={"about-skills"}
        label={"Skills"}
        labelSize={"text-lg"}
        className={"px-6"}
      />
      <div className="px-6 pb-3 flex flex-col">
        <p className="text-lg font-bold">Featured Skills</p>
      </div>
      <div className="px-6 grid grid-cols-2 gap-4">
        <SkillRating skill={"TypeScript"} rating={9.5} />
        <SkillRating skill={"JavaScript"} rating={9.5} />
        <SkillRating skill={"React"} rating={9.5} />
        <SkillRating skill={"Next.js"} rating={9} />
        <SkillRating skill={"Node.js"} rating={9} />
        <SkillRating skill={"Express.js"} rating={9} />
        <SkillRating skill={"Python"} rating={8.5} />
        <SkillRating skill={"Tailwind CSS"} rating={8} />
      </div>
      <div className="px-6  pt-6 flex flex-col">
        <p className="text-lg font-bold">All Skills</p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1 ">Programming</p>
        <p className="text-sm space-y-1">
          TypeScript, JavaScript, Node.js, HTML (HTML5), CSS, Sass SCSS, Python,
          SQL, Java, C programming, C++, Swift, Ruby
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">
          Frameworks / Libraries
        </p>
        <p className="text-sm space-y-1">
          React, Redux, Next.js, Express.js, Django, Flask, Tailwind CSS,
          Bootstrap, Material UI, Cypress, Jest
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">Database</p>
        <p className="text-sm space-y-1">
          MongoDB, PostgreSQL (Postgres), MySQL, Firebase, Firestore
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">Other Tools</p>
        <p className="text-sm space-y-1">
          Amazon Web Services (AWS), Google Cloud Platform (GCP), Nginx, Git,
          GitHub, Docker, Kubernetes, VS Code, Xcode, PyCharm, IntelliJ, Figma,
          WebSocket, Vercel, LLMs (OpenAI)
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">Soft Skills</p>
        <p className="text-sm space-y-1">
          Communication, Collaboration, Problem-solving, Adaptability, Time
          Management, Leadership, Creativity, Client Management, Attention to
          Detail, Conflict Resolution
        </p>
      </div>
      <Divider
        id={"about-experience"}
        label={"Experience"}
        labelSize={"text-lg"}
        className={"px-6"}
      />
      <div className="px-6 flex flex-col">
        <div className="flex flex-col">
          <p className="text-lg font-bold">Lead Full Stack Software Engineer</p>
          <p className="font-semibold text-sm">
            Dart Health (Puzzl Inc) | San Francisco, California
          </p>
          <p className="font-semibold text-sm">Sep 2021 - Feb 2024</p>
          <p className="text-sm space-y-1">
            {"Startup: CRM --> Fintech --> Healthcare Compliance"}
          </p>
          <p className="font-semibold text-sm mt-2 mb-1">
            Key Responsibilities
          </p>
          <ul className="text-sm list-disc pl-4 space-y-1">
            <li>
              Tailored a healthcare compliance chatbot with{" "}
              <span className="text-brand-pink">OpenAI Assistants API</span>,
              reducing user questions to the cofounders by 40% and easing their
              workload.{" "}
              <span className="text-brand-pink">
                (Node.js, Express.js, TypeScript)
              </span>
              .
            </li>
            <li>
              Implemented automated unit testing and end-to-end testing with
              <span className="text-brand-pink"> Jest</span> (backend) and
              <span className="text-brand-pink"> Cypress</span> (frontend),
              significantly reducing bugs and saving 15-20 hours per week in
              testing cycles.
            </li>
            <li>
              Integrated <span className="text-brand-pink">Stripe Connect</span>
              , boosting transaction efficiency and driving increased revenue.{" "}
              <span className="text-brand-pink">(B2B and B2C SaaS)</span>.
            </li>
            <li>
              Generated custom invoices with{" "}
              <span className="text-brand-pink">
                Adobe PDF Services Node SDK
              </span>{" "}
              and integrated QuickBooks, enabling businesses to efficiently
              track payments and invoicing.
            </li>
            <li>
              Developed a responsive project portal and messaging system,
              streamlining workflow management for businesses. Imagine a
              combination of Linear and Slack.{" "}
              <span className="text-brand-pink">
                (React, TypeScript, Tailwind CSS)
              </span>
              .
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 flex flex-col mt-4">
        <div className="flex flex-col">
          <p className="text-lg font-bold">Software Developer Intern</p>
          <p className="font-semibold text-sm">
            MarketFly (Acquired) | San Francisco, California (Remote)
          </p>
          <p className="font-semibold text-sm">Jan 2021 - Sep 2021</p>
          <p className="text-sm space-y-1">SaaS Startup</p>
          <p className="font-semibold text-sm mt-2 mb-1">
            Key Responsibilities
          </p>
          <ul className="text-sm list-disc pl-4 space-y-1">
            <li>
              Played a key role in the startup's{" "}
              <span className="text-brand-pink">successful acquisition</span> by
              designing a marketing automation feature for users to authenticate
              across Facebook, Instagram, and Twitter to schedule posts, scaling
              platform capabilities.
            </li>
            <li>
              Constructed a <span className="text-brand-pink">REST API</span>{" "}
              and integrated{" "}
              <span className="text-brand-pink">Bannerbear API</span> for social
              media visuals generation, significantly increasing user engagement
              on the platform.{" "}
              <span className="text-brand-pink">
                (Node.js, Express.js, TypeScript)
              </span>
              .
            </li>
            <li>
              Collaborated with{" "}
              <span className="text-brand-pink">UI/UX designers</span> to
              convert <span className="text-brand-pink">Figma</span> wireframes
              into <span className="text-brand-pink">React</span> code, cutting
              design and development time by 20%.
            </li>
            <li>
              Formulated complex database schemas, optimizing query performance
              and ensuring scalability.{" "}
              <span className="text-brand-pink">(MongoDB)</span>.
            </li>
          </ul>
        </div>
      </div>
      <Divider
        id={"about-education"}
        label={"Education"}
        labelSize={"text-lg"}
        className={"px-6"}
      />
      <div className="px-6 flex flex-col">
        <div className="flex flex-col">
          <p className="text-lg font-bold">
            Bachelor of Science | Computer Science
          </p>
          <p className="font-semibold text-sm">
            San Francisco State University
          </p>
          <p className="font-semibold text-sm">Graduated 2022</p>
          <p className="font-semibold text-sm mt-2 mb-1">Relevant Courses</p>
          <p className="text-sm space-y-1">
            Software Engineering, Artificial Intelligence, Analysis of
            Algorithms, Operating System Principles, Databases, Multimedia
            Systems, Internet Application Design and Development,
            Object-oriented Programming (OOP), Data Structures and Algorithms,
            Programming Paradigms and Languages, Design Patterns.
          </p>
          <p className="font-semibold text-sm mt-2 mb-1">Key Projects</p>
          <ul className="text-sm list-disc pl-4 space-y-1">
            <li>
              Used <span className="text-brand-pink">Python</span> and{" "}
              <span className="text-brand-pink">MATLAB</span> for a multimedia
              project to determine motion fields using optic flow and Kalman
              filtering to detect and track zebrafish.
            </li>
            <li>
              Worked on a Pac-Man game using{" "}
              <span className="text-brand-pink">Python</span> in an{" "}
              <span className="text-brand-pink">Artificial Intelligence</span>{" "}
              course.
            </li>
            <li>
              Built the game "UNO" on a web application with a team of 4 using
              the{" "}
              <span className="text-brand-pink">
                PERN stack (PostgreSQL, Express, React and Node.js){" "}
              </span>
              and deployed on <span className="text-brand-pink">Heroku</span>.
            </li>
            <li>
              Applied{" "}
              <span className="text-brand-pink">agile methodologies</span> and{" "}
              <span className="text-brand-pink">scrum framework</span> leading a
              team of 5. Created a web application for NFTs using the{" "}
              <span className="text-brand-pink">
                MERN stack (MongoDB, Express, React, Node.js)
              </span>{" "}
              and deployed the app on an{" "}
              <span className="text-brand-pink">AWS EC2</span> instance.
            </li>
            <li>
              Created a file system with a team of 4 using{" "}
              <span className="text-brand-pink">C programming language</span> on
              a Debian VirtualBox, as well as worked with device drivers.
            </li>
            <li>
              Developed an item listing service similar to craigslist with a
              fellow student. Used a{" "}
              <span className="text-brand-pink">Spark server</span> with
              <span className="text-brand-pink"> Java</span> for the back end,{" "}
              <span className="text-brand-pink">MongoDB</span> for the database,
              and <span className="text-brand-pink">React</span> for the front
              end.
            </li>
            <li>
              Built a social media platform similar to Instagram with user
              authentication where users can perform actions such as creating,
              viewing, and commenting on a post. Used{" "}
              <span className="text-brand-pink">Node.js / Express</span> with{" "}
              <span className="text-brand-pink">Handlebars</span> as the
              templating view engine, and{" "}
              <span className="text-brand-pink">MySQL</span> for the database.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
