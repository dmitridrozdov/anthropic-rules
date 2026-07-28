"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkFirstSkill() {
  const steps = [
    {
      n: "1",
      title: "Create the folder",
      code: "mkdir -p ~/.claude/skills/draft-email",
    },
    {
      n: "2",
      title: "Write SKILL.md",
      code: "# draft-email\n\n## Description\nLoad when user asks to draft, write, or\nreply to a business email. Trigger: /draft-email\n\n## Instructions\n01. Ask for context if none provided\n02. Match the tone from examples/\n03. Never start with 'I hope this finds you'",
    },
    {
      n: "3",
      title: "Add one example",
      code: "# Copy a real email you've sent\n# into examples/ex-1.txt\n# Format: INPUT block + OUTPUT block",
    },
    {
      n: "4",
      title: "Test it",
      code: "# Open a new Claude Code session\n# Type: /draft-email reply to angry client\n# It should load your skill automatically",
    },
  ];

  return (
    <section id="sk-first-skill" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "20%",
          right: "5%",
          animation: "glowPulse 5s ease-in-out infinite 0.5s",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Hands-On
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
            Build your first skill
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
              marginBottom: "2rem",
            }}
          >
            in 4 steps, right now.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {steps.map((step, i) => (
            <AnimateIn key={step.n} delay={260 + i * 100}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: i === 3 ? "var(--orange)" : "var(--card)",
                      border: `1px solid ${i === 3 ? "var(--orange)" : "var(--border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: i === 3 ? "#fff" : "var(--muted)",
                      flexShrink: 0,
                    }}
                  >
                    {step.n}
                  </span>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>{step.title}</h3>
                </div>
                <div className="code-block" style={{ fontSize: "0.7rem", flex: 1, whiteSpace: "pre-wrap" }}>
                  <p style={{ color: "#C8C8C8", whiteSpace: "pre-wrap", lineHeight: 1.7 }}>{step.code}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={680}>
          <div
            style={{
              marginTop: "1.75rem",
              background: "rgba(255,92,26,0.07)",
              border: "1px solid rgba(255,92,26,0.25)",
              borderRadius: "8px",
              padding: "1rem 1.5rem",
              display: "flex",
              gap: "0.75rem",
            }}
          >
            <span style={{ color: "var(--orange)" }}>💡</span>
            <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
              Imperfect is fine. You&apos;ll run the update loop after your first session — that&apos;s how skills get good, not by being perfect at creation.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
