"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkInstructions() {
  const steps = [
    { n: "01", text: "Read the examples/ folder to calibrate tone" },
    { n: "02", text: "If context is missing, ask ONE clarifying question" },
    { n: "03", text: "Load tools/template.md as the starting scaffold" },
    { n: "04", text: "Run tools/style-check.py on the draft before output" },
    { n: "05", text: "Pick sign-off from tools/signoffs.json based on tone" },
    { n: "06", text: "Never use passive voice. Never start with 'I hope'" },
  ];

  return (
    <section id="sk-instructions" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "10%",
          right: "0",
          animation: "glowPulse 4s ease-in-out infinite 0.5s",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          maxWidth: "1200px",
          alignItems: "center",
        }}
      >
        <div>
          <AnimateIn delay={0}>
            <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
              Layer 02 · Instructions
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "0.2em",
              }}
            >
              Not vibes.
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--orange)",
                marginBottom: "1.5rem",
              }}
            >
              A numbered runbook.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, maxWidth: "420px", marginBottom: "1.5rem" }}>
              Claude follows instructions like a junior engineer follows
              a runbook. Be explicit: sequence, conditionals, what to
              ask if context is missing, what to never do.
            </p>
          </AnimateIn>

          <AnimateIn delay={340}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                "What to read first",
                "What to ask if context is missing",
                "What output format to use",
                "What to never do",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ color: "var(--orange)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>→</span>
                  <span style={{ fontSize: "0.875rem", color: "#C8C8C8" }}>{item}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={250}>
          <div className="code-block" style={{ fontSize: "0.76rem" }}>
            <p className="code-comment">## Instructions</p>
            <br />
            {steps.map((s) => (
              <p key={s.n} style={{ color: "#C8C8C8", marginBottom: "0.4rem", lineHeight: 1.6 }}>
                <span className="code-keyword">{s.n}.</span> {s.text}
              </p>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
