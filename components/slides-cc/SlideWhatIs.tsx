"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideWhatIs() {
  const features = [
    { title: "Whole functions", desc: "Not autocomplete — complete implementations across files" },
    { title: "Multi-bug fixes", desc: "Fixes several issues simultaneously, not one line at a time" },
    { title: "Any IDE", desc: "VS Code, Cursor, Xcode, JetBrains — works identically everywhere" },
    { title: "Terminal-native", desc: "Same behavior locally, over SSH, or in any remote tunnel" },
  ];

  return (
    <section id="what-is" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "-5%",
          transform: "translateY(-50%)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            What is it
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
            A new type
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
            of AI assistant.
          </h2>
        </AnimateIn>

        <AnimateIn delay={260}>
          <p style={{ color: "#C8C8C8", lineHeight: 1.7, maxWidth: "600px", marginBottom: "3rem" }}>
            Past generations of AI coding helpers failed because they only
            filled in a few lines. Claude Code seamlessly integrates with
            your existing workflow — the goal isn&apos;t to force a new one on you.
          </p>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={340 + i * 100}>
              <div className="rule-card">
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--orange)",
                    marginBottom: "1rem",
                  }}
                />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
