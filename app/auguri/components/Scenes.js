"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CARD, getBirthdayDate } from "../config";

const fade = {
  initial: { opacity: 0, y: 18, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -14, filter: "blur(8px)" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function pad(n) {
  return String(n).padStart(2, "0");
}

function useCountdown() {
  const target = useMemo(() => getBirthdayDate().getTime(), []);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const total = Math.floor(diff / 1000);
  return {
    arrived: diff <= 0,
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function SceneIntro({ onNext }) {
  return (
    <motion.section className="auguri-stage" {...fade}>
      <p className="auguri-kicker">{CARD.intro.kicker}</p>
      <h1 className="auguri-title">
        Per te<i>.</i>
      </h1>
      <p className="auguri-sub">{CARD.intro.subtitle}</p>
      <div className="auguri-pulse" />
      <button type="button" className="auguri-cta" onClick={onNext}>
        {CARD.intro.cta}
      </button>
    </motion.section>
  );
}

export function SceneCountdown({ onNext }) {
  const { arrived, hours, minutes, seconds } = useCountdown();

  return (
    <motion.section className="auguri-stage" {...fade}>
      <p className="auguri-kicker">{arrived ? "Adesso" : "Quasi"}</p>
      <h1 className="auguri-title" style={{ fontSize: "clamp(2.4rem, 10vw, 4.6rem)" }}>
        {arrived ? CARD.countdown.arrived : CARD.countdown.waiting}
      </h1>
      {!arrived && (
        <div className="auguri-clock" aria-live="polite">
          <div className="auguri-unit">
            <strong>{pad(hours)}</strong>
            <span>ore</span>
          </div>
          <div className="auguri-unit">
            <strong>{pad(minutes)}</strong>
            <span>min</span>
          </div>
          <div className="auguri-unit">
            <strong>{pad(seconds)}</strong>
            <span>sec</span>
          </div>
        </div>
      )}
      <button type="button" className="auguri-cta" onClick={onNext}>
        {arrived ? CARD.countdown.open : CARD.countdown.skip}
      </button>
    </motion.section>
  );
}

export function SceneEnvelope({ onNext }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    window.setTimeout(onNext, 1450);
  };

  return (
    <motion.section className="auguri-stage" {...fade}>
      <p className="auguri-kicker">{CARD.envelope.hint}</p>
      <button
        type="button"
        className="auguri-envelope-wrap"
        onClick={handleOpen}
        aria-label={CARD.envelope.cta}
        style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}
      >
        <div className={`auguri-envelope${open ? " is-open" : ""}`}>
          <div className="auguri-letter-peek" />
          <div className="auguri-env-body" />
          <div className="auguri-flap" />
          <div className="auguri-seal">A</div>
        </div>
      </button>
      <p className="auguri-sub" style={{ marginTop: 22 }}>
        {CARD.envelope.cta}
      </p>
    </motion.section>
  );
}

export function SceneLetter({ name, onNext }) {
  return (
    <motion.section className="auguri-stage" {...fade}>
      <article className="auguri-paper">
        <p className="greeting">{CARD.letter.greeting(name)}</p>
        {CARD.letter.paragraphs.map((text, index) => (
          <motion.p
            key={text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + index * 0.16, duration: 0.6 }}
          >
            {text}
          </motion.p>
        ))}
        <p className="closing">{CARD.letter.closing}</p>
        <button type="button" className="auguri-cta" onClick={onNext}>
          {CARD.letter.continue}
        </button>
      </article>
    </motion.section>
  );
}

export function SceneWishes({ onNext }) {
  const [opened, setOpened] = useState(() => new Set());

  const toggle = (index) => {
    setOpened((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const allOpen = opened.size === CARD.wishes.items.length;

  return (
    <motion.section className="auguri-stage" {...fade}>
      <p className="auguri-kicker">{CARD.wishes.title}</p>
      <p className="auguri-sub">{CARD.wishes.hint}</p>
      <div className="auguri-wishes">
        {CARD.wishes.items.map((wish, index) => {
          const isOpen = opened.has(index);
          const wide = index === CARD.wishes.items.length - 1 && CARD.wishes.items.length % 2 === 1;
          return (
            <button
              key={wish}
              type="button"
              className={`auguri-wish${wide ? " is-wide" : ""}`}
              onClick={() => toggle(index)}
            >
              <span className="star">{isOpen ? "✦" : "✧"}</span>
              {isOpen ? wish : "un desiderio"}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {allOpen && (
          <motion.button
            type="button"
            className="auguri-cta"
            onClick={onNext}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {CARD.wishes.continue}
          </motion.button>
        )}
      </AnimatePresence>
      {!allOpen && (
        <button type="button" className="auguri-ghost" onClick={onNext}>
          Salta
        </button>
      )}
    </motion.section>
  );
}

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 17) % 88)}%`,
        delay: (i % 8) * 0.18,
        dur: 5.5 + (i % 5) * 0.4,
        color: ["#f4d58d", "#ffc2d4", "#ffe7b3", "#d7b4ff", "#fff6e8"][i % 5],
        size: 5 + (i % 4) * 2,
      })),
    []
  );

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {bits.map((bit) => (
        <motion.span
          key={bit.id}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 180 }}
          transition={{ duration: bit.dur, delay: bit.delay, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: 0,
            left: bit.left,
            width: bit.size,
            height: bit.size * 1.6,
            borderRadius: 2,
            background: bit.color,
          }}
        />
      ))}
    </div>
  );
}

export function SceneFinale({ name, onReplay }) {
  const [released, setReleased] = useState(false);

  return (
    <motion.section className="auguri-stage" {...fade}>
      <Confetti />
      <p className="auguri-kicker">{CARD.finale.kicker}</p>
      <h1 className="auguri-title">
        {CARD.finale.title}
        {name ? (
          <>
            <br />
            <i>{name}</i>
          </>
        ) : (
          <i>.</i>
        )}
      </h1>
      <p className="auguri-sub">{CARD.finale.afterName}</p>
      <div style={{ height: 120, position: "relative", width: "100%", marginTop: 10 }}>
        <AnimatePresence>
          {released && (
            <motion.div
              className="auguri-lantern"
              initial={{ y: 40, opacity: 0, scale: 0.8 }}
              animate={{ y: -220, opacity: [0, 1, 1, 0], scale: 0.7 }}
              transition={{ duration: 3.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="auguri-lantern-body" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        type="button"
        className="auguri-lantern-btn"
        onClick={() => setReleased(true)}
        disabled={released}
      >
        {released ? CARD.finale.lanternDone : CARD.finale.lanternIdle}
      </button>
      <p className="auguri-signoff">{CARD.finale.signoff(CARD.senderName)}</p>
      <button type="button" className="auguri-ghost" onClick={onReplay}>
        {CARD.finale.replay}
      </button>
    </motion.section>
  );
}
