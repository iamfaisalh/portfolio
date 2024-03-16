import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export default React.forwardRef<HTMLElement, TextareaProps>(
    function Textarea(
        {
            className,
            rows = 4,
            ...otherProps
        }: TextareaProps,
        ref
    ) {
        const cn = className + " block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-pink sm:text-sm sm:leading-6 outline-none resize-none";

        return (
            <textarea
                className={cn}
                rows={rows}
                ref={ref as any}
                {...otherProps}
            />
        );
    }
);