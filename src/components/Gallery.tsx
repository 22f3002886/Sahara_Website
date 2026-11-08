"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Calendar } from "lucide-react";

const CATEGORIES = [
  "All Photos",
  "Child Upliftment",
  "Animal Welfare",
  "Community Action",
  "Campus Life",
] as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Photos");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "All Photos") return true;
    return item.category === selectedCategory;
  });

  const currentIndex = activeItem
    ? filteredItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIndex + 1]);
    } else if (currentIndex === filteredItems.length - 1) {
      setActiveItem(filteredItems[0]); // Loop around
    }
  }, [currentIndex, filteredItems]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setActiveItem(filteredItems[currentIndex - 1]);
    } else if (currentIndex === 0) {
      setActiveItem(filteredItems[filteredItems.length - 1]); // Loop around
    }
  }, [currentIndex, filteredItems]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, handleNext, handlePrev]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeItem]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-warm-50/70 border-b border-warm-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-warm-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sahara-100 text-sahara-800 text-xs font-semibold uppercase tracking-wider">
              <span>Photo Archive</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Moments of Empathy & Service
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Authentic photographs captured during SAHARA’s offline expeditions, volunteer drives, and awareness campaigns across India.
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
                    : "bg-white text-stone-700 hover:bg-warm-100 border border-warm-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveItem(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title} photo preview`}
              className="group cursor-pointer rounded-lg overflow-hidden border border-warm-200 bg-white shadow-subtle hover:shadow-card transition-all flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-sahara-800 focus:ring-offset-2"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-warm-100 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5">
                    <span className="font-semibold uppercase tracking-wider text-sahara-800">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" aria-hidden="true" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-sahara-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-0">
                <div className="pt-2 border-t border-warm-100 flex items-center gap-1.5 text-[11px] text-stone-500">
                  <MapPin className="w-3 h-3 text-sahara-600 shrink-0" aria-hidden="true" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Google Photos Album Link */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-600">
            Want to see more full-resolution candid event albums? Visit our official community albums on{" "}
            <a
              href="https://photos.app.goo.gl/7GPP2YZeiCj56ghVA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sahara-800 hover:underline"
            >
              Udaipur AAU Drive
            </a>{" "}
            and{" "}
            <a
              href="https://photos.app.goo.gl/vqKPzd4GFJkNEQP46"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sahara-800 hover:underline"
            >
              Indore RHA Welfare Trip
            </a>
            .
          </p>
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-warm-200 bg-warm-50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sahara-800 bg-sahara-100 px-2.5 py-0.5 rounded">
                  {activeItem.category}
                </span>
                <span className="text-xs text-stone-500">
                  Photo {currentIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-warm-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-sahara-800"
                aria-label="Close modal (Escape)"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] bg-stone-900 flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[480px]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900/90 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous photo (Left arrow)"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900/90 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next photo (Right arrow)"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Information Footer */}
            <div className="p-5 sm:p-6 bg-white border-t border-warm-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 id="modal-title" className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  {activeItem.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                    {activeItem.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                    {activeItem.location}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
