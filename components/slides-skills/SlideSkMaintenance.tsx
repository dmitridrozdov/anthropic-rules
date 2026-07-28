"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkMaintenance() {
  const loop = [
    { icon: "🤖", title: "Use the skill", desc: "Run a real task" },
    { icon: "💬", title: "Ask the question", desc: '"What to bake in?"', highlight: false },
    { icon: "✅", title: "Accept / reject", desc: "Take what's useful", highlight: false },
    { icon: "📝", title: "Update SKILL.md", desc: "Commit the change", highlight: true },
  ];

  return (
    <section id="sk-maintenance" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "20%",
          right: "0",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", justifyContent: "center", display: "flex" }}>
            Maintenance Loop
          </span>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: "0.2em",
            }}
          >
            One habit.
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
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Compounding results.
          </h2>
        </AnimateIn>

        <AnimateIn delay={260}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.75rem",
            }}
          >
            {loop.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "1rem",
                    background: step.highlight ? "var(--orange)" : "transparent",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{step.icon}</div>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: step.highlight ? "#fff" : "#e0e0e0", marginBottom: "0.25rem" }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: step.highlight ? "rgba(255,255,255,0.75)" : "var(--muted)" }}>
                    {step.desc}
                  </p>
                </div>
                {i < loop.length - 1 && (
                  <div style={{ color: "var(--muted)", padding: "0 0.5rem", flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={380}>
          <div className="code-block" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p className="code-comment"># Run at the end of every session that used this skill</p>
            <br />
            <p style={{ color: "#C8C8C8" }}>
              Review what we just did after using this skill.
            </p>
            <br />
            <p>
              What can be <span className="code-keyword">baked into SKILL.md or tools/</span> so I
              <br />
              don&apos;t fix the same things manually next time?
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={480}>
          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            ↻ cycle repeats every session — 30 seconds of work
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
