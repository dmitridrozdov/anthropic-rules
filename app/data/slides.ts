export interface Slide {
  id: string;
  label: string;
  notes: string;
}

export const SLIDES: Slide[] = [
  {
    id: "hook",
    label: "Hook",
    notes:
      "Opening hook — grab attention immediately. Key stat: 90% of devs are doing it wrong. Don't start with definitions. The three metrics at bottom (×3 tokens, ×2.8 speed, 30-day degradation) are the proof points you'll return to. Let them land without explaining them yet.",
  },
  {
    id: "rule1",
    label: "Rule 1",
    notes:
      "Rule 1: Prompt the SKILL, not Claude. The paradigm shift here is from imperative (telling Claude what to do each time) to declarative (building a reusable skill). Emphasize: the prompt dies when the chat closes. The skill lives in a file. Claude picks the skill by its description field — exact wording matters more than a clever name.",
  },
  {
    id: "concept",
    label: "Concept",
    notes:
      "The phone analogy makes the abstraction concrete. Anthropic built the phone (layer 1 — the model). Most developers stop at layer 2 — manually typing instructions every session, like dialing a number by hand every time. Layer 3 (skills) is where Anthropic engineers actually operate — it's the app layer. Your job is to build apps, not re-dial.",
  },
  {
    id: "rule2",
    label: "Rule 2",
    notes:
      "Rule 2: A skill is three layers, not one prompt. Most people write Description + Instructions and think they're done. The real power is layer 3 — tools. Scripts, API wrappers, templates, file references — deterministic code instead of AI computation. Zero extra tokens to re-run a script. 90% of developers never get here.",
  },
  {
    id: "tools-detail",
    label: "Tools",
    notes:
      "Direct quote from Eric at Anthropic Engineering: people invest heavily in beautiful, detailed prompts and then build incredibly bare-bones tools — no documentation, parameters named A and B. Anthropic does the opposite: compact SKILL.md, heavy investment in tools/. This is why their skills can do things yours can't.",
  },
  {
    id: "rule3",
    label: "Rule 3",
    notes:
      "Rule 3: Compositional, not monolithic. A giant 'content-creation' skill that does everything becomes unmanageable by week 3. Break into 3–5 focused skills. When something breaks in a monolith, you don't know where. With focused skills: the bug is found instantly, improvements compound independently, you never rebuild from scratch.",
  },
  {
    id: "pattern",
    label: "Pattern",
    notes:
      "If the task can be done with code — do it with code. Story from Barry Zhang at Summit: they saved a Python script that reformatted slide styles to tools/. Before: Claude regenerated the same script each session (~3000 tokens, unstable). After: Claude just calls it. Zero tokens on the script itself. Stable, deterministic, fast.",
  },
  {
    id: "rule4",
    label: "Rule 4",
    notes:
      "Rule 4 is about compounding memory. Claude on day 30 with you should be dramatically better than Claude on day 1. This only happens if you bake learnings into the skill after each session. The skill accumulates your edge cases, voice, process. A prompt cannot do this — it resets every time.",
  },
  {
    id: "lifehack",
    label: "Lifehack",
    notes:
      "One question after every session: 'one-time fix or permanent skill update?' Thirty seconds of work. Paste the back-and-forth, ask Claude what can be baked in so you don't fix the same things manually next time. Accept what's useful, reject the noise. This is the compounding loop that creates the day-30 effect.",
  },
  {
    id: "ab-test",
    label: "A/B Test",
    notes:
      "Live A/B data from the PDF. Same task: write a client email response in my style. Prompt approach: 2700 tokens, 70 sec, inconsistent style. Skill (/draft-email): 900 tokens, 25 sec, correct style on first attempt. ×3 fewer tokens, ×2.8 faster, 100% on-brand from the first generation.",
  },
  {
    id: "universal",
    label: "Universal",
    notes:
      "These four rules apply everywhere there's a custom wrapper over the model. Claude Code (skills in .claude/skills/), ChatGPT (Custom GPTs), Gemini (Gems), Cursor/Windsurf (.cursorrules + agents), n8n/Make (workflow templates), Vercel AI SDK (tool calling + system prompts). The principle is universal: stop starting from zero every session.",
  },
  {
    id: "summary",
    label: "Summary",
    notes:
      "Close by naming all four rules cleanly. Reinforce the day-30 promise. Call to action: keep this schema in front of you for a month. The four rules: (1) Prompt skills, not Claude. (2) Build tools, not prompt folders. (3) Compositional, not monolithic. (4) Update every session. That's it. Go build.",
  },
];
