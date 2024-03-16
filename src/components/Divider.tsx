import React, { Fragment } from "react";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    labelSize?: string;
}

export default React.forwardRef<HTMLElement, DividerProps>(
    function Divider({ label, labelSize, className, ...otherProps }: DividerProps, ref) {
        const cn = className + " flex items-center my-6 max-w-xl mx-auto";

        return (
            <div ref={ref as any} className={cn} {...otherProps}>
                <div className="flex-1 border-t-2 border-brand-gray"></div>
                {label ?
                    <Fragment>
                        <span className={`px-3 text-white ${labelSize}`}>{label}</span>
                        <div className="flex-1 border-t-2 border-brand-gray"></div>
                    </Fragment>
                    :
                    null
                }
            </div>
        );
    }
);
