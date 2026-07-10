"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideConcept() {
  const layers = [
    {
      id: "01",
      title: "Layer 1 — AI model",
      subtitle: '"The phone"',
      desc: "Anthropic · OpenAI · Google",
      active: false,
    },
    {
      id: "02",
      title: "Layer 2 — Prompts + agents",
      subtitle: '"Dialing manually"',
      desc: "90% get stuck here",
      active: false,
      warning: true,
    },
    {
      id: "03",
      title: "Layer 3 — Skills",
      subtitle: '"The app layer"',
      desc: "Anthropic engineer level",
      active: true,
    },
  ];

  return (
    <section id="concept" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "-10%",
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", textAlign: "center", margin: "0 auto" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "2rem", justifyContent: "center", display: "flex" }}>
            Concept
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            AI is the phone.{" "}
            <span style={{ color: "var(--orange)" }}>Skills are apps.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p style={{ color: "#C8C8C8", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 3.5rem" }}>
            Anthropic built the phone. You build the app layer on top.
            Most people stop at layer 2 and dial the number by hand every session.
          </p>
        </AnimateIn>

        {/* Flow diagram */}
        <AnimateIn delay={350}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2.5rem",
              display: "flex",
              alignItems: "stretch",
              gap: "0",
              overflow: "hidden",
            }}
          >
            {layers.map((layer, i) => (
              <div key={layer.id} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    padding: "1.25rem",
                    background: layer.active ? "var(--orange)" : layer.warning ? "rgba(255,92,26,0.06)" : "transparent",
                    border: layer.warning ? "1px dashed rgba(255,255,255,0.15)" : "none",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: layer.active ? "rgba(255,255,255,0.8)" : "var(--muted)",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {layer.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: layer.active ? "#fff" : layer.warning ? "#C8C8C8" : "#888",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {layer.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: layer.active ? "rgba(255,255,255,0.75)" : layer.warning ? "var(--orange)" : "var(--muted)",
                      fontFamily: layer.warning ? "var(--font-mono)" : "inherit",
                    }}
                  >
                    {layer.desc}
                  </p>
                </div>

                {i < layers.length - 1 && (
                  <div
                    style={{
                      padding: "0 0.75rem",
                      color: "var(--muted)",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
