import { products } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import GuaranteeSection from "@/components/sections/GuaranteeSection";

export const metadata = {
  title: "Shop Plugins & Presets | AurexTrade",
  description: "Explore DaVinci Resolve plugins and presets for text, effects, motion, and captions.",
};

export default function ShopPage() {
  return (
    <div className="bg-[#0b0c0f]">
      <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-10 sm:pt-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">AurexTrade collection</p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Shop</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:text-base">All packs for DaVinci Resolve. Choose a focused toolkit or get the complete collection.</p>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-10 sm:pb-24">
        <h2 className="mb-6 text-xl font-bold text-white">All packs</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <GuaranteeSection />
    </div>
  );
}