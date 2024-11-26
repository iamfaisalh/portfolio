import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { FizzleLogoTransparent } from "../components/Icon";
import gsap from "gsap";

export default function Home() {
  const [h2Appear, setH2Appear] = useState<boolean>(false);
  const [btnAppear, setBtnAppear] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const heading = document.getElementById("home-heading-1");
        if (heading) {
          heading.style.border = "0px";
        }
        setH2Appear(true);
      } catch (error) {}
    }, 2000);
    setTimeout(() => {
      setBtnAppear(true);
    }, 4000);
  }, []);

  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotationY: 360,
        rotationX: 360,
        duration: 10, // Duration of one complete rotation cycle
        ease: "linear",
        repeat: -1, // Loop the animation forever
      });
    }
  }, []);

  return (
    <div
      style={{ minHeight: "100px" }}
      className="w-full h-full flex flex-col justify-center items-center tracking-wider text-base md:text-3xl text-center relative"
    >
      <div
        ref={logoRef}
        className="absolute -z-0 opacity-70"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1000px",
        }}
      >
        <FizzleLogoTransparent
          width={"100%"}
          height={"100%"}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        />
      </div>
      <span id="home-heading-1" className="typing-header typing-header-1">
        Hello, my name is{" "}
        <span className="bg-[length:200%_auto] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.brand.pink),theme(colors.brand.lavender),theme(colors.brand.pink),theme(colors.brand.purple),theme(colors.brand.pink),theme(colors.brand.lavender),theme(colors.brand.pink))] animate-gradient">
          Faisal Hakimi
        </span>
        .
      </span>
      {h2Appear ? (
        <span className="typing-header typing-header-2">
          I'm a full stack software engineer.
        </span>
      ) : null}
      {btnAppear ? (
        <Button
          variant={"Secondary"}
          className={"w-fit max-w-fit inline-flex items-center my-4 fade-in"}
          onClick={() => {
            const aboutPage = document.getElementById("about-page");
            if (aboutPage) aboutPage.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Who is Faisal Hakimi?
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 rotate-90"
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
        </Button>
      ) : null}
    </div>
  );
}
