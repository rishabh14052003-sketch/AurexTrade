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
    <section id="faq" className="bg-[#000000] py-24 border-t border-[#111111]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#999999]">
            Common questions before enrolling.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-[#222222]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-[#222222]">
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left group focus:outline-none transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#CC0000] transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-[#CC0000] shrink-0 transition-transform duration-300 ${
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
                      <p className="pb-6 text-sm sm:text-base text-[#999999] leading-[1.7]">
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
