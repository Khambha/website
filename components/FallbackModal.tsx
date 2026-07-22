"use client";

import React from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { doctorData } from "@/constants/doctorData";

interface FallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FallbackModal: React.FC<FallbackModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 md:p-8 max-w-sm w-full mx-4 text-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Profile Image */}
            <div className="mx-auto h-24 w-24 rounded-full overflow-hidden border-4 border-brand-blue-light/30 shadow-md mb-4">
              <img
                src="/images/dr_image.jpeg"
                alt={`Dr. ${doctorData.name}`}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Doctor Info */}
            <h3 className="font-display font-bold text-xl text-brand-navy">
              Dr. {doctorData.name}
            </h3>
            <p className="text-xs text-brand-green font-semibold tracking-wide uppercase mt-1">
              {doctorData.title}
            </p>

            {/* Explanation text */}
            <p className="text-slate-650 font-sans text-xs md:text-sm mt-4 leading-relaxed">
              We are happy to assist you with your child&apos;s surgical care. Please feel free to call our desk directly to coordinate your consultation or answer any immediate questions.
            </p>

            {/* High-contrast CTA Dialer Button */}
            <a
              href={`tel:${doctorData.contactPhone.replace(/[^+\d]/g, "")}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-green text-white font-bold transition-all duration-300 shadow-md hover:shadow-brand-green/20"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              <span>Call Clinic: {doctorData.contactPhone}</span>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
