"use client";

import React from "react";
import { FlameKindling, Baby, Globe, HeartPulse, ShieldCheck, Heart, Stethoscope, Cpu } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlameKindling,
  Baby,
  Globe,
  HeartPulse,
  ShieldCheck,
  Heart,
  Stethoscope,
  Cpu
};

export const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-medical-bg font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Patient-First Surgical Excellence"
          subtitle="Delivering surgical interventions designed specifically for the unique physical and emotional needs of children."
          badge="Why Choose Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-soft">
          {doctorData.whyChooseUs.map((reason, idx) => {
            const Icon = iconMap[reason.iconName] || Stethoscope;
            
            return (
              <div
                key={reason.id}
                className={`flex items-start gap-6 p-8 md:p-10 text-left transition-all duration-300 group hover:bg-slate-50/50 ${idx % 2 === 0 ? "md:border-r border-slate-200" : ""} ${idx < 2 ? "border-b border-slate-200" : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-navy group-hover:text-brand-green transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-sans">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
