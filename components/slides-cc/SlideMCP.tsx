"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideMCP() {
  return (
    <section id="mcp" className="slide" style={{ padding: "0 6vw" }}>
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
        <div>
          <AnimateIn delay={0}>
            <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
              Power Tools
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
              Connect more
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
              tools, do more.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "440px" }}>
              Two ways to extend Claude Code: CLI tools you already use, and
              MCP servers — the Model Context Protocol — for deeper system access.
            </p>
          </AnimateIn>

          <AnimateIn delay={340}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "Write a unit test repeatedly, no reminders needed",
                "Take a Puppeteer screenshot on demand",
                "Check an iOS simulator screenshot mid-session",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--orange)",
                      marginTop: "0.45rem",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: "#e0e0e0", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={300}>
          <div className="code-block">
            <p className="code-comment"># Add an MCP server</p>
            <p style={{ marginTop: "0.5rem" }}>
              <span className="code-keyword">claude</span> mcp add{" "}
              <span className="code-path">puppeteer</span>
            </p>
            <br />
            <p className="code-comment"># List connected servers</p>
            <p style={{ marginTop: "0.5rem" }}>
              <span className="code-keyword">claude</span> mcp list
            </p>
            <br />
            <p className="code-comment"># Reset / manage via config</p>
            <div style={{ marginTop: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
              <p className="code-path">~/.claude/CLAUDE.md</p>
              <p style={{ color: "#C8C8C8" }}>
                <span className="code-comment"> # or project-level mcp.json</span>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
