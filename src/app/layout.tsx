import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-main" });
export const metadata: Metadata = { title: "AurexTrade | Forex Trading Guides", description: "Explore AurexTrade PDF guides on forex trading and Smart Money Concepts.", keywords: ["forex trading", "Smart Money Concepts", "trading guides"] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="dark"><body className={`${inter.className} bg-[#000000] text-white antialiased`}><a className="skip-link" href="#main-content">Skip to main content</a><Navbar /><main id="main-content" className="min-h-screen">{children}</main><Footer /></body></html>; }
