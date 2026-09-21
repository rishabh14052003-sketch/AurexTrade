"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-[#222222]">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-3">
          Stay Ahead of the Market
        </h2>

        {/* Paragraph */}
        <p className="text-[#999999] text-sm sm:text-base mb-10 leading-relaxed">
          Get trading insights, course updates, and early access to new content.
        </p>

        {/* Form Container */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-[#111111] border border-[#222222] focus:border-[#CC0000] text-white placeholder-[#444444] px-5 py-[14px] rounded-[2px] flex-1 text-sm outline-none transition-colors"
            />
            <Button
              type="submit"
              variant="primary"
              className="px-7 py-[14px] shrink-0"
            >
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="bg-[#111111] border border-[#CC0000]/40 p-4 rounded-[2px] max-w-lg mx-auto">
            <p className="text-[#CC0000] font-semibold text-base">
              You are in! Stay tuned.
            </p>
          </div>
        )}

        {/* Spam Disclaimer Footnote */}
        <p className="text-[#444444] text-xs mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
