"use client";

import { AnimateIn } from "@/components/AnimateIn";

const PLATFORMS = [
  {
    icon: "★",
    name: "Claude Code",
    desc: 'Skills in .claude/skills/ — the original concept. SKILL.md + tools/ + examples/.',
    highlight: true,
  },
  {
    icon: "⊕",
    name: "ChatGPT",
    desc: "Custom GPTs — instructions + uploaded files as tools. Same pattern.",
    highlight: false,
  },
  {
    icon: "✦",
    name: "Gemini",
    desc: "Gems — your set of 'apps' on top of the model. Instructions + sources.",
    highlight: false,
  },
  {
    icon: "↗",
    name: "Cursor / Windsurf",
    desc: "Rules in .cursorrules and agents. Scripts in the project — those are your tools.",
    highlight: false,
  },
  {
    icon: "⟨⟩",
    name: "n8n / Make",
    desc: "Workflow templates with fixed logic. Node composition = skill composition.",
    highlight: false,
  },
  {
    icon: "▲",
    name: "Vercel AI SDK",
    desc: "Tool calling + system prompts in code. The programmatic version of SKILL.md.",
    highlight: false,
  },
];

export function SlideUniversal() {
  return (
    <section id="universal" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Universal
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
            Don&apos;t write a prompt every time.
          </h2>
        </AnimateIn>
        <AnimateIn delay={180}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--orange)",
              letterSpacing: "-0.03em",
              marginBottom: "1.75rem",
            }}
          >
            Build an application.
          </h2>
        </AnimateIn>

        <AnimateIn delay={260}>
          <p style={{ color: "#C8C8C8", lineHeight: 1.7, maxWidth: "560px", marginBottom: "3rem" }}>
            The four rules work anywhere there&apos;s a custom wrapper over the model.
            The principle is the same: stop starting every session from zero.
          </p>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {PLATFORMS.map((p, i) => (
            <AnimateIn key={p.name} delay={320 + i * 80}>
              <div
                className="rule-card"
                style={
                  p.highlight
                    ? {
                        borderColor: "var(--orange)",
                        background: "rgba(255,92,26,0.07)",
                      }
                    : {}
                }
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: p.highlight ? "var(--orange)" : "var(--muted)",
                      marginTop: "0.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        marginBottom: "0.4rem",
                        color: p.highlight ? "#fff" : "#e0e0e0",
                        fontSize: "0.95rem",
                      }}
                    >
                      {p.name}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
