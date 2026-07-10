"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideToolsDetail() {
  return (
    <section id="tools-detail" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "20%",
          left: "40%",
          animation: "glowPulse 4s ease-in-out infinite 0.5s",
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
        {/* Left: code */}
        <AnimateIn delay={0}>
          <div className="code-block" style={{ fontSize: "0.78rem" }}>
            <p className="code-path">~/.claude/skills/draft-email/</p>
            <p style={{ color: "#C8C8C8", marginTop: "0.5rem" }}>
              ├── <span className="code-keyword">SKILL.md</span>
              <span className="code-comment">  # description + instructions</span>
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              ├── <span className="code-path">tools/</span>
            </p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>
              ├── style-check.py
              <span className="code-comment">  # python: tone check</span>
            </p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>
              ├── template.md
              <span className="code-comment">   # letter template</span>
            </p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>
              ├── tone-guide.md
              <span className="code-comment">   # your voice</span>
            </p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>
              └── signoffs.json
              <span className="code-comment">  # sign-offs</span>
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              └── <span className="code-path">examples/</span>
            </p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>├── ex-formal.txt</p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>├── ex-cold.txt</p>
            <p style={{ paddingLeft: "1.5rem", color: "#C8C8C8" }}>└── ex-followup.txt</p>
          </div>
        </AnimateIn>

        {/* Right: copy */}
        <div>
          <AnimateIn delay={100}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--orange)",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Layer 3 · Tools
            </span>
          </AnimateIn>

          <AnimateIn delay={180}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "0.2em",
              }}
            >
              Beautiful prompts —
            </h2>
          </AnimateIn>
          <AnimateIn delay={240}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--orange)",
                marginBottom: "1.5rem",
              }}
            >
              terrible tools.
            </h2>
          </AnimateIn>

          <AnimateIn delay={320}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "420px" }}>
              Anthropic does the opposite: compact SKILL.md, heavy
              investment in tools/. That&apos;s why their skills can do what
              yours can&apos;t.
            </p>
          </AnimateIn>

          <AnimateIn delay={420}>
            <blockquote
              style={{
                borderLeft: "3px solid var(--orange)",
                paddingLeft: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#E0E0E0",
                  fontStyle: "italic",
                  marginBottom: "0.75rem",
                }}
              >
                &ldquo;People put a lot of effort into{" "}
                <span style={{ color: "var(--orange)", fontStyle: "normal", fontWeight: 600 }}>
                  beautiful, detailed prompts
                </span>
                . And then the tools they make are incredibly bare-bones —
                no documentation, parameters named A and B.&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                — Eric, Anthropic Engineering
              </p>
            </blockquote>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
