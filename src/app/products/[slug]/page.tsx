import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Star } from "lucide-react";
import { products } from "@/lib/data/products";

export function generateStaticParams() {
  return products.map(({ id }) => ({ slug: id }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(({ id }) => id === slug);

  if (!product) notFound();

  return (
    <div className="bg-[#0b0c0f] text-white">
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Link href="/shop" className="mb-6 inline-flex items-center gap-2 text-sm text-white/55 hover:text-white"><ArrowLeft className="h-4 w-4" /> All packs</Link>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#17181c]">
            <img src={product.image} alt={`${product.title} for DaVinci Resolve`} className="aspect-[1.1] w-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center py-2">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {product.badge && <span className="rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">{product.badge}</span>}
            <span className="inline-flex items-center gap-1.5 text-sm text-white/65"><Star className="h-4 w-4 fill-amber-300 text-amber-300" /> {product.rating.toFixed(1)} from verified buyers</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{product.title}</h1>
          <p className="mt-4 text-base leading-7 text-white/60">{product.subtitle}</p>
          <div className="mt-7 flex items-baseline gap-3">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && <><span className="text-base text-white/35 line-through">${product.originalPrice.toFixed(2)}</span><span className="text-sm font-semibold text-blue-200">Save 47%</span></>}
          </div>
          <a href="/contact" className="mt-7 flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#101115] transition-colors hover:bg-blue-100">Ask about this pack</a>
          <p className="mt-3 text-center text-xs text-white/40">One-time purchase. Checkout setup will be confirmed before launch.</p>
          <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
            {product.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-3 text-sm text-white/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{highlight}</li>)}
          </ul>
          <div className="mt-7 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-white/65"><ShieldCheck className="h-5 w-5 shrink-0 text-blue-300" /><span>7-Day Money-Back Guarantee — No Questions Asked*</span></div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#111216] py-8">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-8 gap-y-3 px-5 text-xs font-medium text-white/55 sm:px-10 sm:text-sm">
          <span>DaVinci Resolve 20+</span><span>macOS & Windows</span><span>Free & Studio</span><span>Edit & Fusion page</span>
        </div>
      </section>
      <p className="mx-auto max-w-[1440px] px-5 py-5 text-xs text-white/35 sm:px-10">*Guarantee terms and refund process must be confirmed by the store owner before launch.</p>
    </div>
  );
}