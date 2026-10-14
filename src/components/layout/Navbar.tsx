"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";
const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <Link href="/products/full-stack-bundle" className="announcement">
        Every pack. Lifetime access. <span>Full Stack Bundle for $129</span>
        <ArrowRight size={14} />
      </Link>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <button
            className="nav-icon mobile-toggle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" aria-label="NeoEditFX home" className="wordmark">
            NE
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/products/full-stack-bundle" className="nav-bundle">
              Full Stack Bundle <ArrowRight size={15} />
            </Link>
          </nav>
          <Link href="/shop" className="nav-icon" aria-label="Shop packs">
            <ShoppingBag size={18} />
          </Link>
        </div>
        {isOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
                <ArrowRight size={16} />
              </Link>
            ))}
            <Link
              href="/products/full-stack-bundle"
              onClick={() => setIsOpen(false)}
            >
              Full Stack Bundle <ArrowRight size={16} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
