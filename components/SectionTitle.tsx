import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col max-w-3xl",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {badge && (
        <div className={cn("flex items-center gap-3 mb-4 animate-fade-in-up", align === "center" ? "justify-center" : "justify-start")}>
          <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
            {badge}
          </span>
          {align === "center" && <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />}
        </div>
      )}
      
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 font-sans text-base md:text-lg text-slate-500 leading-relaxed">
          {subtitle}
        </p>
      )}
      
      <div 
        className={cn(
          "h-[1px] w-12 bg-slate-300 mt-6",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
};
