import Link from "next/link";

export const metadata = { title: "Terms of Service | AurexTrade" };

const sections = [
  { title: "Digital products", text: "AurexTrade products are digital plugins, presets, and related materials for DaVinci Resolve. Product pages describe their features and supported software versions." },
  { title: "License and use", text: "A purchase grants a limited, personal license to use the product. Buyers may not redistribute, resell, share downloads, or create competing products from the supplied files. The final license terms should be approved by the rights holder before launch." },
  { title: "Payment and delivery", text: "Payments and digital delivery will be handled by the checkout provider presented during purchase. The provider, delivery timing, tax handling, and account requirements must be confirmed before checkout is enabled." },
  { title: "Guarantee", text: "Eligible purchases are covered by the 7-Day Money-Back Guarantee — No Questions Asked*. See the Refund Policy for the request window." },
  { title: "Compatibility and liability", text: "Check each product page for operating system and DaVinci Resolve requirements. Compatibility may depend on the customer's software and hardware configuration. Nothing in these terms limits consumer rights that cannot legally be limited." },
  { title: "Governing law and contact", text: "The governing law and business identity must be confirmed by the site owner. For questions about these terms, contact contact@aurextrade.com." },
];

export default function TermsPage() {
  return (
    <main className="min-h-[70vh] bg-[#0b0c0f] px-5 py-16 text-white sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[850px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Legal</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-white/45">Last updated: October 2026</p>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {sections.map((section, index) => <section key={section.title} className="py-6"><h2 className="text-lg font-semibold">{index + 1}. {section.title}</h2><p className="mt-3 text-sm leading-7 text-white/55">{section.text}</p></section>)}
        </div>
        <p className="mt-6 text-xs leading-6 text-white/35">This draft requires owner/legal review, especially business identity, licensing, governing law, and checkout terms. <Link href="/refund-policy" className="text-white/65 underline">Read the Refund Policy</Link>.</p>
      </div>
    </main>
  );
}