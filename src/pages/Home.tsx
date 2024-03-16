import { useEffect, useState } from "react";

export default function Home() {

    const [appear, setAppear] = useState<boolean>(false);

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
                setAppear(true);
            } catch (error) {

            }
        }, 3000);
    }, []);

    return (
        <div style={{ marginTop: "-50px", minHeight: "100px" }} className="m-auto w-full h-full flex flex-col pt-10 justify-center items-center tracking-wider text-base md:text-3xl text-center">
            <span id="home-heading-1" className="typing-header typing-header-1">Hello, my name is <span className="bg-[length:200%_auto] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.brand.pink),theme(colors.brand.lavender),theme(colors.brand.pink),theme(colors.brand.purple),theme(colors.brand.pink),theme(colors.brand.lavender),theme(colors.brand.pink))] animate-gradient">Faisal Hakimi</span>.</span>
            {appear ? <span className="typing-header typing-header-2">I'm a full stack software engineer.</span> : null}
        </div>
    );
}