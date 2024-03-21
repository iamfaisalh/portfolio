import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {

    const [h2Appear, setH2Appear] = useState<boolean>(false);
    const [btnAppear, setBtnAppear] = useState<boolean>(false);

    useEffect(() => {
        document.title = "Faisal Hakimi";
    }, []);

    useEffect(() => {
        setTimeout(() => {
            try {
                const heading = document.getElementById("home-heading-1");
                if (heading) {
                    heading.style.border = "0px";
                }
                setH2Appear(true);

            } catch (error) {

            }
        }, 3000);
        setTimeout(() => {
            setBtnAppear(true);
        }, 6000);
    }, []);

    return (
        <div style={{ marginTop: "-50px", minHeight: "100px" }} className="m-auto w-full h-full flex flex-col pt-10 justify-center items-center tracking-wider text-base md:text-3xl text-center">
            <span id="home-heading-1" className="typing-header typing-header-1">Hello, my name is <span className="bg-[length:200%_auto] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.brand.pink),theme(colors.brand.lavender),theme(colors.brand.pink),theme(colors.brand.purple),theme(colors.brand.pink),theme(colors.brand.lavender),theme(colors.brand.pink))] animate-gradient">Faisal Hakimi</span>.</span>
            {h2Appear ? <span className="typing-header typing-header-2">I'm a full stack software engineer.</span> : null}
            {btnAppear ?
                <Link to={"/about"}>
                    <Button variant={"Primary"} className={"w-fit inline-flex items-center my-4 fade-in"} >
                        Who is Faisal Hakimi?
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Button>
                </Link>
                :
                null}
        </div>
    );
}