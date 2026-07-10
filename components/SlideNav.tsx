"use client";

import { SLIDES } from "@/app/data/slides";

interface SlideNavProps {
  current: number;
  onNavigate: (index: number) => void;
}

export function SlideNav({ current, onNavigate }: SlideNavProps) {
  return (
    <nav className="slide-nav" aria-label="Slide navigation">
      {SLIDES.map((slide, i) => (
        <button
          key={slide.id}
          onClick={() => onNavigate(i)}
          aria-label={`Go to ${slide.label}`}
          title={slide.label}
          className={`nav-dot ${i === current ? "active" : ""}`}
          style={{
            background: i === current ? "var(--orange)" : "var(--border)",
            transform: i === current ? "scale(1.6)" : "scale(1)",
          }}
        />
      ))}
    </nav>
  );
}
