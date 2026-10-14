import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types";
export interface ProductCardProps {
  product: Product;
  className?: string;
}
export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={`product-card group ${className}`}
    >
      <div className="product-art">
        <img
          src={product.image}
          alt={`${product.title} plugin pack for DaVinci Resolve`}
          loading="lazy"
          width="720"
          height="480"
        />
        {product.originalPrice && (
          <span className="saving-badge">
            Save ${(product.originalPrice - product.price).toFixed(2)}
          </span>
        )}
      </div>
      <div className="product-copy">
        <h3>{product.title}</h3>
        <p>{product.subtitle}</p>
        <div className="product-price">
          <strong>${product.price.toFixed(2)}</strong>
          {product.originalPrice && (
            <del>${product.originalPrice.toFixed(2)}</del>
          )}
          <span className="product-rating">
            <Star size={13} fill="currentColor" />
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
