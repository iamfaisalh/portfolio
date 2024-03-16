import React from "react";
import Input, { InputProps } from "./Input";
import Textarea, { TextareaProps } from "./Textarea";

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string | React.ReactNode;
    labelFor?: string;
    inputProps?: InputProps;
    textareaProps?: TextareaProps;
}

export default React.forwardRef<HTMLElement, FieldProps>(
    function Field({ label, labelFor, inputProps, textareaProps }: FieldProps, ref) {
        return (
            <div className="sm:col-span-2">
                {label ? <label htmlFor={labelFor} className="block text-sm font-semibold leading-6">{label}</label> : null}
                <div className="mt-2.5">
                    {inputProps ? <Input ref={ref as any} {...inputProps} /> : null}
                    {textareaProps ? <Textarea ref={ref as any} {...textareaProps} /> : null}
                </div>
            </div>
        );
    }
);
