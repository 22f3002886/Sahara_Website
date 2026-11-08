import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, HeartHandshake, MapPin, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-warm-200/80 bg-gradient-to-b from-warm-100/60 via-warm-50 to-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Affiliation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sahara-50 border border-sahara-200/80 text-sahara-800 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sahara-600 animate-pulse" />
              <span>Official Social Welfare Society • IIT Madras BS Degree</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
              Together, We Make a{" "}
              <span className="text-sahara-800 underline decoration-sahara-300 decoration-wavy decoration-2 underline-offset-8">
                Difference.
              </span>
            </h1>

            {/* Authentic Introduction */}
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-sans max-w-2xl font-normal">
              We, the student community of the IIT Madras BS Degree Programme, are dedicated to instilling a sense of purpose and joy in serving those in need. Through hands-on offline volunteering, NGO collaborations, and awareness campaigns, we translate compassion into meaningful social action.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#activities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-sahara-800 hover:bg-sahara-900 rounded-md transition-colors shadow-xs"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-stone-800 bg-white hover:bg-warm-100 border border-warm-300 rounded-md transition-colors"
              >
                <span>Join SAHARA / Connect</span>
                <HeartHandshake className="w-4 h-4 text-sahara-800" aria-hidden="true" />
              </a>
            </div>

            {/* Core Values Strip */}
            <div className="pt-6 border-t border-warm-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-stone-900">Awareness</p>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">Highlighting critical social causes</p>
              </div>
              <div className="border-l border-warm-200 pl-4">
                <p className="font-serif text-lg sm:text-xl font-bold text-stone-900">Compassion</p>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">Empathy for underprivileged & animals</p>
              </div>
              <div className="border-l border-warm-200 pl-4">
                <p className="font-serif text-lg sm:text-xl font-bold text-stone-900">Humanity</p>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">Grassroots offline student service</p>
              </div>
            </div>
          </div>

          {/* Genuine Photography Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-lg overflow-hidden border border-warm-300 bg-warm-100 shadow-float">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/images/events/robin-hood-army.jpeg"
                    alt="SAHARA students volunteering with Robin Hood Army in Indore"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                    className="object-cover"
                  />
                </div>

                {/* Editorial Caption Bar */}
                <div className="p-4 bg-white/95 border-t border-warm-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sahara-800 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Indore, MP • Robin Hood Army Collaboration</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1">
                    SAHARA volunteers conducting drawing sessions and distributing student-funded stationery for 30 underprivileged children.
                  </p>
                </div>
              </div>

              {/* Verified Volunteer Cohort Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-warm-50 border border-warm-300 rounded-lg p-3 sm:p-3.5 shadow-card flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sahara-100 border border-sahara-200 flex items-center justify-center text-sahara-800">
                  <Users className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">IIT Madras BS Community</p>
                  <p className="text-[11px] text-stone-600">Students across India serving together</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
