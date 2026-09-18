"use client";

import { useEffect, useRef, useState } from "react";

const format = (n: number) => n.toLocaleString("en-GB");

// Renders the final figure on the server (so it reads correctly without JS),
// then counts up the first time it scrolls into view.
export default function Counter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let armed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!armed) {
          // First callback reports the initial position. Only animate figures that start off-screen,
          // so nothing visibly resets to zero.
          if (entry.isIntersecting) return observer.disconnect();
          armed = true;
          setDisplay(0);
          return;
        }
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden>
        {format(display)}
        {suffix}
      </span>
      <span className="sr-only">
        {format(value)}
        {suffix}
      </span>
    </span>
  );
}
