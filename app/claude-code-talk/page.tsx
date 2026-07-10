"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SLIDES_CC } from "@/app/claude-code-talk/data/slides";
import { SlideNav } from "@/components/SlideNav";
import { SpeakerNotes } from "@/components/SpeakerNotes";
import { SlideIntro } from "@/components/slides-cc/SlideIntro";
import { SlideWhatIs } from "@/components/slides-cc/SlideWhatIs";
import { SlideSetup } from "@/components/slides-cc/SlideSetup";
import { SlideExploreFirst } from "@/components/slides-cc/SlideExploreFirst";
import { SlidePlanning } from "@/components/slides-cc/SlidePlanning";
import { SlideMCP } from "@/components/slides-cc/SlideMCP";
import { SlideClaudeMd } from "@/components/slides-cc/SlideClaudeMd";
import { SlideGovernance } from "@/components/slides-cc/SlideGovernance";
import { SlideHotkeys } from "@/components/slides-cc/SlideHotkeys";
import { SlideSDKParallel } from "@/components/slides-cc/SlideSDKParallel";
import { SlideQA } from "@/components/slides-cc/SlideQA";
import { SlideSummaryCC } from "@/components/slides-cc/SlideSummaryCC";

const SLIDE_IDS = SLIDES_CC.map((s) => s.id);

export default function ClaudeCodeTalkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

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

  const navigateTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SLIDES_CC.length - 1, index));
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

  const progress = ((currentSlide + 1) / SLIDES_CC.length) * 100;

  return (
    <>
      <div className="progress-line" style={{ width: `${progress}%` }} aria-hidden="true" />

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
        {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES_CC.length).padStart(2, "0")}
      </div>

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

      <SlideNav current={currentSlide} onNavigate={navigateTo} />

      <main ref={containerRef}>
        <SlideIntro />
        <SlideWhatIs />
        <SlideSetup />
        <SlideExploreFirst />
        <SlidePlanning />
        <SlideMCP />
        <SlideClaudeMd />
        <SlideGovernance />
        <SlideHotkeys />
        <SlideSDKParallel />
        <SlideQA />
        <SlideSummaryCC />
      </main>

      <SpeakerNotes
        notes={SLIDES_CC[currentSlide].notes}
        isOpen={notesOpen}
        onToggle={() => setNotesOpen((v) => !v)}
        slideLabel={SLIDES_CC[currentSlide].label}
      />
    </>
  );
}
