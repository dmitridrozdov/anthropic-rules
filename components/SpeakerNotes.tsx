"use client";

interface SpeakerNotesProps {
  notes: string;
  isOpen: boolean;
  onToggle: () => void;
  slideLabel: string;
}

export function SpeakerNotes({ notes, isOpen, onToggle, slideLabel }: SpeakerNotesProps) {
  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        style={{
          position: "fixed",
          bottom: isOpen ? "calc(40vh + 1rem)" : "1.5rem",
          right: "4rem",
          zIndex: 300,
          background: isOpen ? "var(--orange)" : "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          color: isOpen ? "#fff" : "var(--muted)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          padding: "0.4rem 0.9rem",
          cursor: "pointer",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
        }}
        aria-label={isOpen ? "Hide speaker notes" : "Show speaker notes"}
      >
        {isOpen ? "Hide Notes" : "Speaker Notes"}
      </button>

      {/* Panel */}
      <div
        className={`notes-panel ${isOpen ? "open" : ""}`}
        role="complementary"
        aria-label="Speaker notes"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--orange)",
              }}
            >
              ◆ Speaker Notes
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--muted)",
              }}
            >
              — {slideLabel}
            </span>
          </div>
          <p
            style={{
              color: "#C8C8C8",
              fontSize: "0.9rem",
              lineHeight: "1.7",
              fontFamily: "var(--font-inter)",
            }}
          >
            {notes}
          </p>
        </div>
      </div>
    </>
  );
}
