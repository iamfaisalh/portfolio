import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default React.forwardRef<HTMLElement, InputProps>(
    function Input(
        {
            type = "text",
            className,
            ...otherProps
        }: InputProps,
        ref
    ) {
        const cn = className + " block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-pink sm:text-sm sm:leading-6 outline-none";

        return (
            <input
                className={cn}
                ref={ref as any}
                type={type}
                {...otherProps}
            />
        );
    }
);