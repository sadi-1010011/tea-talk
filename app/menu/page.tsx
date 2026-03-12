export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Steaming golden saffron tea in a traditional glass cup"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(35, 30, 15, 0.9) 20%, rgba(35, 30, 15, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWyGJmVN6zO7ih1RCMxQS6cSwYVdyMXajnHMTMdQdhk5wcQKO1gpAjh4R34ST_Z_ke66r3uL9MmXNNHJTy12NVlRYgRCNIOU7eC1tK7aAFHUys6oEcvR2J2sJgpG8dnRemhaW1jdahONeAQ7ghm4awEhz6kx8lx-YU59g70g68iYu8WKJrFY2f9bCzU2TBWadv4goekELkUnKV7QyUZuuSfoQM0I1JV7LXgJkhWHNOXtRhf_F8mQ3kG_4W39T35YnCHBeBqdeY2D29")',
            }}
          ></div>
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
            <span className="bg-primary text-background-dark px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Limited Edition
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-lg">
              Signature Sips <br />
              &amp; <span className="text-primary">Bites</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Experience the warmth of amber-lit traditions and modern flavors.
              From hand-picked saffron to artisanal burgers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-primary/90 transition-all flex items-center gap-2">
                Explore Menu{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="outlets" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-base hover:bg-white/20 transition-all">
                Find Nearest Location
              </a>
            </div>
          </div>
        </section>
        {/* Categorization Tabs */}
        <div className="sticky top-18.25 z-40 bg-background-dark/90 backdrop-blur-md border-b border-primary/10" id="menu">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-10 overflow-x-auto no-scrollbar">
              <button className="py-5 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap flex items-center gap-2">
                <span className="material-symbols-outlined">coffee</span> Teas
              </button>
              <button className="py-5 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm whitespace-nowrap flex items-center gap-2">
                <span className="material-symbols-outlined">lunch_dining</span>{" "}
                Burgers
              </button>
              <button className="py-5 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm whitespace-nowrap flex items-center gap-2">
                <span className="material-symbols-outlined">layers</span> Beef
                Combos
              </button>
              <button className="py-5 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm whitespace-nowrap flex items-center gap-2">
                <span className="material-symbols-outlined">icecream</span>{" "}
                Desserts
              </button>
            </div>
          </div>
        </div>
        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Hero Item: Teas */}
          <div className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  The Tea Ritual
                </h2>
                <p className="text-slate-400 mt-2">
                  Artisan brews curated for the modern palate.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Saffron Tea Card */}
              <div className="group relative aspect-16/10 rounded-xl overflow-hidden amber-glow">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Traditional saffron tea with scattered threads of saffron"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgTJko7M9wXIJRnw7CFXsPFcrlclqbj5QBsqM0FKODMgPekc9h58-zhGliHoyRsIT8jm3eZyeAYmvgvWbWD45mLVE5yY4HlDh1lwjPbWAuFo1dUr5pxziHtpGRpld5p0CMO5prTqcu12KD9lAQVGIB8zzAMKKvocWcDqJ6isv4aiNFNJjW14Hl3o1s2cly0J_77SdULWGvohmbRBbaUszBlly7slWqlCjrGFgb_sH8k7S9MvJpR04DRNf3HDNLGyT-ggkjWAd3IAOk")',
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Signature Saffron Tea
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mb-4">
                    Pure Iranian saffron infused with premium black tea leaves
                    and hint of cardamom.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">
                      $12.00
                    </span>
                    <button className="bg-primary/20 hover:bg-primary text-primary hover:text-background-dark p-2 rounded-lg transition-colors">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Sulaimani Card */}
              <div className="group relative aspect-16/10 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Clear tea with lemon and mint leaves"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3sSRGc_CM4k2KeISbSWfg9bBgJSOL62Nc5EUjGy_tdJNDaExqdbk_2rD3VaKv137S6r4ufSFjEljMq5WZkAz2Z3NjSHdQ3lF4aUtP_7DZP_8NUbmV0WNRrePd0RVMRe1ZWYY1-yU2Xjsi3o4RSzqmdzbKKI3b0wNy09IQ5wkE31SkpRvQCUUy0Wmf7UWAnI-IGYKQOsG4ackbcFkPfTuboY_4r2zXq6G3PPMTCVHi29ROzo37q4joN5p5yADDNIkIXiarwK3gcd7F")',
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Traditional Sulaimani
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mb-4">
                    Golden spiced tea brewed with cinnamon, cloves, and a fresh
                    squeeze of citrus.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">
                      $8.50
                    </span>
                    <button className="bg-primary/20 hover:bg-primary text-primary hover:text-background-dark p-2 rounded-lg transition-colors">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Item: Bites */}
          <div className="mb-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  Bold Bites
                </h2>
                <p className="text-slate-400 mt-2">
                  Elevated street food with a gourmet twist.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Thai Chicken Burger */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 group hover:border-primary/50 transition-all">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    alt="Juicy thai chicken burger"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-alt="Thai chicken burger with spicy slaw and peanut sauce"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLRMTzXRC6imR6yvajZisn5z5arNtUd4jB5W0ldSlb8wV5cLW-sGpaWh7yDPkYAGzKduo_On1zP42coWkLa-1fyDFLoqD8lsoFh_gBOwBBhN1KM3Fo6rxTr5Yx80O6AfZWilh8-6l2NUcj85i83704KN4OL3_9pc8wYB3O0SeWMguXalYg-Z6omhBtVV3Ep8xwwMmfXkxcWcVU6RYdj5PUUNSVxXaRavSt6JGMzyHfMRod75h-hFx7rMGm1_Mi8dH2akhBJACYIQk"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Thai Chicken Zinger
                </h4>
                <p className="text-slate-400 text-xs mt-2 mb-4">
                  Crispy fillet with lemongrass-infused mayo and chili-lime
                  glaze.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">$16.00</span>
                  <button className="bg-primary text-background-dark px-4 py-1.5 rounded-lg text-sm font-bold">
                    Add
                  </button>
                </div>
              </div>
              {/* Beef Combo Large Card */}
              <div className="md:col-span-2 relative rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Premium beef burger combo with fries and a drink"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrQJCpI-4Nk6DifQo87K9ReNoznBT01_liI5lvZe5ejjfdZ9HEiG6n2uvT1Y5rjwxliRmuPuD8KXt1bbmpmwoGuiLFcMoT6npJ6vRpeXYXM3CbRzNC2sWj_-88rm8TZDKk2SJtaqOx0Nn74XWnyCGyolQfIFzLlWfVimIy-3kneZj-B0Y9Yrd0DbgFxoMjONpjLsm1IGZaaBZ_BtcdxVU7DM2DURBBLdYO8i--fgsHUY2YKENdPHLD6xdUUwWUg2fHyfOCdWWNy7yq")',
                  }}
                />
                <div className="relative h-full flex flex-col justify-end p-8 min-h-100">
                  <span className="bg-primary text-background-dark w-fit px-3 py-1 rounded text-[10px] font-black uppercase mb-2">
                    Best Seller
                  </span>
                  <h3 className="text-3xl font-black text-white mb-2">
                    The Ultimate Beef Combo
                  </h3>
                  <p className="text-slate-200 text-sm max-w-md mb-6">
                    Double wagyu patty, truffle aioli, aged cheddar, served with
                    parmesan fries and our signature house brew.
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="text-primary font-black text-2xl">
                      $24.99
                    </span>
                    <button className="bg-white text-background-dark px-8 py-3 rounded-lg font-bold hover:bg-primary transition-colors">
                      Order Combo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Instagram Grid Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white">#TeaTalkMoments</h2>
              <p className="text-slate-400">
                Tag us and get featured on our wall of fame.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  data-alt="Customer holding a tea cup in cozy cafe"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVOAdTatuZq21bgaK9h8-7x24RbpA7B89s6jExxLAs17Acoon1WWpNy69L5A8GoIZj4AFVXBCQUsJbV5WkpPDyXsGSM2VzwH6BptYuLcFYujHgJbOk_tnCGJfHWKkDY_wmoV5G1oP2XMKufWR0HNwyVFRWK03k1bSTFUZY8G06ceIPUJJ5TUf3SBONDvIBmTcm2glQMwlpq1FG-T11mHPBnxJG0eaLs3c23XlLBvWZfsyDz2U-wq5Sm6dEM6aGIcEV4fvuqK2KFLB4"
                />
              </div>
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  data-alt="Artistic pouring of hot tea"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS-D2hPUZu5STrxcacC89Fdh_RBb37qRKJqCaPO1rffYCS_EbqHIYK_eQA5zCErQLA0vQ3Xn3HxIs0Fs7KUReo9V_3_iDUMoZClXWZjyceLb7otusPseRZN6e0XV7vhJxyLN7n3QtJlb2quLGgxMtoc8Uc4H9ytjCCOf0Iq7cfqo5zI3dukjJfj2Msc2UI_nCpIBIJcaLiuvRzIkMAQAPh1hDtbNJPsN3l2DEpotTttfpDbze8QE0GulX3F7_XfsZrIG8-ed8RxkE8"
                />
              </div>
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  data-alt="Close up of a delicious burger"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQwAFVxl9TRrPqRUd7Z84i6Osot6lfjp8X9xs8_n7BgSG0wjwivsaeGb-fW27spqv-CAVuvaclIGKSIkcAPyly3Bma9IsBpQR73iS1A2cjJUzMS1jSUzDZqC0PelPIGFFPIJ80UiQhVqmgFjMjG-7juuu2nlL5MpJtrWXiwW9rUvMFe4i0EakpepfMtfhtwoLVCPTAK3NcFv8lfpaJ5xD5x3TCwlxxDskjr7J37h0OvlTULUiwNu1kYgXTkoLigiD7_9fR0guTaKS"
                />
              </div>
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  data-alt="Cafe interior with amber lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnpjm-FxX_mAS8EgnjmCtyVZxeqlYam8V6bNgwR4yV3V5E3KMiHruKpOo2M9mkaO3dqcP2qxWzZJem6IXlMtwZWdMdcxN6Qq7msKh4PXJ0ku9duUbNm7bOqZ9JXmOo1Qdc6O3fJHhOX42zgFZJr8IhOkB4svaDjlgd28EjvnZXE6B4myliMtoepE6i-Am4Tfa27U4LNIt_Gh8kmBZpPKDoSd16hwqPNMKg6rwi8dVHC_APWU5QExb1QBR_GWDW8RsS84rro1INUJLd"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
     
      {/* Mobile Floating Cart */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-background-dark size-14 rounded-full shadow-2xl flex items-center justify-center amber-glow">
          <span className="material-symbols-outlined text-2xl">
            shopping_bag
          </span>
          <span className="absolute -top-1 -right-1 bg-white text-background-dark text-[10px] font-black size-5 rounded-full flex items-center justify-center border-2 border-primary">
            2
          </span>
        </button>
      </div>
    </div>
  );
}
