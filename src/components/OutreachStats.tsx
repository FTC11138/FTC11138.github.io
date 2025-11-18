import { useEffect, useRef, useState } from "react";
import FloatIn from "./FloatIn";
import { outreachStats } from "../data/outreachStats";

const DURATION = 1200;

const Counter = ({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  onComplete,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  onComplete?: () => void;
}) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / DURATION,
        1
      );
      const eased = 1 - Math.pow(1 - progress, 2);
      const currentValue = eased * end;
      setValue(decimals > 0 ? currentValue : Math.floor(currentValue));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else if (onComplete) {
        onComplete();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [end, decimals, onComplete]);

  return (
    <span className="text-4xl font-bold text-red-400">
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
};

export default function OutreachStats() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setActiveIndex(0);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <FloatIn delay={100}>
      <div
        ref={containerRef}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-4"
      >
        {outreachStats.map((stat, index) => {
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;

          const displayValue = isDone ? (
            <span className="text-4xl font-bold text-red-400">
              {stat.prefix ?? ""}
              {stat.decimals
                ? stat.maxNumber.toFixed(stat.decimals)
                : stat.maxNumber}
              {stat.suffix ?? ""}
            </span>
          ) : isActive ? (
            <Counter
              end={stat.maxNumber}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              onComplete={() =>
                setActiveIndex((prev) =>
                  Math.min(prev + 1, outreachStats.length)
                )
              }
            />
          ) : (
            <span className="text-4xl font-bold text-red-400">
              {stat.prefix ?? ""}
              {stat.decimals ? (0).toFixed(stat.decimals) : 0}
              {stat.suffix ?? ""}
            </span>
          );

          return (
            <article
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="h-16 flex items-center justify-center">
                {displayValue}
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">
                {stat.label}
              </p>
            </article>
          );
        })}
      </div>
    </FloatIn>
  );
}
