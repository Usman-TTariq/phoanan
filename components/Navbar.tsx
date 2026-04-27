"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHireModal } from "./HireModalContext";

const navLinkClass =
  "text-slate-700 dark:text-slate-300 font-semibold hover:text-[#fd761a] transition-all active:scale-95 duration-200";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { open: openHireModal } = useHireModal();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-900/5 dark:border-slate-50/5 shadow-sm font-manrope tracking-tight">
      <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-8 h-20 gap-4">
        <Link
          href="/"
          className="shrink-0 flex items-center py-1 hover:opacity-90 transition-opacity"
          aria-label="Phoanan.us home"
        >
          <Image
            src="/images/logo.png"
            alt="Phoanan.us"
            width={1000}
            height={1000}
            className="h-8 sm:h-[90px] w-auto max-w-[140px] sm:max-w-[260px] object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 min-w-0">
          {isHomePage ? (
            <>
              <button type="button" className={navLinkClass} onClick={() => scrollToSection("services")}>
                Services
              </button>
              <button type="button" className={navLinkClass} onClick={() => scrollToSection("team")}>
                Our Team
              </button>
              <button type="button" className={navLinkClass} onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </>
          ) : (
            <>
              <Link href="/#services" className={navLinkClass}>
                Services
              </Link>
              <Link href="/#team" className={navLinkClass}>
                Our Team
              </Link>
              <Link href="/#contact" className={navLinkClass}>
                Contact
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <button
            type="button"
            onClick={openHireModal}
            className="hidden sm:inline-flex bg-[#fd761a] text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all text-sm sm:text-base"
          >
            Get Started
          </button>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <span className="material-symbols-outlined text-2xl">close</span>
            ) : (
              <span className="material-symbols-outlined text-2xl">menu</span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {isHomePage ? (
            <>
              <button
                type="button"
                className="text-left py-3 px-4 rounded-lg text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
              <button
                type="button"
                className="text-left py-3 px-4 rounded-lg text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => scrollToSection("team")}
              >
                Our Team
              </button>
              <button
                type="button"
                className="text-left py-3 px-4 rounded-lg text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <Link
                href="/#services"
                className="py-3 px-4 rounded-lg text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#team"
                className="py-3 px-4 rounded-lg text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/#contact"
                className="py-3 px-4 rounded-lg text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </>
          )}
          <button
            type="button"
            className="mt-2 text-center bg-[#fd761a] text-white px-6 py-3 rounded-lg font-semibold w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              openHireModal();
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
