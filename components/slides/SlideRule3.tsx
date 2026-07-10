"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideRule3() {
  const focusSkills = [
    { id: "yt-idea-research", color: "var(--orange)" },
    { id: "yt-script-writer", color: "var(--orange)" },
    { id: "linkedin-post", color: "var(--orange)" },
  ];

  return (
    <section id="rule3" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          bottom: "0",
          right: "0",
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
              Rule 3
            </span>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "0.2em",
              }}
            >
              Compositional,
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "var(--orange)",
                letterSpacing: "-0.03em",
                marginBottom: "0.2em",
              }}
            >
              not monolithic.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "440px", marginTop: "1.5rem" }}>
              A giant skill that &ldquo;does everything&rdquo; becomes unmanageable
              by week 3. Break into 3–5 focused skills. Claude coordinates them itself.
            </p>
          </AnimateIn>

          <AnimateIn delay={340}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.1rem 1.25rem",
                  borderLeft: "3px solid var(--muted)",
                }}
              >
                <p style={{ fontWeight: 700, marginBottom: "0.4rem", color: "#e0e0e0" }}>
                  Monolith &ldquo;content-creation&rdquo;
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>
                  research, copy, hooks, SEO, formatting inside one skill.
                  Broke — no idea where. Fixed one case — broke three others.
                </p>
              </div>
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--orange)",
                  borderRadius: "8px",
                  padding: "1.1rem 1.25rem",
                  borderLeft: "3px solid var(--orange)",
                }}
              >
                <p style={{ fontWeight: 700, marginBottom: "0.4rem", color: "#fff" }}>
                  Focused skills
                </p>
                <p style={{ fontSize: "0.85rem", color: "#C8C8C8", lineHeight: 1.6 }}>
                  <code style={{ fontFamily: "var(--font-mono)", color: "var(--orange)" }}>
                    /research · /draft · /headlines
                  </code>
                  — each tested and improved independently.
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={440}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["Bug found instantly", "Improvements compound", "Never rebuild from scratch"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                    padding: "0.3rem 0.8rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Right: diagram */}
        <AnimateIn delay={300}>
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
                  background: "rgba(100,160,255,0.15)",
                  border: "1.5px solid rgba(100,160,255,0.5)",
                  borderRadius: "8px",
                  padding: "0.6rem 1.25rem",
                  marginBottom: "0.5rem",
                }}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#90C0FF" }}>
                  Claude
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(144,192,255,0.7)" }}>
                  orchestrator
                </p>
              </div>
            </div>

            {/* Monolith (dashed, refactoring) */}
            <div
              style={{
                border: "1px dashed rgba(255,255,255,0.2)",
                borderRadius: "8px",
                padding: "0.75rem",
                textAlign: "center",
                marginBottom: "1.5rem",
              }}
            >
              <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>content-creation</p>
              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}>
                (one skill, everything)
              </p>
            </div>

            {/* Arrow down */}
            <div style={{ textAlign: "center", color: "var(--muted)", marginBottom: "1.5rem", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
              ↓ refactoring
            </div>

            {/* Focused skills */}
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              {focusSkills.map((skill) => (
                <div
                  key={skill.id}
                  style={{
                    background: "var(--orange)",
                    borderRadius: "8px",
                    padding: "0.6rem 0.8rem",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "rgba(255,255,255,0.9)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {skill.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
