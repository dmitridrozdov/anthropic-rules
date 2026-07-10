"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function SlideExploreFirst() {
  return (
    <section id="explore-first" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.12) 0%, transparent 70%)",
          bottom: "10%",
          left: "10%",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Tip #1
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
            Don&apos;t edit first.
          </h2>
        </AnimateIn>
        <AnimateIn delay={180}>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              marginBottom: "1.75rem",
            }}
          >
            Explore first.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <AnimateIn delay={260}>
              <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                This is exactly how Anthropic onboards new engineers — ask
                the codebase questions before touching anything. Deep pattern
                search understands context, not just text matching.
              </p>
            </AnimateIn>

            <AnimateIn delay={340}>
              <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Ask about git history too — &ldquo;why does this function have
                15 arguments?&rdquo; Claude reviews logs, analyzes past
                commits, and explains the reasoning. Boris uses this every
                Monday for standup reviews.
              </p>
            </AnimateIn>

            <AnimateIn delay={420}>
              <div
                style={{
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
                  Your code is never indexed, uploaded, or used for training.
                  It stays local — always.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={300}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                Understanding a legacy codebase
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#888" }}>Days</p>
                  <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    manual review
                  </p>
                </div>
                <div style={{ color: "var(--orange)", fontSize: "1.5rem" }}>→</div>
                <div>
                  <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--orange)" }}>
                    <AnimatedCounter target={1} suffix="0 min" duration={800} />
                  </p>
                  <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                    with Claude Code Q&amp;A
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
