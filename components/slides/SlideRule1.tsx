"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideRule1() {
  return (
    <section id="rule1" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "-5%",
          transform: "translateY(-50%)",
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
        {/* Left */}
        <div>
          <AnimateIn delay={0}>
            <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
              Rule 1
            </span>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "0.15em",
              }}
            >
              They prompt
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
                marginBottom: "0.15em",
              }}
            >
              skills,
            </h2>
          </AnimateIn>
          <AnimateIn delay={240}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
              }}
            >
              not Claude.
            </h2>
          </AnimateIn>

          <AnimateIn delay={320}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "420px" }}>
              80% of work is repeated tasks. A prompt dies when the chat
              closes. A skill lives in a file and loads itself automatically.
            </p>
          </AnimateIn>

          <AnimateIn delay={400}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                {
                  label: "Prompt",
                  desc: "One-time instruction inside the chat",
                  color: "var(--muted)",
                },
                {
                  label: "Skill",
                  desc: ".md file with description, instructions, and tools",
                  color: "var(--orange)",
                },
                {
                  label: "Auto-activation",
                  desc: "Claude reads the trigger and connects automatically",
                  color: "var(--orange)",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.color,
                      marginTop: "0.45rem",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: "#e0e0e0" }}>
                    <strong style={{ color: "#fff" }}>{item.label}</strong> — {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={520}>
            <div
              style={{
                marginTop: "2rem",
                background: "rgba(255,92,26,0.08)",
                border: "1px solid rgba(255,92,26,0.3)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "0.75rem",
              }}
            >
              <span style={{ color: "var(--orange)", fontSize: "1rem" }}>⚡</span>
              <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                <strong style={{ color: "#fff" }}>Key:</strong> Claude picks a skill by its{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "0.1em 0.4em",
                    borderRadius: "3px",
                    fontSize: "0.85em",
                  }}
                >
                  description
                </code>{" "}
                field, not its name. Precise wording beats a clever title.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Right — code block */}
        <AnimateIn delay={300}>
          <div className="code-block">
            <p className="code-comment"># Every session prompt:</p>
            <p style={{ color: "#C8C8C8", margin: "0.5rem 0" }}>
              &quot;reply in my style, address me informally,
              <br />
              &nbsp;&nbsp;don&apos;t be templated, 3 paragraphs...&quot;
            </p>
            <br />
            <p className="code-comment"># Skill — one line:</p>
            <p style={{ marginTop: "0.5rem" }}>
              <span className="code-keyword">/draft-email</span>{" "}
              <span style={{ color: "#A8D8A8" }}>&lt;letter&gt;</span>
            </p>
            <br />
            <p className="code-comment"># Folder structure:</p>
            <div style={{ marginTop: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
              <p className="code-path">~/.claude/skills/draft-email/</p>
              <p style={{ color: "#C8C8C8" }}>
                &nbsp;├── <span className="code-keyword">SKILL.md</span>
                <span className="code-comment">  # trigger + instructions</span>
              </p>
              <p style={{ color: "#C8C8C8" }}>
                &nbsp;├── <span className="code-path">tools/</span>
                <span className="code-comment">     # scripts, templates</span>
              </p>
              <p style={{ color: "#C8C8C8" }}>
                &nbsp;└── <span className="code-path">examples/</span>
                <span className="code-comment">  # few-shot memory</span>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
