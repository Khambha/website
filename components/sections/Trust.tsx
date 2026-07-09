"use client";

import React from "react";
import { Scissors, Activity } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";

export const Trust: React.FC = () => {
  const trustCards = [
    {
      id: "trust-1",
      title: "Pediatric Robotic Surgery",
      description: "State-of-the-art robotic-assisted reconstructive operations for children.",
      image: "/images/robotic_surgery.png",
      procedures: [
        "Robotic Pyeloplasty (Drainage)",
        "Robotic Ureteric Re-implantation",
        "Robotic Choledochal Cyst Resection",
        "Micro-invasive reconstructions"
      ],
      badge: "Robotic Specialist"
    },
    {
      id: "trust-2",
      title: "Neonatal Reconstruction",
      description: "Immediate emergency correction of congenital birth anomalies in newborns.",
      image: "/images/neonatal_care.png",
      procedures: [
        "Diaphragmatic Hernia (CDH) Repair",
        "Tracheoesophageal Fistula Repair",
        "Anorectal Malformations Correction",
        "Intestinal Atresia & Volvulus Correction"
      ],
      badge: "Neonatal Care"
    },
    {
      id: "trust-3",
      title: "Laparoscopic Keyhole Surgery",
      description: "Advanced diagnostic and therapeutic surgical access via 3mm incisions.",
      image: "/images/laparoscopic_surgery.jpg",
      procedures: [
        "Laparoscopic Hernia & Hydrocele",
        "Laparoscopic Appendectomy",
        "Orchidopexy (Undescended Testis)",
        "Thoracoscopic Lung Operations"
      ],
      badge: "Keyhole Precision"
    },
    {
      id: "trust-4",
      title: "Reconstructive Urology",
      description: "Complete repair of complex congenital defects of the urinary tract.",
      image: "/images/reconstructive_surgery.jpg",
      procedures: [
        "Hypospadias Surgical Repairs",
        "Vesicoureteral Reflux (VUR) Deflux",
        "Bladder Epispadias Reconstruction",
        "Posterior Urethral Valve Ablation"
      ],
      badge: "Urology Expert"
    }
  ];

  return (
    <section id="trust-section" className="py-20 bg-[#F8FAFC] font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="Clinical Specialty Focus"
          subtitle="Advanced pediatric surgical care leveraging precision robotic systems, keyhole laparoscopy, and neonatal life-support infrastructures."
          badge="Areas of Practice"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {trustCards.map((card) => (
            <Card
              key={card.id}
              hoverEffect
              className="p-0 border border-slate-200/80 shadow-soft overflow-hidden flex flex-col bg-white rounded-2xl group zoom-container"
            >
              {/* Photo Area (for cards that have images) */}
              {card.image ? (
                <div className="h-44 relative overflow-hidden bg-slate-900 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center zoom-image"
                  />
                </div>
              ) : (
                <div className="h-20 px-6 pt-6 flex justify-between items-start shrink-0 text-left">
                  {card.id === "trust-3" ? (
                    <Scissors className="h-6 w-6 text-brand-blue/70 group-hover:text-brand-green transition-colors duration-300" />
                  ) : (
                    <Activity className="h-6 w-6 text-brand-green/70 group-hover:text-brand-green transition-colors duration-300" />
                  )}
                </div>
              )}

              {/* Procedures/Text list */}
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-1.5 block">
                    {card.badge}
                  </span>
                  
                  <h4 className="font-display font-bold text-base md:text-lg text-brand-navy mb-2 leading-tight group-hover:text-brand-green transition-colors duration-350">
                    {card.title}
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                      Conditions & Procedures:
                    </p>
                    <ul className="space-y-1.5">
                      {card.procedures.map((proc, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-650 group-hover:text-brand-navy transition-colors duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-green transition-colors duration-300 mt-1.5 shrink-0" />
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
