import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="cinematic-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/videos/hero-reveal-poster.jpg"
          aria-hidden="true"
        >
          <source
            src="/assets/videos/hero-reveal-1280.webm"
            type="video/webm"
          />
        </video>
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>
            Take your edits to
            <br className="hidden sm:block" /> the <em>next level.</em>
          </h1>
          <p>Plugins and presets for DaVinci Resolve. Drag them on, done.</p>
          <Link href="/shop" className="action-button">
            Shop now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="trust-strip" aria-label="Why editors trust AurexTrade">
        <div>
          <strong>27,800+</strong>
          <span>editors</span>
        </div>
        <div>
          <strong>4.9/5</strong>
          <span className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
          </span>
        </div>
        <div>
          <strong>307+</strong>
          <span>plugins & presets</span>
        </div>
        <div>
          <Check size={18} className="text-emerald-300" />
          <span>Resolve Free & Studio</span>
        </div>
      </section>
    </>
  );
}
