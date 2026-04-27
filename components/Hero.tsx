import Link from "next/link";
import OpenHireModalButton from "@/components/OpenHireModalButton";
import { HERO_AVATARS, HERO_MAIN_IMAGE } from "@/lib/phoanan-media";

export default function Hero() {
  return (
    <section className="relative min-h-[min(921px,100svh)] flex items-center pt-8 pb-16 overflow-hidden bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffdbca] text-[#5c2400] text-sm font-semibold tracking-wide">
            <span className="material-symbols-outlined mr-2 text-[18px]">rocket_launch</span>
            Empowering US Enterprise
          </div>
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-[60px] lg:leading-[72px] font-extrabold tracking-tight text-black leading-tight">
            Digital Excellence <br />
            <span className="text-[#9d4300]">Engineered for Success.</span>
          </h1>
          <p className="text-lg leading-7 text-[#45464d] max-w-xl">
            Based in the US, Phoanan.us builds high-performance digital products that drive growth. From custom web
            apps to mission-critical infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <OpenHireModalButton className="inline-flex items-center gap-2 bg-[#fd761a] text-white px-8 py-4 rounded-lg text-base font-semibold hover:shadow-lg transition-all active:scale-95">
              Start Your Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </OpenHireModalButton>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-black hover:text-white transition-all active:scale-95"
            >
              View Case Studies
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {HERO_AVATARS.map((src, i) => (
                <img
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  src={src}
                  alt=""
                  width={48}
                  height={48}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-[#45464d] tracking-wide">Trusted by 500+ US Companies</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ffdbca] rounded-full blur-[100px] opacity-40 pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-[min(600px,70vh)] object-cover"
              src={HERO_MAIN_IMAGE}
              alt="Modern high-tech glass office building interior with bright natural light and minimalist furniture"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#fd761a] rounded-full flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#9d4300] tracking-wide uppercase">Real-time analytics</p>
                  <p className="font-manrope text-base font-semibold text-black">Increasing Efficiency by 40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
