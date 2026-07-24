"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Activity, Award, FileText, Heart, Building } from "lucide-react";

interface StatItemProps {
  valueString: string; // e.g. "15+", "8000+", "15000+"
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatCounter: React.FC<StatItemProps> = ({ valueString, label, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  // Parse the number out of the value string
  const numericValue = parseInt(valueString.replace(/,/g, "").replace(/\+/g, ""), 10);
  const suffix = valueString.includes("+") ? "+" : "";

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1.5;
      const steps = 60;
      const stepTime = (duration * 1000) / steps;
      const increment = Math.ceil(numericValue / steps);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const formattedCount = count.toLocaleString() + suffix;

  return (
    <div
      ref={ref}
      className="p-6 bg-slate-900/40 border border-white/10 rounded-2xl shadow-soft hover:shadow-premium flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-slate-900/60 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
    >
      {/* Glow cyan icon box */}
      <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm flex items-center justify-center">
        <Icon className="h-5.5 w-5.5" />
      </div>
      
      {/* Pure white count */}
      <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-2">
        {isInView ? formattedCount : "0" + suffix}
      </span>
      
      {/* Light grey uppercase label */}
      <span className="text-[10px] md:text-xs font-semibold text-slate-300 uppercase tracking-wider leading-relaxed">
        {label}
      </span>
    </div>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    {
      valueString: "15+",
      label: "Years Experience",
      icon: Award,
    },
    {
      valueString: "6,000+",
      label: "Surgeries Performed",
      icon: Activity,
    },
    {
      valueString: "10,000+",
      label: "Patients Treated",
      icon: Heart,
    },
    {
      valueString: "25+",
      label: "Medical Publications",
      icon: FileText,
    },
    {
      valueString: "2+",
      label: "State Councils",
      icon: Award,
    },
    {
      valueString: "6+",
      label: "Major Centers Served",
      icon: Building,
    }
  ];

  const handleScrollToAppointment = () => {
    const target = document.querySelector("#appointment-section");
    if (target) {
      const offset = 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="stats-section" className="py-16 bg-[#0A1128] font-sans scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-7 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              valueString={stat.valueString}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Neon Glow Cyan CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleScrollToAppointment}
            className="px-10 py-4 bg-cyan-950/60 border border-cyan-400 text-white font-display font-bold text-sm rounded-full tracking-wider uppercase transition-all duration-300 hover:bg-cyan-500 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] cursor-pointer focus:outline-none"
          >
            Book An Appointment
          </button>
        </div>

      </div>
    </section>
  );
};
