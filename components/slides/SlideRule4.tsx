"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideRule4() {
  return (
    <section
      id="rule4"
      className="slide"
      style={{
        padding: "0 6vw",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        className="glow-bg"
        style={{
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        <AnimateIn delay={0}>
          <span
            className="eyebrow"
            style={{ marginBottom: "3rem", justifyContent: "center", display: "flex" }}
          >
            Rule 4 · Anthropic Engineering
          </span>
        </AnimateIn>

        <AnimateIn delay={150}>
          <blockquote
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: "2rem",
            }}
          >
            &ldquo;Our goal is that Claude on day{" "}
            <span style={{ color: "var(--orange)" }}>30</span> of working
            with you is going to be a lot better than Claude on day{" "}
            <span style={{ color: "var(--orange)" }}>one.&rdquo;</span>
          </blockquote>
        </AnimateIn>

        <AnimateIn delay={350}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "2.5rem",
            }}
          >
            — The skill accumulates your edge cases, voice, and process. A prompt cannot.
          </p>
        </AnimateIn>

        <AnimateIn delay={480}>
          <div
            style={{
              display: "inline-flex",
              gap: "3rem",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.5rem 2.5rem",
            }}
          >
            {[
              { label: "Day 1", sub: "Fresh start every session" },
              {
                label: "→",
                sub: "",
                isArrow: true,
              },
              { label: "Day 30", sub: "Skills learned your entire workflow", highlight: true },
            ].map((item, i) =>
              item.isArrow ? (
                <div key={i} style={{ color: "var(--orange)", fontSize: "1.5rem", alignSelf: "center" }}>
                  →
                </div>
              ) : (
                <div key={i} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: item.highlight ? "var(--orange)" : "#888",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.5, maxWidth: "150px" }}>
                    {item.sub}
                  </p>
                </div>
              )
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
