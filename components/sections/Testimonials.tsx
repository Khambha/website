"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Play, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  hideHeader?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ hideHeader = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const testimonials = doctorData.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className={cn(hideHeader ? "py-0 bg-transparent" : "py-20 bg-medical-bg", "font-sans scroll-mt-20")}>
      <div className="max-w-7xl mx-auto px-5 md:px-7">
        {!hideHeader && (
          <SectionTitle
            title="Stories of Healing & Hope"
            subtitle="Real experiences shared by parents. We treat every child with the same care and precision we would expect for our own."
            badge="Patient Testimonials"
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Panel: Text Testimonial Slider */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left h-full">
            <div className="min-h-[320px] relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentTestimonial.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Big quotation mark icon */}
                  <Quote className="h-12 w-12 text-brand-blue/15" />
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <p className="font-sans text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">
                    {currentTestimonial.story}
                  </p>

                  <div className="border-t border-slate-200/60 pt-4">
                    <p className="font-display font-bold text-lg text-brand-navy">
                      {currentTestimonial.patientName}
                    </p>
                    <p className="text-xs font-bold text-brand-green uppercase tracking-wider mt-0.5">
                      Case: {currentTestimonial.condition}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-brand-blue hover:border-brand-blue hover:shadow-soft transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <span className="text-sm font-semibold text-slate-400 font-mono">
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                type="button"
                onClick={() => navigate(1)}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-brand-blue hover:border-brand-blue hover:shadow-soft transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Panel: Video Mockup & Trust Badges */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card className="p-1 bg-gradient-to-tr from-brand-blue to-cyan-500 rounded-2xl shadow-premium overflow-hidden relative group">
              <div className="aspect-video w-full rounded-xl bg-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                {/* Background decorative overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/45 transition-colors duration-300" />
                
                {/* Play Button Action */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="h-16 w-16 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-lg hover:shadow-brand-blue/30 transition-shadow duration-300 relative z-10 cursor-pointer focus:outline-none"
                  aria-label="Play video testimonial placeholder"
                >
                  <Play className="h-6 w-6 fill-brand-blue translate-x-0.5" />
                </motion.button>

                <div className="mt-4 text-center z-10">
                  <span className="text-[10px] font-bold text-slate-350 uppercase tracking-widest mb-1.5 block">
                    Case Study
                  </span>
                  <h4 className="font-display font-bold text-sm text-white">Video Consultation Case Study</h4>
                </div>
              </div>
            </Card>

            <div className="flex items-center gap-3 bg-white border border-slate-200/50 p-5 rounded-2xl shadow-soft text-left">
              <div className="p-3 bg-brand-blue-light text-brand-blue rounded-lg">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-brand-navy">Looking for similar cases?</h4>
                <p className="text-xs text-slate-500 font-sans leading-normal mt-0.5">
                  Our clinical coordinators can connect you with parents who went through identical treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Mockup Popup Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 text-center relative z-10 shadow-premium"
              role="dialog"
            >
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Video Testimonial Placeholder</h3>
              <p className="text-sm text-slate-500 mb-6 font-sans">
                Once actual patient video files are provided, they will be embedded here.
              </p>
              <div className="aspect-video w-full rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200 mb-6">
                <span className="text-slate-400 font-mono text-xs">Video Player Sandbox [HTML5 / YouTube / Vimeo]</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" onClick={() => setIsVideoModalOpen(false)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
