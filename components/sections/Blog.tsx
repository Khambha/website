"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowUpRight, Play, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { doctorData } from "@/constants/doctorData";

export const Blog: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<typeof doctorData.videos[0] | null>(null);

  return (
    <section id="blog" className="py-20 bg-medical-bg font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle
          title="Parent Education & Health Resources"
          subtitle={`Insightful video guides and articles co-authored by Dr. ${doctorData.name} to help parents understand pediatric health, surgery prep, and recovery.`}
          badge="Resources & Education"
        />

        {/* Video Library Section (On Top) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 text-left">
            <h3 className="font-display font-bold text-2xl text-brand-navy">Featured Video Guides</h3>
            <span className="h-[2px] bg-brand-blue/20 flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorData.videos.map((video) => (
              <Card
                key={video.id}
                hoverEffect
                className="flex flex-col text-left justify-between h-full bg-white border border-slate-200/50 shadow-soft overflow-hidden cursor-pointer group"
                onClick={() => setActiveVideo(video)}
              >
                <div>
                  {/* Video Thumbnail Area */}
                  <div className="h-48 relative overflow-hidden bg-slate-950 shrink-0">
                    {/* Thumbnail Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                        <Play className="h-6 w-6 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 px-2 py-0.5 rounded text-[10px] font-bold font-mono text-white tracking-wider">
                      {video.duration}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="p-6 space-y-3">
                    <h4 className="font-display font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors duration-200 line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 pb-6 pt-3 flex items-center justify-between text-xs text-brand-blue font-bold uppercase tracking-widest text-[10px]">
                  <span>Watch Video Guide</span>
                  <ArrowUpRight className="h-4 w-4 text-brand-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Written Articles Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-left">
            <h3 className="font-display font-bold text-2xl text-brand-navy">Educational Articles</h3>
            <span className="h-[2px] bg-brand-blue/20 flex-grow" />
          </div>

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
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm">
          <div className="bg-slate-950 w-full max-w-4xl rounded-2xl border border-white/10 shadow-premium overflow-hidden flex flex-col relative">
            {/* Header info */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/60 border-b border-white/5">
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                Video Guide
              </span>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Frame Area */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>

            {/* Bottom info */}
            <div className="p-6 text-left space-y-2 bg-slate-900/40">
              <h4 className="font-display font-bold text-lg text-white">
                {activeVideo.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
