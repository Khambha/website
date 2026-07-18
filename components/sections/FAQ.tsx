"use client";

import React from "react";
import { HelpCircle, PhoneCall } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";
import { cn } from "@/lib/utils";

interface FAQProps {
  hideHeader?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ hideHeader = false }) => {
  const content = (
    <div className={cn(hideHeader ? "" : "max-w-4xl mx-auto px-6 md:px-12")}>
      {!hideHeader && (
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to common queries regarding pediatric consultation setup, keyhole surgery recovery, and hospital logistics."
          badge="FAQ Help Center"
        />
      )}

      {/* Dynamic Accordion list */}
      <Accordion items={doctorData.faqs} className="mb-16" />

      {/* Emergency Assistance Notice Box */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
        <div className="space-y-2">
          <h4 className="font-display font-bold text-lg text-brand-navy flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-brand-blue" />
            <span>Have a question not listed here?</span>
          </h4>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            If your child requires urgent care, please do not use the email form. Contact our emergency line directly, available 24/7.
          </p>
        </div>
        
        <a
          href={`tel:${doctorData.emergencyPhone.replace(/\D/g, "")}`}
          className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-rose-50 border border-rose-200/50 hover:bg-rose-100 text-rose-600 transition-colors duration-300 shrink-0 font-semibold text-sm focus:outline-none"
        >
          <PhoneCall className="h-4.5 w-4.5" />
          <span>Emergency: Call {doctorData.contactPhone}</span>
        </a>
      </div>
    </div>
  );

  if (hideHeader) {
    return content;
  }

  return (
    <section id="faq" className="py-20 bg-white font-sans scroll-mt-20">
      {content}
    </section>
  );
};
