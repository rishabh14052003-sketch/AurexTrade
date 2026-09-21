"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Mail, Clock, ShieldCheck, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-[#000000] text-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            GET IN TOUCH
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Contact Support
          </h1>
          <p className="text-base sm:text-lg text-[#999999] leading-relaxed">
            Have questions about our courses, enrollment, or 7-day money-back guarantee? We are here to help.
          </p>
        </div>

        {/* Contact Layout: Form + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Contact Form (2 columns) */}
          <div className="lg:col-span-2 bg-[#111111] border border-[#222222] p-8 rounded-[4px]">
            <h3 className="text-xl font-bold uppercase text-white mb-6">
              Send Us A Message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#999999] mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full bg-[#000000] border border-[#222222] focus:border-[#CC0000] text-white placeholder-[#444444] px-5 py-3.5 rounded-[2px] text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#999999] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full bg-[#000000] border border-[#222222] focus:border-[#CC0000] text-white placeholder-[#444444] px-5 py-3.5 rounded-[2px] text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#999999] mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we assist you with your forex education?"
                    className="w-full bg-[#000000] border border-[#222222] focus:border-[#CC0000] text-white placeholder-[#444444] px-5 py-3.5 rounded-[2px] text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message &rarr;
                </Button>
              </form>
            ) : (
              <div className="bg-[#000000] border border-[#CC0000]/40 p-6 rounded-[2px] text-center space-y-3">
                <Send className="w-10 h-10 text-[#CC0000] mx-auto" />
                <h4 className="text-lg font-bold text-white uppercase">
                  Message Delivered
                </h4>
                <p className="text-[#CC0000] text-sm font-semibold">
                  Thank you! Your message has been sent. We will respond within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Info Side Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#111111] border border-[#222222] p-6 rounded-[4px] space-y-3">
              <div className="flex items-center gap-3 text-[#CC0000]">
                <Mail className="w-5 h-5" />
                <span className="font-bold text-xs uppercase tracking-wider text-white">
                  Email Support
                </span>
              </div>
              <p className="text-sm text-[#999999]">
                Reach out directly for prompt support:
              </p>
              <a
                href="mailto:support@aurextrade.com"
                className="text-sm font-semibold text-white hover:text-[#CC0000] transition-colors block"
              >
                support@aurextrade.com
              </a>
            </div>

            <div className="bg-[#111111] border border-[#222222] p-6 rounded-[4px] space-y-3">
              <div className="flex items-center gap-3 text-[#CC0000]">
                <Clock className="w-5 h-5" />
                <span className="font-bold text-xs uppercase tracking-wider text-white">
                  Response Time
                </span>
              </div>
              <p className="text-sm text-[#999999]">
                Our dedicated student support team operates 24/7. Average response time is under 4 hours.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222222] p-6 rounded-[4px] space-y-3">
              <div className="flex items-center gap-3 text-[#CC0000]">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-bold text-xs uppercase tracking-wider text-white">
                  7-Day Guarantee
                </span>
              </div>
              <p className="text-sm text-[#999999]">
                To request a refund within your 7-day window, simply include your order email in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
