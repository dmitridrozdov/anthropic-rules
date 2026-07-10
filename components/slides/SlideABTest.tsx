"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

function AnimatedBar({ target, color, delay = 0 }: { target: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(target), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <div ref={ref} className="bar-track">
      <div
        className="bar-fill"
        style={{ width: `${width}%`, background: color }}
      />
    </div>
  );
}

export function SlideABTest() {
  return (
    <section id="ab-test" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          maxWidth: "1200px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <AnimateIn delay={0}>
            <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
              A/B in action
            </span>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "0.1em",
              }}
            >
              One task.
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--orange)",
                marginBottom: "2rem",
              }}
            >
              Two approaches.
            </h2>
          </AnimateIn>

          <AnimateIn delay={260}>
            <p style={{ color: "#C8C8C8", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "400px" }}>
              Write a client email reply in my style.
              Prompt approach vs{" "}
              <code style={{ fontFamily: "var(--font-mono)", color: "var(--orange)" }}>
                /draft-email
              </code>{" "}
              skill. Measuring tokens and time.
            </p>
          </AnimateIn>

          {/* Cards */}
          <AnimateIn delay={340}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                {
                  label: "Prompt",
                  tokens: "2 700",
                  detail: "70 sec · style inconsistent",
                  highlight: false,
                },
                {
                  label: "Skill",
                  tokens: "900",
                  detail: "25 sec · on-brand from take 1",
                  highlight: true,
                },
              ].map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: card.highlight ? "rgba(255,92,26,0.08)" : "var(--card)",
                    border: `1px solid ${card.highlight ? "var(--orange)" : "var(--border)"}`,
                    borderRadius: "8px",
                    padding: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: card.highlight ? "var(--orange)" : "var(--muted)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      fontWeight: 800,
                      color: card.highlight ? "var(--orange)" : "#fff",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {card.tokens}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.5 }}>
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={440}>
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "1.75rem" }}>
              {[
                { val: 3, pre: "×", label: "fewer tokens" },
                { val: 2.8, pre: "×", label: "faster", dec: 1 },
                { val: 100, pre: "", suf: "%", label: "on-brand, take 1" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ color: "var(--orange)", fontSize: "1.5rem", fontWeight: 800 }}>
                    <AnimatedCounter target={s.val} prefix={s.pre} suffix={s.suf ?? ""} decimals={s.dec ?? 0} duration={1500} />
                  </p>
                  <p style={{ fontSize: "0.65rem", color: "var(--muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Right: bar chart */}
        <AnimateIn delay={300}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "2rem",
              }}
            >
              Comparison
            </p>

            {/* Tokens */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#C8C8C8" }}>Tokens</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--muted)", width: "45px" }}>Prompt</span>
                  <div style={{ flex: 1 }}>
                    <AnimatedBar target={90} color="#555" delay={300} />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#888", width: "40px", textAlign: "right" }}>2700</span>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--muted)", width: "45px" }}>Skill</span>
                  <div style={{ flex: 1 }}>
                    <AnimatedBar target={30} color="var(--orange)" delay={500} />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "var(--orange)", width: "40px", textAlign: "right" }}>900</span>
                </div>
              </div>
            </div>

            {/* Time */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.8rem", color: "#C8C8C8" }}>Time, sec</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--muted)", width: "45px" }}>Prompt</span>
                  <div style={{ flex: 1 }}>
                    <AnimatedBar target={70} color="#555" delay={600} />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#888", width: "40px", textAlign: "right" }}>70s</span>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--muted)", width: "45px" }}>Skill</span>
                  <div style={{ flex: 1 }}>
                    <AnimatedBar target={25} color="var(--orange)" delay={800} />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "var(--orange)", width: "40px", textAlign: "right" }}>25s</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "#555" }} />
                <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>Prompt</span>
              </div>
              <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "var(--orange)" }} />
                <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>Skill</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
