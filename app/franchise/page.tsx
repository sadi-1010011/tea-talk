export default function FranchisePage() {

  return (
    <div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark z-10" />
            <img
              alt="Tea Talk Interior"
              className="w-full h-full object-cover"
              data-alt="Interior of a modern boutique tea shop with warm amber lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRcApDU9ZOXrs_jWF8Qnf1Pa2Hl8yHqhHIiq47u4i8ej4PFaJShd-yqbBoqVJQRWrGnlO9Hmnm12VKmuZkvkcuNCnrFNN1qJwrMoMONUABKUodyzOifeVaAtamQwGc_AX7w1sivwoieZTekxF-yYIXrFYSnAURDVwU2oeA_NjRQOn21Zw4s-lWs4E-Nq424SidNg3TsNiQGu4Hc0nl0r4vadkYILca9X8mUlz8S8vuCUaP-yjLZnRCukPVT9QjdaNJFCo_ZajEhsYl"
            />
          </div>
          <div className="relative z-20 max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
              Franchise Partnership
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              Brew Your Own{" "}
              <span className="text-primary italic">Success.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Join our growing community of 10+ successful outlets. We provide
              the art, the science, and the system for a premium tea experience.
            </p>
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
          </div>
        </section>
        {/* Why Partner Section */}
        <section
          className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark"
          id="benefits"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Why Partner with Tea Talk?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Built on tradition, scaled with modern efficiency. Our model is
                designed for sustainable growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
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
              {/* Card 2 */}
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
              {/* Card 3 */}
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
            </div>
          </div>
        </section>
        {/* Growth Timeline */}
        <section className="py-24 px-6 lg:px-20 bg-forest/10" id="timeline">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/3">
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
              <div className="lg:w-2/3 w-full">
                <div className="relative border-l-2 border-primary/30 ml-4 py-8">
                  <div className="mb-12 ml-10 relative">
                    <span className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-background-dark" />
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
                  <div className="mb-12 ml-10 relative">
                    <span className="absolute -left-[53px] top-1 w-6 h-6 rounded-full bg-primary/40 border-4 border-background-dark" />
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
                  <div className="mb-4 ml-10 relative">
                    <span className="absolute -left-[53px] top-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center -translate-x-2">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-24 px-6 lg:px-20" id="testimonials">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voices of Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  "Tea Talk isn't just a franchise; it's a family. The training
                  support I received was far beyond my expectations, making the
                  transition from corporate to entrepreneurship seamless."
                </p>
              </div>
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
                  "I've owned other franchises before, but the ROI and brand
                  loyalty at Tea Talk are unparalleled. Customers don't just buy
                  a drink; they buy into the lifestyle we offer."
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Franchise Inquiry Suite */}
        <section
          className="py-24 px-6 lg:px-20 bg-forest text-white"
          id="inquiry"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-slate-300 text-lg">
                Submit your inquiry and our franchise team will reach out within
                48 hours with a detailed investment prospectus.
              </p>
            </div>
            <div className="bg-background-dark rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
              <div className="flex justify-between mb-12">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-background-dark">
                    1
                  </div>
                  <span className="text-[10px] uppercase font-bold text-primary tracking-tighter">
                    Information
                  </span>
                </div>
                <div className="flex-1 h-[2px] bg-white/10 mt-5 mx-4" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-white/40">
                    2
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/20 tracking-tighter">
                    Experience
                  </span>
                </div>
                <div className="flex-1 h-[2px] bg-white/10 mt-5 mx-4" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-white/40">
                    3
                  </div>
                  <span className="text-[10px] uppercase font-bold text-white/20 tracking-tighter">
                    Location
                  </span>
                </div>
              </div>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Investment Range
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white appearance-none">
                      <option>₹50k - ₹100k</option>
                      <option>₹100k - ₹250k</option>
                      <option>₹250k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Target City
                    </label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white"
                      placeholder="e.g. San Francisco"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Why Tea Talk?
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white h-32"
                    placeholder="Tell us about your vision..."
                    defaultValue={""}
                  />
                </div>
                <button
                  className="w-full bg-primary text-background-dark py-4 rounded-xl font-black text-lg hover:brightness-110 shadow-lg shadow-primary/20 transition-all"
                  type="submit"
                >
                  Submit Inquiry
                </button>
                <p className="text-center text-xs text-slate-500">
                  By clicking submit, you agree to our Franchise Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
