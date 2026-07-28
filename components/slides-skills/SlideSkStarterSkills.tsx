"use client";

import { AnimateIn } from "@/components/AnimateIn";

export function SlideSkStarterSkills() {
  const skills = [
    { cmd: "/draft-email", desc: "Reply to business emails in your voice", tag: "★ Start here" },
    { cmd: "/standup-summary", desc: "Read git log → write the standup message", tag: "★ Quick win" },
    { cmd: "/code-review", desc: "Review a PR for logic, style, and edge cases", tag: "Dev" },
    { cmd: "/meeting-notes", desc: "Turn rough transcript into clean summary + action items", tag: "Meetings" },
    { cmd: "/explain-error", desc: "Paste a stack trace → get a plain-English explanation", tag: "Dev" },
    { cmd: "/draft-pr-desc", desc: "Write a pull request description from the diff", tag: "Dev" },
    { cmd: "/linkedin-post", desc: "Turn a rough idea into a polished LinkedIn post", tag: "Content" },
    { cmd: "/refactor-fn", desc: "Refactor a function for clarity, with explanation", tag: "Dev" },
    { cmd: "/onboarding-doc", desc: "Generate a docs page from a codebase walkthrough", tag: "Docs" },
    { cmd: "/weekly-report", desc: "Summarize the week's work into a team update", tag: "Teams" },
  ];

  return (
    <section id="sk-starter-skills" className="slide" style={{ padding: "0 6vw" }}>
      <div
        className="glow-bg"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,92,26,0.1) 0%, transparent 70%)",
          top: "20%",
          right: "-5%",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
        <AnimateIn delay={0}>
          <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
            Starter Kit
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
            10 skills to steal.
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
            Build one today.
          </h2>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.6rem" }}>
          {skills.map((skill, i) => (
            <AnimateIn key={skill.cmd} delay={240 + i * 60}>
              <div
                className="rule-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.85rem 1.1rem",
                  borderColor:
                    skill.tag.startsWith("★") ? "rgba(255,92,26,0.4)" : "var(--border)",
                  background:
                    skill.tag.startsWith("★") ? "rgba(255,92,26,0.06)" : "var(--card)",
                }}
              >
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: skill.tag.startsWith("★") ? "var(--orange)" : "#7DD3FC",
                    flexShrink: 0,
                    minWidth: "170px",
                  }}
                >
                  {skill.cmd}
                </code>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.4, flex: 1 }}>
                  {skill.desc}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.08em",
                    color: skill.tag.startsWith("★") ? "var(--orange)" : "var(--muted)",
                    flexShrink: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {skill.tag}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
