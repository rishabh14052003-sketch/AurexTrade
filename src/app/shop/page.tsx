import React from "react";
import { products } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import GuaranteeSection from "@/components/sections/GuaranteeSection";

export const metadata = {
  title: "Shop Courses | AurexTrade",
  description:
    "Explore AurexTrade forex education courses. Master market structure, price action, and SMC trading.",
};

export default function ShopPage() {
  return (
    <div className="bg-[#000000] pt-12">
      {/* Header Section */}
      <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
          All Courses
        </h1>
        <p className="text-base sm:text-lg text-[#999999] max-w-xl mx-auto">
          Everything you need to master forex trading.
        </p>
      </section>

      {/* Course Cards Grid */}
      <section className="pb-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Guarantee Section at Bottom */}
      <GuaranteeSection />
    </div>
  );
}
