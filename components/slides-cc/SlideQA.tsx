"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideQA() {
  const qas = [
    {
      q: "Hardest part of building Claude Code?",
      a: "Balancing safety with developer experience — a multi-layered permission system so engineers aren't button-mashing approvals constantly.",
    },
    {
      q: "Hidden multimodal features?",
      a: "Fully multimodal in the terminal. Drag-and-drop or paste an image directly — hand over a UI layout or error screenshot for an automated fix.",
    },
    {
      q: "Why CLI instead of an IDE extension?",
      a: "Anthropic engineers use VS Code, Vim, Zed, Xcode, Emacs. A terminal tool supports everyone equally and keeps the team adaptable as AI evolves.",
    },
  ];

  return (
    <section id="qa" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          bottom: "0",
          left: "20%",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Live Q&amp;A
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "2rem",
            }}
          >
            Three questions,{" "}
            <span style={{ color: "var(--orange)" }}>straight answers.</span>
          </h2>
        </AnimateIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {qas.map((item, i) => (
            <AnimateIn key={item.q} delay={200 + i * 120}>
              <div className="rule-card" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "1.5rem", alignItems: "start" }}>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "var(--orange)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>Q.</span>
                  <p style={{ fontWeight: 700, color: "#fff", fontSize: "0.95rem", lineHeight: 1.5 }}>{item.q}</p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>A.</span>
                  <p style={{ color: "#C8C8C8", fontSize: "0.875rem", lineHeight: 1.65 }}>{item.a}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={600}>
          <div
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              gap: "1rem",
              alignItems: "center",
              background: "rgba(255,92,26,0.08)",
              border: "1px solid rgba(255,92,26,0.3)",
              borderRadius: "8px",
              padding: "1rem 1.5rem",
            }}
          >
            <span className="stat-number" style={{ fontSize: "2rem" }}>80%</span>
            <p style={{ fontSize: "0.85rem", color: "#C8C8C8", lineHeight: 1.5 }}>
              of Anthropic&apos;s technical staff use Claude Code every single day.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
