import { useEffect, useRef, useState } from "react";
import { statsData } from "../data/statsData";

const DURATION = 1300; // 1 second per counter

// Single counter that calls onComplete when finished
const Counter = ({
  start = 0,
  end,
  duration = DURATION,
  suffix = "",
  prefix = "",
  decimals = 0,
  onComplete,
}: {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  onComplete?: () => void;
}) => {
  const [value, setValue] = useState<number>(start);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 2);
      const raw = start + (end - start) * eased;
      if (decimals > 0) {
        const factor = Math.pow(10, decimals);
        const rounded = Math.round(raw * factor) / factor;
        setValue(rounded);
      } else {
        const rounded = Math.floor(raw);
        setValue(rounded);
      }

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
  }, [start, end, duration, onComplete]);

  return (
    <span className="text-4xl font-bold text-red-400">
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : value}
      {suffix}
    </span>
  );
};

export const Statistics = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const hasStarted = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="m-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
    >
      {statsData.map((stat, index) => {
        const isActive = index === activeIndex;
        const isDone = index < activeIndex;
        const decimals = stat.decimals ?? 0;
        const displayValue = isDone ? (
          <span className="text-4xl font-bold text-red-400">
            {stat.prefix ?? ""}
            {decimals > 0
              ? Number(stat.maxNumber).toFixed(decimals)
              : stat.maxNumber}
            {stat.suffix ?? ""}
          </span>
        ) : isActive ? (
          <Counter
            start={0}
            end={stat.maxNumber}
            duration={DURATION}
            prefix={stat.prefix ?? ""}
            suffix={stat.suffix ?? ""}
            decimals={decimals}
            onComplete={() =>
              setActiveIndex((i) => Math.min(i + 1, statsData.length))
            }
          />
        ) : (
          <span className="text-4xl font-bold text-red-400">
            {stat.prefix ?? ""}
            {decimals > 0 ? (0).toFixed(decimals) : "0"}
            {stat.suffix ?? ""}
          </span>
        );

        return (
          <div
            key={stat.title}
            className="bg-white/5 backdrop-blur rounded-xl p-6 shadow-lg border border-white/10 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="text-center">
              <div className="h-16 flex items-center justify-center">
                {displayValue}
              </div>
              <h3 className="mt-2 text-md font-medium text-white">
                {stat.title}
              </h3>
              {stat.description ? (
                <p className="mt-1 text-sm text-gray-300">{stat.description}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
