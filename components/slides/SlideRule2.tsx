"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideRule2() {
  const layers = [
    {
      num: "01",
      title: "Description",
      heading: "When to load the skill",
      body: "A short instruction for Claude: 'load this skill or not'. Vague — won't activate. Precise — activates automatically.",
      highlight: false,
    },
    {
      num: "02",
      title: "Instructions",
      heading: "How to complete the task",
      body: "A playbook. Step-by-step. Most people get stuck here and think the skill is just a prompt in a file. It's not.",
      highlight: false,
    },
    {
      num: "03",
      title: "Tools",
      heading: "What to execute it with",
      body: "Scripts, API wrappers, templates, file references. Deterministic code instead of AI computation — cheaper, faster, repeatable.",
      highlight: true,
    },
  ];

  return (
    <section id="rule2" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,92,26,0.14) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          animation: "glowPulse 5s ease-in-out infinite 1s",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Rule 2
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            A skill is{" "}
            <span style={{ color: "var(--orange)" }}>three layers,</span>
          </h2>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.75rem",
            }}
          >
            not one prompt.
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p style={{ color: "#C8C8C8", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Most people write Description + Instructions and call it done.
            The real power is layer 3: tools. 90% never get there.
          </p>
        </AnimateIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {layers.map((layer, i) => (
            <AnimateIn key={layer.num} delay={300 + i * 120}>
              <div
                className="rule-card"
                style={
                  layer.highlight
                    ? {
                        borderColor: "var(--orange)",
                        background: "rgba(255,92,26,0.06)",
                      }
                    : {}
                }
              >
                {/* Top accent line */}
                <div
                  style={{
                    height: "2px",
                    background: layer.highlight ? "var(--orange)" : "var(--border)",
                    marginBottom: "1.25rem",
                    marginLeft: "-1.5rem",
                    marginRight: "-1.5rem",
                    marginTop: "-1.5rem",
                    borderRadius: "8px 8px 0 0",
                  }}
                />

                <div style={{ marginBottom: "0.75rem", display: "flex", gap: "0.6rem", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: layer.highlight ? "var(--orange)" : "var(--muted)",
                    }}
                  >
                    Layer {layer.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: layer.highlight ? "var(--orange)" : "var(--muted)",
                    }}
                  >
                    · {layer.title}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: layer.highlight ? "#fff" : "#e0e0e0",
                  }}
                >
                  {layer.heading}
                </h3>

                <p style={{ fontSize: "0.875rem", color: "#8A8A8A", lineHeight: 1.65 }}>
                  {layer.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
