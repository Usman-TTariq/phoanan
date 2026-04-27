"use client";

import { useEffect, useState } from "react";

type HireDevelopersModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HireDevelopersModal({ isOpen, onClose }: HireDevelopersModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const phone = `+1 ${phoneLocal.trim()}`;
    const parts: string[] = [];
    if (company.trim()) parts.push(`Company / project: ${company.trim()}`);
    if (message.trim()) parts.push(message.trim());
    const fullMessage =
      parts.join("\n\n").trim() || "App development callback requested (hire developers modal).";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: company.trim() || "App development inquiry",
          message: fullMessage,
          source: "navbar_hire_developers",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhoneLocal("");
      setCompany("");
      setMessage("");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 1600);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleClose = () => {
    if (status === "sending") return;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden animate-fadeIn">
      <div
        className="absolute inset-0 z-40 min-h-full bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <div className="relative z-50 flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hire-modal-title"
          className="relative w-full max-w-lg max-h-[min(90vh,calc(100vh-2rem))] overflow-y-auto rounded-2xl bg-[#0f0f10] border border-white/10 shadow-2xl animate-slideUp font-manrope my-auto"
          onClick={(e) => e.stopPropagation()}
        >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="p-6 sm:p-8 pt-14">
          <h2 id="hire-modal-title" className="text-xl sm:text-2xl font-bold text-white pr-10">
            Hire Expert App Developers
          </h2>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Share your details and we&apos;ll get back with a custom plan.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex rounded-xl border border-white/15 overflow-hidden bg-white/5 focus-within:ring-2 focus-within:ring-[#fd761a]">
                <div className="flex items-center gap-2 px-3 border-r border-white/15 shrink-0 text-white text-sm">
                  <span className="text-lg leading-none" aria-hidden>
                    🇺🇸
                  </span>
                  <span className="font-medium tabular-nums">+1</span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="555 123 4567"
                  value={phoneLocal}
                  onChange={(e) => setPhoneLocal(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Company / Project Name</label>
              <input
                type="text"
                placeholder="Your company or project"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Tell us about your project</label>
              <textarea
                rows={4}
                placeholder="App idea, timeline, platform (iOS/Android)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#fd761a] focus:border-[#fd761a] resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{errorMessage}</p>
            )}
            {status === "success" && (
              <p className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                Thanks! We&apos;ll reach out shortly.
              </p>
            )}

            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="sm:flex-1 rounded-full border-2 border-white/40 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:flex-[1.35] rounded-full bg-[#fd761a] py-3.5 text-sm font-bold text-white hover:opacity-95 transition-opacity disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-orange-900/30"
              >
                {status === "sending" ? "Sending…" : "Submit & Get a Callback"}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
