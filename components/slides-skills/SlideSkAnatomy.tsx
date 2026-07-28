"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkAnatomy() {
  const layers = [
    {
      file: "SKILL.md",
      role: "The brain",
      desc: "Description (when to load) + Instructions (how to execute). Claude reads this first.",
      color: "var(--orange)",
    },
    {
      file: "tools/",
      role: "The hands",
      desc: "Scripts, templates, JSON data. Deterministic code — zero tokens to re-run.",
      color: "#7DD3FC",
    },
    {
      file: "examples/",
      role: "The memory",
      desc: "Real input/output pairs that teach Claude your voice and style.",
      color: "#A8D8A8",
    },
  ];

  return (
    <section id="sk-anatomy" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "20%",
          right: "5%",
          animation: "glowPulse 5s ease-in-out infinite 0.5s",
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
              Anatomy
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
              Three folders.
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
              One complete skill.
            </h2>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {layers.map((layer, i) => (
              <AnimateIn key={layer.file} delay={280 + i * 120}>
                <div
                  className="rule-card"
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "3px",
                      alignSelf: "stretch",
                      background: layer.color,
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                      <code
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.9rem",
                          color: layer.color,
                          fontWeight: 600,
                        }}
                      >
                        {layer.file}
                      </code>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          color: "var(--muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        {layer.role}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{layer.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={200}>
          <div className="code-block" style={{ fontSize: "0.78rem" }}>
            <p className="code-path">~/.claude/skills/draft-email/</p>
            <p style={{ color: "#C8C8C8", marginTop: "0.75rem" }}>
              ├── <span className="code-keyword">SKILL.md</span>
              <span className="code-comment">        # ← start here</span>
            </p>
            <p style={{ color: "#C8C8C8", marginTop: "0.75rem" }}>
              ├── <span style={{ color: "#7DD3FC" }}>tools/</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              ├── style-check.py
              <span className="code-comment">  # tone validator</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              ├── template.md
              <span className="code-comment">     # email scaffold</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              ├── tone-guide.md
              <span className="code-comment">    # your voice</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              └── signoffs.json
              <span className="code-comment">   # sign-offs per context</span>
            </p>
            <p style={{ color: "#C8C8C8", marginTop: "0.75rem" }}>
              └── <span style={{ color: "#A8D8A8" }}>examples/</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              ├── ex-formal.txt
              <span className="code-comment">    # formal → output pair</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              ├── ex-cold.txt
              <span className="code-comment">      # cold outreach pair</span>
            </p>
            <p style={{ color: "#8A8A8A", paddingLeft: "1.5rem" }}>
              └── ex-followup.txt
              <span className="code-comment">  # follow-up pair</span>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
