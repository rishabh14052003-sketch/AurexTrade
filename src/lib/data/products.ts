import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "forex-trading-blueprint",
    tag: "FOREX TRADING COURSE",
    title: "The Complete Forex Trading Blueprint",
    subtitle: "From First Trade to Consistent Performance",
    price: 97,
    rating: 4.9,
    isBonus: false,
    modules: [
      "Forex Market Fundamentals",
      "Price Action Trading",
      "Technical Analysis",
      "Risk Management",
      "Trading Psychology",
      "Professional Trading Strategies",
      "Trade Management & Journaling",
    ],
  },
  {
    id: "smc-bonus-book",
    tag: "SMC BONUS BOOK",
    title: "Smart Money Concept Trading Mastery",
    subtitle: "From Market Structure to High-Probability SMC Setups",
    isBonus: true,
    bonusLabel: "Included FREE with main course",
    rating: 5.0,
    modules: [
      "Market Structure",
      "Break of Structure",
      "Change of Character",
      "Liquidity Concepts",
      "Order Blocks",
      "Fair Value Gaps",
      "Trading with SMC",
    ],
  },
];
