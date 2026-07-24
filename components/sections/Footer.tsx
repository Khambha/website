"use client";

import React from "react";
import { Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { doctorData } from "@/constants/doctorData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#030D1B] text-white pt-20 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Branding & Socials */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col text-left focus:outline-none"
          >
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Dr {doctorData.name}
            </span>
            <span className="text-xs text-brand-green font-medium tracking-wide">
              {doctorData.title}
            </span>
          </a>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
            Providing premium, compassionate surgical interventions for pediatric, neonatal, and urological patients.
          </p>
          <div className="flex gap-4">
            <a
              href={doctorData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center text-slate-400"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={doctorData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center text-slate-400"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={doctorData.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center text-slate-400"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.003 3.003 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {doctorData.socialLinks.instagram && (
              <a
                href={doctorData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 hover:bg-[#E1306C] hover:text-white transition-all flex items-center justify-center text-slate-400"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-slate-300">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-white transition-colors">
                About Bio
              </a>
            </li>
            <li>
              <a href="#treatments" onClick={(e) => handleLinkClick(e, "#treatments")} className="hover:text-white transition-colors">
                Treatments
              </a>
            </li>
            <li>
              <a href="#blog" onClick={(e) => handleLinkClick(e, "#blog")} className="hover:text-white transition-colors">
                Video Guides & Blog
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleLinkClick(e, "#testimonials")} className="hover:text-white transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="hover:text-white transition-colors">
                FAQ Center
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <h4 className="font-display font-bold text-sm uppercase tracking-widest text-slate-300">Contact & Hours</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Clock className="h-4.5 w-4.5 text-brand-green shrink-0" />
              <span>{doctorData.workingHours}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4.5 w-4.5 text-brand-blue shrink-0" />
              <a href={`mailto:${doctorData.contactEmail}`} className="hover:text-white transition-colors">
                {doctorData.contactEmail}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4.5 w-4.5 text-brand-green shrink-0" />
              <a href={`tel:${doctorData.contactPhone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                {doctorData.contactPhone}
              </a>
            </li>
            <li className="pt-2">
              <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-2 text-rose-400">
                <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold">24/7 Emergency Line Active</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright area */}
      <div className="max-w-7xl mx-auto px-5 md:px-7 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p className="font-sans">
          &copy; {currentYear} Dr {doctorData.name} Medical Practice. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Use</a>
          <div className="flex items-center gap-1 text-slate-600">
            <ShieldCheck className="h-4 w-4" />
            <span>HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
