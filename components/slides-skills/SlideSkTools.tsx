"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function SlideSkTools() {
  const toolExamples = [
    { file: "style-check.py", desc: "Python script — validates tone against your rules" },
    { file: "template.md", desc: "Markdown scaffold every email starts from" },
    { file: "tone-guide.md", desc: "Reference doc describing your voice in detail" },
    { file: "signoffs.json", desc: "Map of context → preferred sign-off phrase" },
    { file: "contacts.json", desc: "Client → their communication preferences" },
  ];

  return (
    <section id="sk-tools" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,92,26,0.14) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-20%, -50%)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Layer 03 · Tools
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
            If Claude does it twice,
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
              marginBottom: "2rem",
            }}
          >
            it belongs in tools/.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2rem", alignItems: "center" }}>
          <AnimateIn delay={260}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {toolExamples.map((t) => (
                <div
                  key={t.file}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "0.75rem 1rem",
                  }}
                >
                  <code
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "#7DD3FC",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {t.file}
                  </code>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.5 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={360}>
            <div style={{ textAlign: "center", padding: "0 1rem" }}>
              <div
                className="stat-number"
                style={{ fontSize: "clamp(4rem, 10vw, 7rem)", display: "block", marginBottom: "0.5rem" }}
              >
                <AnimatedCounter target={0} duration={100} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                Tokens to re-run
                <br />a stored script
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={440}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                  }}
                >
                  Without tools/
                </p>
                <p style={{ fontSize: "0.82rem", color: "#888", lineHeight: 1.6 }}>
                  Claude generates the script fresh every session. ~3000 tokens. Unstable output.
                </p>
              </div>
              <div
                style={{
                  background: "rgba(255,92,26,0.07)",
                  border: "1px solid var(--orange)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "var(--orange)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                  }}
                >
                  With tools/
                </p>
                <p style={{ fontSize: "0.82rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                  Claude calls the file. Deterministic, instant, zero tokens on the script.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
