import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BundleSection from "@/components/sections/BundleSection";
import FAQSection from "@/components/sections/FAQSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <BundleSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
