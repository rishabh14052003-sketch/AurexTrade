export interface Product {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  price?: number;
  originalPrice?: number;
  modules: string[];
  isBonus?: boolean;
  bonusLabel?: string;
  rating?: number;
}

export interface Review {
  id: string;
  name: string;
  tag: string;
  text: string;
  product?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
