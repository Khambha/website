"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, PhoneCall, AlertTriangle, CheckCircle, ShieldCheck, HeartHandshake } from "lucide-react";
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
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      message: "",
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

      if (response.ok && resData.success) {
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
    <section id="contact" className="py-20 bg-white font-sans scroll-mt-20">
      <div id="appointment-section" className="max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Trust Info & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
                  Book a Consultation
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Schedule a Visit for Your Child
              </h2>
              <p className="text-slate-500 leading-relaxed text-base md:text-lg font-sans">
                Fill out the secure appointment request form. Our administrative team will verify your details, check availability across practices, and call you to finalize your slot.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-navy">Secure Submission</h4>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">Your personal data is encrypted and handled in compliance with medical privacy rules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-navy">Fast Response</h4>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">We review submissions within 2 to 4 business hours to ensure timely service.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call CTA */}
            <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl space-y-4">
              <h4 className="font-display font-bold text-base text-brand-navy">
                Prefer instant scheduling?
              </h4>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Connect with our scheduling assistant directly via WhatsApp or telephone for instant bookings.
              </p>
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

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 flex">
            <Card className="w-full p-8 md:p-10 border border-slate-200/60 shadow-premium rounded-2xl bg-white flex flex-col justify-center min-h-[500px]">
              <AnimatePresence mode="wait">
                {!successData ? (
                  <motion.form
                    key="appointment-form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 text-left"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-brand-navy">
                          Parent / Guardian Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          {...register("name")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-lg text-sm focus:outline-none transition-all"
                        />
                        {errors.name && (
                          <p role="alert" className="text-xs font-bold text-rose-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-brand-navy">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. (555) 000-0000"
                          {...register("phone")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-lg text-sm focus:outline-none transition-all"
                        />
                        {errors.phone && (
                          <p role="alert" className="text-xs font-bold text-rose-500">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-brand-navy">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="e.g. parent@example.com"
                          {...register("email")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-lg text-sm focus:outline-none transition-all"
                        />
                        {errors.email && (
                          <p role="alert" className="text-xs font-bold text-rose-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-2">
                        <label htmlFor="preferredDate" className="text-sm font-bold text-brand-navy">
                          Preferred Date
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          {...register("preferredDate")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-lg text-sm focus:outline-none transition-all"
                        />
                        {errors.preferredDate && (
                          <p role="alert" className="text-xs font-bold text-rose-500">
                            {errors.preferredDate.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-brand-navy">
                        Case details or symptoms (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Please write down symptoms or details (e.g., age of child, diagnosis)"
                        {...register("message")}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-lg text-sm focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Emergency Checkbox */}
                    <div className="relative flex items-start gap-3 p-4 rounded-lg border border-amber-200 bg-amber-50/50">
                      <div className="flex h-5 items-center">
                        <input
                          id="isEmergency"
                          type="checkbox"
                          {...register("isEmergency")}
                          className="h-4 w-4 rounded border-amber-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="isEmergency" className="font-bold text-amber-800 flex items-center gap-1.5 cursor-pointer">
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                          <span>This is an Urgent Medical Request</span>
                        </label>
                        <p className="text-xs text-amber-700 font-sans mt-0.5">
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
                      className="w-full rounded-lg"
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
