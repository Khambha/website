"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Activity, Award, FileText, Heart, Building } from "lucide-react";


interface StatItemProps {
  valueString: string; // e.g. "15+", "8000+", "15000+"
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const StatCounter: React.FC<StatItemProps> = ({ valueString, label, icon: Icon, color }) => {
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
      className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-soft hover:shadow-premium flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-white/10 hover:border-brand-gold/30"
    >
      <div className={`p-3 rounded-lg mb-4 ${color} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mb-1 bg-gradient-to-r from-brand-gold via-white to-white bg-clip-text text-transparent">
        {isInView ? formattedCount : "0" + suffix}
      </span>
      <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest leading-relaxed">
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
      color: "bg-brand-gold/20 text-brand-gold",
    },
    {
      valueString: "6,000+",
      label: "Surgeries Performed",
      icon: Activity,
      color: "bg-brand-green/20 text-brand-green-light",
    },
    {
      valueString: "10,000+",
      label: "Patients Treated",
      icon: Heart,
      color: "bg-rose-500/20 text-rose-300",
    },
    {
      valueString: "25+",
      label: "Medical Publications",
      icon: FileText,
      color: "bg-indigo-500/20 text-indigo-300",
    },
    {
      valueString: "2+",
      label: "State Councils",
      icon: Award,
      color: "bg-amber-500/20 text-amber-300",
    },
    {
      valueString: "6+",
      label: "Major Centers served",
      icon: Building,
      color: "bg-cyan-500/20 text-cyan-300",
    }
  ];

  return (
    <section id="stats-section" className="py-16 bg-brand-navy font-sans relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              valueString={stat.valueString}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
