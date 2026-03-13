"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const currentPath = usePathname();
  
  useEffect(() => {
    console.log(currentPath);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link.href === currentPath) {
        link.classList.add("text-primary");
      }
    });
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
    }
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" priority className="w-12 h-auto" />
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Tea Talk
          </h2> */}
        </div>
        <nav className="hidden md:flex items-center gap-10">

          {
            links.map((link) => (
              <a
                key={link.name}
                className={`${currentPath === link.href ? "text-primary font-bold" : ""} text-sm font-semibold hover:text-primary transition-colors`}
                href={link.href}
              >
                {link.name}
              </a>
            ))
          }

          {/* <a
            className="text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            About
          </a> */}
        </nav>
        <a href="franchise#inquiry" className="bg-primary text-background-dark px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 transition-opacity">
          Inquire now
        </a>
      </div>
    </header>
  );
}
