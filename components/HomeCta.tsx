"use client";

import { useState } from "react";
import { submitSiteLead } from "@/lib/submit-site-lead";
import { useHireModal } from "./HireModalContext";

export default function HomeCta() {
  const { open: openHireModal } = useHireModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const result = await submitSiteLead({
        name,
        email,
        phone: "— (Quick Contact — phone not collected on this form)",
        message,
        source: "home_quick_contact",
      });
      if (!result.ok) {
        setStatus("error");
        setErrorMessage(result.error);
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 overflow-hidden relative bg-[#f7f9fb] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-black rounded-[2rem] p-8 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fd761a]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-manrope text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to scale your <span className="text-[#fd761a]">digital ecosystem?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We&apos;re currently accepting new projects for Q4 2026. Let&apos;s discuss how we can transform your
              business through elite technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={openHireModal}
                className="inline-flex bg-[#fd761a] text-white px-10 py-5 rounded-lg text-base font-semibold hover:scale-105 transition-transform active:scale-95"
              >
                Book a Strategy Session
              </button>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-sm">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-left">
              <h4 className="text-black font-manrope text-lg font-semibold mb-6">Quick Contact</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    className="w-full bg-[#f7f9fb] border border-black/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a] outline-none"
                    placeholder="Full Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full bg-[#f7f9fb] border border-black/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a] outline-none"
                    placeholder="Business Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-full bg-[#f7f9fb] border border-black/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a] outline-none resize-none"
                    placeholder="Tell us about your project"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
                {status === "success" && <p className="text-sm text-green-600">Thanks — we&apos;ll be in touch soon.</p>}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-black text-white font-semibold text-sm py-4 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
