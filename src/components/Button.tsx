import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "Primary" | "Secondary";
}

export default React.forwardRef<HTMLElement, ButtonProps>(
    function Button(
        {
            variant = "Primary",
            type = "button",
            className,
            children,
            ...otherProps
        }: ButtonProps,
        ref
    ) {
        const cn = className + " block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-opacity-90 disabled:cursor-not-allowed";

        return (
            <button
                className={classNames(cn, {
                    "bg-brand-pink focus-visible:outline-brand-pink": variant === "Primary",
                    "bg-brand-gray focus-visible:outline-brand-gray": variant === "Secondary"
                })}
                ref={ref as any}
                type={type}
                {...otherProps}
            >
                {children}
            </button>
        );
    }
);