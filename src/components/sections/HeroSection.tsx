import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="relative isolate min-h-[610px] overflow-hidden border-b border-white/10 bg-[#0b0c0f] sm:min-h-[700px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-[center_42%] opacity-60"
          style={{ backgroundImage: "url('https://neoeditfx.com/assets/videos/hero-reveal-poster.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090a0d] via-[#090a0d]/85 to-[#090a0d]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#090a0d] via-transparent to-black/15" />
        <div className="mx-auto flex min-h-[540px] max-w-[1440px] items-center px-5 py-12 sm:min-h-[700px] sm:items-end sm:px-10 sm:pb-24 sm:pt-24">
          <div className="max-w-[680px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">DaVinci Resolve plugins & presets</p>
            <h1 className="max-w-[640px] text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl">
              Take your edits to the next level.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              Plugins and presets for DaVinci Resolve. Drag them on, done.
            </p>
            <Link href="/shop" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-bold text-[#101115] transition-colors hover:bg-blue-100">
              Shop now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section aria-label="Why editors trust NeoEditFX" className="border-b border-white/10 bg-[#111216]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-5 px-5 py-6 text-center sm:grid-cols-4 sm:px-10">
          <p className="text-xs font-semibold text-white/75 sm:text-sm">Trusted by <strong className="text-white">26,600+</strong> editors</p>
          <p className="flex items-center justify-center gap-2 text-xs font-semibold text-white/75 sm:text-sm"><span className="flex text-amber-300"><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /></span> 4.9/5 verified reviews</p>
          <p className="text-xs font-semibold text-white/75 sm:text-sm"><strong className="text-white">307+</strong> plugins and presets</p>
          <p className="flex items-center justify-center gap-2 text-xs font-semibold text-white/75 sm:text-sm"><Check className="h-4 w-4 text-emerald-300" /> Resolve Free and Studio</p>
        </div>
      </section>
    </>
  );
}