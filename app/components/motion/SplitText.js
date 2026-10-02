"use client";

import * as m from "motion/react-m";

const ease = [0.22, 1, 0.36, 1];

export default function SplitText({
  as: Tag = "span",
  text,
  mode = "mount",
  delay = 0,
  className = "",
}) {
  const words = text.split(" ");

  const viewport =
    mode === "inView"
      ? { once: true, margin: "-10% 0px" }
      : undefined;

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
            <m.span
              data-reveal
              className="inline-block"
              initial={{ y: "110%" }}
              animate={mode === "mount" ? { y: "0%" } : undefined}
              whileInView={mode === "inView" ? { y: "0%" } : undefined}
              viewport={viewport}
              transition={{
                duration: 0.9,
                delay: delay + index * 0.06,
                ease,
              }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </m.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
