"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkWhat() {
  return (
    <section id="sk-what" className="slide" style={{ padding: "0 6vw" }}>
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

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", justifyContent: "center", display: "flex" }}>
            Mental Model
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: "0.2em",
            }}
          >
            A skill is an app
          </h2>
        </AnimateIn>
        <AnimateIn delay={180}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--orange)",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            built on top of Claude.
          </h2>
        </AnimateIn>

        <AnimateIn delay={280}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              {
                icon: "📱",
                title: "Claude = the phone",
                desc: "Anthropic built the platform. You don't configure it each time you make a call.",
              },
              {
                icon: "📦",
                title: "Skill = an app",
                desc: "You build and install it once. It's always there when you need it, no setup required.",
              },
              {
                icon: "⌨️",
                title: "Prompt = dialing manually",
                desc: "You type the full number every single time. Works, but why would you?",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rule-card"
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={440}>
          <div
            style={{
              background: "rgba(255,92,26,0.07)",
              border: "1px solid rgba(255,92,26,0.25)",
              borderRadius: "8px",
              padding: "1.25rem 2rem",
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            <p style={{ color: "#C8C8C8", fontSize: "0.95rem", lineHeight: 1.6 }}>
              A skill lives in{" "}
              <code style={{ fontFamily: "var(--font-mono)", color: "var(--orange)" }}>
                ~/.claude/skills/
              </code>{" "}
              as a folder on disk — not in any chat, not in any cloud database.
              It loads automatically when Claude recognizes it should.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
