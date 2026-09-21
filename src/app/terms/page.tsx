import React from "react";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | AurexTrade",
  description:
    "AurexTrade Terms of Service. Read our educational terms, intellectual property rules, and disclaimers.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#000000] text-white py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            LEGAL AGREEMENT
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-[#999999]">
            Last updated: January 2026
          </p>
        </div>

        {/* Legal Document Content */}
        <div className="bg-[#111111] border border-[#222222] rounded-[4px] p-8 lg:p-12 space-y-8 text-sm sm:text-base leading-relaxed text-[#999999]">
          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              1. Educational Purpose Only
            </h2>
            <p>
              All content, courses, modules, books, strategies, and materials provided by AurexTrade are strictly for educational and informational purposes only. AurexTrade is an educational company and does not provide personal financial, investment, or trading advice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              2. Financial Risk Disclaimer
            </h2>
            <p className="p-4 bg-[#000000] border-l-2 border-[#CC0000] text-white text-xs sm:text-sm my-3 font-medium">
              Trading foreign exchange (Forex), commodities, and contracts for difference (CFDs) carries a high level of risk and may not be suitable for all investors. You may lose some or all of your invested capital.
            </p>
            <p>
              Past performance demonstrated in course examples or testimonials is no guarantee of future results. Every student is solely responsible for their own trading decisions and account management.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              3. Course Access & Intellectual Property
            </h2>
            <p>
              Upon purchasing an AurexTrade course, you are granted a non-exclusive, non-transferable, single-user license for personal educational use. All course materials, including text, graphics, SMC diagrams, and video blueprints, remain the exclusive intellectual property of AurexTrade.
            </p>
            <p className="mt-3">
              Reproduction, redistribution, reselling, or public sharing of any AurexTrade course content is strictly prohibited and subject to legal action.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              4. Guarantee & Refund Terms
            </h2>
            <p>
              Enrollments are protected by our 7-Day Money-Back Guarantee. Refund terms are governed explicitly by our{" "}
              <Link href="/refund-policy" className="text-[#CC0000] underline font-semibold">
                Refund Policy
              </Link>
              . Requests submitted after the 7-day window will not be eligible.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              5. Contact Information
            </h2>
            <p>
              If you have questions regarding these Terms of Service, please contact us at{" "}
              <a href="mailto:support@aurextrade.com" className="text-white hover:text-[#CC0000] underline">
                support@aurextrade.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
