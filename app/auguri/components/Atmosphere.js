"use client";

import { useEffect, useRef } from "react";

function createStars(count, width, height) {
  return Array.from({ length: count }, () => ({
        x: Math.random() * width,
    y: Math.random() * height * 0.92,
    r: Math.random() * 1.9 + 0.45,
    tw: Math.random() * Math.PI * 2,
    speed: 0.004 + Math.random() * 0.01,
    alpha: 0.4 + Math.random() * 0.6,
    glow: Math.random() > 0.78,
  }));
}

export default function Atmosphere() {
  const canvasRef = useRef(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = media.matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let frame = 0;
    let stars = [];
    let shooting = null;
    let lastSpawn = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.round((clientWidth * clientHeight) / 9000);
      stars = createStars(Math.min(Math.max(density, 70), 160), clientWidth, clientHeight);
    };

    const draw = (time) => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      for (const star of stars) {
        const twinkle = reduceMotion.current
          ? star.alpha
          : 0.25 + Math.abs(Math.sin(star.tw + time * star.speed)) * star.alpha;
        if (star.glow) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(255, 230, 180, 0.9)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 240, 214, ${twinkle})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduceMotion.current) {
        if (!shooting && time - lastSpawn > 4200 + Math.random() * 5000) {
          lastSpawn = time;
          shooting = {
            x: Math.random() * w * 0.7,
            y: Math.random() * h * 0.35,
            len: 90 + Math.random() * 70,
            life: 0,
          };
        }

        if (shooting) {
          shooting.life += 0.02;
          const p = shooting.life;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 230, 180, ${1 - p})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(shooting.x, shooting.y);
          ctx.lineTo(shooting.x + shooting.len * p, shooting.y + shooting.len * 0.35 * p);
          ctx.stroke();
          if (p >= 1) shooting = null;
        }
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else frame = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const flies = [
    { top: "14%", left: "10%", dur: "10s" },
    { top: "22%", left: "84%", dur: "13s" },
    { top: "72%", left: "8%", dur: "12s" },
    { top: "80%", left: "88%", dur: "9s" },
    { top: "90%", left: "28%", dur: "14s" },
    { top: "8%", left: "38%", dur: "11s" },
  ];

  return (
    <>
      <div className="auguri-aurora" />
      <div className="auguri-moon" aria-hidden="true" />
      <canvas ref={canvasRef} className="auguri-canvas" aria-hidden="true" />
      {flies.map((fly, i) => (
        <span
          key={i}
          className="auguri-firefly"
          style={{ top: fly.top, left: fly.left, "--dur": fly.dur }}
        />
      ))}
      <div className="auguri-vignette" />
      <div className="auguri-noise" />
    </>
  );
}
