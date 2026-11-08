import React from "react";
import Image from "next/image";
import {
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Users2,
  CheckCircle2,
  Target,
  Eye,
  Heart,
} from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Impacting Real Lives",
    description:
      "We believe social welfare extends beyond virtual discussions. Through planning, direct fundraising, and on-ground execution, we reach out to vulnerable groups, striving to create lasting improvements in their day-to-day lives.",
  },
  {
    icon: Eye,
    title: "Spreading Awareness",
    description:
      "Knowledge drives meaningful change. Through interactive discussions, guest lectures with grassroot changemakers, and curated educational initiatives, we highlight pressing humanitarian and animal welfare challenges.",
  },
  {
    icon: Heart,
    title: "Hands-on Field Volunteering",
    description:
      "As students of an online-first degree spread across the country, offline welfare trips provide rare opportunities to connect in person, witness NGO operations firsthand, and perform impactful public service.",
  },
  {
    icon: Users2,
    title: "Bridging the Student-Community Gap",
    description:
      "SAHARA acts as a trusted conduit connecting students who wish to give back with established welfare initiatives like Robin Hood Army and Animal Aid Unlimited, nurturing leadership, selflessness, and empathy.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-warm-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-warm-100 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <span>About SAHARA</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Fostering Social Responsibility Within India’s Largest Tech Degree
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Founded by students of the pioneering IIT Madras Bachelor of Science (BS) Degree Programme, SAHARA provides a vibrant collegiate platform for compassionate action. While our academic curriculum spans computer science and data applications, our society grounds us in real-world human empathy.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative & Mission/Vision */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mission */}
              <div className="p-6 rounded-lg bg-warm-50 border border-warm-200">
                <span className="text-xs font-bold uppercase tracking-wider text-sahara-800">
                  Our Mission
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-stone-900">
                  To Raise Awareness, Inspire Compassion & Promote Humanity
                </h3>
                <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                  To build a collegiate culture where students proactively identify societal hardships, support grassroots non-profits, and translate personal privilege into compassionate service for those in need.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-lg bg-warm-50 border border-warm-200">
                <span className="text-xs font-bold uppercase tracking-wider text-sahara-800">
                  Our Vision
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-stone-900">
                  Grassroots Impact Beyond the Virtual Classroom
                </h3>
                <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                  To serve as India’s leading distance-degree welfare society, proving that geographically dispersed students can unite to deliver tangible assistance to animal shelters, slum communities, and humanitarian causes.
                </p>
              </div>

            </div>

            {/* How We Encourage Student Responsibility */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                How SAHARA Nurtures Tomorrow’s Empathetic Leaders
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                By organizing offline social welfare expeditions and student-led initiatives, SAHARA cultivates crucial life skills that complement academic rigor:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Hands-on NGO operational exposure & ethical volunteering",
                  "Direct community interaction & empathetic active listening",
                  "Collaborative nationwide student travel and peer teamwork",
                  "Public speaking, advocacy, and problem-solving through competitions",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-sahara-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Genuine Composition Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-warm-300 bg-warm-100 shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/events/social-welfare-drive.webp"
                  alt="SAHARA social welfare hands united initiative"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-warm-50/90 border-t border-warm-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Core Philosophy
                </p>
                <p className="font-serif text-sm font-semibold text-stone-900 mt-0.5 italic">
                  &ldquo;Instilling a sense of purpose and joy in assisting the less fortunate.&rdquo;
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-warm-100/60 border border-warm-200 text-xs sm:text-sm text-stone-700">
              <span className="font-semibold text-stone-900 block mb-1">
                Collegiate Affiliation
              </span>
              SAHARA operates as an officially recognized student society within the IIT Madras BS Degree Programme ecosystem, representing diverse students across India united by a shared dedication to social upliftment.
            </div>
          </div>

        </div>

        {/* Four Core Pillars Grid */}
        <div className="mt-20 pt-16 border-t border-warm-200">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sahara-800">
              Strategic Focus
            </span>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Our Core Society Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-warm-50 hover:bg-warm-100/80 transition-colors border border-warm-200/90 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-white border border-warm-200 flex items-center justify-center text-sahara-800 shadow-2xs">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-bold text-stone-900">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-warm-200/60 text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Pillar 0{i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
