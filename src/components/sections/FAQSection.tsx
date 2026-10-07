"use client";

import React, { useState } from "react";
import { faqs } from "@/lib/data/faq";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="border-t border-white/10 bg-[#0b0c0f] py-20 sm:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-sm text-white/55 sm:text-base">
            Common questions from editors before they buy.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-white/10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-white/10">
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left group focus:outline-none transition-colors"
                >
                  <span className="pr-4 text-base font-semibold text-white transition-colors duration-200 group-hover:text-blue-200 sm:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-blue-300 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-[1.7] text-white/55 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
