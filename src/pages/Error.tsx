import { useEffect } from "react";
import BG404 from "../assets/FH-BG-404.jpeg";
import BG500 from "../assets/FH-BG-500.jpeg";
import { Link } from "react-router-dom";

interface ErrorProps {
    type: "404" | "500";
}

export default function Error({ type }: ErrorProps) {

    useEffect(() => {
        if (type === "404") document.title = "404 | Page Not Found";
        else document.title = "Something went wrong";
    }, [type]);

    return (
        <div className="fixed top-0 left-0 w-full grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-brand-dark to-brand-black">
            <div className="text-center bounce-in-top">
                <img className=" w-36 h-36 md:w-56 md:h-56 mb-6 rounded-lg mx-auto object-cover" src={type === "404" ? BG404 : BG500} alt="Faisal Hakimi" />
                <p className="text-2xl font-semibold text-brand-pink">{type}</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{type === "404" ? "Page not found" : "Something went wrong"}</h1>
                {type === "404" ? <p className="mt-6 text-base leading-7">Sorry, we couldn`t find the page you`re looking for.</p> : null}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to={"/"} className="rounded-md bg-brand-pink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    );
}