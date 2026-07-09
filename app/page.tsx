import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Stats } from "@/components/sections/Stats";
import { Affiliations } from "@/components/sections/Affiliations";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Appointment } from "@/components/sections/Appointment";
import { Footer } from "@/components/sections/Footer";

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

        {/* 3. Trust Credentials */}
        <Trust />

        {/* 4. Detailed Biography & Mission */}
        <About />

        {/* 5. Treatments Search & Grid */}
        <Expertise />

        {/* 6. Surgeon Advantages & Values */}
        <WhyChoose />

        {/* 7. Career Timeline */}
        <Experience />

        {/* 8. Credentials Tab Switcher */}
        <Education />

        {/* 9. Hospital Affiliations Map Directory */}
        <Affiliations />

        {/* 10. Testimonials Carousel */}
        <Testimonials />

        {/* 11. SEO FAQ Accordion */}
        <FAQ />

        {/* 12. Education Blog Grid */}
        <Blog />

        {/* 13. Zod-Validated Booking Form */}
        <Appointment />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
