import React from "react";
import { Product } from "@/types";
import Badge from "./Badge";
import Button from "./Button";
import { CheckCircle2, Star, ShieldCheck } from "lucide-react";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#111111] border border-[#222222] hover:border-[#CC0000] rounded-[4px] p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 relative group shadow-lg ${className}`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="outline">{product.tag}</Badge>
          {product.isBonus && <Badge variant="red">BONUS</Badge>}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-[#999999] mb-6 leading-relaxed">
          {product.subtitle}
        </p>

        {/* Star Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-6 bg-[#000000]/40 p-2.5 rounded-[2px] border border-[#222222] w-fit">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#eab308] text-[#eab308]"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">
              {product.rating.toFixed(1)} / 5.0
            </span>
          </div>
        )}

        {/* Modules List */}
        <div className="border-t border-b border-[#222222] py-5 mb-6 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#999999] mb-3">
            What You Will Learn:
          </p>
          {product.modules.map((module, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#CC0000] shrink-0 mt-0.5" />
              <span className="text-xs lg:text-sm text-white font-medium leading-snug">
                {module}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Price Section */}
        <div className="mb-6">
          {!product.isBonus ? (
            <div className="flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-black text-white">
                ${product.price}
              </span>
              <span className="text-xs text-[#999999] uppercase tracking-wider">
                One-Time Payment
              </span>
            </div>
          ) : (
            <div className="py-2">
              <span className="text-base font-semibold text-[#CC0000] uppercase tracking-wider block">
                {product.bonusLabel || "Included FREE with course"}
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        {!product.isBonus ? (
          <Button
            href={`/products/${product.id}`}
            variant="primary"
            className="w-full"
          >
            Enroll Now &rarr;
          </Button>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Included with Course
          </Button>
        )}

        {/* Guarantee Note */}
        <div className="flex items-center justify-center gap-1.5 mt-4 text-[#999999]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" />
          <span className="text-xs font-medium">
            7-Day Money-Back Guarantee
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
