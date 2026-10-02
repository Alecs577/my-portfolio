"use client";

import { Suspense, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { resolveRecipientName } from "./config";
import Atmosphere from "./components/Atmosphere";
import {
  SceneCountdown,
  SceneEnvelope,
  SceneFinale,
  SceneIntro,
  SceneLetter,
  SceneWishes,
} from "./components/Scenes";

const SCENES = ["intro", "countdown", "envelope", "letter", "wishes", "finale"];

function AuguriExperience() {
  const searchParams = useSearchParams();
  const name = resolveRecipientName(searchParams.get("per"));
  const [scene, setScene] = useState("intro");

  const go = useCallback((next) => setScene(next), []);
  const nextOf = (current) => SCENES[Math.min(SCENES.indexOf(current) + 1, SCENES.length - 1)];

  return (
    <>
      <Atmosphere />
      <AnimatePresence mode="wait">
        {scene === "intro" && (
          <SceneIntro key="intro" onNext={() => go(nextOf("intro"))} />
        )}
        {scene === "countdown" && (
          <SceneCountdown key="countdown" onNext={() => go(nextOf("countdown"))} />
        )}
        {scene === "envelope" && (
          <SceneEnvelope key="envelope" onNext={() => go(nextOf("envelope"))} />
        )}
        {scene === "letter" && (
          <SceneLetter key="letter" name={name} onNext={() => go(nextOf("letter"))} />
        )}
        {scene === "wishes" && (
          <SceneWishes key="wishes" onNext={() => go(nextOf("wishes"))} />
        )}
        {scene === "finale" && (
          <SceneFinale key="finale" name={name} onReplay={() => go("intro")} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function AuguriPage() {
  return (
    <Suspense fallback={null}>
      <AuguriExperience />
    </Suspense>
  );
}
