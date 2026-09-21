"use client";

import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const GuaranteeSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#0a0a0a] border-t border-b border-[#222222] py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[800px] mx-auto text-center flex flex-col items-center"
      >
        {/* 1. Shield Check Icon with Red Glow */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="p-4 rounded-full bg-[#CC0000]/10 border border-[#CC0000]/30 shadow-[0_0_30px_rgba(204,0,0,0.2)]">
            <ShieldCheck className="w-[72px] h-[72px] text-[#CC0000] drop-shadow-[0_0_15px_rgba(204,0,0,0.5)]" />
          </div>
        </motion.div>

        {/* 2. Badge */}
        <motion.div variants={itemVariants} className="mb-4">
          <Badge variant="outline">ZERO RISK</Badge>
        </motion.div>

        {/* 3. Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight mb-3"
        >
          7-Day Money-Back Guarantee
        </motion.h2>

        {/* 4. Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl font-bold text-[#CC0000] mb-6"
        >
          No Questions Asked*
        </motion.p>

        {/* 5. Main Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#999999] max-w-[600px] mb-10 leading-relaxed font-normal"
        >
          We are confident in the quality of our course. If you are not completely
          satisfied within 7 days of purchase, we will give you a full refund.
          No forms, no hassle, no questions.
        </motion.p>

        {/* 6. Feature Points Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 bg-[#111111] p-4 sm:p-6 rounded-[4px] border border-[#222222] w-full max-w-lg"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
            <span className="text-white text-sm font-semibold">Full Refund</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
            <span className="text-white text-sm font-semibold">
              No Forms Needed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
            <span className="text-white text-sm font-semibold">
              7 Days Window
            </span>
          </div>
        </motion.div>

        {/* 7. Action Button */}
        <motion.div variants={itemVariants} className="mb-6 w-full sm:w-auto">
          <Button
            href="/shop"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[240px]"
          >
            Enroll Risk-Free &rarr;
          </Button>
        </motion.div>

        {/* 8. Footnote */}
        <motion.p variants={itemVariants} className="text-[#444444] text-xs">
          *Refund requests must be submitted within 7 days of purchase date.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default GuaranteeSection;
