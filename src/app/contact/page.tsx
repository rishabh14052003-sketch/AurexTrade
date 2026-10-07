"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`NeoEditFX support: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:contact@neoeditfx.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-[70vh] bg-[#0b0c0f] px-5 py-16 text-white sm:px-10 sm:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Support & contact</p>
          <h1 className="text-4xl font-bold sm:text-5xl">How can we help?</h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">Questions, install help, bug reports, or ideas for a future pack. Send a message and we typically respond within 24 hours.</p>
          <a href="https://discord.gg/pMypkPSphH" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white/80 hover:text-white"><MessageCircle className="h-5 w-5 text-blue-200" /> Join the NeoEditFX Discord</a>
          <p className="mt-8 text-sm text-white/45">Email: <a className="text-white/75 hover:text-white" href="mailto:contact@neoeditfx.com">contact@neoeditfx.com</a></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <label className="block text-sm font-medium text-white/75">Name *<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 block min-h-12 w-full rounded-md border border-white/15 bg-[#111216] px-4 text-white outline-none focus:border-blue-200" /></label>
          <label className="block text-sm font-medium text-white/75">Email *<input type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 block min-h-12 w-full rounded-md border border-white/15 bg-[#111216] px-4 text-white outline-none focus:border-blue-200" /></label>
          <label className="block text-sm font-medium text-white/75">Message *<textarea required rows={6} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="mt-2 block w-full resize-y rounded-md border border-white/15 bg-[#111216] px-4 py-3 text-white outline-none focus:border-blue-200" /></label>
          <button type="submit" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#101115] hover:bg-blue-100">Send message <Send className="h-4 w-4" /></button>
          <p className="text-xs text-white/35">Your default email app will open to send this message.</p>
        </form>
      </div>
    </div>
  );
}