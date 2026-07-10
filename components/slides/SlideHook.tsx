"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function SlideHook() {
  return (
    <section id="hook" className="slide" style={{ padding: "0 6vw" }}>
      {/* Radial glow */}
      <div
        className="glow-bg"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,92,26,0.18) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "2rem", display: "flex" }}>
            Hook
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "0.2em",
            }}
          >
            Anthropic engineers
            <br />
            don't write prompts.
          </h1>
        </AnimateIn>

        <AnimateIn delay={200}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              marginBottom: "2rem",
            }}
          >
            They have 4 rules.
          </h2>
        </AnimateIn>

        <AnimateIn delay={350}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "#C8C8C8",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "3.5rem",
            }}
          >
            They presented at AI Code Summit and showed how they actually work
            with Claude Code. Turns out,{" "}
            <strong style={{ color: "#fff" }}>
              90% of developers are doing it wrong
            </strong>{" "}
            — losing tokens, time, and accumulated context.
          </p>
        </AnimateIn>

        {/* Stats */}
        <AnimateIn delay={500}>
          <div
            style={{
              display: "flex",
              gap: "clamp(2rem, 5vw, 5rem)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: 3, prefix: "×", suffix: "", label: "Fewer tokens\nper task" },
              { value: 2.8, prefix: "×", suffix: "", decimals: 1, label: "Faster\nto results" },
              { value: 30, prefix: "", suffix: "", label: "Days — and\nClaude isn't the same" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="stat-number"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    duration={1800}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginTop: "0.4rem",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
