"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideGovernance() {
  return (
    <section id="governance" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "-10%",
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            For Teams
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
            Secure by default,
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
              marginBottom: "1.75rem",
            }}
          >
            shared by the whole team.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <AnimateIn delay={280}>
            <div className="rule-card">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                  marginBottom: "0.75rem",
                }}
              >
                Corporate policy
              </p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#fff" }}>
                Hardcoded restrictions
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
                Block specific external URLs, enforce NDAs, set security
                constraints at the team config level. Employees cannot override them.
              </p>
              <div className="code-block" style={{ fontSize: "0.72rem", padding: "0.85rem 1rem" }}>
                <p>
                  <span className="code-keyword">claude</span> config set blocked-urls{" "}
                  <span className="code-path">internal.competitor.com</span>
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={380}>
            <div className="rule-card" style={{ borderColor: "var(--orange)", background: "rgba(255,92,26,0.06)" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                  marginBottom: "0.75rem",
                }}
              >
                Shared mcp.json
              </p>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#fff" }}>
                Onboard new engineers instantly
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.65 }}>
                Clone the repo → Claude Code prompts to initialize the right
                MCP servers automatically. Same test environments, same
                workflow tools, day one.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
