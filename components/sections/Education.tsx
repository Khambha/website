"use client";

import React, { useState } from "react";
import { GraduationCap, Award, Landmark, Medal, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";
import { cn } from "@/lib/utils";

type TabId = "education" | "certifications" | "awards";

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("education");

  const tabs = [
    { id: "education" as const, label: "Degrees & Fellowships", icon: GraduationCap },
    { id: "certifications" as const, label: "Board & Memberships", icon: Landmark },
    { id: "awards" as const, label: "Awards & Honors", icon: Award },
  ];

  return (
    <section className="py-20 bg-medical-bg font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Academic Credentials & Honors"
          subtitle="Distinguished education, clinical training fellowships, and leadership in international pediatric surgical organizations."
          badge="Credentials & Awards"
        />

        {/* Tab Switchers */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 border-b border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-none border-b-2",
                  isActive
                    ? "border-brand-blue text-brand-blue"
                    : "border-transparent text-slate-400 hover:text-brand-navy"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {activeTab === "education" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {/* Left: Degrees */}
                  <Card className="p-8 bg-white border-slate-200/50 shadow-soft">
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-6 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-brand-blue" />
                      <span>Formal Degrees</span>
                    </h3>
                    <div className="space-y-6">
                      {doctorData.education.map((item, idx) => (
                        <div key={idx} className="border-l-2 border-slate-100 pl-4 space-y-1 relative">
                          <div className="absolute top-1.5 -left-[5px] h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="text-xs font-bold text-brand-green">{item.year}</span>
                          <h4 className="font-display font-bold text-base text-brand-navy">{item.degree}</h4>
                          <p className="text-xs text-slate-500">{item.institution}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Right: Fellowships */}
                  <Card className="p-8 bg-white border-slate-200/50 shadow-soft">
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-6 flex items-center gap-2">
                      <Medal className="h-5 w-5 text-brand-green" />
                      <span>Clinical Fellowships</span>
                    </h3>
                    <div className="space-y-6">
                      {doctorData.fellowships.map((item, idx) => (
                        <div key={idx} className="border-l-2 border-slate-100 pl-4 space-y-1 relative">
                          <div className="absolute top-1.5 -left-[5px] h-2 w-2 rounded-full bg-brand-green" />
                          <span className="text-xs font-bold text-brand-blue">{item.year}</span>
                          <h4 className="font-display font-bold text-base text-brand-navy">{item.degree}</h4>
                          <p className="text-xs text-slate-500">{item.institution}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {/* Left: Board Certifications */}
                  <Card className="p-8 bg-white border-slate-200/50 shadow-soft">
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-6 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-brand-blue" />
                      <span>Licensures & Boards</span>
                    </h3>
                    <div className="space-y-6">
                      {doctorData.boardCertifications.map((cert, idx) => (
                        <div key={idx} className="border-l-2 border-slate-100 pl-4 space-y-1 relative">
                          <div className="absolute top-1.5 -left-[5px] h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="text-xs font-bold text-brand-green">{cert.year}</span>
                          <h4 className="font-display font-bold text-base text-brand-navy">{cert.name}</h4>
                          <p className="text-xs text-slate-500">{cert.issuer}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Right: Memberships */}
                  <Card className="p-8 bg-white border-slate-200/50 shadow-soft">
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-6 flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-brand-green" />
                      <span>Societies & Associations</span>
                    </h3>
                    <div className="space-y-4">
                      {doctorData.memberships.map((membership, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-slate-600 font-sans">
                            {membership}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === "awards" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {doctorData.awards.map((award, idx) => (
                    <Card key={idx} className="p-8 bg-white border-slate-200/50 shadow-soft flex items-start gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center">
                        <Medal className="h-5 w-5" />
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">{award.year}</span>
                        <h4 className="font-display font-bold text-lg text-brand-navy">{award.title}</h4>
                        <p className="text-xs text-slate-500 font-medium">{award.issuer}</p>
                        <p className="text-sm text-slate-500 font-sans pt-2 border-t border-slate-50 leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
