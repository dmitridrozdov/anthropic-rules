"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimateIn({ children, delay = 0, className = "", style }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            el.style.animation = `fadeUp 0.7s ease forwards`;
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, ...style }}
    >
      {children}
    </div>
  );
}
