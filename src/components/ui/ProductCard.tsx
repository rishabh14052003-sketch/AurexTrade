import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Product } from "@/types";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={`group block overflow-hidden rounded-md border border-white/10 bg-[#111216] transition-colors hover:border-white/30 ${className}`}
    >
      <div className="relative aspect-[1.18] overflow-hidden bg-[#1b1c20]">
        <img
          src={product.image}
          alt={`${product.title} for DaVinci Resolve`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full border border-blue-300/30 bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-current text-amber-300" /> {product.rating.toFixed(1)}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-white sm:text-xl">{product.title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>
        <p className="min-h-12 text-sm leading-6 text-white/60">{product.subtitle}</p>
        <div className="mt-5 flex items-center gap-2">
          <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-white/40 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}