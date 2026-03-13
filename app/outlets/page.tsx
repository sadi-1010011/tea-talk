

export default function OutletsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        
        <main className="max-w-7xl mx-auto w-full px-6 py-10">
          <section className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                Our Outlet Network
              </h1>
              <p className="text-lg text-slate-600 dark:text-primary/60 leading-relaxed">
                Discover 11 unique Tea Talk locations across the region. From
                flagship experiences to quick drive-throughs, we bring the
                perfect brew closer to you.
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">map</span>
              View Network Map
            </button>
          </section>
          <div className="flex flex-wrap gap-3 mb-8 pb-2 overflow-x-auto no-scrollbar">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark rounded-lg font-bold text-sm whitespace-nowrap">
              All Outlets
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-primary/10 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">
                directions_car
              </span>
              Drive-Through
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-primary/10 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">star</span>
              Flagship
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-primary/10 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">groups</span>
              Group Friendly
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-primary/10 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">
                schedule
              </span>
              Open Now
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Modern tea shop interior with gold accents"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6LM-F2almE6HVbyuu9UNOmMjvMR0mbIkHW9FKIC9Ij__IK3qaMfwnr0L0YHQIRTU_zywZpOei99qIWD5vSx19Bfhwh68zTv7Xe-7aksVOgi9lodIfSV1UF6CN1zCoMzMmMGfGZKkJxiPVDSnAct4cIKc2NikAFm6NHp_lHhMY-iS-KA78j12qQaHtcGL6vE6lmf_gvnMIMZl9G2PwmU5jq8CPjaz4uwWT0pOLMOjaa-xc1D2Fzwc1PEYbovbCyBYeYqWHmQ_DFita")',
                  }}
                />
                <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Flagship
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Palayam (Flagship)
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      local_parking
                    </span>
                    Extensive Parking
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      nfc
                    </span>
                    NFC &amp; Mobile Payments
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 11 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Cozy cafe seating with group tables"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4HY3iDv0p21v-k59s_O7-N8sC3c-_P28kV3ZJvmWtAgnCZuigP6-QmQUduhdJ15DgsVI4venLddfaGXPMxQ2JeqER1rUHRFn3A9_mIecafKJBF_TJEK_qIWt2luanjL4YlAeix_4X9m_9DSn-ryCF2xxDK9Hg3-FUpJk5jjhEuxn5aFcVXWEJb4JFjrsR1YRXda7iutCi8xEVwWYwHIHuv67aHp8_WmXAITTx4VtjN_yOohj9FeJV_X5gTJ3hYTgEFebSsxOBA4nu")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Parayanchery
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      groups
                    </span>
                    Group-friendly seating
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      payments
                    </span>
                    Mobile Pay Accepted
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 10 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Minimalist cafe interior with wood accents"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoNfCAPOKViYQ1akCTxTGkFbn0GMENVdgBxMl9pgkU9i9MyAhji9PxSbZ_3w3x_5Fq2jllAz-4DG8JFP5d7MQaFqHm9FsYqcDLO7DQPwE7xDP2umnNVsE_tSCLN8--972Yc3Q7XOusH1GO-M9T6Gwqet71AdSrcnAOEN8h1suU6CebA511ENAHQUewy-r0-LZNOtnO7j0lonKVHyyzMIw72MzInrl4T-dB2PoYgXPszAykpDgkpUGuDdDJ7ncEBcaQ8NRgsuJRVv0D")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Koduvally
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      space_dashboard
                    </span>
                    Spacious Interiors
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      local_parking
                    </span>
                    On-site Parking
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 10 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Drive-through tea stall with warm lighting"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBcnpTsPPVpSg_FbVNjQLzCVa--otm2elIrjSUWEZxvRqySCum_Ja6yGa5iBGq8ScZycV16IkmJHienqr3y9dZLv2MKKP6thjJNTCon895id2WamLmShUmZEGeeLMMdIlA0xl9XD0XJzQZMQQki_UuSrd5Cml4-zC_jlFo886sVaiVzHNw7MlA-w8I39VSv2KbSsA51_5L1WgjscIxS8lLQy_nT-Vi6OKcYVJbCJJVfB3lzdRy7rH2Es9f1EDec-c7ld7FKVOWt_8B")',
                  }}
                />
                <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  24/7 Drive
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Mukkam
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      directions_car
                    </span>
                    Drive-Through Service
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      nfc
                    </span>
                    Quick NFC Payments
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      update
                    </span>
                    Open 24 Hours
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Small cozy boutique tea shop"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDShciqij2u431ScnX_-YUZrIhQKYVH-kKOoDYMmkXo0Ozv93pcdExeTPrre3dLE9tCTgLNYSk4cNTiMDm2GtyAD8V5rJCCrczgWEMbc9jP45My2SFu26gpz2pixOJTXqomNEQpD_7J3rulkV4IChWgQKWWznCH8nZtVmgeEW-1qMGuwdn1wMFqsnI6RJhZtFVct9F2W4j6W8GNsuLl6H5RwDOSLVHXmLkwaX4xZr3wziX4vNGvfbEPqrllxoQaMoNIDcbX7GtBtbQH")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Poonoor
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      chair_alt
                    </span>
                    Cozy Seating Areas
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      smartphone
                    </span>
                    Mobile Pay Ready
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 9 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Large community table in tea cafe"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsajxm_stKzw231ZrDY-Z1RMq0V91bmzPZf_QrrYk80EMWXS8CRH8ycFhKDLwFCeXDBpHZtd6w1QTTRq3Z3_HrPpn7NNrUOsoA2UFcMzhs59YGQIpd7ICJyjB0OOs2jDIxg5VtFrhJe7VGAvICG3Q5XuA_PU0tR9lPL1fe8P6wPE_lpqj2_tUP7c11g5mTPAI-hUPmYXzdhjaGigp0PyHQrO_kVXDzLcTHEGABQy_hAcj_gNEF0yYZx2OyNnkJRbSI6ZQBOtTLkDTO")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Omassery
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      groups
                    </span>
                    Large Groups Welcome
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      local_parking
                    </span>
                    Valet Parking
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 10 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Modern geometric interior design cafe"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsq5_d81VBRj4LOl_i9J38JmyIbX1-5gRKZuk01Eu34qy0NygjzM9PevOvCT0I6q_8kExkpssNl7AIziQrKss5Ox-1yXxn8_8oX_QREDoCi5lexIAQ2apHuRoS4D2fkpgAhaWZRPtb2DpM85hrH4_XccpChZ7HcHn0QpKWAN_xWq1x-8hwgtCjq7Sk0gIxOvfiqs-wG6CCyrRvGJrnkGHhz65eWRRLESGDiwWy39Y5NvOhhDSH5JfLd3ntLyLtBZHJpJAku4VnN1Bi")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Puthur Kotuvalli
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      architecture
                    </span>
                    Modern Interiors
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      contactless
                    </span>
                    NFC Contactless
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 10 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Family seated in a bright cafe"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz6q4a2PyBBSlo2g90chf5oFHYEXmDI0k7t1bjcncESeJ-JxCvm2iE6OJSnTo9h5qpDKyRprYt6CsaQ--FCLm_YJ0yaJmoevWBHNprSR0QktXghG1FnKZ79T0BYzeLxmXNRm2xWfcNXoBu4lSDWjAbnRiF40_QL7OMorCQ2vK-OXZRaIJaALyuDzwQptCB2chGWvLn5VNtmg9R0fJJhzdkOLPDPQVThjvIbqEJOUA7L6zTeK8Ir0_uj0AFmb-ESa97i7gTRm1BgIGm")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Areekode
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      family_restroom
                    </span>
                    Family Friendly
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      payments
                    </span>
                    Mobile Pay
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 11 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Luxury cafe experience with gold lighting"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcyK58ObNWc5b6wa9qksBdaJTUD4i99TEKQVNSdD7z49ExML4NxafngjuUvSsuanxFBhiqK6R1b3lPY7q_7MGUGDj8IlZDacuYUGObWkmc7YwkOuOqCXlLNLE0E_aL1RiPwnEn6jw0-Bz-SO5yq84vupfwiUX9SIxRL-dGHS4j_eFqcT0ZOws2ZFzGInut4_SUyLr_30H6Z4DRqb5fdpFLLrcmz-W07lwDDfI93G4VlbWVQVJJcEl4zmVEb2ecKWsQjK7SZjNO00s1")',
                  }}
                />
                <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Premium
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Manjeri
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      workspace_premium
                    </span>
                    Flagship Experience
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      local_parking
                    </span>
                    Spacious Parking
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 11 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Urban industrial style cafe interior"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRCtBORW73oo9RmHo4YhSlyEcNZIHShWHYqkgVKKtGNVtouRQes5WPqKGtA4FRmN8iebfXvSl8bxkJ_VTEhkPZwmK9qR1gX1Ffkm-PEeRkehYoH3zguvd_YSsCGft6Sq0Y0latu0uNosKk2va_MYXvxGAfUzcOGnav6Q3SOSAQKh6fr-AHIpzEwVM7UO6rxTHlH2G0VJ7z9fU4kn1b69DkhwViYTfxqegciMfFNnfVyBRfLTXqRPOJk6j_4LB8DBR7fT7O4gIMNKPN")',
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Cherooty Nagar
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      location_city
                    </span>
                    Urban Vibe
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      nfc
                    </span>
                    NFC Payments
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-primary/60">
                    <span className="material-symbols-outlined text-base">
                      alarm
                    </span>
                    Open until 10 PM
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/20 hover:bg-primary hover:text-background-dark transition-all rounded-lg text-sm font-bold">
                  Details
                </button>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden grayscale opacity-50">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Abstract interior of future cafe location"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLccRzM1ET3yRJy3tnaJQGhTCjqHi_bk-1nQy5X2Tj_E_uhHEd6Au1jlnZxMOtPe61nBASy-KhsZpZ-MUYiXV4QGOknvRHMkQrM2uQVC_I8ymzHfZPf-RPsFzWrWj4nsfFOQVJ0pTT2aPX5YJ2BH1D6kc2MXR92Q0PpLpGpKD_ROB3az8ePsifbuUqx_IFceMbkfF1FMjnHaeSPkD-m1ODRcdmJp5CDrir2WdQhiYO35ZTvsVhEDF0UOjHWdMv3QuApCQoX8o0D2Sx")',
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-background-dark/80 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-primary/30">
                  Coming Soon
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-slate-400">
                  Kozhikode Main
                </h3>
                <div className="space-y-2 mb-4 opacity-50">
                  <p className="text-xs text-slate-500 dark:text-primary/60">
                    Our next grand opening.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-primary/60">
                    Stay tuned for updates.
                  </p>
                </div>
                <button className="w-full py-2 bg-slate-100 dark:bg-primary/10 text-slate-400 rounded-lg text-sm font-bold cursor-not-allowed">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 p-8 rounded-2xl bg-linear-to-r from-primary/10 to-transparent border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h2 className="text-3xl font-black mb-4">
                  Experience the Best of Tea Talk
                </h2>
                <p className="text-slate-600 dark:text-primary/60 mb-6 leading-relaxed">
                  Every outlet is designed to provide a unique atmosphere, yet
                  the same world-class tea experience. Whether you're working,
                  meeting friends, or just grabbing a quick cup on the go, our
                  network has you covered.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <span className="material-symbols-outlined text-primary">
                        wifi
                      </span>
                    </div>
                    <span className="font-semibold">Free High-Speed Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <span className="material-symbols-outlined text-primary">
                        charging_station
                      </span>
                    </div>
                    <span className="font-semibold">Charging Stations</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-64 rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Pouring hot tea into a glass"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaslmjBk713b1aaMoIAR446KZ3T_BzpU4ma_Ggt8RqBfuTHZxM_wvVzvm0f7k6cOJjzMQmSwuj_DnzQZRw6l2WeInLWITVsXmv5eYYVkc2CBGk7KnQqPVomQemVwUbwYxJ1sqtlK6oRjoMOKt_60HZ-3agbie94A59czzhYX0-uOM4WLLypmc8xt1VKJo6OkiIT4rIf_NNFj2GL_4Ntz4oHa_kyK7yYg2JnPYeYiz0iiifYJ1HxXH2XjCuiVegUSXYU8uhX7ahcxnP")',
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      
      </div>
    </div>
  );
}
