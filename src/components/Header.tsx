"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#activities" },
  { label: "Our Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-warm-50/95 backdrop-blur-md border-b border-warm-200 shadow-subtle py-3"
          : "bg-warm-50/90 backdrop-blur-sm border-b border-warm-200/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="SAHARA Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-warm-300 bg-white shadow-xs transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/branding/sahara-logo.jpeg"
                alt="SAHARA Logo"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 40px, 44px"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-stone-900 group-hover:text-sahara-800 transition-colors">
                  SAHARA
                </span>
                <span className="hidden md:inline-block text-[11px] font-semibold uppercase tracking-wider text-sahara-800 bg-sahara-100/70 border border-sahara-200/70 px-1.5 py-0.5 rounded">
                  IIT Madras BS
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-stone-600 tracking-normal">
                Social Welfare Society
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-sahara-800 rounded-md transition-colors hover:bg-warm-100/80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-sahara-800 hover:bg-sahara-900 rounded-md transition-colors shadow-xs focus:ring-2 focus:ring-sahara-800 focus:ring-offset-2"
            >
              <span>Get Involved</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-warm-100 focus:outline-none focus:ring-2 focus:ring-sahara-800"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[65px] bottom-0 bg-warm-50/98 backdrop-blur-lg border-t border-warm-200 z-50 md:hidden flex flex-col p-6 overflow-y-auto animate-fadeIn"
        >
          <div className="mb-4 pb-3 border-b border-warm-200/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              IIT Madras BS Degree Programme
            </span>
            <p className="text-sm text-stone-700 mt-0.5">
              Instilling purpose and joy through selfless community service.
            </p>
          </div>

          <nav className="flex flex-col gap-1.5 mb-8" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-semibold text-stone-800 hover:text-sahara-800 hover:bg-warm-100 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-warm-200 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-sahara-800 hover:bg-sahara-900 rounded-md transition-colors shadow-xs"
            >
              <span>Get Involved / Contact Us</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-center text-xs text-stone-500">
              Official Email: connectwithsahara@study.iitm.ac.in
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
