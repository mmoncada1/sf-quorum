"use client";

import { animate, useInView, useReducedMotion, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade + lift content into view once. Collapses to static under reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Count a number up from zero the first time it scrolls into view. */
export function CountUp({
  value,
  durationMs = 1100,
  className,
}: {
  value: number;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce, durationMs]);

  return (
    <span ref={ref} className={className}>
      {Math.round(display).toLocaleString()}
    </span>
  );
}

/** A meter whose fill grows from zero when it enters the viewport. */
export function AnimatedBar({
  value,
  color,
  trackClassName = "nb-track",
}: {
  value: number; // 0..100
  color: string;
  trackClassName?: string;
}) {
  const reduce = useReducedMotion();
  const w = Math.max(0, Math.min(100, value));
  return (
    <div className={trackClassName}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={reduce ? false : { width: 0 }}
        whileInView={{ width: `${w}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.85, ease: EASE }}
      />
    </div>
  );
}
