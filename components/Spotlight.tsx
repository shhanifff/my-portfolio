"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--x", `${e.clientX}px`);
      ref.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        background: `radial-gradient(
          600px circle at var(--x) var(--y),
          rgba(255,255,255,0.15),
          transparent 40%
        )`
      }}
    />
  );
}
