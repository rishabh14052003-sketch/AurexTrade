import React from "react";
import { reviews } from "@/lib/data/reviews";
import ReviewCard from "../ui/ReviewCard";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 overflow-hidden relative border-t border-[#222222]">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-3">
          What Our Students Say
        </h2>
        <p className="text-base sm:text-lg text-[#999999]">
          Real results from real traders
        </p>
      </div>

      {/* Marquee Wrapper with side gradient overlays */}
      <div className="relative w-full overflow-hidden space-y-6">
        {/* Left & Right Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Marquee Left */}
        <div className="flex w-max space-x-6 animate-marquee-left">
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`row1-${review.id}-${idx}`} review={review} />
          ))}
        </div>

        {/* Row 2: Marquee Right */}
        <div className="flex w-max space-x-6 animate-marquee-right">
          {[...reviews, ...reviews].map((review, idx) => (
            <ReviewCard key={`row2-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
