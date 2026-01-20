"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.send(
        "service_mb1cynr",
        "template_shagx2k",
        form,
        "c3cnRpbsEZUwJdMLY"
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message, try again later.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-12 rounded-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-[var(--foreground)]">Get In Touch</h2>
        <p className="text-[var(--secondary)] mb-8">Have a project in mind or just want to say hi? Send me a message!</p>

        {success && (
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 text-green-500 rounded-xl"
            >
                Message sent successfully!
            </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--secondary)]">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`px-4 py-3 rounded-xl bg-[var(--background)] border ${
                  errors.name ? "border-red-500" : "border-[var(--card-border)]"
                } focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all`}
                placeholder="John Doe"
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--secondary)]">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`px-4 py-3 rounded-xl bg-[var(--background)] border ${
                  errors.email ? "border-red-500" : "border-[var(--card-border)]"
                } focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all`}
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--secondary)]">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`px-4 py-3 rounded-xl bg-[var(--background)] border ${
                errors.message ? "border-red-500" : "border-[var(--card-border)]"
              } focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all h-32 resize-none`}
              placeholder="Tell me about your project..."
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-bold hover:brightness-110 transition disabled:opacity-50 shadow-lg hover:shadow-[var(--primary)]/30"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
