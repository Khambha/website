"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { doctorData } from "@/constants/doctorData";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Testimonials", href: "#testimonials" },
    // { label: "Videos", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans border-b",
          isScrolled
            ? "glassmorphism border-slate-200/50 shadow-soft py-2"
            : "bg-transparent border-transparent py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-7 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center text-left focus:outline-none"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            <Image
              src="/logo_v3.png"
              alt={`Dr ${doctorData.name} - ${doctorData.title}`}
              width={500}
              height={101}
              priority
              unoptimized
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-8 md:h-10 lg:h-12" : "h-10 md:h-12 lg:h-14"
              )}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group relative text-sm font-semibold text-slate-650 hover:text-brand-navy transition-colors duration-300 py-1.5"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${doctorData.contactPhone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors py-2 px-3 rounded-lg focus:outline-none whitespace-nowrap shrink-0"
            >
              <Phone className="h-4 w-4 text-brand-green" />
              <span>Call Now</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const target = document.querySelector("#appointment-section");
                if (target) {
                  const offset = 80;
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                    behavior: "smooth"
                  });
                }
              }}
              className="flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-xl font-bold text-slate-800 hover:text-brand-blue border-b border-slate-100 pb-3"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <a
                href={`tel:${doctorData.contactPhone.replace(/[^+\d]/g, "")}`}
                className="flex items-center justify-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200 font-bold text-slate-700 hover:text-brand-blue text-center"
              >
                <Phone className="h-5 w-5 text-brand-green" />
                <span>Call {doctorData.contactPhone}</span>
              </a>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setIsOpen(false);
                  const target = document.querySelector("#appointment-section");
                  if (target) {
                    const offset = 80;
                    window.scrollTo({
                      top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                      behavior: "smooth"
                    });
                  }
                }}
                className="flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
