"use client";

import React from "react";
import { MapPin, Phone, Building2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

export const Affiliations: React.FC = () => {
  const handleScrollToAppointment = () => {
    const target = document.querySelector("#appointment-section");
    if (target) {
      const offset = 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hospitals" className="py-20 bg-white font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-7">
        <SectionTitle
          title="Associated Clinics & Hospitals"
          subtitle={`Dr ${doctorData.name} is affiliated with leading state-of-the-art hospitals equipped with Level-IV NICUs, advanced pediatric suites, and emergency backup.`}
          badge="Practicing Locations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {doctorData.hospitals.map((hospital) => (
            <Card
              key={hospital.id}
              hoverEffect
              className="p-8 flex flex-col md:grid md:grid-cols-12 gap-8 items-stretch rounded-2xl border-slate-200/50 bg-white shadow-soft"
            >
              {/* Info Column */}
              <div className="md:col-span-7 flex flex-col justify-between text-left space-y-6">
                <div className="space-y-4">
                  {/* Hospital Icon Header */}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl text-brand-navy leading-tight">
                        {hospital.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        {hospital.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 font-sans leading-relaxed flex items-start gap-2.5 pt-2">
                    <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{hospital.address}</span>
                  </p>

                  <p className="text-sm text-slate-500 font-sans leading-relaxed flex items-center gap-2.5">
                    <Phone className="h-4.5 w-4.5 text-brand-green shrink-0" />
                    <span className="font-medium text-brand-navy">{hospital.appointmentPhone}</span>
                  </p>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleScrollToAppointment}
                    className="rounded-lg w-full md:w-auto"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>

              {/* Map Embed Column */}
              <div className="md:col-span-5 relative h-48 md:h-auto min-h-[200px] rounded-lg overflow-hidden border border-slate-100 shadow-inner">
                {/* Embed Map Frame */}
                <iframe
                  title={`${hospital.name} Map`}
                  src={hospital.mapEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
