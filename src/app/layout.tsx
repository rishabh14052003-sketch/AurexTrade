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
  title: "AurexTrade | Professional Forex Trading Courses",
  description:
    "From first trade to consistent performance. Master forex trading with AurexTrade's professional courses.",
  keywords: [
    "forex trading course",
    "forex education",
    "SMC trading",
    "price action",
    "forex for beginners",
  ],
  icons: {
    icon: "/assets/logos/axt-circle.png",
    shortcut: "/assets/logos/axt-circle.png",
    apple: "/assets/logos/axt-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#000000] text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
