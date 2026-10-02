"use client";

import * as m from "motion/react-m";

const ease = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: { y: "110%" },
  visible: (delay) => ({
    y: "0%",
    transition: { duration: 0.9, delay, ease },
  }),
};

export default function SplitText({
  as: Tag = "span",
  text,
  mode = "mount",
  delay = 0,
  className = "",
  announce = true,
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {announce ? <span className="sr-only">{text}</span> : null}
      <span aria-hidden="true">
        {words.map((word, index) => (
          <m.span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-bottom"
            initial="hidden"
            animate={mode === "mount" ? "visible" : undefined}
            whileInView={mode === "inView" ? "visible" : undefined}
            viewport={mode === "inView" ? { once: true, amount: 0.4 } : undefined}
          >
            <m.span
              data-reveal
              className="inline-block"
              variants={wordVariants}
              custom={delay + index * 0.06}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </m.span>
          </m.span>
        ))}
      </span>
    </Tag>
  );
}
