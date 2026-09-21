"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/85 backdrop-blur-md border-b border-[#222222] h-[64px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logos/axt-white.png"
            alt="AurexTrade Logo"
            width={140}
            height={32}
            priority
            className="object-contain h-8 w-auto"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#CC0000] font-medium text-xs uppercase tracking-[0.1em] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Enroll CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <Button href="/shop" variant="primary" size="sm">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none hover:text-[#CC0000] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="md:hidden bg-[#000000] border-b border-[#222222] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#CC0000] font-medium text-sm uppercase tracking-[0.1em] transition-colors py-1 border-b border-[#111111]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  href="/shop"
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
