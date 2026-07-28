"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkTriggers() {
  const patterns = [
    {
      type: "Command trigger",
      example: "/draft-email, /review-pr, /standup-summary",
      when: "When you want an explicit slash-command shortcut",
    },
    {
      type: "Intent trigger",
      example: "Load when user asks to draft, write, or reply to any business email or client message",
      when: "When you want natural language to trigger the skill",
    },
    {
      type: "Hybrid trigger",
      example: "Trigger on /draft-email OR when user asks to draft or reply to a business email",
      when: "Best of both — explicit and natural language both work",
      highlight: true,
    },
  ];

  return (
    <section id="sk-triggers" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          bottom: "0",
          right: "10%",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Craft
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
            Trigger writing
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
              marginBottom: "1.75rem",
            }}
          >
            is a craft.
          </h2>
        </AnimateIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
          {patterns.map((p, i) => (
            <AnimateIn key={p.type} delay={260 + i * 110}>
              <div
                className="rule-card"
                style={
                  p.highlight
                    ? { borderColor: "var(--orange)", background: "rgba(255,92,26,0.07)", display: "grid", gridTemplateColumns: "140px 1fr 1fr", gap: "1.5rem", alignItems: "center" }
                    : { display: "grid", gridTemplateColumns: "140px 1fr 1fr", gap: "1.5rem", alignItems: "center" }
                }
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: p.highlight ? "var(--orange)" : "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    lineHeight: 1.4,
                  }}
                >
                  {p.type}
                </p>
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: p.highlight ? "#fff" : "#C8C8C8",
                    lineHeight: 1.6,
                  }}
                >
                  {p.example}
                </code>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.5 }}>{p.when}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={600}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1rem 1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "var(--orange)", fontFamily: "var(--font-mono)", fontWeight: 700, flexShrink: 0 }}>Test:</span>
            <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
              Paste your description into a blank chat and ask Claude: &ldquo;would you load this skill for: [your request]?&rdquo; Wrong answer → rewrite the description before anything else.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
