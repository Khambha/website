"use client";

import React, { useState, useRef } from "react";
import { GraduationCap, Award, Landmark, Medal, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";
import { cn } from "@/lib/utils";

export const Education: React.FC = () => {
  const [isBoardsOpen, setIsBoardsOpen] = useState(false);
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll-linked animation for the wavy path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  const items = [
    {
      id: "mbbs",
      badge: "Class of 2003",
      title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      institution: "Stanley Medical College, Dr MGR Medical University, Chennai"
    },
    {
      id: "ms",
      badge: "Class of 2008",
      title: "MS in General Surgery",
      institution: "Thanjavur Medical College, Dr MGR Medical University, Tanjore"
    },
    {
      id: "mch",
      badge: "Class of 2011",
      title: "M.Ch in Paediatric Surgery",
      institution: "Madras Medical College, Dr MGR Medical University, Chennai"
    },
    {
      id: "training",
      badge: "Advanced Training",
      title: "Global Fellowships & Certifications",
      institution: "DHA Eligible, European Board Certified Paediatric Surgeon (FEBPS), FMAS, FICRS, FIAGES"
    },
    {
      id: "present",
      badge: "Present",
      title: "Senior Consultant Paediatric Surgeon",
      institution: "Aster Women & Children Hospital, Whitefield, Bangalore"
    }
  ];

  return (
    <section className="py-12 bg-medical-bg font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Academic Foundations & Experience"
          subtitle="A roadmap showcasing decades of rigorous academic training, international fellowships, and clinical excellence."
          badge="Educational Journey"
        />

        {/* Roadmap Container */}
        <div ref={containerRef} className="relative w-full mt-12 mb-16">
          
          {/* Desktop Timeline Wavy SVG Line */}
          <div className="hidden md:block absolute inset-0 z-0">
            <svg viewBox="0 0 60 1000" preserveAspectRatio="none" className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-12 text-slate-200/50" fill="none">
              <path d="M 30 0 C 10 150, 50 250, 30 400 C 10 550, 50 650, 30 800 C 10 900, 50 950, 30 1000" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <motion.path
                d="M 30 0 C 10 150, 50 250, 30 400 C 10 550, 50 650, 30 800 C 10 900, 50 950, 30 1000"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Mobile Timeline Vertical Straight Line */}
          <div className="block md:hidden absolute left-[15px] top-0 bottom-0 w-[3px] bg-slate-200 z-0">
            <motion.div
              className="absolute top-0 bottom-0 left-0 right-0 bg-brand-green origin-top"
              style={{ scaleY: pathLength }}
            />
          </div>

          {/* Journey Steps (Desktop layout grid columns, Mobile layout list blocks) */}
          <div className="space-y-6 md:space-y-8 relative z-10 w-full">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={item.id} className="relative w-full">
                  
                  {/* Desktop Row Grid */}
                  <div className="hidden md:grid grid-cols-11 items-center gap-8 w-full min-h-[100px]">
                    {/* Left Card Slot */}
                    <div className="col-span-5 flex justify-end">
                      {isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ type: "spring", stiffness: 80, damping: 15 }}
                          className="w-full max-w-md text-right flex flex-col items-end"
                        >
                          <span className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-wider bg-brand-green-light px-2.5 py-1 rounded-full w-max">
                            {item.badge}
                          </span>
                          <h4 className="font-display font-bold text-lg text-brand-navy mt-3 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 font-sans mt-2 leading-relaxed max-w-sm">
                            {item.institution}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Center Milestone Indicator Dot */}
                    <div className="col-span-1 flex justify-center relative">
                      <motion.div
                        initial={{ scale: 0.8, backgroundColor: "#ffffff", borderColor: "#cbd5e1" }}
                        whileInView={{ scale: 1.15, backgroundColor: "#10b981", borderColor: "#10b981" }}
                        viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
                        transition={{ duration: 0.4 }}
                        className="h-5 w-5 rounded-full border-4 shadow-sm z-30 bg-white border-slate-300"
                      />
                    </div>

                    {/* Right Card Slot */}
                    <div className="col-span-5 flex justify-start">
                      {!isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ type: "spring", stiffness: 80, damping: 15 }}
                          className="w-full max-w-md text-left flex flex-col items-start"
                        >
                          <span className="text-[10px] md:text-xs font-bold text-brand-green uppercase tracking-wider bg-brand-green-light px-2.5 py-1 rounded-full w-max">
                            {item.badge}
                          </span>
                          <h4 className="font-display font-bold text-lg text-brand-navy mt-3 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 font-sans mt-2 leading-relaxed max-w-sm">
                            {item.institution}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Row Stack */}
                  <div className="block md:hidden pl-8 relative w-full text-left">
                    {/* Mobile Circle Dot */}
                    <motion.div
                      initial={{ scale: 0.8, backgroundColor: "#ffffff", borderColor: "#cbd5e1" }}
                      whileInView={{ scale: 1.15, backgroundColor: "#10b981", borderColor: "#10b981" }}
                      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                      transition={{ duration: 0.4 }}
                      className="absolute left-[-26px] top-1.5 h-4.5 w-4.5 rounded-full border-3 bg-white border-slate-300 z-20"
                    />

                    {/* Mobile Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 80, damping: 15 }}
                      className="bg-white border border-slate-200/60 p-5 rounded-xl shadow-soft"
                    >
                      <span className="text-[9px] font-bold text-brand-green uppercase tracking-wider bg-brand-green-light px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                      <h4 className="font-display font-bold text-base text-brand-navy mt-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-sans mt-1.5 leading-relaxed">
                        {item.institution}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Drawers Section */}
        <div className="max-w-4xl mx-auto space-y-6 mt-16 text-left">
          
          {/* Drawer 1: Board Certifications & Memberships */}
          <div className="border border-slate-200/80 rounded-2xl bg-white shadow-soft overflow-hidden">
            <button
              type="button"
              onClick={() => setIsBoardsOpen(!isBoardsOpen)}
              className="w-full py-6 px-8 flex items-center justify-between text-brand-navy hover:text-brand-green hover:bg-slate-50/50 transition-colors duration-300 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <Landmark className="h-5.5 w-5.5 text-brand-green" />
                <span className="font-display font-bold text-lg md:text-xl">Board Certifications & Memberships</span>
              </div>
              <motion.div
                animate={{ rotate: isBoardsOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isBoardsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, transition: { height: { type: "spring", stiffness: 100, damping: 18 } } }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 border-t border-slate-100 bg-slate-50/20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Licensures & Boards */}
                    <div>
                      <h4 className="font-display font-bold text-base text-brand-navy mb-4 flex items-center gap-2">
                        <GraduationCap className="h-4.5 w-4.5 text-brand-blue" />
                        <span>Licensures & Boards</span>
                      </h4>
                      <div className="space-y-4">
                        {doctorData.boardCertifications.map((cert, idx) => (
                          <div key={idx} className="border-l-2 border-slate-100 pl-4 space-y-0.5 relative">
                            <div className="absolute top-1.5 -left-[5px] h-2 w-2 rounded-full bg-brand-blue" />
                            <span className="text-[10px] font-bold text-brand-green">{cert.year}</span>
                            <h5 className="font-display font-bold text-sm text-brand-navy">{cert.name}</h5>
                            <p className="text-xs text-slate-500">{cert.issuer}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Societies & Associations */}
                    <div>
                      <h4 className="font-display font-bold text-base text-brand-navy mb-4 flex items-center gap-2">
                        <Landmark className="h-4.5 w-4.5 text-brand-green" />
                        <span>Societies & Associations</span>
                      </h4>
                      <div className="space-y-3">
                        {doctorData.memberships.map((membership, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm text-slate-600 font-sans">
                              {membership}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Drawer 2: Awards & Honors */}
          <div className="border border-slate-200/80 rounded-2xl bg-white shadow-soft overflow-hidden">
            <button
              type="button"
              onClick={() => setIsAwardsOpen(!isAwardsOpen)}
              className="w-full py-6 px-8 flex items-center justify-between text-brand-navy hover:text-brand-green hover:bg-slate-50/50 transition-colors duration-300 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <Award className="h-5.5 w-5.5 text-brand-gold" />
                <span className="font-display font-bold text-lg md:text-xl">Awards & Honors</span>
              </div>
              <motion.div
                animate={{ rotate: isAwardsOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isAwardsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, transition: { height: { type: "spring", stiffness: 100, damping: 18 } } }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 border-t border-slate-100 bg-slate-50/20 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {doctorData.awards.map((award, idx) => (
                      <Card key={idx} className="p-5 bg-white border-slate-200/60 shadow-soft flex items-start gap-3 text-left">
                        <div className="h-8.5 w-8.5 shrink-0 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center">
                          <Medal className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">{award.year}</span>
                          <h5 className="font-display font-bold text-sm text-brand-navy">{award.title}</h5>
                          <p className="text-[10px] text-slate-500 font-medium">{award.issuer}</p>
                          <p className="text-xs text-slate-500 font-sans pt-1.5 border-t border-slate-50 leading-relaxed">
                            {award.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
