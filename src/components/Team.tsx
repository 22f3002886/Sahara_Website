"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";
import { Quote, Sparkles } from "lucide-react";

const CATEGORIES = ["All", "Leadership", "Heads", "Advisors", "Core Team"] as const;

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredMembers =
    activeCategory === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === activeCategory);

  return (
    <section id="team" className="py-20 md:py-28 bg-warm-50/70 border-b border-warm-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-warm-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sahara-100 text-sahara-800 text-xs font-semibold uppercase tracking-wider">
              <span>The Changemakers</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              The Dedicated Faces Behind SAHARA
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Meet the founders, coordinators, and student leaders who dedicate their time alongside academic commitments to organize welfare drives across India.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sahara-800 ${
                  activeCategory === cat
                    ? "bg-sahara-800 text-white shadow-xs"
                    : "bg-white text-stone-700 hover:bg-warm-100 border border-warm-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg border border-warm-200/90 shadow-subtle hover:shadow-card transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Genuine Photo Container */}
                <div className="relative aspect-square w-full bg-warm-100 overflow-hidden border-b border-warm-100">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 280px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-stone-700 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded border border-warm-200 shadow-2xs">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-sahara-800 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-sahara-700 mt-0.5">
                    {member.role}
                  </p>

                  {member.bio && (
                    <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>

              {/* Quote / Reflection snippet */}
              {member.quote && (
                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-warm-100 text-xs italic text-stone-500 flex items-start gap-1.5 leading-relaxed">
                    <Quote className="w-3.5 h-3.5 text-sahara-400 shrink-0 mt-0.5 not-italic" aria-hidden="true" />
                    <span className="line-clamp-3">&ldquo;{member.quote}&rdquo;</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Continuous Leadership & Community Footnote */}
        <div className="mt-14 p-6 rounded-lg bg-warm-100/70 border border-warm-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sahara-800 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-serif font-bold text-stone-900 text-base">
                Growing the Movement
              </p>
              <p className="text-xs sm:text-sm text-stone-600">
                SAHARA is continuously inducting motivated coordinators, content creators, and web developers from each incoming IITM BS cohort.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-sahara-800 bg-white hover:bg-warm-50 border border-warm-300 rounded-md transition-colors shrink-0"
          >
            Join the Core Team
          </a>
        </div>

      </div>
    </section>
  );
}
