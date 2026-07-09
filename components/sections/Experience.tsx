"use client";

import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";
import { cn } from "@/lib/utils";

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("time-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-white font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Professional Career Journey"
          subtitle="A history of clinical leadership, neonatal training, and pediatric surgical innovation in premier global medical institutions."
          badge="Experience & History"
        />

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-slate-200 pl-6 md:pl-10 ml-4 space-y-12">
          {doctorData.timeline.map((item) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <div key={item.id} className="relative">
                {/* Timeline node icon */}
                <div className={cn(
                  "absolute -left-[43px] md:-left-[59px] top-1.5 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border-2 border-white transition-all duration-305",
                  isExpanded 
                    ? "bg-brand-green text-white shadow-premium shadow-brand-green/20" 
                    : "bg-brand-blue text-white shadow-premium shadow-brand-blue/10"
                )}>
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                </div>

                {/* Timeline content card */}
                <Card
                  hoverEffect={!isExpanded}
                  className={cn(
                    "p-6 cursor-pointer border-slate-200/50 shadow-soft select-none border-l-4 transition-all duration-300",
                    isExpanded 
                      ? "border-l-brand-green bg-brand-blue-light/10 shadow-premium" 
                      : "border-l-transparent hover:border-l-brand-blue/30"
                  )}
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 text-left">
                      {/* Timeline Period */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-widest">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                      <h3 className="font-display font-bold text-xl text-brand-navy leading-tight">
                        {item.role}
                      </h3>
                      <p className="text-base font-medium text-brand-blue">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-slate-50 md:border-t-0 pt-3 md:pt-0">
                      <span className="inline-flex items-center gap-1 text-sm text-slate-500 font-medium">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {item.location}
                      </span>
                      <button
                        type="button"
                        className="p-1 rounded-lg text-slate-400 hover:text-brand-navy focus:outline-none cursor-pointer"
                        aria-label={isExpanded ? "Collapse highlights" : "Expand highlights"}
                      >
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Achievements Box */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      >
                        <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-left">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                            Key Accomplishments
                          </p>
                          {item.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base text-slate-600 font-sans leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
