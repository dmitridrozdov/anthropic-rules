"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkVsPrompt() {
  const rows = [
    { criterion: "Trigger", prompt: "Type 200+ words every session", skill: "/draft-email", win: "skill" },
    { criterion: "Token cost", prompt: "~2700 tokens per use", skill: "~900 tokens per use", win: "skill" },
    { criterion: "Survives chat close", prompt: "No — gone forever", skill: "Yes — always there", win: "skill" },
    { criterion: "Learns your style", prompt: "No — resets each time", skill: "Yes — examples/ accumulates", win: "skill" },
    { criterion: "Gets better over time", prompt: "No", skill: "Yes — maintenance loop", win: "skill" },
    { criterion: "Setup time", prompt: "0 minutes (but repeats forever)", skill: "30 min once", win: "draw" },
  ];

  return (
    <section id="sk-vs-prompt" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "40%",
          right: "0",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Comparison
          </span>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "0.2em",
            }}
          >
            Skill vs Prompt.
          </h2>
        </AnimateIn>
        <AnimateIn delay={180}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              marginBottom: "2rem",
            }}
          >
            Side by side.
          </h2>
        </AnimateIn>

        <AnimateIn delay={280}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr",
                background: "var(--surface)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {["", "Prompt", "Skill"].map((h) => (
                <div
                  key={h}
                  style={{
                    padding: "0.75rem 1.25rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: h === "Skill" ? "var(--orange)" : "var(--muted)",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {rows.map((row, i) => (
              <div
                key={row.criterion}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 1fr",
                  borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    padding: "0.85rem 1.25rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {row.criterion}
                </div>
                <div
                  style={{
                    padding: "0.85rem 1.25rem",
                    fontSize: "0.82rem",
                    color: row.win === "skill" ? "#666" : "#C8C8C8",
                    textDecoration: row.win === "skill" ? "line-through" : "none",
                  }}
                >
                  {row.prompt}
                </div>
                <div
                  style={{
                    padding: "0.85rem 1.25rem",
                    fontSize: "0.82rem",
                    color: row.win === "skill" ? "var(--orange)" : "#C8C8C8",
                    fontWeight: row.win === "skill" ? 600 : 400,
                    background: row.win === "skill" ? "rgba(255,92,26,0.04)" : "transparent",
                  }}
                >
                  {row.skill}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
