"use client";

import React from "react";
import { Calendar, Phone, ArrowDown, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { doctorData } from "@/constants/doctorData";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

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
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-white overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[#F8FAFC]/50 pointer-events-none" />

      {/* Subtle Vertical Architectural Gridlines */}
      <div className="absolute left-1/4 top-0 h-full w-[1px] bg-slate-200/35 pointer-events-none hidden lg:block" />
      <div className="absolute right-1/4 top-0 h-full w-[1px] bg-slate-200/35 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1] mb-6"
          >
            Delicate Care for What Matters Most
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-lg text-slate-650 leading-relaxed max-w-xl mb-8"
          >
            Dr. <span className="font-semibold text-brand-navy">{doctorData.name}</span>, specializing in advanced neonatal reconstruction and urology, offers your child world-class clinical expertise combined with compassionate care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToAppointment}
              className="flex items-center gap-2 group shadow-md hover:shadow-brand-green/20 bg-brand-blue hover:bg-brand-green hover:border-brand-green text-white font-semibold transition-all duration-300"
            >
              <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Book Consultation</span>
            </Button>

            <a
              href={`tel:${doctorData.contactPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-brand-blue hover:text-brand-blue text-slate-700 bg-white font-semibold transition-all duration-300 px-8 py-3 rounded-lg text-sm shadow-sm"
            >
              <Phone className="h-5 w-5 text-brand-green" />
              <span>Call Clinic</span>
            </a>
          </motion.div>

          {/* Associated Hospital Info */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-650 border-t border-slate-100 pt-6 w-full max-w-xl text-left"
          >
            <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block w-full mb-1">
              Primary Affiliation
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Aster+Women+and+Children+Hospital+Whitefield+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-brand-blue-light/10 border border-brand-blue/10 hover:border-brand-green/30 hover:bg-brand-green-light/5 hover:text-brand-green px-4 py-2 rounded-xl text-brand-navy transition-all duration-300 cursor-pointer group/badge"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0 animate-pulse group-hover/badge:bg-brand-green" />
              <span className="font-semibold text-sm">
                Aster Women and Children Hospital, Whitefield, Bangalore
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Doctor Headshot Block */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full max-w-[400px] aspect-[4/5] rounded-2xl bg-slate-100 border border-slate-200/80 shadow-premium relative overflow-hidden group zoom-container"
          >
            {/* Real Doctor Headshot Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dr_image.jpeg"
              alt={`Dr. ${doctorData.name}`}
              className="w-full h-full object-cover object-center zoom-image"
            />

            {/* Elegant overlay gradient on bottom of image for readability */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-transparent p-6 text-left flex flex-col justify-end">
              <h3 className="font-display font-bold text-xl text-white">Dr. {doctorData.name}</h3>
              <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mt-1.5">
                <span>{doctorData.title}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
        <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="p-1 bg-slate-100 rounded-full border border-slate-200"
          onClick={() => {
            const target = document.querySelector("#stats-section");
            if (target) {
              const offset = 80;
              window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                behavior: "smooth",
              });
            }
          }}
        >
          <ArrowDown className="h-4 w-4 text-brand-blue" />
        </motion.div>
      </div>
    </section>
  );
};
