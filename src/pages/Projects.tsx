import { useEffect } from "react";
import PRJ_Uno from "../assets/FH-PRJ-Uno.png";
import PRJ_Fizzles_World from "../assets/FH-PRJ-Fizzles-World.png";
import PRJ_Shop from "../assets/FH-PRJ-Shop.png";
import PRJ_Portfolio from "../assets/FH-PRJ-Portfolio.png";
import PRJ_Picture_Detector from "../assets/FH-PRJ-PictureDetector.png";
import PRJ_Concentration from "../assets/FH-PRJ-Concentration.png";
import PRJ_EstimateBuilder from "../assets/FH-PRJ-EstimateBuilder.png";

interface ProjectProps {
  key: string;
  is_coming_soon: boolean;
  src: string;
  title: string;
  description: string;
  skills: string;
  github_url?: string;
  live_url?: string;
}

function Project({ project }: { project: ProjectProps }) {
  const cn =
    "max-w-sm rounded-lg shadow-xl bg-brand-gray relative overflow-hidden border-brand-pink border-[1px] border-opacity-35 fade-in";

  return (
    <div className={cn}>
      {project.is_coming_soon ? (
        <div className="absolute left-0 top-0 h-16 w-16">
          <div className="absolute left-[-36px] top-[32px] w-[170px] transform -rotate-45 bg-brand-pink text-center font-semibold py-1">
            Coming Soon
          </div>
        </div>
      ) : null}
      {project.live_url ? (
        <a href={project.live_url} rel="noreferrer" target="_blank">
          <img
            className="rounded-t-lg w-full h-56 object-cover"
            src={project.src}
            alt="Project Preview"
          />
        </a>
      ) : (
        <img
          className="rounded-t-lg w-full h-56 object-cover"
          src={project.src}
          alt="Project Preview"
        />
      )}
      <div className="p-5">
        {project.live_url ? (
          <a href={project.live_url} rel="noreferrer" target="_blank">
            <h5 className="mb-2 text-xl font-bold tracking-tight">
              {project.title}
            </h5>
          </a>
        ) : (
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {project.title}
          </h5>
        )}
        <p className="mb-3 font-normal text-gray-400">{project.description}</p>
        <p className="mb-3 text-sm">{project.skills}</p>
        <div className="flex items-center">
          {project.github_url ? (
            <a
              href={project.github_url}
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-brand-pink rounded-lg hover:bg-opacity-90 hover:bg-brand-pink focus:ring-4 focus:outline-none focus:ring-brand-pink"
            >
              View Code
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          ) : null}
          {project.live_url ? (
            <a
              href={project.live_url}
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center border-b-2 border-transparent hover:border-b-white text-sm font-medium text-center ml-auto"
            >
              Live Demo
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const PROJECTS: Array<ProjectProps> = [
  {
    key: "project-estimate-builder",
    is_coming_soon: false,
    src: PRJ_EstimateBuilder,
    title: "Estimate Builder",
    description:
      "Full stack application for paving contractors to create estimates for their customers.",
    skills: "React, TypeScript, Bootstrap, Node/Express.js, MongoDB, Jest",
    github_url: "https://github.com/iamfaisalh/estimate-builder",
    live_url: "",
  },
  {
    key: "project-uno",
    is_coming_soon: false,
    src: PRJ_Uno,
    title: "UNO",
    description:
      "Web application for the card game, UNO. Some features include accounts, game lobbies, game chat, and leaderboards. TODO: Mobile responsive.",
    skills: "Node/Express.js, PostgreSQL, AWS S3",
    github_url: "https://github.com/iamfaisalh/term-project-uno-forked",
    live_url: "https://uno.fizzle.dev/",
  },
  {
    key: "project-portfolio",
    is_coming_soon: false,
    src: PRJ_Portfolio,
    title: "My Portfolio",
    description:
      "This current web application which I built to showcase my skills, experience, education, and projects.",
    skills: "React, TypeScript, Tailwind CSS",
    github_url: "https://github.com/iamfaisalh/portfolio",
    live_url: "",
  },
  {
    key: "project-fizzles-world",
    is_coming_soon: true,
    src: PRJ_Fizzles_World,
    title: "Fizzle's World",
    description:
      "Web application for an immersive 3D experience in a world of endless adventure. A peaceful world to enjoy where nothing else matters.",
    skills: "React, Three.js, React Three Fiber",
    github_url: "",
    live_url: "",
  },
  {
    key: "project-shop",
    is_coming_soon: true,
    src: PRJ_Shop,
    title: "Shop",
    description:
      "Web application for E-Commerce. Vendors can list products for sale. Customers can add items to their cart and complete a checkout session.",
    skills: "Python, Django, MongoDB, Stripe API",
    github_url: "",
    live_url: "",
  },
  {
    key: "project-picture-detector",
    is_coming_soon: false,
    src: PRJ_Picture_Detector,
    title: "Picture Detector",
    description:
      "iOS application where you can upload a picture and it will detect what is likely in the picture using machine learning and neural networks.",
    skills: "Swift, Apple Core ML, ResNet-50",
    github_url: "https://github.com/iamfaisalh/picture-detector",
    live_url: "",
  },
  {
    key: "project-concentration",
    is_coming_soon: false,
    src: PRJ_Concentration,
    title: "Concentration",
    description:
      "iOS application for the card game, Concentration, also known as the matching game.",
    skills: "Swift",
    github_url: "https://github.com/iamfaisalh/concentration",
    live_url: "",
  },
];

export default function Projects() {
  useEffect(() => {
    try {
      document.title = "Projects | Faisal Hakimi";
      const layout = document.getElementById("layout-content");
      if (layout) layout.scrollTop = 0;
    } catch (error) {}
  }, []);

  return (
    <div
      style={{ minHeight: "calc(100vh - 90px)" }}
      className="px-6 py-6 flex flex-wrap items-start justify-evenly gap-8"
    >
      {PROJECTS.map((p, i) => (
        <Project key={p.key} project={p} />
      ))}
    </div>
  );
}
