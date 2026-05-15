# Claude for marketing: 21 ready-to-use agents instead of one marketer

A full-time marketer in Moscow costs 100–200K RUB per month (~$1,100–$2,200). Marketing agencies start at 150K RUB. Most small businesses can't afford either.

I built 21 AI agents in Claude that do the work of a marketing department. Free, open-source, MIT license. Runs on Claude Code with Anthropic API ($5–30 per month depending on usage).

Skills are written using the methodology of Ogilvy, Schwartz, and Hopkins — the foundation of direct response copywriting that marketers have used for 70 years. Each agent does one narrow task: positioning, copywriting, lead magnets, landing pages, email, content, SEO, ads, competitor research.

A dental clinic in Moscow grew from 12 to 47 weekly leads in 6 weeks — without an agency, without a full-time marketer. A Greek café cut content production for their Telegram channel from 3 people to 1.

Below: what's inside the 21 agents, how to install in 5 minutes, and what results to expect in the first 4 weeks.

---

## What is Claude and why it specifically for marketing

### Claude vs ChatGPT for the Russian market

ChatGPT is a universal AI. Knows everything a bit. No methodology.

Claude from Anthropic is different: long context (you can feed entire Ogilvy books and a client's brand book), strict instruction-following, and most importantly — Claude Skills support.

A Claude Skill is a `SKILL.md` file with instructions. One skill = one task. Drop it in a folder — Claude sees it and applies it.

For marketing this matters: AI must follow methodology, not improvise. Claude follows.

### What is Claude Code

Claude Code is Anthropic's terminal client. Free. Runs on your machine, works with your files.

Unlike the web chat, Claude Code can:
- Read client folders locally
- Run skills by command
- Save brand-memory between sessions
- Create files (landing pages, slides, posts)

### How much does it cost

Claude Code itself — free.
The 21 agents — free (MIT license).

You pay only Anthropic API for tokens. Average usage for one client — $5-30 per month. One client brief — about $0.30. A full landing page with breakdown — $1-2.

For comparison: ChatGPT Plus subscription is $20/month flat.

---

## What's inside 21 agents

### Full list

| Agent | What it does |
|---|---|
| `/natalia-positioning` | Find positioning angle |
| `/natalia-copy` | Direct response copy |
| `/natalia-leadmagnet` | Lead magnets + full build |
| `/natalia-landing` | Landing audit + rewrite |
| `/natalia-email` | Welcome / nurture / launch |
| `/natalia-atomizer` | One post → 15 formats |
| `/natalia-social` | Telegram / VK content plan |
| `/natalia-ads` | VK Ads + Yandex Direct |
| `/natalia-seo` | SEO + GEO for AI search |
| `/natalia-competitors` | 7-point recon |
| `/natalia-funnel` | CJM, drop-off points |
| `/natalia-launch` | Launch playbook |
| `/natalia-brand` | Tone of voice |
| `/natalia-newsletter` | Content newsletter |
| `/natalia-webdesign` | HTML landing from description |
| `/natalia-proposal` | Proposals that get read |
| `/natalia-brand-voice` | Voice/tone foundation |
| `/natalia-design-system` | Design tokens + components |
| `/natalia-campaign-planner` | Full campaign from brief |
| `/natalia-carousel` | Social media carousels |
| `/natalia-motion` | HTML videos with animation |

Plus master skill `/natalia` — orchestrator that knows about all 21.

### Methodology of Ogilvy / Schwartz / Hopkins in every skill

**Ogilvy — headlines.** Proven: headlines get read 5x more than body text. Skill `/natalia-copy` always gives 3-5 headline variants, not one.

**Schwartz — 5 awareness levels.** Each text is written for a specific level. You don't confuse "cold" prospects with "hot" ones — conversion doubles.

**Hopkins — verifiable claims.** No "best solution" — only specific provable numbers. The skill blocks Claude's attempts to write "high-quality treatment" or "experienced specialists".

---

## How to install in 5 minutes

### Requirements
- Claude Code (free)
- Anthropic API key (console.anthropic.com)

### Step 1 — clone repo

```bash
git clone https://github.com/nibrovkina-cyber/natalia-marketing-department.git
cd natalia-marketing-department
```

### Step 2 — install skills

**macOS / Linux:**
```bash
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

**Windows (PowerShell):**
```powershell
$src = ".\skills\"
$dst = "$env:USERPROFILE\.claude\skills\"
New-Item -ItemType Directory -Force -Path $dst
Copy-Item -Path $src* -Destination $dst -Recurse -Force
```

### Step 3 — run in Claude Code

```
/natalia-positioning
```

In 15 minutes you get a strategic brief — positioning angle, target audience by Schwartz levels, three key messages.

---

## Real cases

### Dental clinic in Moscow

**Before:** 12 leads/week. Generic landing. Yandex ads with copy from competitors.

**Process (6 weeks):**
1. `/natalia-competitors` — found 3 competitors within 1 km. Their weakness: nobody locks prices upfront. All "from X rubles".
2. `/natalia-positioning` — differentiator: "Price locked before treatment starts."
3. `/natalia-landing` — rewrote first screen + pricing block.
4. `/natalia-ads` — Yandex Direct copy aimed at this differentiator.
5. `/natalia-email` — welcome sequence for booked patients.

**After:** 47 leads/week. No ad budget increase. No agency.

### Greek café in Moscow

Owner solo. Doing SMM himself, burning out. Was about to hire SMM person at 30K/month.

**Process:**
1. `/natalia-brand` — tone of voice (warm, homely, no corporate).
2. `/natalia-social` — monthly content plan VK + Telegram.
3. `/natalia-atomizer` — each long post → 5 short + 3 reels + 2 stories.

**Result:** 4 hours/week on content vs 20. Didn't hire SMM person. Saved 30K/month.

---

## What changes for the user

### Before (without natalia)
- Spends 3-4 hours on a brief for one client
- Re-explains methodology to ChatGPT every time
- Generic content, indistinguishable from 1000 others
- Marketing tasks wait weeks
- Doesn't know where to start with SEO/email/ads

### After (with natalia)
- Brief ready in 15-40 minutes
- Methodology (Schwartz / Ogilvy / Hopkins) baked into every skill
- Content in own tone of voice
- One person closes work of marketing department
- Concrete steps for each task

---

## What it doesn't do

❌ Doesn't write final text without your edit
❌ Doesn't run ads automatically
❌ Doesn't publish content
❌ Doesn't reply to clients
❌ Doesn't work without Anthropic API key

This is a **tool for a master**, not a "magic button".

---

## FAQ

**Cost of running Claude for marketing?**
$5-30/month on Anthropic API depending on usage. The 21 agents are free.

**Need to know coding?**
No. Install — 5 minutes. Run — one command. Not writing code.

**Can I use it from Russia?**
Yes. Anthropic API works in Russia via direct payment or international cards. Skills are local.

**How is it different from ChatGPT with custom prompts?**
ChatGPT — universal AI without methodology. natalia — 21 narrow agents on a specific direct response school (Schwartz/Ogilvy/Hopkins). Each does one task well.

**Who should NOT use this?**
Large agencies with 50+ people. Corporations with legal restrictions. People who want "one button" without editing. Tool for a master.

---

## Download and run

**21 AI marketers on GitHub. Free. MIT.**

https://github.com/nibrovkina-cyber/natalia-marketing-department

Install 5 minutes. First strategic brief — 15 minutes after start.
