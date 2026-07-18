import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Education } from "@/components/sections/Education";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Appointment } from "@/components/sections/Appointment";
import { Footer } from "@/components/sections/Footer";
import { CollapsibleSection } from "@/components/CollapsibleSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* 1. Professional Entrance */}
        <Hero />

        {/* 2. Stats Counters Banner */}
        <Stats />

        {/* 4. Detailed Biography & Mission */}
        <About />

        {/* 3. Trust Credentials */}
        <Trust />

        {/* 6. Surgeon Advantages & Values */}
        <WhyChoose />

        {/* 8. Credentials Tab Switcher */}
        <Education />

        {/* 10. Testimonials Carousel */}
        <CollapsibleSection
          id="testimonials"
          badge="Patient Testimonials"
          title="Stories of Healing & Hope"
          subtitle="Real experiences shared by parents. We treat every child with the same care and precision we would expect for our own."
          bgClass="bg-medical-bg"
        >
          <Testimonials hideHeader />
        </CollapsibleSection>

        {/* 12. Education Blog Grid */}
        <CollapsibleSection
          id="blog"
          badge="Resources & Education"
          title="Parent Education & Health Resources"
          subtitle="Insightful video guides and articles co-authored by Dr. Vijay Ganesh Sankar to help parents understand pediatric health, surgery prep, and recovery."
          bgClass="bg-medical-bg"
        >
          <Blog hideHeader />
        </CollapsibleSection>

        {/* 11. SEO FAQ Accordion */}
        <CollapsibleSection
          id="faq"
          badge="FAQ Help Center"
          title="Frequently Asked Questions"
          subtitle="Answers to common queries regarding pediatric consultation setup, keyhole surgery recovery, and hospital logistics."
          bgClass="bg-white"
        >
          <FAQ hideHeader />
        </CollapsibleSection>

        {/* 13. Zod-Validated Booking Form */}
        <Appointment />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
