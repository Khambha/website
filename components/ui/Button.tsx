"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "variant" | "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-brand-blue text-white shadow-soft hover:bg-brand-blue-hover focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
      secondary: "bg-brand-green text-white shadow-soft hover:bg-brand-green-hover focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2",
      outline: "border border-medical-border bg-transparent text-brand-navy hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand-blue",
      ghost: "bg-transparent text-brand-navy hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand-blue",
      link: "bg-transparent text-brand-blue underline-offset-4 hover:underline p-0 focus-visible:underline"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: variant !== "link" ? -2 : 0 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
