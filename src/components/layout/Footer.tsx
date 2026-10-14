import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const guideLinks = [
  ["Smart Money Concept Trading Mastery", "/products/smart-money-concept-trading-mastery"],
  ["The Complete Forex Trading Blueprint", "/products/complete-forex-trading-blueprint"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0f]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="brand-link brand-link-footer">
            <img
              src="/assets/logos/aurextrade-wordmark-white.png"
              alt="AurexTrade"
              className="brand-logo brand-logo-footer"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">Forex and Smart Money Concept PDF guides.</p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com/aurextrade" aria-label="AurexTrade on Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="https://youtube.com/@aurextrade" aria-label="AurexTrade on YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Guides</h2>
          <ul className="space-y-3">{guideLinks.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-white/50 hover:text-white">{label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Company</h2>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-sm text-white/50 hover:text-white">About</Link></li>
            <li><Link href="/shop" className="text-sm text-white/50 hover:text-white">Guides</Link></li>
            <li><Link href="/contact" className="text-sm text-white/50 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">Support & legal</h2>
          <ul className="space-y-3">
            <li><Link href="/contact" className="text-sm text-white/50 hover:text-white">Contact support</Link></li>
            <li><Link href="/#faq" className="text-sm text-white/50 hover:text-white">FAQ</Link></li>
            <li><Link href="/terms" className="text-sm text-white/50 hover:text-white">Terms</Link></li>
            <li><Link href="/privacy" className="text-sm text-white/50 hover:text-white">Privacy</Link></li>
            <li><Link href="/refund-policy" className="text-sm text-white/50 hover:text-white">Refund policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 sm:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AurexTrade. All rights reserved.</p>
          <p>Trading guides from AurexTrade</p>
        </div>
      </div>
    </footer>
  );
}