"use client";

import React, { useState } from "react";
import { Search, Heart, Scissors, Activity, Stethoscope, ShieldAlert, Cpu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData, Treatment } from "@/constants/doctorData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Scissors,
  Activity,
  Stethoscope,
  ShieldAlert,
  Cpu,
};

export const Expertise: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const filteredTreatments = doctorData.treatments.filter((treatment) =>
    treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    treatment.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="treatments" className="py-20 bg-white font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Areas of Surgical Expertise"
          subtitle="Specialized clinical procedures customized for newborn congenital anomalies, pediatric urology, and keyhole surgeries."
          badge="Treatments & Procedures"
        />

        {/* Search Bar Component */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search treatments (e.g. keyhole, urology)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-lg text-sm font-sans focus:outline-none transition-all shadow-sm focus:bg-white"
          />
        </div>

        {/* Treatment Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment) => {
              const IconComponent = iconMap[treatment.iconName] || Stethoscope;
              
              return (
                <motion.div
                  key={treatment.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    hoverEffect
                    className="flex flex-col text-left justify-between h-full p-8 rounded-2xl hover:border-brand-green/30 group transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-4 rounded-lg bg-brand-blue-light text-brand-blue group-hover:bg-brand-green group-hover:text-white group-hover:rotate-[6deg] transition-all duration-300">
                          <IconComponent className="h-6 w-6 transition-transform group-hover:scale-105" />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-green transition-colors duration-300">
                        {treatment.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
                        {treatment.shortDescription}
                      </p>
                    </div>

                    <Button
                      variant="link"
                      onClick={() => setSelectedTreatment(treatment)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors self-start focus:outline-none py-1.5 group/btn"
                    >
                      <span>Read Detailed Info</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover:translate-x-0.5">&rarr;</span>
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredTreatments.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-sans">
             No treatments found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-premium relative z-10 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-brand-blue-light text-brand-blue">
                  {React.createElement(iconMap[selectedTreatment.iconName] || Stethoscope, {
                    className: "h-6 w-6",
                  })}
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                    Treatment Details
                  </span>
                  <h3 id="modal-title" className="font-display font-bold text-2xl text-brand-navy">
                    {selectedTreatment.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 font-sans leading-relaxed">
                <p className="text-base md:text-lg font-medium text-slate-700">
                  {selectedTreatment.shortDescription}
                </p>
                <p className="text-sm md:text-base border-t border-slate-100 pt-4">
                  {selectedTreatment.fullDescription}
                </p>
              </div>

              <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedTreatment(null)}
                  className="border-slate-300"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedTreatment(null);
                    const target = document.querySelector("#appointment-section");
                    if (target) {
                      const offset = 80;
                      window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
