"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Header from "./components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-9xl font-bold mb-8 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent"
          >
            404
          </motion.div>
          
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-[var(--secondary)] mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-bold hover:brightness-110 transition shadow-lg"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </main>
    </>
  );
}
