"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

const CloseIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-4 w-4 text-brand-green mt-0.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
  </svg>
);

interface TreatmentCardProps {
  card: {
    id: string;
    image: string;
    badge: string;
    title: string;
    description: string;
    procedures: string[];
  };
  onOpen: () => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ card, onOpen }) => {
  return (
    <div
      onClick={onOpen}
      className="p-0 border border-slate-200/80 shadow-soft hover:shadow-premium overflow-hidden flex flex-col bg-white rounded-2xl group zoom-container text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 h-full"
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

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-1.5 block">
            {card.badge}
          </span>
          
          <h4 className="font-display font-bold text-lg text-brand-navy mb-2 leading-tight group-hover:text-brand-green transition-colors duration-350">
            {card.title}
          </h4>

          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
            {card.description}
          </p>
        </div>

        {/* Action Link at Bottom */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-green transition-colors duration-300 mt-auto">
          <span>View Procedures</span>
          <svg
            className="h-3.5 w-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

interface TreatmentModalProps {
  card: {
    id: string;
    image: string;
    badge: string;
    title: string;
    description: string;
    procedures: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const TreatmentModal: React.FC<TreatmentModalProps> = ({ card, isOpen, onClose }) => {
  if (!card) return null;

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
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 text-left z-10 overflow-hidden max-h-[85vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-655 transition-all cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest block mb-1">
                {card.badge}
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy leading-tight pr-6">
                {card.title}
              </h3>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto flex-1 space-y-6 pr-1 my-2">
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h5>
                <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Conditions & Procedures</h5>
                <ul className="space-y-3">
                  {card.procedures.map((proc, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-slate-700">
                      <CheckIcon />
                      <span className="font-medium">{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 border-t border-slate-100 pt-4 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-green text-white text-xs md:text-sm font-bold transition-all duration-300 shadow-md hover:shadow-brand-green/20 cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Trust: React.FC = () => {
  const treatments = doctorData.treatments;
  const [selectedCard, setSelectedCard] = useState<typeof treatments[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (card: typeof treatments[0]) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="treatments" className="py-12 bg-[#F8FAFC] font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-7">
        <SectionTitle
          title="Treatments & Clinical Specialties"
          subtitle="Advanced pediatric surgical procedures customized for newborn congenital anomalies, urological defects, and keyhole operations."
          badge="Treatments & Procedures"
          className="mb-4 md:mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
          {treatments.map((card) => (
            <TreatmentCard
              key={card.id}
              card={card}
              onOpen={() => handleOpenModal(card)}
            />
          ))}
        </div>
      </div>

      {/* Specialty Detail Dialog Modal */}
      <TreatmentModal
        card={selectedCard}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
