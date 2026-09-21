import React from "react";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Privacy Policy | AurexTrade",
  description:
    "AurexTrade Privacy Policy. Learn how we collect, protect, and handle your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#000000] text-white py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            DATA PROTECTION
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-[#999999]">
            Last updated: January 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-[#111111] border border-[#222222] rounded-[4px] p-8 lg:p-12 space-y-8 text-sm sm:text-base leading-relaxed text-[#999999]">
          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you enroll in a course or subscribe to our newsletter, AurexTrade collects personal information required to deliver your course materials. This includes your name, email address, payment details processed securely via encrypted payment gateways, and contact preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use your collected information strictly for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-xs sm:text-sm pl-2">
              <li>Delivering course access links and digital materials immediately upon enrollment.</li>
              <li>Processing refund requests in accordance with our 7-day policy.</li>
              <li>Sending educational trading insights and course updates (only if subscribed).</li>
              <li>Providing responsive 24/7 student support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              3. Data Protection & Third Parties
            </h2>
            <p>
              We treat your privacy with institutional integrity. AurexTrade never sells, rents, or trades your personal information to third-party advertisers. All transaction data is processed using SSL 256-bit encryption.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              4. Cookies & Analytics
            </h2>
            <p>
              We use essential performance cookies to maintain site security, remember session preferences, and improve user navigation. You can disable cookies through your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              5. Contacting Us
            </h2>
            <p>
              If you have any questions or data removal requests regarding this Privacy Policy, please email{" "}
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
