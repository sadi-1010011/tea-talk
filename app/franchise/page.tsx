"use client";

import { useState } from "react";
import BlurText from "@/animations/BlurText";
import ScrollReveal, { ScrollRevealItem } from "@/animations/ScrollReveal";
import SpotlightCard from "@/animations/SpotlightCard";

const STEPS = [
  { label: "Information", icon: "person" },
  { label: "Experience", icon: "work" },
  { label: "Location", icon: "location_on" },
];

const INPUT =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white";

export default function FranchisePage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "back">("next");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentRange: "₹50k - ₹100k",
    yearsInBusiness: "",
    industryBackground: "",
    currentOccupation: "",
    whyTeaTalk: "",
    targetCity: "",
    preferredArea: "",
    propertyStatus: "Looking",
    targetOpenDate: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    if (step < STEPS.length - 1) {
      setDirection("next");
      setStep((s) => s + 1);
    }
  }

  function back() {
    if (step > 0) {
      setDirection("back");
      setStep((s) => s - 1);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const body = `
Franchise Inquiry — Tea Talk

Full Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
Investment Range: ${form.investmentRange}

Years in Business: ${form.yearsInBusiness}
Industry Background: ${form.industryBackground}
Current Occupation: ${form.currentOccupation}
Why Tea Talk: ${form.whyTeaTalk}

Target City: ${form.targetCity}
Preferred Area: ${form.preferredArea}
Property Status: ${form.propertyStatus}
Target Open Date: ${form.targetOpenDate}
    `.trim();

    const mailto = `mailto:hello@teatalk.com?subject=${encodeURIComponent(
      `Franchise Inquiry from ${form.fullName}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    // Show success state after a short delay
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-background-dark/60 via-background-dark/40 to-background-dark z-10" />
            <img
              alt="Tea Talk Interior"
              className="w-full h-full object-cover"
              data-alt="Interior of a modern boutique tea shop with warm amber lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRcApDU9ZOXrs_jWF8Qnf1Pa2Hl8yHqhHIiq47u4i8ej4PFaJShd-yqbBoqVJQRWrGnlO9Hmnm12VKmuZkvkcuNCnrFNN1qJwrMoMONUABKUodyzOifeVaAtamQwGc_AX7w1sivwoieZTekxF-yYIXrFYSnAURDVwU2oeA_NjRQOn21Zw4s-lWs4E-Nq424SidNg3TsNiQGu4Hc0nl0r4vadkYILca9X8mUlz8S8vuCUaP-yjLZnRCukPVT9QjdaNJFCo_ZajEhsYl"
            />
          </div>
          <div className="relative z-20 max-w-4xl">
            <ScrollReveal variant="fadeDown" delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-forest text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
                Franchise Partnership
              </span>
            </ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              <BlurText
                text="Brew Your Own Success."
                delay={100}
                animateBy="words"
                direction="top"
                className=""
              />
            </h1>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join our growing community of 10+ successful outlets. We provide
                the art, the science, and the system for a premium tea experience.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className="bg-primary text-background-dark px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform"
                  href="#inquiry"
                >
                  Start Your Journey
                </a>
                <a
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all"
                  href="#benefits"
                >
                  Explore Benefits
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Partner Section */}
        <section
          className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark"
          id="benefits"
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                  Why Partner with Tea Talk?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Built on tradition, scaled with modern efficiency. Our model is
                  designed for sustainable growth.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal
              variant="fadeUp"
              staggerChildren={0.15}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Card 1 */}
              <ScrollRevealItem variant="fadeUp">
                <div className="group p-8 rounded-2xl bg-forest/20 border border-primary/10 hover:border-primary/40 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      verified_user
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Proven Business Model
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Low operational overhead combined with high margins and a
                    streamlined supply chain optimized for multi-unit scaling.
                  </p>
                </div>
              </ScrollRevealItem>
              {/* Card 2 */}
              <ScrollRevealItem variant="fadeUp">
                <div className="group p-8 rounded-2xl bg-forest/20 border border-primary/10 hover:border-primary/40 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      hub
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    10+ Successful Outlets
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    A rapidly expanding footprint across urban and suburban
                    markets with 100% store retention since inception.
                  </p>
                </div>
              </ScrollRevealItem>
              {/* Card 3 */}
              <ScrollRevealItem variant="fadeUp">
                <div className="group p-8 rounded-2xl bg-forest/20 border border-primary/10 hover:border-primary/40 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      support_agent
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Holistic Support</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Comprehensive training, site selection assistance, and
                    localized marketing playbooks to ensure your grand opening is
                    a hit.
                  </p>
                </div>
              </ScrollRevealItem>
            </ScrollReveal>
          </div>
        </section>

        {/* Growth Timeline */}
        <section className="py-24 px-6 lg:px-20 bg-forest/10" id="timeline">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <ScrollReveal variant="fadeLeft" className="lg:w-1/3">
                <div>
                  <h2 className="text-4xl font-extrabold mb-6">
                    Our Growth Journey
                  </h2>
                  <p className="text-slate-400 mb-8">
                    From a single flagship store to a regional powerhouse.
                    Experience our momentum as we head towards our 20th location.
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <span className="text-3xl font-black text-primary">11</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Outlets active <br /> nationwide
                    </span>
                  </div>
                </div>
              </ScrollReveal>
              <div className="lg:w-2/3 w-full">
                <div className="relative border-l-2 border-primary/30 ml-4 py-8">
                  <ScrollReveal variant="fadeRight" delay={0}>
                    <div className="mb-12 ml-10 relative">
                      <span className="absolute -left-13.25 top-1 w-6 h-6 rounded-full bg-primary border-4 border-background-dark" />
                      <h4 className="text-lg font-bold">
                        The Flagship (Outlet 1)
                      </h4>
                      <p className="text-primary text-sm font-medium">
                        2020 • Metro Center
                      </p>
                      <p className="text-slate-400 mt-2 text-sm">
                        Where it all began. Reimagining the traditional tea
                        experience for the modern urbanite.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal variant="fadeRight" delay={0.15}>
                    <div className="mb-12 ml-10 relative">
                      <span className="absolute -left-13.25 top-1 w-6 h-6 rounded-full bg-primary/40 border-4 border-background-dark" />
                      <h4 className="text-lg font-bold">
                        Scaling Phase (Outlets 2-5)
                      </h4>
                      <p className="text-primary text-sm font-medium">
                        2021-2022 • Coastal Region
                      </p>
                      <p className="text-slate-400 mt-2 text-sm">
                        Optimizing operations and building a robust franchise
                        support ecosystem.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal variant="fadeRight" delay={0.3}>
                    <div className="mb-4 ml-10 relative">
                      <span className="absolute -left-13.25 top-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center -translate-x-2">
                        <span className="material-symbols-outlined text-background-dark text-xl font-bold">
                          rocket_launch
                        </span>
                      </span>
                      <h4 className="text-xl font-black">
                        Current Milestone (Outlet 11)
                      </h4>
                      <p className="text-primary text-sm font-medium">
                        Coming 2024 • Global Expansion
                      </p>
                      <p className="text-slate-400 mt-2 text-sm">
                        Join us for our upcoming 12th location and be part of the
                        most exciting chapter yet.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 lg:px-20" id="testimonials">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal variant="fadeUp">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Voices of Success
              </h2>
            </ScrollReveal>
            <ScrollReveal
              variant="fadeUp"
              staggerChildren={0.2}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <ScrollRevealItem variant="fadeLeft">
                <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary/10 text-[120px] absolute -top-4 -right-4 select-none">
                    format_quote
                  </span>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <img
                      alt="Partner"
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      data-alt="Portrait of a smiling male franchise owner"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUAL7XSAtatII84vIIsUvYrBMDMBoOl_8J5lZz6X4nrTGwpGwkqaNvYTst4JooCscLohcn1ObkCE8BK3FesFuwnocrwNXURBJBgJkAlxDLcWSBhqgZcpwKu1NG_s00E1qw8i-DBADPpkoM5yiBQRt1xNTvHa_DxBWLf4mEsuOYGZrOdXZl1z3V1STXEnetIelekrfBC1_Mtidsv1o241JzvPuuDb9y494earX1GpSeQ85mKAMZapZ4UwQEZo8qmCAZVEcnxWymf31f"
                    />
                    <div>
                      <p className="font-bold text-lg">Marcus Chen</p>
                      <p className="text-primary text-sm">Outlet #4 Owner</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic relative z-10">
                    &quot;Tea Talk isn&apos;t just a franchise; it&apos;s a family. The training
                    support I received was far beyond my expectations, making the
                    transition from corporate to entrepreneurship seamless.&quot;
                  </p>
                </div>
              </ScrollRevealItem>
              <ScrollRevealItem variant="fadeRight">
                <div className="bg-background-dark p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary/10 text-[120px] absolute -top-4 -right-4 select-none">
                    format_quote
                  </span>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <img
                      alt="Partner"
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      data-alt="Portrait of a confident female entrepreneur"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuc4FqSCjOOvEmfaeRulN6Ip_LvIt1mg98sv_U7BIVahnLvbZMNxwPgr0e-uIMlmHFLtxp6U5qUCM_J8cWokRMAmoh20wqfzclNiCAKBj86smDFMViqeNWEzXdXmcVD3GGkFh7u225VoIwPwSmQF-jFUCubhK2fwh0-glyMUVjXyNQe4dbkB-vPDdPwFEflF8b0qLvF2YLwQyhsvVkECGk4Pkuv53bFxQMPSE9G6PrQfoHrUx6JSMJN0CW8TAo9WXRToEsCM8Z6GT5"
                    />
                    <div>
                      <p className="font-bold text-lg">Sarah Jenkins</p>
                      <p className="text-primary text-sm">Multi-unit Partner</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic relative z-10">
                    &quot;I&apos;ve owned other franchises before, but the ROI and brand
                    loyalty at Tea Talk are unparalleled. Customers don&apos;t just buy
                    a drink; they buy into the lifestyle we offer.&quot;
                  </p>
                </div>
              </ScrollRevealItem>
            </ScrollReveal>
          </div>
        </section>

        {/* Franchise Inquiry Suite */}
        <section
          className="py-24 px-6 lg:px-20 bg-forest text-white"
          id="inquiry"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Ready to Join Us?
                </h2>
                <p className="text-slate-300 text-lg">
                  Submit your inquiry and our franchise team will reach out within
                  48 hours with a detailed investment prospectus.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slideUp" delay={0.2} duration={0.8}>
              <SpotlightCard spotlightColor="rgba(233, 219, 25, 0.2)">
                <div className="bg-background-dark rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">

                  {/* ── Stepper ── */}
                  <div className="flex justify-between w-full mb-12">
                    {STEPS.map((s, i) => (
                      <div key={s.label} className="flex flex-1 items-center">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${i <= step
                              ? "bg-primary text-background-dark scale-110"
                              : "border-2 border-white/20 text-white/40"
                              }`}
                          >
                            {i < step ? (
                              <span className="material-symbols-outlined text-lg">check</span>
                            ) : (
                              i + 1
                            )}
                          </div>
                          <span
                            className={`text-[10px] uppercase font-bold tracking-tighter transition-colors duration-300 ${i <= step ? "text-primary" : "text-white/20"
                              }`}
                          >
                            {s.label}
                          </span>
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className="flex-1 h-0.5 mx-4 mt-[-18px] relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10" />
                            <div
                              className="absolute inset-0 bg-primary transition-transform duration-500 origin-left"
                              style={{
                                transform: i < step ? "scaleX(1)" : "scaleX(0)",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* ── Form ── */}
                  <form onSubmit={handleSubmit}>
                    <div className="relative overflow-hidden">
                      {/* Sliding container */}
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${step * 100}%)` }}
                      >

                        {/* ─── Step 1 — Information ─── */}
                        <div className="w-full shrink-0 space-y-6 px-1">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Full Name <span className="text-primary">*</span>
                              </label>
                              <input
                                className={INPUT}
                                placeholder="John Doe"
                                type="text"
                                required
                                value={form.fullName}
                                onChange={(e) => update("fullName", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Email Address <span className="text-primary">*</span>
                              </label>
                              <input
                                className={INPUT}
                                placeholder="john@example.com"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => update("email", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Phone Number
                              </label>
                              <input
                                className={INPUT}
                                placeholder="+91 98765 43210"
                                type="tel"
                                value={form.phone}
                                onChange={(e) => update("phone", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Investment Range
                              </label>
                              <select
                                className={INPUT + " appearance-none"}
                                value={form.investmentRange}
                                onChange={(e) => update("investmentRange", e.target.value)}
                              >
                                <option>₹50k - ₹100k</option>
                                <option>₹100k - ₹250k</option>
                                <option>₹250k+</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                              Why Tea Talk?
                            </label>
                            <textarea
                              className={INPUT + " h-32 resize-none"}
                              placeholder="Tell us about your vision and what draws you to Tea Talk..."
                              value={form.whyTeaTalk}
                              onChange={(e) => update("whyTeaTalk", e.target.value)}
                            />
                          </div>
                        </div>

                        {/* ─── Step 2 — Experience ─── */}
                        <div className="w-full shrink-0 space-y-6 px-1">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Years in Business / Work
                              </label>
                              <input
                                className={INPUT}
                                placeholder="e.g. 5 years"
                                type="text"
                                value={form.yearsInBusiness}
                                onChange={(e) => update("yearsInBusiness", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Industry Background
                              </label>
                              <input
                                className={INPUT}
                                placeholder="e.g. F&B, Retail, IT"
                                type="text"
                                value={form.industryBackground}
                                onChange={(e) => update("industryBackground", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                              Current Occupation
                            </label>
                            <input
                              className={INPUT}
                              placeholder="e.g. Business Owner, Software Engineer"
                              type="text"
                              value={form.currentOccupation}
                              onChange={(e) => update("currentOccupation", e.target.value)}
                            />
                          </div>
                        </div>

                        {/* ─── Step 3 — Location ─── */}
                        <div className="w-full shrink-0 space-y-6 px-1">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Target City <span className="text-primary">*</span>
                              </label>
                              <input
                                className={INPUT}
                                placeholder="e.g. Mumbai, Delhi, Bangalore"
                                type="text"
                                required
                                value={form.targetCity}
                                onChange={(e) => update("targetCity", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Preferred Area / Locality
                              </label>
                              <input
                                className={INPUT}
                                placeholder="e.g. Koramangala, Connaught Place"
                                type="text"
                                value={form.preferredArea}
                                onChange={(e) => update("preferredArea", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Property Status
                              </label>
                              <select
                                className={INPUT + " appearance-none"}
                                value={form.propertyStatus}
                                onChange={(e) => update("propertyStatus", e.target.value)}
                              >
                                <option>Looking</option>
                                <option>Shortlisted a few</option>
                                <option>Already have a space</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-300">
                                Target Opening Date
                              </label>
                              <input
                                className={INPUT}
                                type="date"
                                value={form.targetOpenDate}
                                onChange={(e) => update("targetOpenDate", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Navigation Buttons ── */}
                    <div className="flex items-center justify-between mt-10 gap-4">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={back}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 font-bold text-sm hover:bg-white/5 transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">arrow_back</span>
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < STEPS.length - 1 ? (
                        <button
                          type="button"
                          onClick={next}
                          className="flex items-center gap-2 bg-primary text-background-dark px-8 py-3 rounded-xl font-bold text-sm hover:brightness-110 shadow-lg shadow-primary/20 transition-all ml-auto"
                        >
                          Next
                          <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={submitting || submitted}
                          className="flex items-center gap-2 bg-primary text-background-dark px-8 py-3 rounded-xl font-black text-sm hover:brightness-110 shadow-lg shadow-primary/20 transition-all ml-auto disabled:opacity-60"
                        >
                          {submitting ? (
                            <>
                              <span className="inline-block w-5 h-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin" />
                              Sending…
                            </>
                          ) : submitted ? (
                            <>
                              <span className="material-symbols-outlined text-lg">check_circle</span>
                              Sent!
                            </>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-lg">send</span>
                              Submit Inquiry
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <p className="text-center text-xs text-slate-500 mt-6">
                      By clicking submit, you agree to our Franchise Privacy Policy.
                    </p>
                  </form>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}

