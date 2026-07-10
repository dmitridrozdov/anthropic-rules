"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideLifehack() {
  const steps = [
    { icon: "🤖", title: "Session with Claude", desc: "Solved the task together" },
    { icon: "❓", title: "One question", desc: '"What to bake into the skill?"' },
    { icon: "💡", title: "Claude suggests", desc: "Specific rules to add" },
    { icon: "📝", title: "Skill updated", desc: "Next session starts smarter", active: true },
  ];

  return (
    <section id="lifehack" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "10%",
          right: "0",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", justifyContent: "center", display: "flex" }}>
            Lifehack
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: "0.5rem",
            }}
          >
            One question after every session:
          </h2>
        </AnimateIn>
        <AnimateIn delay={200}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            &ldquo;one-time fix or permanent update?&rdquo;
          </h2>
        </AnimateIn>

        <AnimateIn delay={280}>
          <p
            style={{
              color: "#C8C8C8",
              textAlign: "center",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 3rem",
            }}
          >
            30 seconds of work — and the next session starts smarter.
            This is the day-30 effect from Rule 4.
          </p>
        </AnimateIn>

        {/* Loop diagram */}
        <AnimateIn delay={360}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "2rem",
              overflow: "hidden",
            }}
          >
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "1rem",
                    background: step.active ? "var(--orange)" : "transparent",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{step.icon}</div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: step.active ? "#fff" : "#e0e0e0",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: step.active ? "rgba(255,255,255,0.75)" : "var(--muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ color: "var(--muted)", padding: "0 0.5rem", flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Code block prompt */}
        <AnimateIn delay={460}>
          <div className="code-block" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#C8C8C8" }}>
              Review the back and forth we just had after using this skill.
            </p>
            <br />
            <p>
              What can be{" "}
              <span className="code-keyword">baked into the skill</span> so I
              don&apos;t have to fix the same things by hand next time?
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={540}>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              background: "rgba(255,220,100,0.06)",
              border: "1px solid rgba(255,220,100,0.2)",
              borderRadius: "8px",
              padding: "1rem 1.25rem",
              maxWidth: "600px",
              margin: "1.5rem auto 0",
            }}
          >
            <span style={{ fontSize: "1rem" }}>💡</span>
            <p style={{ fontSize: "0.85rem", color: "#C8C8C8", lineHeight: 1.6 }}>
              Run at end of session — when the task is already solved. Claude suggests what to add to SKILL.md or tools/. Take what&apos;s useful, drop the noise.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
