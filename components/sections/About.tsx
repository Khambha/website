"use client";

import React from "react";
import { CheckCircle2, Quote, Shield, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50/50 font-sans scroll-mt-20 relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-light/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          title="About Dr. Vijay Ganesh Sankar"
          subtitle="Combining global certification with child-first clinical compassion."
          badge="Meet the Surgeon"
        />

        {/* Top Row: Biography & Care Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-8 mb-12">
          {/* Biography Text */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-navy leading-snug mb-4">
              Surgical Precision, Child-First Care
            </h3>
            <p className="text-slate-650 leading-relaxed text-base md:text-lg">
              {doctorData.aboutText}
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="lg:col-span-5 flex">
            <Card className="w-full bg-white border border-slate-200/80 shadow-premium p-8 rounded-2xl relative overflow-hidden text-left flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="text-slate-400">
                  <Quote className="h-8 w-8 rotate-180 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-green-light/35 px-2.5 py-1 rounded-full">
                  Care Philosophy
                </span>
              </div>
              
              <blockquote className="font-sans italic text-slate-700 text-base leading-relaxed mb-6">
                &ldquo;{doctorData.philosophy}&rdquo;
              </blockquote>
              
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[10px] tracking-wider text-slate-400 uppercase font-semibold">
                <span>Pediatric Surgery</span>
                <span className="text-brand-navy">Dr. {doctorData.name}</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Row: Clinical Focus & Care Standards (Symmetric Parallel Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Clinical Focus Card */}
          <Card className="bg-white border border-slate-200/80 shadow-premium p-8 md:p-10 rounded-2xl text-left flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-brand-navy uppercase tracking-wider mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-green" />
                <span>Clinical Focus & Areas of Practice</span>
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5.5 w-5.5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">European Board Certified (FEBPS)</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">Adhering to international standards in pediatric surgery.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5.5 w-5.5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">Keyhole & Robotic Surgery</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">Minimally invasive urology and laparoscopy for children.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5.5 w-5.5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">Neonatal Congenital Defect Correction</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">Complex structural repairs in newborn infants.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5.5 w-5.5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">Pediatric Surgical Oncology</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">Coordinated surgical management of childhood solid tumors.</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Our Care Standards Card */}
          <Card className="bg-white border border-slate-200/80 shadow-premium p-8 md:p-10 rounded-2xl text-left flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-sm md:text-base text-brand-navy uppercase tracking-wider mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-brand-blue" />
                <span>Our Patient Care Standards</span>
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0 animate-pulse" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">Family-Centered Support</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">We help parents and children feel safe, prepared, and emotionally supported throughout the surgical journey.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0 animate-pulse" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">Collaborative Pediatrics</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">We coordinate closely with primary pediatricians and neonatologists to guide your child&apos;s recovery.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0 animate-pulse" />
                  <div>
                    <span className="font-semibold text-brand-navy text-sm block">24/7 Critical Response</span>
                    <span className="text-xs text-slate-500 font-sans mt-0.5 block">Available for urgent neonatal anomalies and surgical emergency calls at Aster Hospital.</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};
