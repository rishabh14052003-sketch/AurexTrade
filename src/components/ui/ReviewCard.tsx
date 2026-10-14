import React from "react";
import { Review } from "@/types";
import { Star } from "lucide-react";

export interface ReviewCardProps {
  review: Review;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#111111] border border-[#222222] rounded-2xl p-6 flex flex-col justify-between w-[320px] md:w-[360px] shrink-0 shadow-md ${className}`}
    >
      <div>
        {/* 5 Gold Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#eab308] text-[#eab308]" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-white italic text-sm leading-relaxed mb-6">
          "{review.text}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="border-t border-[#222222] pt-4 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="font-bold text-white text-sm">{review.name}</span>
          <span className="text-xs text-[#999999] font-medium bg-[#1a1a1a] px-2 py-0.5 rounded-[2px] border border-[#222222]">
            {review.tag}
          </span>
        </div>
        {review.product && (
          <span className="text-[11px] text-[#609cff] font-semibold mt-1.5 uppercase tracking-wider">
            {review.product}
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
