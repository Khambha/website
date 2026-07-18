"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, PhoneCall, AlertTriangle, CheckCircle, ShieldCheck, HeartHandshake, MapPin, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { doctorData } from "@/constants/doctorData";

// Zod form validation schema
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Phone number must be valid"),
  email: z.string().email("Invalid email address"),
  preferredDate: z.string().min(1, "Please pick a preferred date"),
  message: z.string().optional(),
  isEmergency: z.boolean(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const Appointment: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      isEmergency: false,
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        setSuccessData(resData.message);
        reset();
      } else {
        setSubmitError(resData.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Failed to submit request. Check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-white font-sans scroll-mt-20">
      <div id="appointment-section" className="max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Location, Map & Direct Contact - Sticky positioning for beautiful balance */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left space-y-6 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
                  Book a Consultation
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy tracking-tight leading-tight">
                Schedule a Visit for Your Child
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base font-sans">
                Request an appointment slot below. Our medical team will verify your details, check availability at Aster Hospital, and call you to confirm.
              </p>
            </div>

            {/* Interactive Google Map */}
            <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft group">
              <iframe
                title="Aster Hospital Location Map"
                src={doctorData.hospitals[0].mapEmbedUrl}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                allowFullScreen
                loading="lazy"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aster+Women+and+Children+Hospital+Whitefield+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-brand-navy shadow-sm hover:text-brand-green hover:border-brand-green transition-all focus:outline-none flex items-center gap-1"
              >
                <Map className="h-3 w-3" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Address Details */}
            <div className="flex items-start gap-3 text-slate-650 font-sans text-sm leading-relaxed">
              <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-brand-navy block">Aster Women & Children Hospital</span>
                <span className="text-slate-500 text-xs">{doctorData.hospitals[0].address}</span>
              </div>
            </div>

            {/* Direct WhatsApp / Phone Scheduling */}
            <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl space-y-4">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-base text-brand-navy">
                  Prefer instant scheduling?
                </h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Connect with our scheduling assistant directly via WhatsApp or telephone for immediate bookings.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${doctorData.whatsappNumber.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] text-sm font-semibold transition-all shadow-sm focus:outline-none"
                >
                  <PhoneCall className="h-4.5 w-4.5" />
                  <span>WhatsApp Assist</span>
                </a>
                
                <a
                  href={`tel:${doctorData.contactPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-sm font-semibold text-slate-600 transition-all focus:outline-none"
                >
                  <span>Direct Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container Card */}
          <div className="lg:col-span-7">
            <Card className="w-full p-8 md:p-10 border border-slate-200/60 shadow-premium rounded-2xl bg-white flex flex-col justify-start space-y-6">
              {/* Form Header */}
              <div className="text-left space-y-2">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy">Request a Consultation</h3>
                <p className="text-xs md:text-sm text-slate-500 font-sans">
                  Complete the secure details below. We will get back to you within 2-4 business hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!successData ? (
                  <motion.form
                    key="appointment-form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 text-left"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Parent / Guardian Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          {...register("name")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-white rounded-lg text-sm outline-none transition-all placeholder:text-slate-400"
                        />
                        {errors.name && (
                          <p role="alert" className="text-xs font-bold text-rose-500 mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. (555) 000-0000"
                          {...register("phone")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-white rounded-lg text-sm outline-none transition-all placeholder:text-slate-400"
                        />
                        {errors.phone && (
                          <p role="alert" className="text-xs font-bold text-rose-500 mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="e.g. parent@example.com"
                          {...register("email")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-white rounded-lg text-sm outline-none transition-all placeholder:text-slate-400"
                        />
                        {errors.email && (
                          <p role="alert" className="text-xs font-bold text-rose-500 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-1.5">
                        <label htmlFor="preferredDate" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                          Preferred Date
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          {...register("preferredDate")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-white rounded-lg text-sm outline-none transition-all text-slate-700"
                        />
                        {errors.preferredDate && (
                          <p role="alert" className="text-xs font-bold text-rose-500 mt-1">
                            {errors.preferredDate.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Case details or symptoms (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Please write down symptoms or details (e.g., age of child, diagnosis)"
                        {...register("message")}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 focus:bg-white rounded-lg text-sm outline-none transition-all resize-none placeholder:text-slate-400"
                      />
                    </div>

                    {/* Emergency Flag Checkbox */}
                    <div className="p-4 bg-amber-50/40 border border-amber-100/70 rounded-xl flex items-start gap-3">
                      <input
                        id="isEmergency"
                        type="checkbox"
                        {...register("isEmergency")}
                        className="h-4.5 w-4.5 rounded border-amber-300 text-amber-600 focus:ring-amber-500/20 mt-0.5 cursor-pointer"
                      />
                      <div className="space-y-1">
                        <label htmlFor="isEmergency" className="text-sm font-bold text-amber-900 flex items-center gap-2 cursor-pointer">
                          <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                          <span>This is an Urgent Medical Request</span>
                        </label>
                        <p className="text-xs text-amber-700/80 font-sans font-normal leading-relaxed">
                          Check this if your child needs attention within the next 24-48 hours (e.g. acute appendicitis symptoms).
                        </p>
                      </div>
                    </div>

                    {submitError && (
                      <p className="text-sm font-bold text-rose-500 bg-rose-50 border border-rose-100 p-3 rounded-lg">
                        {submitError}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full rounded-lg py-3.5 mt-2"
                    >
                      <Calendar className="h-4.5 w-4.5 mr-2" />
                      <span>Request Consultation</span>
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="appointment-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-6 space-y-6"
                  >
                    <div className="h-16 w-16 bg-brand-green-light text-brand-green rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-brand-navy">
                        Request Received Successfully
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 font-sans leading-relaxed max-w-md">
                        {successData}
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl w-full max-w-sm space-y-1.5 text-left">
                      <h5 className="font-display font-bold text-xs text-brand-navy uppercase tracking-widest">What&apos;s Next?</h5>
                      <ol className="list-decimal list-inside text-xs text-slate-500 space-y-1.5 font-sans">
                        <li>We&apos;ll review clinic calendars.</li>
                        <li>An assistant calls to lock in the time.</li>
                        <li>You&apos;ll get an confirmation email.</li>
                      </ol>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setSuccessData(null)}
                      className="border-slate-200"
                    >
                      Submit Another Request
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
