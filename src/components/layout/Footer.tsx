import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Send } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222222] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Column 1: Brand & Socials (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/axt-white.png"
                alt="AurexTrade Logo"
                width={150}
                height={34}
                className="object-contain h-8 w-auto"
              />
            </Link>
            <p className="text-[#999999] text-sm max-w-sm leading-relaxed">
              From First Trade to Consistent Performance. Professional forex
              education from market structure to high-probability trade setups.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[2px] bg-[#111111] border border-[#222222] flex items-center justify-center text-white hover:text-[#CC0000] hover:border-[#CC0000] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-[2px] bg-[#111111] border border-[#222222] flex items-center justify-center text-white hover:text-[#CC0000] hover:border-[#CC0000] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-[2px] bg-[#111111] border border-[#222222] flex items-center justify-center text-white hover:text-[#CC0000] hover:border-[#CC0000] transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-[0.1em] text-xs">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  Shop Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-[0.1em] text-xs">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/terms"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-[0.1em] text-xs">
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-[#999999] hover:text-white transition-colors text-xs lg:text-sm"
                >
                  7-Day Guarantee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222222] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#999999]">
            © 2026 AurexTrade. All Rights Reserved.
          </p>
          <p className="text-xs text-[#444444] font-medium tracking-wider uppercase">
            Professional Forex Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
