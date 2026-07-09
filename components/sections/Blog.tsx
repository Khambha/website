"use client";

import React from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

export const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-medical-bg font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="Parent Education & Health Tips"
          subtitle={`Insightful articles co-authored by Dr. ${doctorData.name} to help parents understand pediatric health, surgery prep, and recovery.`}
          badge="Latest Articles"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorData.blogArticles.map((article) => (
            <Card
              key={article.id}
              hoverEffect
              className="flex flex-col text-left justify-between h-full p-8 bg-white border border-slate-200/50 shadow-soft group"
            >
              <div className="space-y-4">
                {/* Article Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold font-mono">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-display font-bold text-xl text-brand-navy group-hover:text-brand-blue transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-slate-500 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 pt-5 mt-6 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-350" />
                  {article.date}
                </span>

                <span className="inline-flex items-center gap-1.5 text-brand-blue group-hover:text-brand-green transition-colors duration-300 font-bold uppercase tracking-widest text-[10px]">
                  <span>Read More</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
