"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function TypingText({
  text,
  className,
  delay = 0,
  speed = 70,
  highlightWord = "",
  highlightClass = "text-blue-400",
  onComplete,
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;

    const typeLetter = (i) => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        timeout = setTimeout(() => typeLetter(i + 1), speed);
      } else {
        setDone(true);
        if (onComplete) onComplete();
      }
    };

    const delayTimeout = setTimeout(() => typeLetter(1), delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, delay, speed, onComplete]);

  // Split testo per evidenziare la parola
  const parts = highlightWord ? displayed.split(highlightWord) : [displayed];

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            done ? (
              <motion.span
                className={highlightClass}
                animate={{opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {highlightWord}
              </motion.span>
            ) : (
              <span>{highlightWord}</span>
            )
          )}
        </span>
      ))}
      {!done && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-1 bg-white ml-1"
        />
      )}
    </span>
  );
}
