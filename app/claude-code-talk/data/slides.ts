export interface Slide {
  id: string;
  label: string;
  notes: string;
}

export const SLIDES_CC: Slide[] = [
  {
    id: "intro",
    label: "Intro",
    notes:
      "Boris, Technical Staff Lead at Anthropic, one of the creators of Claude Code. Open with the hand-raise hook — who has used Claude Code before. For those who haven't, the install command is a live install moment. Keep energy high, this is the room-engagement slide.",
  },
  {
    id: "what-is",
    label: "What Is It",
    notes:
      "Claude Code is a new category, not an autocomplete tool. Past generations of AI coding assistants failed because they only filled in a few lines. Claude Code creates whole functions, works across files, fixes multiple bugs at once. Key point: it integrates into existing workflows — any IDE, terminal-based, works identically over SSH. The goal isn't to force a new workflow on anyone.",
  },
  {
    id: "setup",
    label: "Setup",
    notes:
      "First-time setup: launch terminal, press Shift, no need for a dedicated workspace immediately. Mention the light mode command. Big announcement: GitHub app integration — Claude can access repos and solve issues directly. You can pre-configure allowed tools so you're not approving permissions every time. Voice input is also available — you can literally talk to Claude Code like a person.",
  },
  {
    id: "explore-first",
    label: "Explore First",
    notes:
      "This is Tip #1 and the most important workflow advice: don't start by editing code. Start with Q&A about the codebase — this is literally how Anthropic onboards new engineers. Used to take days to understand a codebase manually, now takes minutes. Reassure: code is never indexed, uploaded, or used for training — it stays local. Mention deep pattern search (beyond text search) and git history analysis — e.g. asking why a function has 15 weird arguments. Boris personally uses this every Monday for standup log reviews.",
  },
  {
    id: "planning",
    label: "Planning",
    notes:
      "Second major workflow: planning before coding. Common mistake — engineers tell Claude to implement a massive function directly, sometimes it works, sometimes it doesn't, and people get frustrated. Better approach: ask Claude to draft a plan first, review it, refine it, approve it, then implement. Claude can then autonomously handle commits, branches, and PRs matching your project's git history style.",
  },
  {
    id: "mcp",
    label: "MCP Servers",
    notes:
      "Power tools layer. Two ways to extend Claude: CLI tools (tell Claude what you use, it adopts them) and MCP servers (Model Context Protocol) for deeper integrations. Useful especially on a brand-new codebase. Mention concrete use cases: writing unit tests, Puppeteer screenshots, iOS simulator checks — Claude can repeat these without needing reminders. You can reset/manage everything via a config file or CLAUDE.md.",
  },
  {
    id: "claude-md",
    label: "CLAUDE.md",
    notes:
      "The most important context file. Put a CLAUDE.md in your project root. You can write it yourself or have Claude generate it. It should outline: which MCP servers to use, major architectural decisions, which files are critical, what patterns to follow or avoid. This reduces guesswork and token consumption dramatically. Anthropic keeps these files embedded in all their own repos.",
  },
  {
    id: "governance",
    label: "Governance",
    notes:
      "For teams and enterprises: global configs and corporate policies — NDAs, security constraints, blocked URLs — can be hardcoded so employees can't override them. This keeps the codebase secure within corporate infrastructure. You can share an mcp.json across the whole engineering team — when a new engineer clones the repo, Claude Code prompts them to initialize the right MCP servers automatically, giving instant access to the same test environments and tools.",
  },
  {
    id: "hotkeys",
    label: "Hotkeys",
    notes:
      "Quick reference for power users. Shift+key toggles auto-approve mode (useful for bulk unit test writing so you're not approving every file edit). # symbol corrects Claude when it misuses a tool — it remembers the feedback and can document it automatically. ! drops into local shell execution that Claude tracks and learns from. Space pauses operations. Double-space triggers a quick review or continues the session. R opens a view of exactly what's in Claude's current context window.",
  },
  {
    id: "sdk-parallel",
    label: "SDK & Parallel",
    notes:
      "The Claude Code SDK lets you interact with files via cloud automation — pass prompts with CLI commands, dictate exact output format like JSON, great for automated incident response or rapid repo processing. Then the power-user habit: parallelizing. Most advanced users at Anthropic don't run a single terminal tab — they run multiple concurrent SSH sessions, cloud tunnels, and parallel git worktrees simultaneously across several tabs.",
  },
  {
    id: "qa",
    label: "Q&A",
    notes:
      "Three highlight exchanges from the live Q&A. (1) Hardest implementation challenge: balancing safety with developer experience — building a multi-layered permission system so engineers aren't constantly approving every command. (2) Hidden multimodal features: Claude Code is fully multimodal in the terminal — you can drag-and-drop or paste images directly, e.g. handing over a UI screenshot or error screenshot for an automated fix. (3) Why CLI instead of an IDE extension: Anthropic engineers use wildly different editors (VS Code, Vim, Zed, Xcode, Emacs) — a terminal tool supports everyone equally, and staying IDE-agnostic keeps them adaptable as AI evolves. Bonus stat: roughly 80% of Anthropic's technical staff use Claude Code daily.",
  },
  {
    id: "summary-cc",
    label: "Summary",
    notes:
      "Close with the core takeaways: explore before you edit, plan before you code, give Claude deep context via CLAUDE.md, extend it with MCP servers, learn the hotkeys, and don't be afraid to parallelize your workflow across sessions. The single most repeated number from the talk: 80% of Anthropic's own engineers rely on this daily — this isn't a demo tool, it's their primary way of working.",
  },
];
