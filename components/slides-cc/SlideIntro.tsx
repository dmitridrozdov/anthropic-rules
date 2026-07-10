"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideIntro() {
  return (
    <section id="intro" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,92,26,0.18) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "2rem", display: "flex" }}>
            Claude Code · Live Talk
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
            Hi, I&apos;m Boris.
          </h1>
        </AnimateIn>

        <AnimateIn delay={200}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              marginBottom: "2rem",
            }}
          >
            One of the creators of Claude Code.
          </h2>
        </AnimateIn>

        <AnimateIn delay={350}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "#C8C8C8",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            Technical Staff Lead at Anthropic. Today: practical advice,
            recommendations, and real workflows — not theory, not history.
          </p>
        </AnimateIn>

        <AnimateIn delay={480}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.5rem",
              maxWidth: "480px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "0.75rem",
              }}
            >
              Quick check — install it now
            </p>
            <div className="code-block" style={{ padding: "1rem 1.25rem" }}>
              <p>
                <span className="code-keyword">npm</span> install -g{" "}
                <span className="code-path">@anthropic-ai/claude-code</span>
              </p>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.75rem" }}>
              Requires Node.js. Open a terminal and try it during the talk.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
