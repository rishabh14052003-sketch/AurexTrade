import React from "react";
import { products } from "@/lib/data/products";
import ProductCard from "../ui/ProductCard";
import { ShieldCheck } from "lucide-react";

export const ProductsSection: React.FC = () => {
  return (
    <section id="courses" className="bg-[#000000] py-24 border-t border-[#111111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-4">
            Choose Your Course
          </h2>
          <p className="text-base sm:text-lg text-[#999999] leading-relaxed">
            Each course is built to take you from zero to consistent. Start with
            one or get both.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Guarantee Banner below cards */}
        <div className="flex items-center justify-center gap-2.5 text-[#999999] bg-[#111111]/60 border border-[#222222] py-4 px-6 rounded-[4px] max-w-xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-center">
            Every enrollment is protected by our 7-Day Money-Back Guarantee
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
