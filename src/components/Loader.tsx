import React from "react";
import classNames from "classnames";
import { FizzleLogoTransparent } from "./Icon";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default React.forwardRef<HTMLElement, LoaderProps>(
    function Loader(
        {
            className,
            ...otherProps
        }: LoaderProps,
        ref
    ) {
        const cn = className + " fixed w-full h-full top-0 left-0 bottom-0 right-0 flex justify-center bg-gradient-to-b from-brand-dark to-brand-black";

        return (
            <div ref={ref as any} className={classNames(cn)} {...otherProps}>
                <div className="flex flex-col justify-center items-center m-auto gap-2">
                    <FizzleLogoTransparent className={"spinner-loading"} />
                    <span className=" text-lg">Loading...</span>
                </div>
            </div>
        );
    }
);