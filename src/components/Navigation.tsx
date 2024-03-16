import { useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FizzleLogoTransparent } from "./Icon";

const ROUTES = [
    { pathname: "/", label: "Home" },
    { pathname: "/about", label: "About" },
    { pathname: "/projects", label: "Projects" },
    { pathname: "/contact", label: "Contact" },
];

export default function Navigation() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    let location = useLocation();

    return (
        <nav className="shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-16 items-center justify-between">
                    <div className="flex items-center md:mx-auto">
                        <div className="flex-shrink-0">
                            <FizzleLogoTransparent width={"55"} height={"55"} className={"my-2"} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {ROUTES.map(route => (
                                    <Link
                                        key={`nav-item-${route.label}`}
                                        to={route.pathname}
                                        className={classNames("rounded-md px-3 py-2 text-sm font-medium", {
                                            " bg-brand-gray text-white": location.pathname === route.pathname,
                                            "text-gray-300 hover:bg-brand-gray hover:text-white": location.pathname !== route.pathname
                                        })}
                                        aria-current={location.pathname === route.pathname}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <svg onClick={() => setIsOpen(!isOpen)} width={"40"} className={classNames("relative inline-block hamburger-menu hamburger-menu-rotate rounded-md text-gray-400 hover:text-white", { "hamburger-menu-active": isOpen })} viewBox="0 0 100 100">
                            <path className="hamburger-menu-line hamburger-menu-top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path className="hamburger-menu-line hamburger-menu-middle" d="m 30,50 h 40" />
                            <path className="hamburger-menu-line hamburger-menu-bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={classNames("md:hidden", { "hidden": !isOpen })} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {ROUTES.map(route => (
                        <Link
                            key={`nav-item-${route.label}`}
                            to={route.pathname}
                            onClick={(e) => setIsOpen(false)}
                            className={classNames("block rounded-md px-3 py-2 text-base font-medium", {
                                " bg-brand-gray text-white": location.pathname === route.pathname,
                                "text-gray-300 hover:bg-brand-gray hover:text-white": location.pathname !== route.pathname
                            })}
                            aria-current={location.pathname === route.pathname}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
