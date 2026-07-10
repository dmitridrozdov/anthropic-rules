"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideClaudeMd() {
  const items = [
    "Which MCP servers to use",
    "Major architectural decisions",
    "Which files are critical to the project",
    "What patterns to follow (and what to avoid)",
  ];

  return (
    <section id="claude-md" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.14) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          animation: "glowPulse 5s ease-in-out infinite 1s",
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
        <AnimateIn delay={0}>
          <div className="code-block">
            <p className="code-path"># CLAUDE.md</p>
            <br />
            <p className="code-comment">## MCP servers</p>
            <p style={{ color: "#C8C8C8" }}>- puppeteer, postgres, github</p>
            <br />
            <p className="code-comment">## Architecture</p>
            <p style={{ color: "#C8C8C8" }}>- API layer in /server, never call DB from /client</p>
            <br />
            <p className="code-comment">## Critical files</p>
            <p style={{ color: "#C8C8C8" }}>- auth/session.ts — do not modify without review</p>
            <br />
            <p className="code-comment">## Patterns to avoid</p>
            <p style={{ color: "#C8C8C8" }}>- no default exports, no any types</p>
          </div>
        </AnimateIn>

        <div>
          <AnimateIn delay={100}>
            <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
              Context
            </span>
          </AnimateIn>

          <AnimateIn delay={180}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "0.2em",
              }}
            >
              One file.
            </h2>
          </AnimateIn>
          <AnimateIn delay={260}>
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
              Deep context.
            </h2>
          </AnimateIn>

          <AnimateIn delay={340}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "440px" }}>
              Place a <code style={{ fontFamily: "var(--font-mono)", color: "var(--orange)" }}>CLAUDE.md</code>{" "}
              in your project root. Write it yourself or ask Claude to generate it.
            </p>
          </AnimateIn>

          <AnimateIn delay={420}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
              {items.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--orange)", fontSize: "0.9rem" }}>✓</span>
                  <span style={{ color: "#e0e0e0", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={520}>
            <div
              style={{
                background: "rgba(255,92,26,0.08)",
                border: "1px solid rgba(255,92,26,0.3)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ fontSize: "0.85rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                Less guesswork → fewer tokens consumed. Anthropic keeps these
                files embedded in every internal repo.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
