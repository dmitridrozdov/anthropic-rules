"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function SlidePattern() {
  return (
    <section id="pattern" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,92,26,0.15) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "2rem", justifyContent: "center", display: "flex" }}>
            Pattern
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            If a task can be done with code —
            <br />
            <span style={{ color: "var(--orange)" }}>do it with code.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p style={{ color: "#C8C8C8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 3rem" }}>
            Barry Zhang at Summit: Claude rewrote the same Python script
            every session to format slide styles. They saved it to tools/.
            Now Claude just runs it.
          </p>
        </AnimateIn>

        {/* Big stat */}
        <AnimateIn delay={300}>
          <div style={{ marginBottom: "3rem" }}>
            <div className="stat-number" style={{ fontSize: "clamp(5rem, 15vw, 10rem)" }}>
              <AnimatedCounter target={0} duration={100} />
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: "0.5rem",
              }}
            >
              Tokens to re-run a script stored inside the skill
            </p>
          </div>
        </AnimateIn>

        {/* Comparison */}
        <AnimateIn delay={400}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "1rem",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Without tools
              </p>
              <p style={{ fontSize: "0.875rem", color: "#8A8A8A", lineHeight: 1.6 }}>
                Claude regenerates the script every session from scratch.
                ~3000 tokens, unstable result.
              </p>
            </div>

            <div style={{ color: "var(--orange)", fontSize: "1.5rem", textAlign: "center" }}>→</div>

            <div
              style={{
                background: "rgba(255,92,26,0.08)",
                border: "1px solid var(--orange)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                  marginBottom: "0.75rem",
                }}
              >
                With tools
              </p>
              <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                Script lives in{" "}
                <code style={{ fontFamily: "var(--font-mono)", color: "var(--orange)" }}>tools/style.py</code>.
                Claude calls it. Stable,{" "}
                <strong style={{ color: "#fff" }}>0 tokens</strong> on the script itself.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
