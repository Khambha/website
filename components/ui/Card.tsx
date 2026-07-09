import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-medical-card border border-medical-border rounded-2xl p-6 shadow-soft",
          hoverEffect && "premium-hover-card",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
