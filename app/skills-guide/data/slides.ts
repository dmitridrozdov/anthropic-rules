export interface Slide {
  id: string;
  label: string;
  notes: string;
}

export const SLIDES_SKILLS: Slide[] = [
  {
    id: "sk-hook",
    label: "Hook",
    notes:
      "Open with a pain point everyone in the room has felt: you write a long prompt on Monday, Claude nails it, and by Friday you've lost it. The chat closed, the context is gone, and you're typing the same instructions again. Skills are the answer to that specific frustration. Don't define skills yet — just make the audience feel the problem first.",
  },
  {
    id: "sk-what",
    label: "What Is a Skill",
    notes:
      "The single most important mental model: a skill is a reusable 'app' built on top of Claude. The phone analogy from Boris's talk applies here: Claude is the phone, skills are the apps you install. Prompts are like dialing a number by hand each time. A skill stores that phone number, your greeting style, and your contact card — and dials it for you. Key: skills live in files on disk, not in chat history.",
  },
  {
    id: "sk-anatomy",
    label: "Anatomy",
    notes:
      "Walk through the folder structure carefully. ~/.claude/skills/<skill-name>/ is the container. SKILL.md is the brain — it has two mandatory sections: description (one paragraph, Claude reads this to decide whether to load the skill) and instructions (the actual step-by-step). tools/ holds scripts, templates, JSON files, anything deterministic. examples/ holds real input/output pairs that teach Claude your style. Emphasize that none of these are optional — each layer serves a distinct purpose.",
  },
  {
    id: "sk-description",
    label: "Description Layer",
    notes:
      "The description is the most misunderstood part. It's not a title or a label — it's Claude's decision function. Claude reads it and asks: 'does this skill apply to the current request?' If the description is vague ('helps with emails'), it won't trigger. If it's specific ('when the user asks to draft, write, or reply to a business email or client message'), it triggers correctly. Spend as much time on the description as on the instructions. Precision here is the whole game.",
  },
  {
    id: "sk-instructions",
    label: "Instructions Layer",
    notes:
      "Instructions are a numbered playbook. Not prose, not vibes — numbered steps with conditional logic. The key insight: Claude follows instructions like a junior engineer follows a runbook. Be explicit about sequence, about what to check, about what to do if something is missing. Include: what to read first, what to ask the user if context is missing, what format to output in, what to never do. This layer is what separates a skill that works once from one that works every time.",
  },
  {
    id: "sk-tools",
    label: "Tools Layer",
    notes:
      "Tools are the power layer that 90% of people skip. Any repeatable computation should be code, not AI generation. Claude generating a Python script every session costs ~3000 tokens and is unstable. The same script saved in tools/ costs 0 tokens to re-run. Concrete examples: a style-check.py that validates tone, a template.md your emails always start from, a signoffs.json with your preferred sign-offs per context, a contacts.json mapping clients to their communication preferences. If Claude does it more than twice, it should be in tools/.",
  },
  {
    id: "sk-examples",
    label: "Examples Layer",
    notes:
      "Few-shot examples are Claude's memory of your taste. The examples/ folder holds real input/output pairs — actual things you've sent before that you were happy with. This is how Claude learns your voice without you explaining it every time. Three examples is usually enough to establish a pattern. The quality matters more than quantity — pick examples that show edge cases, not just the easy case. Name them descriptively: ex-formal-complaint.txt, ex-friendly-followup.txt, ex-internal-update.txt.",
  },
  {
    id: "sk-first-skill",
    label: "Your First Skill",
    notes:
      "This is the practical demo slide. Walk through building a /draft-email skill from scratch in real time, or guide the audience through it on their own machines. The steps are: mkdir the folder, create SKILL.md with description + instructions, add one example from your own email history, test it by typing /draft-email in a new session. The goal is for everyone to leave with one working skill. Emphasize: imperfect is fine, you'll refine it after every session.",
  },
  {
    id: "sk-triggers",
    label: "Trigger Writing",
    notes:
      "Trigger wording is a craft. Show three patterns: command triggers (/verb-noun — /draft-email, /review-pr, /standup-summary), natural language triggers ('when the user wants to...'), and hybrid triggers that combine both. The anti-patterns: 'helps with X' (too vague), 'email tool' (sounds like a label not a condition), 'if the user mentions email' (missing the intent signal). The test: paste your description into a blank chat and ask Claude 'would you load this skill for: [request]?' — if it says yes when it should be no or vice versa, rewrite.",
  },
  {
    id: "sk-starter-skills",
    label: "10 Starter Skills",
    notes:
      "These are the ten skills that deliver the most value fastest for most knowledge workers. Encourage the audience to pick one from the list and build it today, right now. The /standup-summary skill is especially quick to build and immediately useful — Claude reads your git log and writes the standup message. The /code-review skill is high-leverage for developers. The /meeting-notes skill turns a rough transcript into a clean summary with action items. These aren't hypothetical — these are skills Anthropic engineers actually use.",
  },
  {
    id: "sk-vs-prompt",
    label: "Skill vs Prompt",
    notes:
      "This is the comparison slide that closes the deal for skeptics. Show a real prompt (200+ words) vs the equivalent skill trigger (3 words). Show the token counts. Show what gets lost when the chat closes with a prompt vs what persists with a skill. The key column: 'Still works on day 30?' — prompt: no. Skill: yes. And the examples column: 'Gets better over time?' — prompt: no. Skill: yes, as you add to examples/ and refine instructions.",
  },
  {
    id: "sk-composition",
    label: "Composition",
    notes:
      "Skills are most powerful when they work together. Claude can be an orchestrator that calls multiple skills in sequence — 'research this topic' → /research-topic → passes output to /draft-post → which passes to /review-tone. This is the compositional architecture from the 4 Rules talk applied specifically to skills. Beginner tip: build single-purpose skills first, then wire them together once each one works reliably. The composition is free — Claude figures it out from the descriptions.",
  },
  {
    id: "sk-maintenance",
    label: "Maintenance Loop",
    notes:
      "The one habit that separates skills that stay useful from skills that get abandoned: after every session where you used a skill, ask Claude the update question. Show the exact prompt: 'Review what we just did with this skill. What can be baked into SKILL.md or tools/ so I don't fix the same things manually next time?' Accept what's useful, reject the rest. Commit the skill file. This loop is how a skill goes from good on day 1 to great on day 30.",
  },
  {
    id: "sk-summary",
    label: "Summary",
    notes:
      "Close on action, not theory. The CTA is specific: build one skill today, the /draft-email or whichever felt most relevant to you. Run the update question after your first session with it. Come back to this deck in 30 days. The promise: Claude on day 30 will feel like a different tool — not because the model changed, but because your skills taught it your workflow. The parting frame: you're not a prompt writer. You're an app developer building on top of Claude.",
  },
];
