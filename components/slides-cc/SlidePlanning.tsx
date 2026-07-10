"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlidePlanning() {
  const steps = [
    { title: "Ask for a plan", desc: "Outline steps before writing any code" },
    { title: "Review & refine", desc: "Give pointers, adjust the architecture" },
    { title: "Approve", desc: "Confirm the plan matches your intent" },
    { title: "Implement", desc: "Commits, branches, PRs — autonomously", highlight: true },
  ];

  return (
    <section id="planning" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "30%",
          right: "0",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", justifyContent: "center", display: "flex" }}>
            Workflow
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: "0.2em",
            }}
          >
            Plan first.
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
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Code second.
          </h2>
        </AnimateIn>

        <AnimateIn delay={260}>
          <p
            style={{
              color: "#C8C8C8",
              textAlign: "center",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            &ldquo;Implement this massive function&rdquo; sometimes works,
            sometimes doesn&apos;t — and people get frustrated. Have Claude
            think and outline steps first.
          </p>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
          {steps.map((step, i) => (
            <AnimateIn key={step.title} delay={340 + i * 100}>
              <div
                className="rule-card"
                style={
                  step.highlight
                    ? { borderColor: "var(--orange)", background: "rgba(255,92,26,0.07)" }
                    : {}
                }
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: step.highlight ? "var(--orange)" : "var(--muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: step.highlight ? "#fff" : "#e0e0e0",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={760}>
          <p
            style={{
              textAlign: "center",
              marginTop: "2rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              color: "var(--muted)",
            }}
          >
            Claude reads your previous git logs and matches your project&apos;s commit format
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
