import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { HireModalProvider } from "@/components/HireModalContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Phoanan.us | Digital Solutions Agency",
  description:
    "Transform your business with phoanan. We provide cutting-edge web development, digital marketing, SEO, branding, and comprehensive business solutions to help you scale faster and compete smarter.",
  icons: {
    icon: "/images/arnytics llc (2).png",
    shortcut: "/images/arnytics llc (2).png",
    apple: "/images/arnytics llc (2).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.className} antialiased bg-[#f7f9fb] text-[#191c1e]`}>
        <HireModalProvider>{children}</HireModalProvider>
      </body>
    </html>
  );
}
