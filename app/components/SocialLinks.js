"use client";

import { motion } from "motion/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  const icons = [
    {
      component: <FaLinkedin />,
      href: "https://www.linkedin.com/in/alex-berardozzi-31449921a/",
      color: "text-gray-300",
      hoverColor: "hover:text-yellow-500",
      label: "LinkedIn"
    },
    {
      component: <FaGithub />,
      href: "https://github.com/Alecs577",
      color: "text-gray-300",
      hoverColor: "hover:text-yellow-500",
      label: "GitHub"
    }
  ];

  return (
    <div className="flex gap-6 mx-auto">
      {icons.map((icon, idx) => (
        <motion.a
          key={idx}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl ${icon.color} ${icon.hoverColor} transition`}
          aria-label={icon.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 5 + idx * 0.3 }}
        >
          {icon.component}
        </motion.a>
      ))}
    </div>
  );
}
