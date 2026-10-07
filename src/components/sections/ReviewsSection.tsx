import React from "react";
import { reviews } from "@/lib/data/reviews";
import ReviewCard from "../ui/ReviewCard";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#111216] py-20 sm:py-24">
      <div className="mx-auto mb-12 max-w-[1440px] px-5 text-center sm:px-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Real reviews</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Don’t take our word for it</h2>
        <p className="mt-3 text-sm text-white/55 sm:text-base">26,600+ editors use NeoEditFX in their daily workflow.</p>
      </div>

      {/* Marquee Wrapper with side gradient overlays */}
      <div className="relative w-full overflow-hidden space-y-6">
        {/* Left & Right Gradient Masks */}
        <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#111216] to-transparent pointer-events-none sm:w-32" />
        <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#111216] to-transparent pointer-events-none sm:w-32" />

        {/* Row 1: Marquee Left */}
        <div className="flex w-max space-x-6 animate-marquee-left">
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`row1-${review.id}-${idx}`} review={review} />
          ))}
        </div>

        {/* Row 2: Marquee Right */}
      </div>
    </section>
  );
};

export default ReviewsSection;
