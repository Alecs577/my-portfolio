"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Magnetic from "./motion/Magnetic";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const labels = {
  idle: "Send message",
  sending: "Sending…",
  sent: "Sent",
  error: "Send message",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Add your name.";
    if (!EMAIL.test(form.email)) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Write a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "service_mb1cynr",
        "template_shagx2k",
        form,
        "c3cnRpbsEZUwJdMLY"
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="05"
        label="Contact"
        title="Have something that needs to ship?"
        intro="Tell me what you're building, where it's stuck, or the role you're hiring for. I read every message and reply personally."
      />

      <div className="grid gap-16 md:grid-cols-12">
        <form onSubmit={handleSubmit} className="space-y-10 md:col-span-8" noValidate>
          {status === "sent" ? (
            <p role="status" className="text-sm text-fg">
              Thanks — your message is in. I&apos;ll get back to you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p role="alert" className="text-sm text-accent">
              Something went wrong and the message wasn&apos;t sent. Try again, or reach me on LinkedIn.
            </p>
          ) : null}

          <div className="grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Name</span>
              <input
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-fg transition-colors focus:border-accent"
              />
              {errors.name ? (
                <span id="name-error" className="mt-2 block text-xs text-accent">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="block">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="mt-3 w-full border-0 border-b border-line bg-transparent py-3 text-fg transition-colors focus:border-accent"
              />
              {errors.email ? (
                <span id="email-error" className="mt-2 block text-xs text-accent">
                  {errors.email}
                </span>
              ) : null}
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              rows={5}
              className="mt-3 w-full resize-none border-0 border-b border-line bg-transparent py-3 text-fg transition-colors focus:border-accent"
            />
            {errors.message ? (
              <span id="message-error" className="mt-2 block text-xs text-accent">
                {errors.message}
              </span>
            ) : null}
          </label>

          <Magnetic className="inline-block">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-12 min-w-40 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-fg disabled:opacity-60"
            >
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={status}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {labels[status]}
                </m.span>
              </AnimatePresence>
            </button>
          </Magnetic>
        </form>

        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Elsewhere</p>
          <SocialLinks className="mt-4 flex-col gap-3" />
        </div>
      </div>
    </section>
  );
}
