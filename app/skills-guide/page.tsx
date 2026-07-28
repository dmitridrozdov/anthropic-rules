"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SLIDES_SKILLS } from "@/app/skills-guide/data/slides";
import { SlideNav } from "@/components/SlideNav";
import { SpeakerNotes } from "@/components/SpeakerNotes";
import { SlideSkHook } from "@/components/slides-skills/SlideSkHook";
import { SlideSkWhat } from "@/components/slides-skills/SlideSkWhat";
import { SlideSkAnatomy } from "@/components/slides-skills/SlideSkAnatomy";
import { SlideSkDescription } from "@/components/slides-skills/SlideSkDescription";
import { SlideSkInstructions } from "@/components/slides-skills/SlideSkInstructions";
import { SlideSkTools } from "@/components/slides-skills/SlideSkTools";
import { SlideSkExamples } from "@/components/slides-skills/SlideSkExamples";
import { SlideSkFirstSkill } from "@/components/slides-skills/SlideSkFirstSkill";
import { SlideSkTriggers } from "@/components/slides-skills/SlideSkTriggers";
import { SlideSkStarterSkills } from "@/components/slides-skills/SlideSkStarterSkills";
import { SlideSkVsPrompt } from "@/components/slides-skills/SlideSkVsPrompt";
import { SlideSkComposition } from "@/components/slides-skills/SlideSkComposition";
import { SlideSkMaintenance } from "@/components/slides-skills/SlideSkMaintenance";
import { SlideSkSummary } from "@/components/slides-skills/SlideSkSummary";

const SLIDE_IDS = SLIDES_SKILLS.map((s) => s.id);

export default function SkillsGuidePage() {
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
    const clamped = Math.max(0, Math.min(SLIDES_SKILLS.length - 1, index));
    const el = document.getElementById(SLIDE_IDS[clamped]);
    if (el) {
      isScrolling.current = true;
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => { isScrolling.current = false; }, 800);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)) {
        e.preventDefault();
        navigateTo(currentSlide + 1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
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

  const progress = ((currentSlide + 1) / SLIDES_SKILLS.length) * 100;

  return (
    <>
      <div className="progress-line" style={{ width: `${progress}%` }} />

      <div style={{ position: "fixed", bottom: notesOpen ? "calc(40vh + 1rem)" : "1.5rem", left: "2rem", zIndex: 300, fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted)", transition: "bottom 0.4s ease" }}>
        {String(currentSlide + 1).padStart(2, "0")} / {String(SLIDES_SKILLS.length).padStart(2, "0")}
      </div>

      <div style={{ position: "fixed", bottom: notesOpen ? "calc(40vh + 1rem)" : "1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 300, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.2)" }}>
        ↑↓ navigate · N notes
      </div>

      <a href="/" style={{ position: "fixed", top: "1.5rem", left: "2rem", zIndex: 300, fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted)", textDecoration: "none", textTransform: "uppercase" }}>
        ← All decks
      </a>

      <SlideNav current={currentSlide} onNavigate={navigateTo} />

      <main ref={containerRef}>
        <SlideSkHook />
        <SlideSkWhat />
        <SlideSkAnatomy />
        <SlideSkDescription />
        <SlideSkInstructions />
        <SlideSkTools />
        <SlideSkExamples />
        <SlideSkFirstSkill />
        <SlideSkTriggers />
        <SlideSkStarterSkills />
        <SlideSkVsPrompt />
        <SlideSkComposition />
        <SlideSkMaintenance />
        <SlideSkSummary />
      </main>

      <SpeakerNotes
        notes={SLIDES_SKILLS[currentSlide].notes}
        isOpen={notesOpen}
        onToggle={() => setNotesOpen((v) => !v)}
        slideLabel={SLIDES_SKILLS[currentSlide].label}
      />
    </>
  );
}
