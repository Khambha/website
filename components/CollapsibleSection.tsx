"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CollapsibleSectionProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgClass?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  id,
  badge,
  title,
  subtitle,
  children,
  className,
  bgClass = "bg-white",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      id={id}
      className={cn(
        "border-y border-slate-200/60 overflow-hidden transition-all duration-300 scroll-mt-20", 
        bgClass, 
        className
      )}
    >
      {/* Clickable Header Area */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-16 md:px-24 flex flex-col items-center justify-center text-center relative hover:bg-slate-50/50 focus:outline-none transition-colors duration-300 group"
      >
        <div className="max-w-3xl flex flex-col items-center">
          {badge && (
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
                {badge}
              </span>
              <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
            </div>
          )}
          
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-brand-navy tracking-tight leading-tight group-hover:text-brand-blue transition-colors duration-300">
            {title}
          </h2>
          
          {subtitle && (
            <p className="mt-2 font-sans text-sm md:text-base text-slate-500 leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
              {subtitle}
            </p>
          )}
        </div>

        {/* Side Expand/Collapse Arrow */}
        <div className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 shrink-0 flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 text-brand-navy bg-white shadow-soft group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.div>
        </div>
      </button>

      {/* Expandable Content Area */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { type: "spring", stiffness: 90, damping: 16 },
                opacity: { duration: 0.3 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25 }
              }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              initial={{ y: -20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -15, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="pb-10 px-6 md:px-12 border-t border-slate-100 bg-slate-50/20"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
