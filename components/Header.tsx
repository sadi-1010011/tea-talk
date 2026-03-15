"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const currentPath = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Outlets",
      href: "/outlets",
    },
    {
      name: "Franchise",
      href: "/franchise",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" priority className="w-12 h-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              className={`${currentPath === link.href ? "text-primary font-bold" : ""} text-sm font-semibold hover:text-primary transition-colors`}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="franchise#inquiry"
            className="hidden md:inline-block bg-primary text-background-dark px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Inquire now
          </a>

          {/* Hamburger button — visible only on mobile */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
          >
            <span
              className={`block h-[2.5px] w-6 rounded-full bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-full bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2.5px] w-6 rounded-full bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.name}
              className={`${
                currentPath === link.href ? "text-primary font-bold" : ""
              } text-base font-semibold hover:text-primary transition-colors`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="franchise#inquiry"
            className="mt-2 text-center bg-primary text-background-dark px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inquire now
          </a>
        </nav>
      </div>
    </header>
  );
}

