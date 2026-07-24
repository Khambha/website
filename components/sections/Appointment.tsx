"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, PhoneCall, AlertTriangle, CheckCircle, MapPin, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { doctorData } from "@/constants/doctorData";

// Zod form validation schema
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => {
        const cleaned = val.replace(/[^\d+]/g, "");
        const indianMobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
        const internationalMobileRegex = /^\+\d{10,14}$/;
        return indianMobileRegex.test(cleaned) || internationalMobileRegex.test(cleaned);
      },
      {
        message: "Please enter a valid 10-digit mobile number (e.g. 9876543210 or +91 9876543210)",
      }
    ),
  email: z.string().email("Invalid email address"),
  preferredDate: z
    .string()
    .min(1, "Please pick a preferred date")
    .refine(
      (val) => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const todayStr = `${yyyy}-${mm}-${dd}`;
        return val >= todayStr;
      },
      {
        message: "Preferred date cannot be in the past",
      }
    ),
  message: z.string().optional(),
  isEmergency: z.boolean(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const Appointment: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      e.preventDefault();
      const email = "drvijayganeshsankar@gmail.com";
      const subject = encodeURIComponent("Pediatric Surgery Consultation Request - Dr Vijay Ganesh");
      const gmailUrl = `googlegmail:///co?to=${email}&subject=${subject}`;
      const mailtoUrl = `mailto:${email}?subject=${subject}`;
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isIOS) {
        const start = Date.now();
        window.location.href = gmailUrl;
        setTimeout(() => {
          if (Date.now() - start < 2000) {
            window.location.href = mailtoUrl;
          }
        }, 1500);
      } else {
        window.location.href = mailtoUrl;
      }
    }
  };

  const todayObj = new Date();
  const yyyy = todayObj.getFullYear();
  const mm = String(todayObj.getMonth() + 1).padStart(2, "0");
  const dd = String(todayObj.getDate()).padStart(2, "0");
  const todayMinStr = `${yyyy}-${mm}-${dd}`;

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
        // Construct WhatsApp message template text
        const urgentHeader = data.isEmergency 
          ? "🚨 *URGENT EMERGENCY CONSULTATION* 🚨\n" 
          : "*New Consultation Appointment Request*\n";

        const whatsappText = `${urgentHeader}` +
          `-----------------------------------------\n` +
          `• *Parent Name:* ${data.name}\n` +
          `• *Phone:* ${data.phone}\n` +
          `• *Email:* ${data.email}\n` +
          `• *Preferred Date:* ${data.preferredDate}\n` +
          `• *Case Details:* ${data.message || "None provided"}\n` +
          `-----------------------------------------`;

        const cleanPhone = doctorData.whatsappNumber.replace(/\+/g, "").replace(/\s+/g, "");
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(whatsappText)}`;

        // Redirect to WhatsApp in a new tab
        if (typeof window !== "undefined") {
          window.open(whatsappUrl, "_blank");
          window.dispatchEvent(new Event("open-fallback-modal"));
        }

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
      <div id="appointment-section" className="max-w-7xl mx-auto px-5 md:px-7 scroll-mt-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-green uppercase">
              Book a Consultation
            </span>
            <span className="h-[1px] w-5 bg-brand-green/30 shrink-0" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy tracking-tight leading-tight">
            Schedule a Visit for Your Child
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-sans leading-relaxed">
            Request an appointment slot or contact our scheduling desk directly for immediate bookings.
          </p>
        </div>

        {/* Two parallel cards of equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Location, Map & Direct Contact Card */}
          <div className="lg:col-span-5 flex">
            <Card className="w-full p-8 md:p-10 border border-slate-200/60 shadow-premium rounded-2xl bg-white flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2 text-left">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand-green uppercase block">
                    Contact & Visit
                  </span>
                  <h3 className="font-display font-bold text-xl text-brand-navy">
                    Clinic Location
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Find us at Whitefield or connect with our scheduling desk instantly.
                  </p>
                </div>

                {/* Interactive Google Map */}
                <div className="relative h-56 rounded-xl overflow-hidden border border-slate-200/80 shadow-soft group">
                  <iframe
                    title="Aster Hospital Location Map"
                    src={doctorData.hospitals[0].mapEmbedUrl}
                    className="w-full h-full border-0 grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-300"
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
                <div className="flex items-start gap-3 text-slate-650 font-sans text-xs leading-relaxed text-left">
                  <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-navy block text-sm">Aster Women & Children Hospital</span>
                    <span className="text-slate-500 block mt-0.5 leading-relaxed">{doctorData.hospitals[0].address}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Phone Scheduling at the bottom of Left Card */}
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl space-y-3 mt-6 text-left">
                <h4 className="font-display font-bold text-sm text-brand-navy">
                  Instant Assistant Booking
                </h4>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  Click below to message our clinic coordinator via WhatsApp or call our desk directly.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`https://wa.me/${doctorData.whatsappNumber.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-semibold transition-all shadow-sm focus:outline-none"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>WhatsApp Assist</span>
                  </a>
                  
                  <a
                    href={`tel:${doctorData.contactPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-600 transition-all focus:outline-none"
                  >
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>

              {/* More Ways to Connect */}
              <div className="border-t border-slate-100 pt-5 mt-5 text-left">
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">
                  More Ways to Connect
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=drvijayganeshsankar@gmail.com&su=Pediatric%20Surgery%20Consultation%20Request%20-%20Dr.%20Vijay%20Ganesh"
                    onClick={handleEmailClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-brand-blue border border-brand-blue hover:bg-brand-blue-hover hover:border-brand-blue-hover transition-all duration-300 group/icon cursor-pointer"
                  >
                    <svg className="h-6.5 w-6.5 text-[#EA4335] md:text-white md:group-hover/icon:text-[#EA4335] mb-1.5 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                    </svg>
                    <span className="text-xs font-bold text-white transition-colors mt-0.5">Email</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/pedsurgeonvijay?igsh=MXJ2cWw3eWU5MjQ4dA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-brand-blue border border-brand-blue hover:bg-brand-blue-hover hover:border-brand-blue-hover transition-all duration-300 group/icon cursor-pointer"
                  >
                    <svg className="h-6.5 w-6.5 text-[#E1306C] md:text-white md:group-hover/icon:text-[#E1306C] mb-1.5 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="text-xs font-bold text-white transition-colors mt-0.5">Instagram</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dr-vijay-ganesh-sankar-633b92288?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-brand-blue border border-brand-blue hover:bg-brand-blue-hover hover:border-brand-blue-hover transition-all duration-300 group/icon cursor-pointer"
                  >
                    <svg className="h-6.5 w-6.5 text-[#0077B5] md:text-white md:group-hover/icon:text-[#0077B5] mb-1.5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-xs font-bold text-white transition-colors mt-0.5">LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Form Container Card */}
          <div className="lg:col-span-7 flex">
            <Card className="w-full p-8 md:p-10 border border-slate-200/60 shadow-premium rounded-2xl bg-white flex flex-col justify-between">
              {/* Form Header */}
              <div className="mb-6 text-left space-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-blue uppercase block">
                  Secure Form
                </span>
                <h3 className="font-display font-bold text-xl text-brand-navy">Request a Consultation</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
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
                    className="flex-1 flex flex-col justify-between space-y-6 text-left"
                    noValidate
                  >
                    <div className="space-y-5">
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
                            min={todayMinStr}
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
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full rounded-lg py-3.5 mt-4"
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
