"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSetup() {
  return (
    <section id="setup" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
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
              First Steps
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
              Set up once,
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
                marginBottom: "1.75rem",
              }}
            >
              talk forever.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, maxWidth: "440px", marginBottom: "2rem" }}>
              No need for a dedicated workspace right away. Launch the
              terminal, press Shift, and you&apos;re in. A few configs save you
              from repeating permission prompts forever.
            </p>
          </AnimateIn>

          <AnimateIn delay={340}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { tag: "New", title: "GitHub app integration", desc: "Claude accesses your repo and solves issues directly" },
                { tag: "Tip", title: "Pre-approve allowed tools", desc: "Configure once — no repeated permission prompts" },
                { tag: "New", title: "Voice input", desc: "Talk to Claude Code like you're talking to a person" },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--orange)",
                      border: "1px solid rgba(255,92,26,0.3)",
                      borderRadius: "4px",
                      padding: "0.15rem 0.5rem",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                    }}
                  >
                    {item.tag}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: "0.2rem" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={300}>
          <div className="code-block">
            <p className="code-comment"># Launch and toggle light mode</p>
            <p style={{ marginTop: "0.5rem" }}>
              <span className="code-keyword">claude</span> config set theme light
            </p>
            <br />
            <p className="code-comment"># Press Shift inside the terminal</p>
            <p style={{ color: "#C8C8C8", marginTop: "0.5rem" }}>→ no dedicated workspace needed</p>
            <br />
            <p className="code-comment"># Voice mode</p>
            <p style={{ marginTop: "0.5rem" }}>
              <span className="code-keyword">claude</span> --voice
            </p>
            <p style={{ color: "#C8C8C8", marginTop: "0.5rem" }}>→ talk instead of typing</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
