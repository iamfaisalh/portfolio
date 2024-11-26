import SkillRating from "../components/SkillRating";
import PFP from "../assets/FH-PFP.jpg";
import Divider from "../components/Divider";
import Button from "../components/Button";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "../components/Icon";
import { Tooltip } from "react-tooltip";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function About() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const fileName = "Faisal_Hakimi_SoftwareEngineer_Resume.pdf";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
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

  return (
    <div
      ref={ref}
      id="about-page"
      className={classNames(
        "w-full max-w-xl mx-auto relative my-6 transition-transform duration-700 ease-out",
        {
          "translate-y-0 opacity-100 pt-14": isVisible,
          "translate-y-10 opacity-0 ": !isVisible,
        }
      )}
    >
      <div className="px-6 flex flex-col items-center justify-center gap-4 pt-6">
        <img
          className={classNames("w-32 h-32 rounded-full", {
            "bounce-in-top": isVisible,
          })}
          src={PFP}
          alt="Faisal Hakimi"
        />
        <div className="flex items-center justify-center gap-6 max-w-xl m-auto h-full">
          <a
            data-tooltip-id="tooltip-linkedin"
            data-tooltip-content="LinkedIn"
            href="https://www.linkedin.com/in/faisal-hakimi"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              className={classNames("fill-white", {
                "slide-in-left": isVisible,
              })}
            />
          </a>
          <a
            data-tooltip-id="tooltip-github"
            data-tooltip-content="GitHub"
            href="https://github.com/iamfaisalh"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              className={classNames("fill-white", {
                "slide-in-top": isVisible,
              })}
            />
          </a>
          <a
            data-tooltip-id="tooltip-email"
            data-tooltip-content="Email"
            href="mailto:faisalhakimi101@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <GmailIcon
              className={classNames("fill-white", {
                "slide-in-right": isVisible,
              })}
            />
          </a>
        </div>
        <Tooltip id="tooltip-linkedin" />
        <Tooltip id="tooltip-github" />
        <Tooltip id="tooltip-email" />
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
          Aside from coding, I like to explore nature, take pictures, try new
          foods, lift weights, watch sports, play Call of Duty, work on cars,
          and I love animals (especially cats).
        </p>
        <Button variant="Secondary" onClick={downloadFile}>
          Download Resume
        </Button>
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
        <SkillRating isVisible={isVisible} skill={"TypeScript"} rating={9.5} />
        <SkillRating isVisible={isVisible} skill={"JavaScript"} rating={9.5} />
        <SkillRating isVisible={isVisible} skill={"React"} rating={9.5} />
        <SkillRating isVisible={isVisible} skill={"Next.js"} rating={9} />
        <SkillRating isVisible={isVisible} skill={"Node.js"} rating={9} />
        <SkillRating isVisible={isVisible} skill={"Express.js"} rating={9} />
        <SkillRating isVisible={isVisible} skill={"Python"} rating={8.5} />
        <SkillRating isVisible={isVisible} skill={"Tailwind CSS"} rating={8} />
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
        <p className="font-semibold text-sm mt-2 mb-1">Frameworks/Libraries</p>
        <p className="text-sm space-y-1">
          React, Redux, Next.js, Express.js, Django, Flask, Tailwind CSS,
          Bootstrap, Material UI, Cypress, Jest
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">Databases</p>
        <p className="text-sm space-y-1">
          PostgreSQL (Postgres), Supabase, MySQL, MongoDB, Firebase, Firestore
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">Tools/Platforms</p>
        <p className="text-sm space-y-1">
          Amazon Web Services (AWS), Google Cloud Platform (GCP), Nginx, Git,
          GitHub, Docker, Kubernetes, VS Code, Xcode, PyCharm, IntelliJ, Figma,
          WebSocket, Vercel, LLM (OpenAI)
        </p>
      </div>
      <div className="px-6 flex flex-col">
        <p className="font-semibold text-sm mt-2 mb-1">Methodologies</p>
        <p className="text-sm space-y-1">
          Agile, Scrum, Test-Driven Development (TDD), Single Page Application
          (SPA)
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
          <p className="text-lg font-bold">Freelance Software Engineer </p>
          <p className="font-semibold text-sm">
            Self-employed | San Francisco, California
          </p>
          <p className="font-semibold text-sm">Feb 2024 - Present</p>
          <ul className="text-sm list-disc pl-4 space-y-1 mt-2">
            <li>
              Developed software for a local nonprofit organization to
              streamline financial workflows, including payment handling for
              memberships and donations, reducing manual effort and improving
              efficiency.
            </li>
            <li>
              Built and deployed multiple personal projects to enhance expertise
              in modern web technologies, such as Next.js, Python, and Flask.
            </li>
            <li>
              Improved prompt engineering skills with the OpenAI API, optimizing
              models for accurate and context-aware responses.
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 flex flex-col mt-4">
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
              Tailored a healthcare compliance chatbot with OpenAI Assistants
              API, reducing user questions to the cofounders by 40% and easing
              their workload. (Node.js, Express.js, TypeScript).
            </li>
            <li>
              Implemented automated unit testing and end-to-end testing with
              Jest (backend) and Cypress (frontend), significantly reducing bugs
              and saving 15-20 hours per week in testing cycles.
            </li>
            <li>
              Integrated Stripe Connect, boosting transaction efficiency and
              driving increased revenue. (B2B and B2C SaaS).
            </li>
            <li>
              Generated custom invoices with Adobe PDF Services Node SDK and
              integrated QuickBooks, enabling businesses to efficiently track
              payments and invoicing.
            </li>
            <li>
              Developed a responsive project portal and messaging system,
              streamlining workflow management for businesses. Imagine a
              combination of Linear and Slack. (React, TypeScript, Tailwind
              CSS).
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
              Played a key role in the startup's successful acquisition by
              designing a marketing automation feature for users to authenticate
              across Facebook, Instagram, and Twitter to schedule posts, scaling
              platform capabilities.
            </li>
            <li>
              Constructed a REST API and integrated Bannerbear API for social
              media visuals generation, significantly increasing user engagement
              on the platform. (Node.js, Express.js, TypeScript).
            </li>
            <li>
              Collaborated with UI/UX designers to convert Figma wireframes into{" "}
              React code, cutting design and development time by 20%.
            </li>
            <li>
              Formulated complex database schemas, optimizing query performance
              and ensuring scalability. (MongoDB).
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
              Used Python and MATLAB for a multimedia project to determine
              motion fields using optic flow and Kalman filtering to detect and
              track zebrafish.
            </li>
            <li>
              Worked on a Pac-Man game using Python in an Artificial
              Intelligence course.
            </li>
            <li>
              Built the game "UNO" on a web application with a team of 4 using
              the PERN stack (PostgreSQL, Express, React and Node.js) and
              deployed on Heroku.
            </li>
            <li>
              Applied agile methodologies and scrum framework leading a team of
              5. Created a web application for NFTs using the MERN stack
              (MongoDB, Express, React, Node.js) and deployed the app on an AWS
              EC2 instance.
            </li>
            <li>
              Created a file system with a team of 4 using C programming
              language on a Debian VirtualBox, as well as worked with device
              drivers.
            </li>
            <li>
              Developed an item listing service similar to craigslist with a
              fellow student. Used a Spark server with Java for the back end,{" "}
              MongoDB for the database, and React for the front end.
            </li>
            <li>
              Built a social media platform similar to Instagram with user
              authentication where users can perform actions such as creating,
              viewing, and commenting on a post. Used Node.js / Express with{" "}
              Handlebars as the templating view engine, and MySQL for the
              database.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
