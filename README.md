# Claude Code Knowledge Base — Next.js Presentations

Two scroll-snap presentations built with **Next.js 15 + TypeScript + Tailwind CSS**, sharing one dark orange-on-black design system.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — a landing page links to both decks:

- **`/rules`** — 4 Rules of Anthropic Engineers (12 slides)
- **`/claude-code-talk`** — Claude Code, Boris's Talk (12 slides)

---

## Navigation

| Key | Action |
|-----|--------|
| `↓` / `→` / `PageDown` | Next slide |
| `↑` / `←` / `PageUp` | Previous slide |
| `N` | Toggle speaker notes |
| `Esc` | Close notes |

The **dot navigation** on the right side is clickable. The **orange progress bar** at the top tracks position. **"← All decks"** top-left returns to the landing page.

---

## Deck 01 — `/rules`

| # | ID | Title |
|---|-----|-------|
| 1 | `hook` | Anthropic engineers don't write prompts — they have 4 rules |
| 2 | `rule1` | Rule 1: Prompt skills, not Claude |
| 3 | `concept` | AI is the phone. Skills are apps. |
| 4 | `rule2` | Rule 2: A skill is three layers, not one prompt |
| 5 | `tools-detail` | Layer 3 — Tools: beautiful prompts, terrible tools |
| 6 | `rule3` | Rule 3: Compositional, not monolithic |
| 7 | `pattern` | Pattern: if it can be done with code — do it with code |
| 8 | `rule4` | Rule 4: Claude on day 30 vs day one |
| 9 | `lifehack` | Lifehack: one question after every session |
| 10 | `ab-test` | A/B: prompt (2700 tok, 70s) vs skill (900 tok, 25s) |
| 11 | `universal` | Works everywhere: Claude Code, ChatGPT, Gemini, Cursor… |
| 12 | `summary` | All 4 rules + call to action |

## Deck 02 — `/claude-code-talk`

| # | ID | Title |
|---|-----|-------|
| 1 | `intro` | Boris, creator of Claude Code — live install hook |
| 2 | `what-is` | A new type of AI assistant |
| 3 | `setup` | First steps: GitHub app, voice input, allowed tools |
| 4 | `explore-first` | Tip #1: explore the codebase before editing |
| 5 | `planning` | Plan first, code second — 4-step workflow |
| 6 | `mcp` | MCP servers and CLI tool integrations |
| 7 | `claude-md` | The CLAUDE.md context file |
| 8 | `governance` | Corporate policy + shared mcp.json for teams |
| 9 | `hotkeys` | Six terminal shortcuts reference |
| 10 | `sdk-parallel` | Claude Code SDK + parallel worktrees |
| 11 | `qa` | Three live Q&A highlights + 80% adoption stat |
| 12 | `summary-cc` | Recap + call to action |

---

## Speaker Notes

Press `N` on either deck to toggle the slide-up notes panel. Notes live in:
- `app/data/slides.ts` (Deck 01)
- `app/claude-code-talk/data/slides.ts` (Deck 02)

---

## Project Structure

```
anthropic-rules/
├── app/
│   ├── data/
│   │   └── slides.ts                  # Deck 01 metadata + notes
│   ├── rules/
│   │   └── page.tsx                   # Deck 01 orchestrator
│   ├── claude-code-talk/
│   │   ├── data/
│   │   │   └── slides.ts              # Deck 02 metadata + notes
│   │   └── page.tsx                   # Deck 02 orchestrator
│   ├── globals.css                    # Shared design tokens, animations
│   ├── layout.tsx                     # Root layout + metadata
│   └── page.tsx                       # Landing page — links to both decks
├── components/
│   ├── AnimateIn.tsx                  # IntersectionObserver fade-up wrapper
│   ├── AnimatedCounter.tsx            # Count-up number animation
│   ├── SlideNav.tsx                   # Fixed right-side dot navigation
│   ├── SpeakerNotes.tsx               # Slide-up notes panel
│   ├── slides/                        # Deck 01 slide components (12)
│   └── slides-cc/                     # Deck 02 slide components (12)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Design System (shared by both decks)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0D0D0D` | Page background |
| `--surface` | `#161616` | Elevated surfaces |
| `--card` | `#1E1E1E` | Cards |
| `--border` | `#2A2A2A` | Dividers |
| `--orange` | `#FF5C1A` | Accent, highlights |
| `--muted` | `#8A8A8A` | Secondary text |

Fonts: **Inter** (display + body) · **JetBrains Mono** (code, labels, eyebrows)

---

## Adding a Third Deck

1. Create `app/<deck-name>/data/slides.ts` with the same `Slide[]` shape
2. Create slide components in `components/slides-<deck-name>/`
3. Create `app/<deck-name>/page.tsx` — copy an existing orchestrator and swap the imports/IDs
4. Add an entry to the `DECKS` array in `app/page.tsx`

## Customizing

- **Edit speaker notes**: the relevant `data/slides.ts` → `notes` field per slide
- **Colors/fonts**: CSS variables in `app/globals.css` `:root` — shared across all decks

