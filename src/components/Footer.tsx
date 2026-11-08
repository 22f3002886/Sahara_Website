import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ExternalLink,
  ArrowUp,
  Heart,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-stone-700 bg-white shadow-xs">
                <Image
                  src="/images/branding/sahara-logo.jpeg"
                  alt="SAHARA Official Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white tracking-tight">
                  SAHARA
                </span>
                <span className="block text-xs font-medium text-sahara-400">
                  The Social Welfare Society • IIT Madras BS Degree
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed font-sans max-w-sm">
              Dedicated to instilling a sense of purpose and joy in assisting the less fortunate. We unite distance learners across India through on-ground NGO volunteering, compassionate service drives, and community welfare.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sahara-400 shrink-0" aria-hidden="true" />
                <span>IIT Madras Campus, Chennai, Tamil Nadu – 600036</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sahara-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:connectwithsahara@study.iitm.ac.in"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  connectwithsahara@study.iitm.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About SAHARA", href: "#about" },
                { label: "Our Initiatives & Drives", href: "#activities" },
                { label: "Changemakers & Team", href: "#team" },
                { label: "Photo Gallery", href: "#gallery" },
                { label: "Contact & Join Us", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Society Outreach & Official Socials */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Connected Communities
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Follow our verified channels for field trip announcements, recruitment openings, and social awareness campaigns.
            </p>

            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href="https://www.linkedin.com/company/sahara-iitm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-750 transition-colors"
              >
                <span>LinkedIn Community (650+ followers)</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/sahara_iitm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-750 transition-colors"
              >
                <span>Instagram Community (380+ members)</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
              </a>

              <a
                href="https://www.youtube.com/@sahara_iitm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-750 transition-colors"
              >
                <span>YouTube Channel (Guest Lectures & Replays)</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
              </a>

              <a
                href="https://sahara-society.github.io/Sahara/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2.5 rounded bg-stone-800/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-750 transition-colors"
              >
                <span>Legacy Reference Archive (v1.0)</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2023–2026 SAHARA — The Social Welfare Society, IIT Madras.</span>
            <span className="hidden sm:inline text-stone-700">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-stone-400 flex items-center gap-1">
              Affiliated with IIT Madras BS Degree
            </span>
            <a
              href="#"
              className="p-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sahara-600"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
