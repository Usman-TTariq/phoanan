import Link from "next/link";
import OpenHireModalButton from "@/components/OpenHireModalButton";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black w-full py-16 border-t border-slate-800 font-manrope text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div className="space-y-4">
          <div className="text-xl font-bold text-white">Phoanan.us</div>
          <p className="text-slate-400 max-w-xs">
            © {new Date().getFullYear()} Phoanan.us Digital Solutions Agency. Built for premium reliability.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <Link
            href="/privacy"
            className="text-slate-400 hover:text-[#fd761a] transition-colors duration-300 opacity-90 hover:opacity-100"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-slate-400 hover:text-[#fd761a] transition-colors duration-300 opacity-90 hover:opacity-100"
          >
            Terms of Service
          </Link>
          {/* <Link
            href="/#services"
            className="text-slate-400 hover:text-[#fd761a] transition-colors duration-300 opacity-90 hover:opacity-100"
          >
            Case Studies
          </Link> */}
          <OpenHireModalButton className="inline text-slate-400 hover:text-[#fd761a] transition-colors duration-300 opacity-90 hover:opacity-100 bg-transparent border-0 p-0 cursor-pointer font-inherit text-sm leading-relaxed">
            Careers
          </OpenHireModalButton>
        </div>
        {/* <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-[#fd761a] hover:text-[#fd761a] transition-all"
            href="#"
            aria-label="Network"
          >
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </a>
          <a
            className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:border-[#fd761a] hover:text-[#fd761a] transition-all"
            href="#"
            aria-label="Share"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
        </div> */}
      </div>
    </footer>
  );
}
