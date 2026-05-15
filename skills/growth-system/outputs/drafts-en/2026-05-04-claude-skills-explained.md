# Claude Skills explained: the Anthropic feature replacing prompt engineering

Anthropic launched Claude Skills in October 2025. Most people still don't get what they are.

I figured it out in a week and built 21 ready-to-use Skills for marketing. Open-source, MIT, free.

A Skill is a `SKILL.md` file with instructions. You drop it in the `~/.claude/skills/` folder. Claude sees it and applies it automatically.

One skill = one task. No need to copy prompts from Telegram channels. No need to re-explain context. You run a command — Claude knows what to do.

I'll show what's inside `SKILL.md`, how Claude automatically picks the right skill, and why this is killing the prompt-channel Patreon market.

---

## What Claude Skills are in plain words

A Skill is a **folder with one instruction file**. Inside: skill name, when to apply, what to do step by step.

Claude reads all skills in `~/.claude/skills/` at session start. When you write a command or a task — Claude picks the right skill and applies it.

Analogy: a programmer has libraries. You don't write sort from scratch — you install a library and call a function.

With Skills it's the same. You don't explain to Claude how to write conversion copy from scratch — you install `/natalia-copy` and call it.

---

## How Skills differ from regular prompts

| Property | Prompt from Telegram | Claude Skill |
|---|---|---|
| Where it lives | in chat, gets lost | in folder, persistent |
| Context | repeats every time | maintained |
| Run | copy-paste | command `/skill-name` |
| Updates | by hand | via `git pull` |
| Sharing | individual files | whole repo |
| Search | "where did I save it?" | automatic |

A prompt is a one-time recipe. A Skill is a dish on a restaurant menu.

---

## Inside SKILL.md structure

The minimal Skill looks like this:

```markdown
---
name: my-first-skill
description: What this skill does and when to apply
---

# Instruction

When the user asks for [task]:
1. Step one
2. Step two
3. Final output

## Rules
- What not to do
- What format to follow
```

`name` — short identifier.
`description` — the most important part. Claude reads it to decide when the skill fits.

If description is sharp — Claude applies the skill when needed. If vague — Claude gets confused or ignores it.

---

## How Claude automatically picks the right skill

When you write a command or task, Claude:

1. Reads the description of all Skills in the folder
2. Compares with your task
3. Picks the matching one
4. Applies the instruction

You can also explicitly invoke: `/natalia-copy` runs the copywriter immediately, no matching needed.

If you have 21 skills, like in natalia-marketing-department, the orchestrator `/natalia` knows about all 21 and picks the right one for the task. "Make me a launch plan" → runs `/natalia-launch`. "Rewrite the landing" → `/natalia-landing`.

---

## Where to get ready-made marketing Skills

I built **21 Skills for small business marketing**. Free, open-source, MIT.

Inside:
- `/natalia-positioning` — find positioning angle
- `/natalia-copy` — direct response copywriting
- `/natalia-leadmagnet` — lead magnets
- `/natalia-landing` — landing audit + rewrite
- `/natalia-email` — welcome / nurture sequences
- `/natalia-atomizer` — one post → 15 formats
- `/natalia-social` — content plan VK / Telegram
- `/natalia-ads` — VK Ads + Yandex Direct
- `/natalia-seo` — SEO + GEO for AI search
- `/natalia-competitors` — 7-point recon
- `/natalia-funnel` — CJM, drop-off points
- `/natalia-launch` — launch playbook
- `/natalia-brand` — tone of voice
- `/natalia-newsletter` — content newsletter
- `/natalia-webdesign` — HTML landing from description
- `/natalia-proposal` — proposals
- `/natalia-brand-voice` — voice/tone foundation
- `/natalia-design-system` — design tokens
- `/natalia-campaign-planner` — full campaign from brief
- `/natalia-carousel` — social media carousels
- `/natalia-motion` — HTML videos with animation

Plus master `/natalia` — orchestrator of all 21.

Install:
```bash
git clone https://github.com/nibrovkina-cyber/natalia-marketing-department.git
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

After 5 minutes you run `/natalia-positioning` and get a strategic brief.

---

## How to write your first Skill in 10 minutes

Step 1 — create folder:
```bash
mkdir -p ~/.claude/skills/my-first-skill
cd ~/.claude/skills/my-first-skill
```

Step 2 — create `SKILL.md`:
```markdown
---
name: my-first-skill
description: Helps write a Telegram post for an expert consultant. Apply when user asks "write a Telegram post"
---

# Instruction

When user asks for a Telegram post:

1. Ask the topic
2. Write hook in first line (question or specific fact)
3. 3-5 short paragraphs
4. CTA in last line
5. 2-3 hashtags

## Rules
- Paragraph 1-2 sentences max
- Use casual "you", not formal
- No emojis at start
- No fluff
```

Step 3 — open Claude Code and ask: "Write a Telegram post about morning rituals"

Claude automatically applies your skill.

---

## FAQ

**How do Claude Skills differ from ChatGPT custom GPTs?**
Custom GPTs — closed builder inside the OpenAI platform. Claude Skill — open `.md` file you edit by hand, version in git, share via GitHub.

**Can I use Skills for free?**
The Skills themselves — free. You only pay Anthropic API for tokens. $5-30 per month for average task volume.

**Where to download ready-made Skills?**
GitHub. For example, natalia-marketing-department — 21 marketing Skills. Search by tag `claude-skills` finds hundreds.

**Can I sell my own Skills?**
Yes. A Skill is your code. License as you wish. Many sell paid bundles on Gumroad.

**Do Skills work in Claude Code and Claude Desktop simultaneously?**
Yes. Folder `~/.claude/skills/` is shared between both clients. Install once — works everywhere.

---

## Download 21 ready-made Skills

**21 AI marketers on GitHub. Free. MIT.**

https://github.com/nibrovkina-cyber/natalia-marketing-department

Install in 5 minutes. First skill runs 6 minutes after start.
