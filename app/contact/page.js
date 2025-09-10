"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

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
        "c3cnRpbsEZUwJdMLY" // Public Key
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message, try again later.");
    }
    setLoading(false);
  };

  return (
    <main className="cursor-default flex flex-col items-center px-12 py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-8">Contact Me</h1>

      {success && <p className="mb-6 text-green-500">Message sent successfully!</p>}

      <form className="flex flex-col gap-4 w-full max-w-lg" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`px-4 py-2 rounded-md mt-1 text-white bg-gray-800 ${
              errors.name ? "border-2 border-red-500" : "border border-gray-300"
            }`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </label>

        <label className="flex flex-col">
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`px-4 py-2 rounded-md mt-1 text-white bg-gray-800 ${
              errors.email ? "border-2 border-red-500" : "border border-gray-300"
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </label>

        <label className="flex flex-col">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`px-4 py-2 rounded-md mt-1 text-white bg-gray-800 resize-none h-32 ${
              errors.message ? "border-2 border-red-500" : "border border-gray-300"
            }`}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-500 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
        <Link
            href="/"
            className="mt-6 px-6 py-3 bg-gray-700 rounded-full font-semibold hover:bg-gray-600 transition"
        >
            Back to Home
        </Link>
    </main>
  );
}
