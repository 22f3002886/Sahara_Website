"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject (at least 3 characters)"),
  purpose: z.string().min(1, "Please select an inquiry category"),
  message: z.string().min(15, "Please enter your message (at least 15 characters)"),
  honeypot: z.string().max(0, "Bot detected"), // Must remain empty
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    purpose: "Volunteer",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for changed field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((err) => {
        const fieldName = err.path[0] as keyof FormErrors;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setServerMessage(
          data.message ||
            "Thank you! Your message has been delivered to connectwithsahara@study.iitm.ac.in. A team coordinator will get back to you shortly."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          purpose: "Volunteer",
          message: "",
          honeypot: "",
        });
      } else {
        setSubmitStatus("error");
        setServerMessage(
          data.error ||
            "Unable to deliver your message at this moment. Please verify your details and try again, or reach out to us directly."
        );
      }
    } catch {
      setSubmitStatus("error");
      setServerMessage(
        "A network error occurred while attempting to send your message. Please check your internet connection or email us directly at connectwithsahara@study.iitm.ac.in."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-warm-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sahara-100 text-sahara-800 text-xs font-semibold uppercase tracking-wider">
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Let’s Make a Difference Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Whether you want to volunteer for our upcoming NGO drives, propose an institutional collaboration, join the core team, or share an initiative idea, we would love to hear from you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-xl bg-warm-50 border border-warm-200 space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Official Communication
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Direct inquiries to our student coordinators and administrative leads.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-warm-200 flex items-center justify-center text-sahara-800 shrink-0 shadow-2xs">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Official Society Email
                    </span>
                    <a
                      href="mailto:connectwithsahara@study.iitm.ac.in"
                      className="text-sm sm:text-base font-semibold text-stone-900 hover:text-sahara-800 transition-colors break-all"
                    >
                      connectwithsahara@study.iitm.ac.in
                    </a>
                    <span className="block text-xs text-stone-500 mt-0.5">
                      Monitored by Secretary & WebOps Team
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-warm-200 flex items-center justify-center text-sahara-800 shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Academic Affiliation
                    </span>
                    <p className="text-sm font-semibold text-stone-900">
                      IIT Madras BS Degree Programme
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Indian Institute of Technology Madras, Chennai, Tamil Nadu – 600036
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white border border-warm-200/90 text-xs sm:text-sm text-stone-700 space-y-2">
                <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sahara-700" aria-hidden="true" />
                  <span>Student Volunteer Network</span>
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Our members and student volunteer cohorts are active in major cities including Indore, Udaipur, Mumbai, Bengaluru, Delhi NCR, and Chennai.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg border border-warm-200 bg-white text-xs text-stone-600 space-y-1">
              <span className="font-semibold text-stone-800 block">Response Time</span>
              <p>
                Our core student coordinators review incoming submissions daily. You can expect a response within 1–2 business days.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-warm-200/90 bg-warm-50/40 p-6 sm:p-8 lg:p-10 shadow-subtle">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Send an Inquiry
              </h3>
              <p className="mt-1 text-sm text-stone-600">
                Fill in your details below and your message will be dispatched directly to our official mailbox.
              </p>

              {/* Success Notification */}
              {submitStatus === "success" && (
                <div
                  role="status"
                  className="mt-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-fadeIn"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold">Inquiry Sent Successfully</p>
                    <p className="text-emerald-800 text-xs sm:text-sm leading-relaxed">{serverMessage}</p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-2 text-xs font-semibold text-emerald-900 underline hover:no-underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="mt-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 animate-fadeIn"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold">Message Submission Failed</p>
                    <p className="text-rose-800 text-xs sm:text-sm leading-relaxed">{serverMessage}</p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-2 text-xs font-semibold text-rose-900 underline hover:no-underline"
                    >
                      Dismiss & retry
                    </button>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                
                {/* Honeypot field for bot protection (hidden from humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field blank</label>
                  <input
                    type="text"
                    id="website"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyanshu Sharma"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-stone-900 text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
                          : "border-warm-300 focus:border-sahara-800 focus:ring-1 focus:ring-sahara-800"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. student@study.iitm.ac.in"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-stone-900 text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
                          : "border-warm-300 focus:border-sahara-800 focus:ring-1 focus:ring-sahara-800"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Purpose Selector */}
                  <div>
                    <label
                      htmlFor="purpose"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Purpose of Contact <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-warm-300 text-stone-900 text-sm focus:outline-none focus:border-sahara-800 focus:ring-1 focus:ring-sahara-800"
                    >
                      <option value="Volunteer">Volunteer for Field Trips</option>
                      <option value="Join Core Team">Join Core / WebOps Team</option>
                      <option value="Event Suggestion">Event / Activity Suggestion</option>
                      <option value="NGO Collaboration">NGO Collaboration</option>
                      <option value="Sponsorship">Sponsorship / Donations</option>
                      <option value="General Inquiry">General Feedback / Inquiry</option>
                    </select>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Subject <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Volunteering for upcoming winter drive"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-stone-900 text-sm focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
                          : "border-warm-300 focus:border-sahara-800 focus:ring-1 focus:ring-sahara-800"
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-rose-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Your Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself, your background, or how you wish to collaborate with SAHARA..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-stone-900 text-sm focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? "border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
                        : "border-warm-300 focus:border-sahara-800 focus:ring-1 focus:ring-sahara-800"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-sahara-800 hover:bg-sahara-900 disabled:bg-stone-400 rounded-md transition-colors shadow-xs focus:ring-2 focus:ring-sahara-800 focus:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-stone-500 text-center sm:text-right">
                    Delivered directly to connectwithsahara@study.iitm.ac.in
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
