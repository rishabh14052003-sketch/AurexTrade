export interface Product { id: string; title: string; subtitle: string; image: string; pdf: string; highlights: string[]; }
export interface Review { id: string; name: string; tag: string; text: string; product?: string; }
export interface FAQItem { id: string; question: string; answer: string; }
