"use client";

import { AnimateIn } from "@/components/AnimateIn";

const TAKEAWAYS = [
  { num: "01", label: "Explore before\nyou edit" },
  { num: "02", label: "Plan before\nyou code" },
  { num: "03", label: "Give it deep\ncontext: CLAUDE.md" },
  { num: "04", label: "Parallelize\nyour sessions" },
];

export function SlideSummaryCC() {
  return (
    <section id="summary-cc" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(255,92,26,0.14) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Summary
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            This isn&apos;t a demo. <span style={{ color: "var(--orange)" }}>It&apos;s how we work.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p style={{ color: "#C8C8C8", lineHeight: 1.7, maxWidth: "560px", marginBottom: "3.5rem" }}>
            80% of Anthropic&apos;s technical staff use Claude Code every day.
            Explore, plan, give it context, extend with MCP, learn the
            hotkeys, and don&apos;t be afraid to run it in parallel.
          </p>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {TAKEAWAYS.map((item, i) => (
            <AnimateIn key={item.num} delay={280 + i * 100}>
              <div>
                <p
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    fontWeight: 900,
                    color: "var(--orange)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.num}
                </p>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "0.75rem" }} />
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={700}>
          <div
            style={{
              marginTop: "4rem",
              padding: "1.5rem 2rem",
              background: "rgba(255,92,26,0.07)",
              border: "1px solid rgba(255,92,26,0.25)",
              borderRadius: "8px",
              display: "inline-flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--orange)", fontSize: "1.25rem" }}>→</span>
            <p style={{ color: "#C8C8C8", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Install it, write your first CLAUDE.md, and ask a question
              before you write a single line of code.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
