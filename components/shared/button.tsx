import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends React.ComponentProps<typeof ShadcnButton> {
    premium?: boolean;
}

export function Button({ className, premium, ...props }: PremiumButtonProps) {
    return (
        <ShadcnButton
            className={cn(
                premium && "bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-95",
                className
            )}
            {...props}
        />
    );
}
