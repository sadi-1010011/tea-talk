export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="material-symbols-outlined text-primary text-sm">
                  stars
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Kerala's Premium Tea Chain
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100">
                Brewing Success <br />
                <span className="text-primary">Across Kerala</span>: <br />
                Join the Family
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Experience the perfect blend of tradition and modern taste with
                our signature Saffron Tea and gourmet Thai Chicken Burger.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="franchise#inquiry" className="bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-base hover:scale-[1.02] transition-transform flex items-center gap-2 shadow-lg shadow-primary/20">
                  Inquire for Franchise
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
                <a href="franchise#timeline" className="bg-slate-200 dark:bg-primary/10 text-slate-900 dark:text-white border border-slate-300 dark:border-primary/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-300 dark:hover:bg-primary/20 transition-all">
                  Explore Our Story
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl  transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 lg:aspect-square bg-slate-800 border-4 border-white/10 shadow-2xl">
                <div
                  className="h-full w-full bg-cover bg-center"
                  data-alt="Steaming golden saffron tea being poured elegantly"
                  style={{
                    backgroundImage:
                      'url("hero.jpg")',
                  }}
                />
                <div className="absolute bottom-6 right-6 left-6 p-6 rounded-xl bg-background-dark/80 backdrop-blur-lg border border-white/10">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0 border border-primary/30"
                      data-alt="Delicious Thai Chicken Burger with fresh toppings"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGuZCWiInvm6W7p9AcHrTFVforZ9vjHKbS26Px3dyunYCAg8gG94dUtOx7Uh1R3Rk1DzN6VSblVxqEsWkREPkj1P1VR5ERcVQNXQhzGZngTiI5qtTVMMlsVKz_62RWelNTEc3OuHbKMWFZR-mbyuHu81HrRktEIxnaPs7UUGheYicdY42oHBccTrYXzlFAXtDRGL4xvULcEnCL7M97a_-DlXw-QTXhjeAZWLcblBRkpOEucf6u-BChGEkuATd4rocxbKEhD2Je0Z5Z")',
                      }}
                    />
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-tighter">
                        Bestseller Duo
                      </p>
                      <p className="text-white font-bold text-lg leading-tight">
                        Saffron Tea &amp; Thai Burger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Outlets Section */}
        <section className="bg-slate-100 dark:bg-white/2 py-24 px-6 lg:px-10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
                  Experience Tea Talk
                </h2>
                <h3 className="text-4xl font-black text-slate-900 dark:text-slate-100">
                  Our Signature Outlets
                </h3>
              </div>
              <div className="flex flex-col gap-6 items-start md:items-end">
                <p className="text-slate-600 dark:text-slate-400 max-w-md md:text-right">
                  From urban flagship stores to cozy highway retreats, every Tea
                  Talk outlet is designed to be your favorite sanctuary.
                </p>
                <a
                  className="inline-flex items-center gap-2 bg-primary text-background-dark px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform"
                  href="outlets"
                >
                  View All Outlets
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                </a>
              </div>
            </div>
            {/* Vertical Scrolling Container */}
            <div className="relative max-h-175 overflow-y-auto pr-4 custom-scrollbar space-y-8 lg:space-y-12">
              {/* Outlet 1 */}
              <div className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white dark:bg-background-dark/40 border border-slate-200 dark:border-primary/10 p-6 lg:p-8 rounded-3xl transition-all hover:border-primary/30">
                <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    data-alt="Palayam Flagship Outlet interior"
                    style={{
                      backgroundImage:
                        'url("outlet1.jpg")',
                    }}
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Flagship Store
                    </span>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-slate-100">
                    Palayam Flagship
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our crown jewel in the heart of the city, featuring a
                    curated aesthetic with natural wood textures and artisan
                    rattan lighting. The perfect spot for long conversations.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Valet Parking
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Free Wi-Fi
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Outdoor Seating
                    </span>
                  </div>
                </div>
              </div>
              {/* Outlet 2 */}
              <div className="group relative flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 bg-white dark:bg-background-dark/40 border border-slate-200 dark:border-primary/10 p-6 lg:p-8 rounded-3xl transition-all hover:border-primary/30">
                <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    data-alt="Mukkam Drive-Through Outlet"
                    style={{
                      backgroundImage:
                        'url("outlet2.jpg")',
                    }}
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      fast_forward
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Quick Service
                    </span>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-slate-100">
                    Tea Talk Nilambur
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Experience convenience without compromising on flavor. Our
                    Nilambur outlet offers the complete Tea Talk menu for those on
                    the move through the scenic hills.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      24/7 Service
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Drive-Thru
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Pet Friendly
                    </span>
                  </div>
                </div>
              </div>
              {/* Outlet 3 */}
              <div className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white dark:bg-background-dark/40 border border-slate-200 dark:border-primary/10 p-6 lg:p-8 rounded-3xl transition-all hover:border-primary/30">
                <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    data-alt="Calicut Beach Front Outlet"
                    style={{
                      backgroundImage:
                        'url("outlet3.jpg")',
                    }}
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      waves
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Coastal Experience
                    </span>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-slate-100">
                    Calicut Beach Front
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Enjoy your Saffron Tea with the sound of the waves. Our
                    beach front outlet captures the essence of Kerala's coast
                    with warm, breezy interiors.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Beach View
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Live Music
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 text-[10px] font-bold uppercase">
                      Late Night
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Business Opportunity Section */}
        <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-4xl p-8 lg:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">
                handshake
              </span>
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                Partner With Us
              </h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-8 leading-tight">
                A Lucrative Business Opportunity In Every Cup
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                Join Kerala's fastest-growing tea brand. We provide a proven
                business model, premium ingredients, and end-to-end support to
                help you thrive in the F&amp;B industry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-background-dark font-bold">
                      trending_up
                    </span>
                  </div>
                  <h4 className="font-bold text-xl">Proven Model</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Benefit from a business structure designed for rapid
                    scalability and high ROI.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-background-dark font-bold">
                      eco
                    </span>
                  </div>
                  <h4 className="font-bold text-xl">Premium Quality</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Serve high-quality artisanal tea and gourmet snacks that
                    customers crave.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-background-dark font-bold">
                      support_agent
                    </span>
                  </div>
                  <h4 className="font-bold text-xl">Full Support</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Comprehensive training, site selection, and marketing
                    assistance at every step.
                  </p>
                </div>
              </div>
              <a href="franchise#inquiry" className="bg-primary text-background-dark px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
                Request Franchise Kit
              </a>
            </div>
          </div>
        </section>
        {/* Maps Section */}
        <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
                Visit Us
              </h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100">
                Find Us in the Heart of Kerala
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-slate-200 dark:border-primary/10 shadow-2xl h-125">
                <iframe
                  className="grayscale contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-700"
                  frameBorder={0}
                  height="100%"
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9900.337601018718!2d75.78988845432436!3d11.254227057154894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65967dcb0c7cd%3A0x8506e0143ce108bf!2sTea%20Talk%20Kozhikode!5e0!3m2!1sen!2sin!4v1773316162804!5m2!1sen!2sin"
                  width="100%"
                />
              </div>
              <div className="bg-slate-100 dark:bg-white/3 p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-primary/10 flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      <span className="font-bold uppercase tracking-widest text-xs">
                        Flagship Office
                      </span>
                    </div>
                    <h4 className="text-2xl font-black mb-4">Kozhikode Palayam</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Tea Talk Cafe,
                      <br />
                      Chindhavalappu, Palayam,
                      <br />
                      Kozhikode, Kerala 673004
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary">
                        call
                      </span>
                      <span className="text-sm font-medium">
                        +91 9846494843
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary">
                        mail
                      </span>
                      <span className="text-sm font-medium">
                        hello@teatalk.com
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  className="mt-8 bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-center hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  href="https://www.google.com/maps/place/Tea+Talk+Kozhikode/@11.252368,75.78585,15z/data=!4m6!3m5!1s0x3ba65967dcb0c7cd:0x8506e0143ce108bf!8m2!3d11.2523675!4d75.7858502!16s%2Fg%2F11w80v9swk?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Get Direction
                  <span className="material-symbols-outlined">directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
