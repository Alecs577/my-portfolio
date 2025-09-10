"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

export default function About() {
  const [modalImage, setModalImage] = useState(null);
  const softSkills = [
    "Effective Communication",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Active Listening",
    "Leadership",
    "Networking",
    "Feedback Management",
    "Positivity"
  ];

  const technicalSkills = [
    "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript",
    "React", "Angular", "NodeJS", "Git",
    "Photoshop", "Illustrator", "InDesign", "Figma",
    "IT Essentials", "Networking Essentials", "Introduction to Cybersecurity"
  ];

  const education = [
    {
      title: "Front-End React Developer",
      institution: "Infobasic",
      year: "2022",
      certificate: "/certificates/infobasic.webp"
    },
    {
      title: "Front-End Angular Developer",
      institution: "Dot Academy",
      year: "2023",
      certificate: "/certificates/dot-academy.webp"
    },
    {
      title: "Networking Essentials",
      institution: "Cisco Networking Academy",
      year: "2024",
      certificate: "/certificates/cisco_netessentials.webp"
    },
    {
      title: "IT Essentials",
      institution: "Cisco Networking Academy",
      year: "2024",
      certificate: "/certificates/cisco_itessentials.webp"
    },
    {
      title: "Introduction to Cybersecurity",
      institution: "Cisco Networking Academy",
      year: "2024",
      certificate: "/certificates/cisco_cybersecurity.webp"
    },
    {
      title: "Artificial Intelligence",
      institution: "Profession AI",
      year: "2024",
      certificate: "/certificates/professionai.webp"
    }
  ];

  return (
    <main className="flex flex-col cursor-default items-center px-12 py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">

        {/* Back Button */}
      <Link className="self-start" href="/">
        <motion.button
            className="self-start cursor-pointer mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full shadow-md font-semibold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            ← Back
        </motion.button>
      </Link>

      {/* Titolo */}
      <motion.h1
        className="text-5xl font-extrabold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Descrizione */}
      <motion.p
        className="max-w-3xl text-lg text-gray-300 mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Hi! My name is Alex, I’m 27 years old, and I’m passionate about both the world of computer science and the video game industry. 
        Over the years I’ve gained experience in multiple areas: building cutting-edge websites, working with raster graphics, 
        implementing networks, and providing IT support. I’m a positive and energetic person who is always eager to learn. 
        The kind of person your team will love!
      </motion.p>

      {/* Soft Skills */}
      <motion.div
        className="w-full max-w-3xl mb-12"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-3xl font-bold mb-4">Soft Skills</h2>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold shadow-md hover:scale-110 transition"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Technical Skills */}
      <motion.div
        className="w-full max-w-3xl mb-12"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {technicalSkills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:scale-110 transition"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Education / Certifications */}
      <motion.div
        className="w-full max-w-3xl mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
        <div className="flex flex-wrap gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => edu.certificate && setModalImage(edu.certificate)}
            >
              <span className="font-bold text-white">{edu.title}</span>
              <span className="text-gray-400">{edu.institution} - {edu.year}</span>
              {edu.certificate && (
                <img
                  src={edu.certificate}
                  alt={`${edu.title} certificate`}
                  className="mt-2 w-80 h-auto rounded-md shadow-md hover:shadow-xl transition"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal full screen */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Certificate Fullscreen" className="max-h-full max-w-full rounded-lg shadow-2xl" />
        </div>
      )}

    </main>
  );
}
