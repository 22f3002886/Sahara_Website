"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ACTIVITIES_AND_EVENTS } from "@/data/events";
import { Calendar, MapPin, Building, ArrowUpRight, Award, Compass, Sparkles } from "lucide-react";

const CATEGORIES = ["All Initiatives", "Field Initiatives", "Guest Lectures", "Student Contests"] as const;

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Initiatives");

  const filteredEvents = ACTIVITIES_AND_EVENTS.filter((event) => {
    if (selectedCategory === "All Initiatives") return true;
    if (selectedCategory === "Field Initiatives") return event.category === "Field Initiative";
    if (selectedCategory === "Guest Lectures") return event.category === "Guest Lecture";
    if (selectedCategory === "Student Contests") return event.category === "Student Contest";
    return true;
  });

  return (
    <section id="activities" className="py-20 md:py-28 bg-white border-b border-warm-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-warm-200">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-warm-100 text-stone-700 text-xs font-semibold uppercase tracking-wider">
              <span>Initiatives Archive</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Grassroots Action & Past Welfare Drives
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Authentic documentation of our student-led offline community expeditions, humanitarian partnerships, expert masterclasses, and awareness campaigns.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sahara-800 ${
                  selectedCategory === cat
                    ? "bg-sahara-800 text-white shadow-xs"
                    : "bg-warm-50 text-stone-700 hover:bg-warm-100 border border-warm-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Editorial Layout */}
        <div className="mt-12 space-y-12">
          {filteredEvents.map((event, index) => {
            const isAlternate = index % 2 === 1;
            return (
              <article
                key={event.id}
                className="rounded-xl border border-warm-200/90 bg-warm-50/50 overflow-hidden shadow-subtle hover:shadow-card transition-shadow p-6 sm:p-8 lg:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isAlternate ? "lg:flex-row-reverse" : ""
                }`}>
                  
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${isAlternate ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-lg overflow-hidden border border-warm-300 bg-warm-100 shadow-sm">
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                          className="object-cover"
                        />
                      </div>
                      
                      {event.partner && (
                        <div className="p-3 bg-white/95 border-t border-warm-200 flex items-center justify-between">
                          <span className="text-xs font-semibold text-stone-700">
                            Partner: {event.partner}
                          </span>
                          {event.partnerLogo && (
                            <div className="relative h-6 w-16">
                              <Image
                                src={event.partnerLogo}
                                alt={event.partner}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isAlternate ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600">
                      <span className="px-2.5 py-0.5 rounded font-semibold bg-sahara-100 text-sahara-800 border border-sahara-200">
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                        <span>{event.date}</span>
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                          <span>{event.location}</span>
                        </span>
                      )}
                    </div>

                    {/* Event Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                      {event.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                      {event.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                        Key Accomplishments & Activities:
                      </p>
                      <ul className="space-y-1.5">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-stone-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sahara-600 mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Metrics Pill Strip */}
                    {event.impactMetrics && event.impactMetrics.length > 0 && (
                      <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {event.impactMetrics.map((metric, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded bg-white border border-warm-200 text-left"
                          >
                            <span className="block text-[11px] font-medium text-stone-500">
                              {metric.label}
                            </span>
                            <span className="block font-serif text-sm sm:text-base font-bold text-stone-900 mt-0.5">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
