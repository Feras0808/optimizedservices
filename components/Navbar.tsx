"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Sustainability", href: "#sustainability" },
  { name: "Fleet", href: "#fleet" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          isScrolling
            ? "border-white/10 bg-black/20 shadow-none backdrop-blur-sm"
            : "border-white/10 bg-[#111111]/95 shadow-xl backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Optimized Services and Transportation"
              className="h-[62px] w-auto object-contain transition-all duration-300 sm:h-[70px]"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
               className="text-sm font-medium text-white/75 transition-colors duration-200 hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#171717] transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              Get In Touch

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[500px] border-t border-white/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3.5 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}