"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { certificates } from "../data/certificates";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Function to handle clicking on the overlay or close button
  const handleClose = () => setSelectedCert(null);

  return (
    <section id="certificates" className="py-20 px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--foreground)]">Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCert(cert)}
              className="group flex flex-col overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm cursor-pointer"
            >
              <div className="relative w-full h-56 bg-white dark:bg-zinc-800">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow bg-[var(--card-bg)] z-10">
                <h3 className="font-bold text-lg text-[var(--foreground)] mb-1">{cert.title}</h3>
                <p className="font-medium text-sm text-[var(--primary)]">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center bg-[var(--card-bg)] rounded-3xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
              
              <div className="relative w-full h-[60vh] sm:h-[70vh] flex-shrink-0 bg-white dark:bg-zinc-900">
                <Image 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  fill 
                  className="object-contain p-4"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="w-full p-6 text-center border-t border-[var(--card-border)] bg-[var(--card-bg)] z-10">
                <h3 className="font-bold text-2xl text-[var(--foreground)] mb-1">{selectedCert.title}</h3>
                <p className="font-medium text-[var(--primary)]">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
