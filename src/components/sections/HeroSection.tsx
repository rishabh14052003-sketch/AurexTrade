"use client";

import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const stats = [
    { value: "500+", label: "Students" },
    { value: "4.9/5", label: "Rating" },
    { value: "7 Core", label: "Modules" },
    { value: "Lifetime", label: "Access" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-[#000000] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(204,0,0,0.12)_0%,_transparent_70%)]" />

      {/* Main Content Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[900px] w-full mx-auto flex flex-col items-center text-center"
      >
        {/* 1. Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <Badge variant="outline">FOREX TRADING COURSE</Badge>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.1] max-w-[800px] mb-6"
        >
          Master Forex Trading. Trade With{" "}
          <span className="text-[#CC0000]">Confidence</span>.
        </motion.h1>

        {/* 3. Subheading Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#999999] max-w-[600px] mb-10 leading-relaxed font-normal"
        >
          Professional forex education from market structure to
          high-probability trade setups.
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button
            href="/shop"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            Enroll Now &rarr;
          </Button>
          <Button
            href="#courses"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            View Curriculum
          </Button>
        </motion.div>

        {/* 5. Stats Row */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-2xl bg-[#111111]/80 backdrop-blur-sm border border-[#222222] rounded-[4px] p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-0"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center py-2 ${
                idx !== stats.length - 1
                  ? "md:border-r border-[#222222]"
                  : ""
              }`}
            >
              <span className="text-xl sm:text-2xl font-black text-white">
                {stat.value}
              </span>
              <span className="text-xs text-[#999999] font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Subtle Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
