import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata = { title: "Refund Policy | AurexTrade" };

export default function RefundPolicyPage() {
  return (
    <main className="min-h-[70vh] bg-[#0b0c0f] px-5 py-16 text-white sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[850px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Customer support</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Refund Policy</h1>
        <div className="mt-8 flex items-center gap-4 rounded-lg border border-blue-200/20 bg-[#111216] p-5 sm:p-7">
          <ShieldCheck className="h-10 w-10 shrink-0 text-blue-200" />
          <div><h2 className="text-lg font-bold">7-Day Money-Back Guarantee — No Questions Asked*</h2><p className="mt-2 text-sm leading-6 text-white/55">If you are not satisfied with an eligible purchase, contact support within seven days of purchase to request a refund.</p></div>
        </div>
        <section className="mt-10 border-t border-white/10 pt-7">
          <h2 className="text-lg font-semibold">How to request a refund</h2>
          <p className="mt-3 text-sm leading-7 text-white/55">Email <a href="mailto:contact@aurextrade.com" className="text-white underline">contact@aurextrade.com</a> using the email associated with your order. Include your order number so support can find the purchase. No explanation is required.</p>
        </section>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-6 text-white/35">*The guarantee window, eligible products, processor workflow, and any mandatory consumer rights must be confirmed by the store owner and reflected in the checkout terms before launch.</p>
        <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-white/75 underline hover:text-white">Contact support</Link>
      </div>
    </main>
  );
}