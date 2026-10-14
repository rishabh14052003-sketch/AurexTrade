import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function BundleSection() {
  return (
    <section className="bundle-section page-container">
      <div className="bundle-art">
        <img
          src="/assets/products/full-stack-bundle.webp"
          alt="The complete Full Stack Bundle collection"
          loading="lazy"
          width="900"
          height="900"
        />
      </div>
      <div className="bundle-copy">
        <span className="eyebrow">The complete collection</span>
        <h2>
          Every AurexTrade pack.
          <br />
          <em>One price.</em>
        </h2>
        <p>
          Every current pack plus every future pack we release. One purchase,
          lifetime access. Save 47% compared to buying individually — that’s
          $116.00 off.
        </p>
        <div className="bundle-stats">
          <div>
            <strong>307+</strong>
            <span>Plugins & presets</span>
          </div>
          <div>
            <strong>47%</strong>
            <span>Savings</span>
          </div>
          <div>
            <strong>Lifetime</strong>
            <span>Access</span>
          </div>
        </div>
        <Link href="/products/full-stack-bundle" className="action-button">
          Get the Bundle for $129.00 <ArrowRight size={17} />
        </Link>
        <p className="bundle-note">
          <del>$245.00</del> <span>All future packs included</span>
        </p>
      </div>
    </section>
  );
}
