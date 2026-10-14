import Link from "next/link";

export const metadata = { title: "Privacy Policy | AurexTrade" };

const sections = [
  { title: "Information we handle", text: "When you contact us or place an order, we may receive your name, email address, order details, and support messages. The checkout provider processes payment information; this site should not store full card details." },
  { title: "How information is used", text: "Information is used to provide purchased products, respond to support requests, send order-related messages, maintain site security, and understand how the site is used." },
  { title: "Service providers and analytics", text: "Commerce, hosting, analytics, and email providers may process information to deliver their services. Confirm the active providers and cookie-consent configuration before launch, then list them here with links to their privacy notices." },
  { title: "Your choices and rights", text: "Depending on your location, you may be able to request access, correction, deletion, restriction, or a copy of personal information, or withdraw consent where processing relies on consent." },
  { title: "Contact", text: "For privacy questions or requests, email contact@aurextrade.com. The data controller identity, retention periods, and applicable local disclosures should be confirmed by the site owner." },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-[70vh] bg-[#0b0c0f] px-5 py-16 text-white sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[850px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Legal</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-white/45">Last updated: October 2026</p>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {sections.map((section, index) => <section key={section.title} className="py-6"><h2 className="text-lg font-semibold">{index + 1}. {section.title}</h2><p className="mt-3 text-sm leading-7 text-white/55">{section.text}</p></section>)}
        </div>
        <p className="mt-6 text-xs leading-6 text-white/35">This draft must be checked against the live checkout, analytics, email, cookie, and data-retention setup before publication. <Link href="/contact" className="text-white/65 underline">Contact support</Link>.</p>
      </div>
    </main>
  );
}