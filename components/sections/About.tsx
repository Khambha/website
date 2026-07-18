"use client";

import React from "react";
import { Compass, Eye, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-medical-bg font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          title={`Meet Dr. ${doctorData.name}`}
          subtitle="Dedicated to child-centric healing, scientific innovation, and surgical precision."
          badge="About the Surgeon"
        />

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          {/* Left Text & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-navy">
                Leading the Way in Pediatric & Neonatal Surgery
              </h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {doctorData.aboutText}
              </p>
              
              {/* Mission & Vision Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <Card className="p-6 border-slate-200/60 shadow-sm bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center">
                      <Compass className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-brand-navy">Our Mission</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {doctorData.missionStatement}
                  </p>
                </Card>
                
                <Card className="p-6 border-slate-200/60 shadow-sm bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-brand-green-light text-brand-green flex items-center justify-center">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-brand-navy">Our Vision</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {doctorData.visionStatement}
                  </p>
                </Card>
              </div>
            </div>
          </div>

           {/* Right Philosophy Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-gradient-to-tr from-brand-blue to-brand-blue-hover text-white rounded-2xl p-8 shadow-premium flex flex-col justify-between relative overflow-hidden border border-white/10">
              {/* Abstract decorative SVG pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
              
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mb-8">
                <HeartHandshake className="h-6 w-6" />
              </div>
              
              <div className="relative z-10 mb-8">
                <h4 className="font-display font-bold text-xl text-white mb-4">
                  Surgical Philosophy
                </h4>
                <blockquote className="font-sans italic text-lg leading-relaxed text-cyan-50">
                  &ldquo;{doctorData.philosophy}&rdquo;
                </blockquote>
              </div>
              
              <div className="relative z-10 border-t border-white/10 pt-4 flex justify-between items-center text-xs tracking-wider text-cyan-200 uppercase font-medium">
                <span>Care Philosophy</span>
                <span>Dr. {doctorData.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
