"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import {
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  BookOpen,
  Award,
  Zap,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const modulesData = [
  {
    title: "Module 1: Forex Market Fundamentals",
    description:
      "Master the essential foundation of the currency markets. Learn pair dynamics, lot sizing, pips calculation, leverage risk, and how major financial institutions operate.",
    topics: [
      "Introduction to Currency Pairs & Crosses",
      "Understanding Pips, Spread & Commission",
      "Leverage & Margin Requirements",
      "Market Sessions & Volatility Timing",
    ],
  },
  {
    title: "Module 2: Price Action Trading",
    description:
      "Decode raw price charts without lagging indicators. Master market structure, swing highs/lows, trend shifts, and high-probability candlestick patterns.",
    topics: [
      "Market Structure & Trend Identification",
      "Support & Resistance Mapping",
      "Key Candlestick Reversal Formations",
      "Multi-Timeframe Structure Alignment",
    ],
  },
  {
    title: "Module 3: Technical Analysis",
    description:
      "Combine structure with institutional indicators and tools. Conduct top-down analysis to filter out market noise and zero in on high-probability zones.",
    topics: [
      "Top-Down Multi-Timeframe Analysis",
      "Confluence Factor Scoring",
      "Trendline & Channel Breakouts",
      "Volume Profile & Key Supply/Demand Areas",
    ],
  },
  {
    title: "Module 4: Risk Management",
    description:
      "The shield of every profitable trader. Calculate exact position sizing, enforce asymmetric risk-to-reward ratios, and safeguard your trading capital.",
    topics: [
      "Position Sizing Formula & Calculator",
      "1:3+ Risk-to-Reward Systematization",
      "Invalidation Point Stop Loss Placement",
      "Drawdown Mitigation Protocols",
    ],
  },
  {
    title: "Module 5: Trading Psychology",
    description:
      "Overcome cognitive biases, FOMO, overtrading, and revenge trading. Build an ironclad institutional trader mindset for disciplined execution.",
    topics: [
      "Eliminating Emotional Trading Triggers",
      "The Psychology of Loss Acceptance",
      "Executing Your Plan Without Hesitation",
      "Daily Mental Routines of Elite Traders",
    ],
  },
  {
    title: "Module 6: Professional Trading Strategies",
    description:
      "Complete, mechanical trading systems for intraday and swing traders. Step-by-step entry rules, stop placements, and profit target algorithms.",
    topics: [
      "Day Trading Breakout Setup",
      "Swing Trading Trend Continuation Setup",
      "Session Open Volatility Setup",
      "Trade Invalidation & Exit Triggers",
    ],
  },
  {
    title: "Module 7: Trade Management & Journaling",
    description:
      "Track, analyze, and optimize your trading performance. Learn how to scale up capital allocation and manage active positions dynamically.",
    topics: [
      "Setting Up Your Trading Journal",
      "Analyzing Expectancy & Win Rate Metrics",
      "Partial Take Profit & Trailing Stops",
      "Capital Scaling Framework",
    ],
  },
];

const featuresList = [
  "7 Core Modules (Comprehensive Video & Guide)",
  "SMC Bonus Book INCLUDED FREE",
  "Lifetime Unlimited Access & Updates",
  "Instant Instant Delivery via Email",
  "Private Student Community Access",
];

export default function ForexBlueprintPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="bg-[#000000] text-white">
      {/* Course Hero Section */}
      <section className="relative py-16 lg:py-24 border-b border-[#222222] bg-[radial-gradient(ellipse_at_top,_rgba(204,0,0,0.1)_0%,_transparent_70%)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline">FOREX TRADING COURSE</Badge>
              <div className="flex items-center gap-1 text-[#eab308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#eab308]" />
                ))}
                <span className="text-xs font-bold text-white ml-1.5">
                  4.9 (500+ Students)
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
              The Complete Forex Trading Blueprint
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#999999] mb-8 leading-relaxed font-normal">
              From First Trade to Consistent Performance. Master institutional
              market structure, risk control, and high-probability price action
              setups.
            </p>

            {/* Mobile Hero Price CTA */}
            <div className="lg:hidden bg-[#111111] p-6 rounded-[4px] border border-[#222222] mb-8 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">$97</span>
                <span className="text-xs text-[#999999] uppercase tracking-wider">
                  One-Time Payment
                </span>
              </div>
              <Button href="#purchase" variant="primary" className="w-full">
                Enroll Now &rarr;
              </Button>
              <div className="flex items-center justify-center gap-1.5 text-[#999999]">
                <ShieldCheck className="w-4 h-4 text-[#CC0000]" />
                <span className="text-xs">7-Day Money-Back Guarantee</span>
              </div>
            </div>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium bg-[#111111] p-3 rounded-[2px] border border-[#222222]">
                <BookOpen className="w-4 h-4 text-[#CC0000]" />
                <span>7 Deep-Dive Modules</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium bg-[#111111] p-3 rounded-[2px] border border-[#222222]">
                <Zap className="w-4 h-4 text-[#CC0000]" />
                <span>SMC Bonus Included</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium bg-[#111111] p-3 rounded-[2px] border border-[#222222] col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#CC0000]" />
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Breakdown & Sticky Purchase Card */}
      <section className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Columns: Curriculum & Modules */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight mb-4">
                Course Curriculum Overview
              </h2>
              <p className="text-[#999999] text-base leading-relaxed mb-8">
                Explore the 7 step-by-step modules engineered to turn beginners into
                disciplined, consistently profitable traders.
              </p>

              {/* Accordion Modules List */}
              <div className="space-y-4">
                {modulesData.map((module, idx) => {
                  const isOpen = openModule === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#111111] border border-[#222222] rounded-[4px] overflow-hidden transition-colors hover:border-[#333333]"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="font-bold text-white text-base sm:text-lg pr-4">
                          {module.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#CC0000] shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" as const }}
                          >
                            <div className="px-5 pb-6 pt-2 border-t border-[#222222]/60">
                              <p className="text-[#999999] text-sm leading-relaxed mb-4">
                                {module.description}
                              </p>
                              <div className="space-y-2 bg-[#000000]/40 p-4 rounded-[2px] border border-[#222222]">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#CC0000] block mb-2">
                                  Key Lessons:
                                </span>
                                {module.topics.map((topic, topicIdx) => (
                                  <div
                                    key={topicIdx}
                                    className="flex items-center gap-2 text-xs text-white"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CC0000] shrink-0" />
                                    <span>{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SMC Bonus Highlight Box */}
            <div className="bg-[#111111] border border-[#CC0000]/40 rounded-[4px] p-6 lg:p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="red">FREE BONUS</Badge>
                <span className="text-xs text-[#999999] uppercase tracking-wider font-semibold">
                  Included With Blueprint
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Smart Money Concept Trading Mastery
              </h3>
              <p className="text-[#999999] text-sm leading-relaxed mb-6">
                Get full access to our proprietary SMC guide. Learn Break of
                Structure (BOS), Change of Character (CHOCH), Liquidity Sweeps,
                Order Blocks, and Fair Value Gaps (FVG).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Market Structure & BOS",
                  "CHOCH & Change of Trend",
                  "Liquidity Sweep Concepts",
                  "Institutional Order Blocks",
                  "Fair Value Gap (FVG) Imbalances",
                  "High-Probability SMC Setups",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0" />
                    <span className="text-xs text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Desktop Purchase Sidebar */}
          <div className="lg:col-span-1">
            <div
              id="purchase"
              className="sticky top-24 bg-[#111111] border border-[#222222] hover:border-[#CC0000] transition-colors rounded-[4px] p-6 lg:p-8 space-y-6 shadow-2xl"
            >
              <div>
                <Badge variant="outline" className="mb-4">
                  LIFETIME ACCESS
                </Badge>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">$97</span>
                  <span className="text-xs text-[#999999] uppercase tracking-wider">
                    One-time payment
                  </span>
                </div>
                <p className="text-xs text-[#999999]">
                  Instant access sent directly to your inbox.
                </p>
              </div>

              {/* Enrollment CTA */}
              <Button href="/shop" variant="primary" size="lg" className="w-full">
                Enroll Now &rarr;
              </Button>

              {/* Guarantee Note */}
              <div className="flex items-center justify-center gap-2 text-[#999999] text-xs pt-1 border-b border-[#222222] pb-6">
                <ShieldCheck className="w-4 h-4 text-[#CC0000]" />
                <span>7-Day 100% Money-Back Guarantee</span>
              </div>

              {/* What is Included List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-white">
                  What Is Included:
                </p>
                {featuresList.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                    <span className="text-xs text-white leading-snug font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />
    </div>
  );
}
