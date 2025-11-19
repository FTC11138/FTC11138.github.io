import { useEffect, useState } from "react";
import clsx from "clsx";

interface FloatInProps {
  children: React.ReactNode;
  delay?: number;
  durationMs?: number;
  className?: string;
}

export default function FloatIn({
  children,
  delay = 0,
  durationMs = 500,
  className = "",
}: FloatInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{ transitionDuration: `${durationMs}ms`, transitionDelay: `${delay}ms` }}
      className={clsx(
        "transform transition-all ease-out will-change-[opacity,transform]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className
      )}
    >
      {children}
    </div>
  );
}
