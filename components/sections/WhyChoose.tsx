"use client";

import React from "react";
import { FlameKindling, Baby, Globe, HeartPulse, ShieldCheck, Heart, Stethoscope, Cpu, GraduationCap, Building } from "lucide-react";
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
  Cpu,
  GraduationCap,
  Building
};

export const WhyChoose: React.FC = () => {
  const items = [
    ...doctorData.whyChooseUs.map(item => ({
      id: item.id,
      title: item.title,
      iconName: item.iconName,
      content: <p className="text-sm md:text-base text-slate-500 leading-relaxed font-sans">{item.description}</p>
    })),
    {
      id: "edu-institutions",
      title: "Educated from Top Institutions",
      iconName: "GraduationCap",
      content: (
        <ul className="space-y-1.5 text-slate-500 font-sans text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Madras Medical College, Chennai</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Thanjavur Medical College, Tanjore</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Stanley Medical College, Chennai</span>
          </li>
        </ul>
      )
    },
    {
      id: "emp-organisations",
      title: "Employed in Top Health Organisations",
      iconName: "Building",
      content: (
        <ul className="space-y-1.5 text-slate-500 font-sans text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Aster Women & Children Hospital, Bangalore</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Aster MIMS Hospital, Kannur</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Baby Memorial Hospital, Kannur</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
            <span>Medicover Hospital, Visakhapatnam</span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <section className="py-12 bg-medical-bg font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="Patient-First Surgical Excellence"
          subtitle="Delivering surgical interventions designed specifically for the unique physical and emotional needs of children."
          badge="Why Choose Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-soft">
          {items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Stethoscope;
            
            return (
              <div
                key={item.id}
                className={`flex items-start gap-6 p-8 md:p-10 text-left transition-all duration-300 group hover:bg-slate-50/50 ${idx % 2 === 0 ? "md:border-r border-slate-200" : ""} ${idx < 4 ? "border-b border-slate-200" : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2 flex-grow">
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-navy group-hover:text-brand-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
