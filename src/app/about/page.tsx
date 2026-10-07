import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "About | NeoEditFX",
  description: "Editing tools and presets for DaVinci Resolve.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0b0c0f] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(ellipse_at_70%_15%,rgba(89,143,231,0.17),transparent_48%)] px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1000px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">About NeoEditFX</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">Better edits, with less time spent building every effect by hand.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">Plugins, text animations, and presets made to fit naturally into DaVinci Resolve workflows.</p>
          <Link href="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#101115] hover:bg-blue-100">Explore the packs <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-10 sm:py-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Made for the timeline</h2>
          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">NeoEditFX creates practical editing tools for creators who want polished motion, effects, and text without rebuilding the same work on every project.</p>
        </div>
        <ul className="space-y-4 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          {["Tools built around a direct editing workflow", "Packs for text, effects, motion, and captions", "Compatible with DaVinci Resolve Free and Studio"].map((item) => <li key={item} className="flex gap-3 text-sm text-white/75"><Check className="h-4 w-4 shrink-0 text-blue-200" />{item}</li>)}
        </ul>
      </section>
    </div>
  );
}