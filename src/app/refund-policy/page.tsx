import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ShieldCheck, Mail, CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "Refund Policy | AurexTrade",
  description:
    "AurexTrade 7-Day 100% Money-Back Guarantee Policy. Learn how to request a full refund with no hassle.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#000000] text-white py-16 lg:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            GUARANTEE & TERMS
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-base sm:text-lg text-[#999999] leading-relaxed">
            Our 7-Day 100% No-Questions-Asked Money-Back Guarantee.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-[#111111] border border-[#222222] rounded-[4px] p-8 lg:p-12 space-y-8 text-sm sm:text-base leading-relaxed text-[#999999]">
          {/* Highlight Banner */}
          <div className="bg-[#000000] border border-[#CC0000]/40 p-6 rounded-[4px] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <ShieldCheck className="w-12 h-12 text-[#CC0000] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white uppercase mb-1">
                Zero Risk Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[#999999]">
                If you are not completely satisfied with AurexTrade courses within 7 days of purchase, you are eligible for a 100% full refund.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              1. 7-Day Money-Back Guarantee Window
            </h2>
            <p>
              At AurexTrade, we stand behind the quality and depth of our forex trading courses. We offer a full 7-day money-back guarantee from the exact time and date of your initial purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              2. How to Request a Refund
            </h2>
            <p className="mb-4">
              Requesting a refund is simple and hassle-free. There are no complicated forms to fill out. Simply follow these steps:
            </p>
            <div className="space-y-3 bg-[#000000] p-5 rounded-[2px] border border-[#222222]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-1" />
                <span className="text-white text-xs sm:text-sm">
                  Send an email to <strong className="text-[#CC0000]">support@aurextrade.com</strong> from the email address used during purchase.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-1" />
                <span className="text-white text-xs sm:text-sm">
                  Include your Order Confirmation or receipt email details in the message body.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-1" />
                <span className="text-white text-xs sm:text-sm">
                  State that you wish to receive a refund under our 7-day guarantee policy.
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              3. Processing Time & Reimbursement
            </h2>
            <p className="flex items-center gap-2 mb-2 text-white font-semibold">
              <Clock className="w-4 h-4 text-[#CC0000]" />
              <span>3 to 5 Business Days</span>
            </p>
            <p>
              Once your request is received, our support team will immediately process your refund. The funds will be returned to your original payment method (Credit Card, Debit Card, or Payment Gateway) within 3 to 5 business days, depending on your bank processing speed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase text-white mb-3">
              4. Fair Play Policy
            </h2>
            <p>
              This policy is designed to ensure complete peace of mind for genuine students. Abuse of the refund system (e.g., requesting multiple refunds across repeated purchases) may result in permanent restriction from future course enrollments.
            </p>
          </div>

          <div className="border-t border-[#222222] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">
                Have questions about your order?
              </p>
              <p className="text-xs text-[#999999]">
                Email support@aurextrade.com for assistance.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
