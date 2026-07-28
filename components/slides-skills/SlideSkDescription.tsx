"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkDescription() {
  return (
    <section id="sk-description" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.12) 0%, transparent 70%)",
          bottom: "5%",
          right: "0",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Layer 01 · Description
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
            Claude&apos;s decision function.
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
            Not a label. A trigger.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <AnimateIn delay={260}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "0.75rem",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#FF6B6B" }}>✗</span> Won&apos;t trigger
              </p>
              <div className="code-block" style={{ borderColor: "rgba(255,100,100,0.2)" }}>
                <p className="code-comment"># Too vague — Claude won't load this</p>
                <p style={{ color: "#C8C8C8", marginTop: "0.5rem" }}>
                  Use this skill to help with emails.
                </p>
              </div>
              <div className="code-block" style={{ marginTop: "0.75rem", borderColor: "rgba(255,100,100,0.2)" }}>
                <p className="code-comment"># Sounds like a label, not a condition</p>
                <p style={{ color: "#C8C8C8", marginTop: "0.5rem" }}>
                  Email tool for writing messages.
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={360}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "0.75rem",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "var(--orange)" }}>✓</span> Triggers correctly
              </p>
              <div className="code-block" style={{ borderColor: "rgba(255,92,26,0.3)" }}>
                <p className="code-comment"># Specific intent + action signals</p>
                <p style={{ color: "#C8C8C8", marginTop: "0.5rem", lineHeight: 1.7 }}>
                  Load this skill when the user asks to{" "}
                  <span className="code-keyword">draft</span>,{" "}
                  <span className="code-keyword">write</span>, or{" "}
                  <span className="code-keyword">reply</span> to a business
                  email, client message, or professional correspondence.
                  Also triggers on{" "}
                  <span className="code-keyword">/draft-email</span>.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={480}>
          <div
            style={{
              marginTop: "1.5rem",
              background: "rgba(255,92,26,0.07)",
              border: "1px solid rgba(255,92,26,0.25)",
              borderRadius: "8px",
              padding: "1rem 1.5rem",
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "var(--orange)", flexShrink: 0 }}>⚡</span>
            <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.6 }}>
              Test it: paste your description into a blank chat and ask Claude &ldquo;would you load
              this skill for: [request]?&rdquo; If the answer is wrong, rewrite the description
              before touching anything else.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
