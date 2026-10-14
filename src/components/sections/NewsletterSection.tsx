"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const subject = encodeURIComponent("AurexTrade updates subscription");
      const body = encodeURIComponent(`Please add ${email.trim()} to AurexTrade product updates.`);
      window.location.href = `mailto:contact@aurextrade.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    }
  };

  return (
    <section className="border-t border-white/10 bg-[#111216] py-20 sm:py-24">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          New packs before anyone else
        </h2>

        {/* Paragraph */}
        <p className="text-[#999999] text-sm sm:text-base mb-10 leading-relaxed">
          Be first to hear about new plugins, updates, and subscriber-only offers.
        </p>

        {/* Form Container */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          >
            <input
              aria-label="Email address"
              autoComplete="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-[#111111] border border-[#222222] focus:border-[#0561ff] text-white placeholder-[#444444] px-5 py-[14px] rounded-xl flex-1 text-sm outline-none transition-colors"
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
          <div className="bg-[#111111] border border-[#0561ff]/40 p-4 rounded-xl max-w-lg mx-auto">
            <p className="text-[#0561ff] font-semibold text-base">
              Send the prepared email to request updates.
            </p>
          </div>
        )}

        {/* Spam Disclaimer Footnote */}
        <p className="text-[#444444] text-xs mt-4">
          Your email app will open to send the signup request.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
