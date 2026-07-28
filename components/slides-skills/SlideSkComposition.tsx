"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkComposition() {
  return (
    <section id="sk-composition" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "-5%",
          animation: "glowPulse 5s ease-in-out infinite",
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
              Advanced
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
              Skills can call
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
              other skills.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "440px" }}>
              Claude acts as an orchestrator — it reads each skill&apos;s
              description and chains them automatically. You don&apos;t wire them
              together; Claude figures it out.
            </p>
          </AnimateIn>

          <AnimateIn delay={340}>
            <div
              style={{
                background: "rgba(255,92,26,0.07)",
                border: "1px solid rgba(255,92,26,0.25)",
                borderRadius: "8px",
                padding: "1.1rem 1.25rem",
                marginBottom: "1rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--orange)", marginBottom: "0.5rem" }}>Beginner tip</p>
              <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                Build single-purpose skills first — each one working
                reliably on its own. Composition is free once the pieces exist.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={420}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1.1rem 1.25rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", marginBottom: "0.5rem" }}>Advanced tip</p>
              <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                A dedicated &ldquo;orchestrator&rdquo; skill can route tasks to the
                right skill automatically based on the user&apos;s request type.
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={250}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            {/* Claude orchestrator */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(100,160,255,0.12)",
                  border: "1.5px solid rgba(100,160,255,0.4)",
                  borderRadius: "8px",
                  padding: "0.6rem 1.5rem",
                }}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#90C0FF" }}>Claude orchestrator</p>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ textAlign: "center", color: "var(--muted)", marginBottom: "1rem", fontSize: "0.85rem" }}>↓ reads descriptions, chains automatically</div>

            {/* Chain */}
            {[
              { cmd: "/research-topic", out: "research notes" },
              { cmd: "/draft-post", out: "draft article" },
              { cmd: "/review-tone", out: "final output" },
            ].map((step, i) => (
              <div key={step.cmd}>
                <div
                  style={{
                    background: i === 2 ? "var(--orange)" : "rgba(255,92,26,0.1)",
                    border: `1px solid ${i === 2 ? "var(--orange)" : "rgba(255,92,26,0.3)"}`,
                    borderRadius: "6px",
                    padding: "0.65rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: i === 2 ? "#fff" : "var(--orange)" }}>
                    {step.cmd}
                  </code>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: i === 2 ? "rgba(255,255,255,0.7)" : "var(--muted)" }}>
                    → {step.out}
                  </span>
                </div>
                {i < 2 && (
                  <div style={{ textAlign: "center", color: "var(--muted)", padding: "0.35rem 0", fontSize: "0.85rem" }}>↓</div>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
