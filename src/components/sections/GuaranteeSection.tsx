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
    <section className="border-y border-white/10 bg-[#111216] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[800px] mx-auto text-center flex flex-col items-center"
      >
        {/* 1. Shield Check Icon with Red Glow */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="rounded-full border border-blue-300/25 bg-blue-300/10 p-4 shadow-[0_0_30px_rgba(90,150,255,0.13)]">
            <ShieldCheck className="h-[72px] w-[72px] text-blue-200" />
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
          className="mb-6 text-xl font-bold text-blue-200 sm:text-2xl"
        >
          &mdash; No Questions Asked*
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
          className="mb-10 flex w-full max-w-lg flex-wrap items-center justify-center gap-6 rounded-md border border-white/10 bg-[#0b0c0f] p-4 sm:gap-10 sm:p-6"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-200" />
            <span className="text-white text-sm font-semibold">Full Refund</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-200" />
            <span className="text-white text-sm font-semibold">
              No Forms Needed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-200" />
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
        <motion.p variants={itemVariants} className="text-xs text-white/35">
          *Refund requests must be submitted within 7 days of purchase date.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default GuaranteeSection;
