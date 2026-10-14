"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data/faq";
export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section id="faq" className="faq-section page-container">
      <div className="section-heading">
        <span className="eyebrow">FAQ</span>
        <h2>Frequently asked questions</h2>
        <p>Common questions from editors before they buy.</p>
      </div>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <h3>
              <button
                type="button"
                id={`question-${faq.id}`}
                aria-expanded={openId === faq.id}
                aria-controls={`answer-${faq.id}`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                {faq.question}
                <Plus
                  size={18}
                  className={openId === faq.id ? "rotate-45" : ""}
                />
              </button>
            </h3>
            <div
              id={`answer-${faq.id}`}
              role="region"
              aria-labelledby={`question-${faq.id}`}
              hidden={openId !== faq.id}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="faq-contact">
        Still have questions?{" "}
        <Link href="/contact">
          Contact us <span aria-hidden="true">↗</span>
        </Link>
      </p>
    </section>
  );
}
