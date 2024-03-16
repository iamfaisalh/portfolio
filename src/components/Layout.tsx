import React from "react";
import Navigation from "./Navigation";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default React.forwardRef<HTMLElement, LayoutProps>(
    function Layout({ children }: LayoutProps, ref) {
        return (
            <div ref={ref as any} className="flex flex-col min-h-full h-full w-full bg-gradient-to-b from-brand-dark to-brand-black">
                <Navigation />
                <div id="layout-content" className="w-full h-full mx-auto  sm:px-6 lg:px-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        );
    }
);
