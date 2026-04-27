import Link from "next/link";

const cards = [
  {
    icon: "language",
    title: "Web Development",
    body: "Responsive, high-speed websites tailored for conversion and global brand presence. Built on modern stacks for scalability.",
    bullets: ["React & Next.js", "SEO Optimization", "E-commerce Platforms"],
  },
  {
    icon: "smartphone",
    title: "App Development",
    body: "Native and cross-platform mobile experiences that users love. We focus on seamless UX and high-performance code.",
    bullets: ["iOS & Android", "Flutter & React Native", "User-Centric Design"],
  },
  {
    icon: "terminal",
    title: "Enterprise Systems",
    body: "Complex SaaS products and internal business tools designed for security, integration, and high availability.",
    bullets: ["SaaS Architecture", "API Integrations", "Cloud Infrastructure"],
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-[#9d4300] tracking-widest uppercase mb-4 font-manrope">
              Our Expertise
            </h2>
            <h3 className="font-manrope text-3xl sm:text-5xl font-bold text-black leading-tight">
              Precision-Built Solutions for a Global Market.
            </h3>
          </div>
          <div className="pb-2">
            <Link
              href="/#services"
              className="text-black font-semibold text-sm border-b-2 border-black pb-1 hover:text-[#9d4300] hover:border-[#9d4300] transition-all inline-block"
            >
              Explore All Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group p-10 rounded-xl bg-[#f7f9fb] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#ffdbca] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#9d4300] text-3xl">{card.icon}</span>
              </div>
              <h4 className="font-manrope text-2xl font-semibold text-black mb-4">{card.title}</h4>
              <p className="text-[#45464d] mb-8 text-base leading-relaxed">{card.body}</p>
              <ul className="space-y-3">
                {card.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#191c1e]">
                    <span className="material-symbols-outlined text-[#9d4300] text-base">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
