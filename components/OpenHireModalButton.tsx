"use client";

import { useHireModal } from "./HireModalContext";

type OpenHireModalButtonProps = {
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;

/** Use from server components (e.g. Hero, Footer) to open the hire-developers modal instead of navigating to /contact. */
export default function OpenHireModalButton({ className, children, ...rest }: OpenHireModalButtonProps) {
  const { open } = useHireModal();
  return (
    <button type="button" className={className} onClick={open} {...rest}>
      {children}
    </button>
  );
}
