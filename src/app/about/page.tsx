import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import { ShieldCheck, Target, TrendingUp, Award } from "lucide-react";

export const metadata = {
  title: "About Us | AurexTrade",
  description:
    "Learn about AurexTrade's mission to empower traders worldwide with elite price action and SMC forex education.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#000000] text-white">
      {/* Hero Header */}
      <section className="py-20 border-b border-[#222222] bg-[radial-gradient(ellipse_at_top,_rgba(204,0,0,0.1)_0%,_transparent_70%)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            OUR MISSION
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Empowering Consistent <span className="text-[#CC0000]">Traders</span>
          </h1>
          <p className="text-base sm:text-lg text-[#999999] max-w-2xl mx-auto leading-relaxed">
            AurexTrade was founded with a single purpose: to cut through market noise and deliver structured, institutional-grade forex education that works.
          </p>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#111111] border border-[#222222] p-8 rounded-[4px] space-y-4 hover:border-[#CC0000] transition-colors">
            <div className="w-12 h-12 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-[2px] flex items-center justify-center text-[#CC0000]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">
              Institutional Precision
            </h3>
            <p className="text-sm text-[#999999] leading-relaxed">
              We focus on Smart Money Concepts (SMC) and raw Price Action. Understand order blocks, liquidity traps, and market structure shifts used by major institutions.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#222222] p-8 rounded-[4px] space-y-4 hover:border-[#CC0000] transition-colors">
            <div className="w-12 h-12 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-[2px] flex items-center justify-center text-[#CC0000]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">
              Risk Management First
            </h3>
            <p className="text-sm text-[#999999] leading-relaxed">
              Capital preservation is the bedrock of long-term profitability. Our curriculum enforces strict risk-to-reward metrics before any entry setup is taken.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#222222] p-8 rounded-[4px] space-y-4 hover:border-[#CC0000] transition-colors">
            <div className="w-12 h-12 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-[2px] flex items-center justify-center text-[#CC0000]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">
              No Fluff Education
            </h3>
            <p className="text-sm text-[#999999] leading-relaxed">
              No get-rich-quick promises or secret black-box indicators. Only clear, reproducible strategies built for traders serious about consistent performance.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-[#111111] border border-[#222222] rounded-[4px] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge variant="red">THE AUREXTRADE DIFFERENCE</Badge>
            <h2 className="text-3xl font-bold uppercase text-white tracking-tight">
              Built By Traders, For Traders
            </h2>
            <p className="text-[#999999] text-base leading-relaxed">
              Most retail traders fail because they rely on lagging indicators and emotional decisions. At AurexTrade, we teach you how to read the footprint of institutional market participants.
            </p>
            <p className="text-[#999999] text-base leading-relaxed">
              Whether you are taking your first trade or refining your existing strategy, our step-by-step blueprint equips you with actionable skills, trade management systems, and psychological discipline.
            </p>
            <div>
              <Button href="/shop" variant="primary">
                Explore Our Courses &rarr;
              </Button>
            </div>
          </div>

          <div className="bg-[#000000] border border-[#222222] p-8 rounded-[4px] space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider border-b border-[#222222] pb-4">
              What Sets Us Apart
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <span className="text-sm text-white font-medium">
                  Comprehensive 7-Module Blueprint + Free SMC Bonus Book
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <span className="text-sm text-white font-medium">
                  Lifetime access with all future curriculum updates included
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                <span className="text-sm text-white font-medium">
                  Protected by a 7-Day 100% No-Questions-Asked Money-Back Guarantee
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <GuaranteeSection />
    </div>
  );
}
