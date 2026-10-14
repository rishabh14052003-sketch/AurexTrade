import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "AurexTrade | DaVinci Resolve Plugins & Presets",
  description:
    "Effects, text animations, and motion tools for DaVinci Resolve.",
  keywords: [
    "DaVinci Resolve plugins",
    "video editing presets",
    "text animation plugins",
    "video effects",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#000000] text-white antialiased`}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
