import Link from "next/link";

const DECKS = [
   {
    href: "/claude-code-talk",
    eyebrow: "Deck 01",
    title: "Claude Code — Boris's Talk",
    desc: "Setup, workflows, MCP servers, CLAUDE.md, hotkeys, the SDK, and live Q&A from Anthropic's Technical Staff Lead.",
    slides: 12,
  },
  {
    href: "/skills-guide",
    eyebrow: "Deck 03",
    title: "Skills — Beginner's Guide",
    desc: "What skills are, why they matter, how to build your first one, anatomy of all four layers, 10 starter skills, and the maintenance loop.",
    slides: 14,
  },
  {
    href: "/rules",
    eyebrow: "Deck 03",
    title: "4 Rules of Anthropic Engineers",
    desc: "How Anthropic engineers actually work with Claude Code — skills, tools, composition, and the day-30 effect.",
    slides: 12,
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 6vw",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          filter: "blur(120px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <span className="eyebrow" style={{ marginBottom: "1.5rem", display: "flex" }}>
          Presentations
        </span>

        <h1
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
          }}
        >
          Claude Code <span style={{ color: "var(--orange)" }}>knowledge base.</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {DECKS.map((deck) => (
            <Link
              key={deck.href}
              href={deck.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="rule-card"
                style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "220px" }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--orange)",
                    }}
                  >
                    {deck.eyebrow}
                  </span>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      margin: "0.75rem 0 0.75rem",
                      color: "#fff",
                    }}
                  >
                    {deck.title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>
                    {deck.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {deck.slides} slides
                  </span>
                  <span style={{ color: "var(--orange)", fontSize: "1.1rem" }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
