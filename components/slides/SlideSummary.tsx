"use client";

import { AnimateIn } from "@/components/AnimateIn";

const RULES = [
  { num: "01", label: "Prompt skills —\nnot Claude" },
  { num: "02", label: "Build tools,\nnot prompt folders" },
  { num: "03", label: "Compositional,\nnot monolithic" },
  { num: "04", label: "Update every\nsession" },
];

export function SlideSummary() {
  return (
    <section id="summary" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(255,92,26,0.14) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Summary
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: "var(--orange)" }}>4 rules</span> of Anthropic engineers.
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p style={{ color: "#C8C8C8", lineHeight: 1.7, maxWidth: "560px", marginBottom: "3.5rem" }}>
            Using Claude like an engineer is simple. Keep this schema in front of you
            for a month — and Claude on day 30 will be a different Claude.
          </p>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {RULES.map((rule, i) => (
            <AnimateIn key={rule.num} delay={280 + i * 100}>
              <div>
                <p
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    fontWeight: 900,
                    color: "var(--orange)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {rule.num}
                </p>
                <div
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "0.75rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {rule.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Final CTA */}
        <AnimateIn delay={700}>
          <div
            style={{
              marginTop: "4rem",
              padding: "1.5rem 2rem",
              background: "rgba(255,92,26,0.07)",
              border: "1px solid rgba(255,92,26,0.25)",
              borderRadius: "8px",
              display: "inline-flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--orange)", fontSize: "1.25rem" }}>→</span>
            <p style={{ color: "#C8C8C8", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Start with one skill. Build the tools layer. Ask what to bake in after every
              session. In 30 days, Claude will know your workflow.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
