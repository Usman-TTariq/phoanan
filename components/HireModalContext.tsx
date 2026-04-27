"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import HireDevelopersModal from "./HireDevelopersModal";

type HireModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const HireModalContext = createContext<HireModalContextValue | null>(null);

export function HireModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <HireModalContext.Provider value={value}>
      {children}
      <HireDevelopersModal isOpen={isOpen} onClose={close} />
    </HireModalContext.Provider>
  );
}

export function useHireModal() {
  const ctx = useContext(HireModalContext);
  if (!ctx) {
    throw new Error("useHireModal must be used within HireModalProvider");
  }
  return ctx;
}
