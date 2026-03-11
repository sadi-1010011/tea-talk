export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 lg:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-3xl text-primary">
                local_cafe
              </span>
              <h2 className="text-2xl font-bold">Tea Talk</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Brewing traditional flavors with a modern twist. Kerala's premier
              destination for the finest tea and gourmet burgers.
            </p>
            <div className="flex gap-4">
              <a
                className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </a>
              <a
                className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  alternate_email
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              <a className="hover:text-primary transition-colors" href="#">
                Our Menu
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Find a Store
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Franchise Info
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Join the Team
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Opening Hours
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Monday - Sunday</span>
                <span className="text-white font-medium">
                  09:00 AM – 11:00 PM
                </span>
              </div>
              <p className="text-xs italic">Hours may vary by location.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">
                  pin_drop
                </span>
                <span>Cochin, Kerala, India</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <span>+91 9000 000 000</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <span>hello@teatalk.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2024 Tea Talk India. All rights reserved.</p>
          <div className="flex gap-8 text-xs">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
