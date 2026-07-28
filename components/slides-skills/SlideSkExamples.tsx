"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkExamples() {
  return (
    <section id="sk-examples" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "0",
          animation: "glowPulse 5s ease-in-out infinite",
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
              Layer 04 · Examples
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
              Claude&apos;s memory
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
              of your taste.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "420px" }}>
              Real input/output pairs from things you&apos;ve sent before that you
              were happy with. This is how Claude learns your voice without
              explanation.
            </p>
          </AnimateIn>

          <AnimateIn delay={340}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { tip: "3 examples is usually enough to establish a pattern" },
                { tip: "Name files descriptively — ex-formal-complaint.txt, not ex-1.txt" },
                { tip: "Pick edge cases, not just easy examples" },
                { tip: "Each file = one INPUT block + one OUTPUT block" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--orange)", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                  <p style={{ fontSize: "0.875rem", color: "#C8C8C8", lineHeight: 1.5 }}>{item.tip}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={300}>
          <div className="code-block" style={{ fontSize: "0.76rem" }}>
            <p style={{ color: "var(--muted)" }}>
              <span className="code-comment"># examples/ex-formal.txt</span>
            </p>
            <br />
            <p className="code-keyword">--- INPUT ---</p>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginTop: "0.4rem" }}>
              Client complained about delayed delivery. Need to respond professionally.
            </p>
            <br />
            <p className="code-keyword">--- OUTPUT ---</p>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginTop: "0.4rem" }}>
              Dear [Name],
              <br />
              <br />
              Thank you for bringing this to our attention. We take delivery
              commitments seriously and I want to personally ensure this is
              resolved...
            </p>
            <br />
            <p className="code-comment">
              # Pattern Claude extracts: formal opener, personal ownership,
              <br /># no passive voice, action-oriented close
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
