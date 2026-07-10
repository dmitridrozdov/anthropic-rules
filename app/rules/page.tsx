"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SLIDES } from "@/app/data/slides";
import { SlideNav } from "@/components/SlideNav";
import { SpeakerNotes } from "@/components/SpeakerNotes";
import { SlideHook } from "@/components/slides/SlideHook";
import { SlideRule1 } from "@/components/slides/SlideRule1";
import { SlideConcept } from "@/components/slides/SlideConcept";
import { SlideRule2 } from "@/components/slides/SlideRule2";
import { SlideToolsDetail } from "@/components/slides/SlideToolsDetail";
import { SlideRule3 } from "@/components/slides/SlideRule3";
import { SlidePattern } from "@/components/slides/SlidePattern";
import { SlideRule4 } from "@/components/slides/SlideRule4";
import { SlideLifehack } from "@/components/slides/SlideLifehack";
import { SlideABTest } from "@/components/slides/SlideABTest";
import { SlideUniversal } from "@/components/slides/SlideUniversal";
import { SlideSummary } from "@/components/slides/SlideSummary";

const SLIDE_IDS = SLIDES.map((s) => s.id);

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  // Track current slide via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SLIDE_IDS.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && entries[0].intersectionRatio > 0.5) {
            setCurrentSlide(index);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Keyboard navigation
  const navigateTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
    const el = document.getElementById(SLIDE_IDS[clamped]);
    if (el) {
      isScrolling.current = true;
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        navigateTo(currentSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        navigateTo(currentSlide - 1);
      } else if (e.key === "n" || e.key === "N") {
        setNotesOpen((v) => !v);
      } else if (e.key === "Escape") {
        setNotesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, navigateTo]);

  const progress = ((currentSlide + 1) / SLIDES.length) * 100;

  return (
    <>
      {/* Progress bar */}
      <div
        className="progress-line"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Slide counter */}
      <div
        style={{
          position: "fixed",
          bottom: notesOpen ? "calc(40vh + 1rem)" : "1.5rem",
          left: "2rem",
          zIndex: 300,
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--muted)",
          transition: "bottom 0.4s ease",
        }}
      >
        {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

      {/* Keyboard hint */}
      <div
        style={{
          position: "fixed",
          bottom: notesOpen ? "calc(40vh + 1rem)" : "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 300,
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        ↑↓ navigate · N notes
      </div>

      {/* Back to home link */}
      <a
        href="/"
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "2rem",
          zIndex: 300,
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--muted)",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        ← All decks
      </a>

      {/* Side nav */}
      <SlideNav current={currentSlide} onNavigate={navigateTo} />

      {/* Slides */}
      <main ref={containerRef}>
        <SlideHook />
        <SlideRule1 />
        <SlideConcept />
        <SlideRule2 />
        <SlideToolsDetail />
        <SlideRule3 />
        <SlidePattern />
        <SlideRule4 />
        <SlideLifehack />
        <SlideABTest />
        <SlideUniversal />
        <SlideSummary />
      </main>

      {/* Speaker notes */}
      <SpeakerNotes
        notes={SLIDES[currentSlide].notes}
        isOpen={notesOpen}
        onToggle={() => setNotesOpen((v) => !v)}
        slideLabel={SLIDES[currentSlide].label}
      />
    </>
  );
}
