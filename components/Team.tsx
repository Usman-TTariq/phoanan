import { TEAM_MEMBERS } from "@/lib/phoanan-media";

export default function Team() {
  return (
    <section id="team" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#9d4300] tracking-widest uppercase mb-4 font-manrope">Our Humans</h2>
          <h3 className="font-manrope text-3xl sm:text-5xl font-bold text-black mb-4">Meet the Visionaries Behind the Code.</h3>
          <p className="text-lg text-[#45464d] max-w-2xl mx-auto leading-relaxed">
            Our multi-disciplinary team brings together decades of experience in software engineering, UI/UX design, and
            business strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg bg-slate-200">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={member.image}
                alt={member.alt}
                width={400}
                height={533}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="font-manrope text-base font-semibold mb-1">{member.name}</p>
                <p className="text-xs font-medium text-[#ffdbca] opacity-90">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
