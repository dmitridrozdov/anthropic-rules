"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSDKParallel() {
  return (
    <section id="sdk-parallel" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Advanced
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
            SDK automation.
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
            Parallel everything.
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
                  color: "var(--muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Claude Code SDK
              </p>
              <p style={{ fontSize: "0.9rem", color: "#C8C8C8", lineHeight: 1.65, marginBottom: "1rem" }}>
                Interact with files via cloud automation. Pass explicit
                prompts with CLI commands and dictate exact output format —
                like JSON — for automated incident response or rapid repo processing.
              </p>
              <div className="code-block" style={{ fontSize: "0.72rem", padding: "0.85rem 1rem" }}>
                <p>
                  <span className="code-keyword">claude</span> --output-format json -p
                  <span className="code-string"> &quot;summarize errors&quot;</span>
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
                Power-user habit
              </p>
              <p style={{ fontSize: "0.9rem", color: "#C8C8C8", lineHeight: 1.65, marginBottom: "1rem" }}>
                Anthropic power users rarely run a single terminal tab.
                Multiple concurrent SSH sessions, cloud tunnels, and parallel
                git worktrees — all running at once.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["worktree-1", "worktree-2", "ssh-tunnel", "tab-4"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--orange)",
                      border: "1px solid rgba(255,92,26,0.3)",
                      borderRadius: "4px",
                      padding: "0.25rem 0.6rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
