import Link from "next/link";
import { products } from "@/lib/data/products";
import ProductCard from "../ui/ProductCard";
import { ArrowRight } from "lucide-react";
export default function ProductsSection() {
  return (
    <section id="packs" className="collection-section page-container">
      <div className="section-intro">
        <h2>Pick your pack</h2>
        <p>
          Each pack solves a different gap in DaVinci Resolve. Start with one,
          or get everything in the Full Stack Bundle and save $116.00.
        </p>
      </div>
      <div className="featured-grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="collection-link">
        <Link href="/shop" className="secondary-button">
          View whole collection <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
