"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link
        href="/shop"
        className="flex min-h-10 items-center justify-center gap-2 bg-[#17191d] px-4 text-center text-xs font-semibold text-white/85 transition-colors hover:text-white sm:text-sm"
      >
        Get the Full Stack Bundle, every pack, lifetime access, all in one.
        <ArrowRight className="h-4 w-4 shrink-0 text-blue-300" />
      </Link>
      <header className="relative z-50 border-b border-white/10 bg-[#0b0c0f]">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 items-center justify-center text-white/75 hover:text-white md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" aria-label="NeoEditFX home" className="flex items-center gap-2">
            <span className="text-2xl font-black italic tracking-tight text-white">NE</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:inline">NeoEditFX</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-white/65 transition-colors hover:text-white">
                {link.name}
              </Link>
            ))}
          </nav>
          <Link href="/shop" aria-label="Shop packs" className="flex h-10 w-10 items-center justify-center text-white/75 hover:text-white">
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
        {isOpen && (
          <nav className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#101115] px-5 py-3 shadow-xl md:hidden">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block border-b border-white/5 py-4 text-sm font-medium text-white/80 last:border-0">
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}