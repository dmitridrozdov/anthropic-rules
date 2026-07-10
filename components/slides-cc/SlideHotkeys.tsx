"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideHotkeys() {
  const keys = [
    { key: "Shift + Key", desc: "Toggle auto-approve mode — abort anytime" },
    { key: "#", desc: "Correct Claude's tool misuse — it remembers and documents the fix" },
    { key: "!", desc: "Drop into local shell mode, tracked and learned from" },
    { key: "Space", desc: "Pause or halt the current operation" },
    { key: "Space ×2", desc: "Quick project review or continue the session" },
    { key: "R", desc: "View exactly what's inside Claude's active context window" },
  ];

  return (
    <section id="hotkeys" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "20%",
          left: "5%",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Terminal Shortcuts
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
            Six keys.
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
            Full control.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {keys.map((item, i) => (
            <AnimateIn key={item.key} delay={260 + i * 80}>
              <div className="rule-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    color: "var(--orange)",
                    background: "rgba(255,92,26,0.1)",
                    border: "1px solid rgba(255,92,26,0.3)",
                    borderRadius: "6px",
                    padding: "0.4rem 0.75rem",
                    width: "fit-content",
                    fontWeight: 600,
                  }}
                >
                  {item.key}
                </span>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
