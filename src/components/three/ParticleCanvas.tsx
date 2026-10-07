"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ParticleScene = dynamic(() => import("./ParticleScene"), { ssr: false });

type ParticleCanvasProps = {
  rootSelector: string;
  colorA?: string;
  colorB?: string;
  maxCount?: number;
  offsetX?: number;
};

export default function ParticleCanvas(props: ParticleCanvasProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(!reduceMotion);
  }, []);

  if (!enabled) return null;

  return (
    <div className="webgl-canvas" aria-hidden="true">
      <ParticleScene {...props} />
    </div>
  );
}
