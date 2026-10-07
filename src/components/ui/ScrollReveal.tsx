"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  direction?: "up" | "left" | "right";
};

export default function ScrollReveal({
  children,
  className = "",
  delay,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.classList.toggle("is-visible", entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const directionClass = direction !== "up" ? `reveal-${direction}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${delayClass} ${className}`
        .trim()
        .replace(/\s+/g, " ")}
    >
      {children}
    </div>
  );
}
