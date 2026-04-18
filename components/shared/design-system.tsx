import React from "react";
import { cn } from "@/lib/utils";

// Consistent Spacing Wrapper
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("container mx-auto px-4 md:px-6", className)}>
            {children}
        </div>
    );
}

// Consistent Section Spacing
export function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
    return (
        <section id={id} className={cn("py-12 md:py-24 lg:py-32", className)}>
            {children}
        </section>
    );
}

// Typography Hierarchy
export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h1 className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h2 className={cn("text-3xl font-semibold tracking-tight transition-colors border-b pb-2", className)}>
            {children}
        </h2>
    );
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <h3 className={cn("text-2xl font-semibold tracking-tight", className)}>
            {children}
        </h3>
    );
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    );
}

export function Muted({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>
            {children}
        </p>
    );
}
