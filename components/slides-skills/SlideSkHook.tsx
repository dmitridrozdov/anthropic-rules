"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkHook() {
  return (
    <section id="sk-hook" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(255,92,26,0.18) 0%, transparent 70%)",
          top: "5%",
          right: "-15%",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "2rem", display: "flex" }}>
            Skills for Claude Code · Beginner Guide
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "0.2em",
            }}
          >
            Your best prompt died
          </h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              marginBottom: "2rem",
            }}
          >
            when the chat closed.
          </h2>
        </AnimateIn>

        <AnimateIn delay={340}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "#C8C8C8",
              maxWidth: "580px",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            You spent 20 minutes crafting the perfect instructions. Claude
            delivered exactly what you wanted. You closed the tab. Monday
            morning — you start from scratch. Skills end this cycle.
          </p>
        </AnimateIn>

        <AnimateIn delay={480}>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Prompt", desc: "Lives in the chat.\nDies with the session.", bad: true },
              { label: "Skill", desc: "Lives in a file.\nLoads automatically, forever.", bad: false },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: item.bad ? "var(--card)" : "rgba(255,92,26,0.08)",
                  border: `1px solid ${item.bad ? "var(--border)" : "var(--orange)"}`,
                  borderRadius: "8px",
                  padding: "1.25rem 1.75rem",
                  minWidth: "220px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: item.bad ? "var(--muted)" : "var(--orange)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: item.bad ? "var(--muted)" : "#C8C8C8",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
