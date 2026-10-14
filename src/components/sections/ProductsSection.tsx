import { products } from "@/lib/data/products";
import ProductCard from "../ui/ProductCard";
export default function ProductsSection() { return <section id="books" className="collection-section page-container"><div className="section-intro"><h2>Explore the two trading guides</h2><p>Browse the forex trading blueprint and the Smart Money Concept bonus overview. Both PDFs are available to view or download.</p></div><div className="featured-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>; }
