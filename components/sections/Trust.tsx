"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

export const Trust: React.FC = () => {
  const treatments = doctorData.treatments;

  return (
    <section id="treatments" className="py-12 bg-[#F8FAFC] font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="Treatments & Clinical Specialties"
          subtitle="Advanced pediatric surgical procedures customized for newborn congenital anomalies, urological defects, and keyhole operations."
          badge="Treatments & Procedures"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {treatments.map((card) => (
            <Card
              key={card.id}
              hoverEffect
              className="p-0 border border-slate-200/80 shadow-soft overflow-hidden flex flex-col bg-white rounded-2xl group zoom-container text-left"
            >
              {/* Photo Area */}
              <div className="h-48 relative overflow-hidden bg-slate-900 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center zoom-image"
                />
              </div>

              {/* Procedures/Text list */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-1.5 block">
                    {card.badge}
                  </span>
                  
                  <h4 className="font-display font-bold text-lg text-brand-navy mb-2 leading-tight group-hover:text-brand-green transition-colors duration-350">
                    {card.title}
                  </h4>

                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <p className="text-[9px] font-semibold text-slate-450 uppercase tracking-wider">
                      Conditions & Procedures:
                    </p>
                    <ul className="space-y-1.5">
                      {card.procedures.map((proc, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-650 group-hover:text-brand-navy transition-colors duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-350 group-hover:bg-brand-green transition-colors duration-300 mt-1.5 shrink-0" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
