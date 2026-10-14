import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  return <Link href={`/products/${product.id}`} className={`product-card group ${className}`}>
    <div className="product-art"><img src={product.image} alt={`${product.title} PDF cover`} loading="lazy" width="595" height="842" /></div>
    <div className="product-copy"><h3>{product.title}</h3><p>{product.subtitle}</p><span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200">View PDF <ArrowRight size={15} /></span></div>
  </Link>;
}
