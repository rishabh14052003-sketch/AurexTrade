import React from "react";
import { products } from "@/lib/data/products";
import ProductCard from "../ui/ProductCard";
import { ArrowRight } from "lucide-react";

export const ProductsSection: React.FC = () => {
  return (
    <section id="packs" className="bg-[#0b0c0f] py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">The collection</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Pick your pack</h2>
            <p className="mt-3 text-sm leading-6 text-white/55 sm:text-base">
              Each pack solves a different gap in DaVinci Resolve. Start with one, or get everything in the Full Stack Bundle and save $116.00.
            </p>
          </div>
          <a href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white">
            View whole collection <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 grid overflow-hidden rounded-lg border border-white/10 bg-[#141519] md:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">The complete collection</p>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Every pack. One price.</h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 sm:text-base">Get every current pack, lifetime access, and future pack releases in one purchase. Save $116 compared with buying individually.</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/65 sm:text-sm">
              <span>307+ plugins & presets</span><span>47% savings</span><span>Lifetime access</span>
            </div>
            <a href="/products/full-stack-bundle" className="mt-8 inline-flex min-h-12 w-fit items-center rounded-full bg-white px-6 text-sm font-bold text-[#101115] hover:bg-blue-100">Get the Bundle for $129</a>
          </div>
          <img src={products[0].image} alt="The Full Stack Bundle for DaVinci Resolve" className="h-full min-h-64 w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
