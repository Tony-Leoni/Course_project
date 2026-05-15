# Reddit r/ClaudeAI submission

**Subreddit:** r/ClaudeAI
**Best post time:** Tuesday or Wednesday, 09:00-11:00 ET (US East morning, peak engagement)
**Post type:** Text post (not link — Reddit penalizes link-only posts as spam)

---

## Title (3 variants — pick A or B for r/ClaudeAI specifically)

**A (recommended for r/ClaudeAI):**
```
21 Claude Skills replacing a small-business marketing department (open-source, MIT)
```

**B:**
```
I built 21 Claude Skills for marketing — here's what's inside each one
```

**C (more controversial, higher engagement):**
```
Claude Skills are quietly killing the prompt-engineering industry. Here's how I built 21 of them
```

Title A is safest for r/ClaudeAI. Concrete number (21), license (MIT), specific use case (marketing). HN-friendly tone.

---

## Post body

```
Background: Anthropic released Claude Skills in October 2025 (the SKILL.md frontmatter pattern with auto-application based on description matching). I've spent the last six months building a marketing-specific skill set on top of it — 21 narrow agents plus a master orchestrator — and just open-sourced the whole thing.

Repo: https://github.com/nibrovkina-cyber/natalia-marketing-department

What's inside:

skills/
├── natalia/                       # master orchestrator (knows about all 21)
├── natalia-positioning/           # find positioning angle
├── natalia-copy/                  # direct response copywriting
├── natalia-leadmagnet/            # lead magnets + full builds
├── natalia-landing/               # landing audit + rewrite
├── natalia-email/                 # welcome / nurture / launch sequences
├── natalia-atomizer/              # 1 post → 15 formats
├── natalia-social/                # Telegram/VK content plans
├── natalia-ads/                   # VK Ads + Yandex Direct
├── natalia-seo/                   # SEO + GEO for AI search
├── natalia-competitors/           # 7-point competitor recon
├── natalia-funnel/                # CJM, drop-off points
├── natalia-launch/                # launch playbooks
├── natalia-brand/                 # tone of voice
├── natalia-newsletter/            # newsletter strategy
├── natalia-webdesign/             # HTML landing from description
├── natalia-proposal/              # B2B proposals
├── natalia-brand-voice/           # voice/tone foundation (loaded by others)
├── natalia-design-system/         # design tokens (loaded by others)
├── natalia-campaign-planner/      # full campaign from brief
├── natalia-carousel/              # social media carousels
└── natalia-motion/                # HTML video animations

Each skill is a single SKILL.md file with YAML frontmatter (name + description + version) and Markdown instructions. Claude reads description fields at session start and auto-applies the right skill based on user intent. Two of the skills (brand-voice, design-system) are foundations — they're loaded as context for any agent that emits HTML or branded content.

Methodology: Ogilvy / Schwartz / Hopkins (the three classics of direct response advertising). Each skill enforces specific rules — Schwartz awareness levels are classified before any output, Ogilvy demands 5 headline variants not 1, Hopkins forbids unverifiable adjectives ("high quality", "professional") and replaces them with concrete numbers.

Real cases verified:
• Dental clinic in Moscow: 12 → 47 weekly leads in 6 weeks (no agency)
• Marketing agency: +58% conversion in 60 days
• Greek café: content production from 20h/week to 4h/week

The thing I'm proudest of is a small design choice in each skill: every output emits a "why this output" block citing which methodology rule was applied and which awareness level was assumed. Adds tokens, slows responses, but turns the output from a black box into a teaching system. Pre-launch reviewers spent the most time on this and it stayed in.

Setup (5 min):
git clone https://github.com/nibrovkina-cyber/natalia-marketing-department.git
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/

Then in Claude Code: /natalia-positioning

Cost to run: $5-30/month on Anthropic API depending on usage. Skills themselves are free, MIT.

Pre-revenue, build-in-public. No paying customers on the hosted side yet (UI is launching this summer at natashabrovkina.com). Open-sourcing the skills because (a) audience-building before revenue is the path that makes sense for solo founders without ad budget, and (b) the bet is that distribution and trust matter more than IP — Vercel/Supabase/PostHog playbook.

Things I'd love feedback on from this sub specifically:
1. Skill granularity — 21 skills feels right for me but might be over-decomposed. Anyone designed similar skill systems and have data on the right level of granularity?
2. The "why this output" pattern — worth the token cost? Anyone built similar self-explaining LLM systems and tracked engagement?
3. Voice drift over long sessions — I have a /natalia-voice-trainer skill for anti-drift that re-anchors on real reference text every 5-10 outputs. Curious if anyone else has solved this.

Happy to answer setup questions and walk through any specific skill.

Repo: https://github.com/nibrovkina-cyber/natalia-marketing-department
```

---

## Pre-submission checklist

- [ ] Account has karma (r/ClaudeAI requires some history; new accounts get auto-flagged)
- [ ] No links in the first paragraph (Reddit moderation flags promo)
- [ ] Repo README is in English (verified — `docs/README.en.md` exists)
- [ ] LICENSE file present (verified)
- [ ] Issue templates present (verified)
- [ ] Recent commits visible (showing active maintenance)

## On the day of submission

- Submit at 09:00-11:00 ET on Tuesday or Wednesday
- After submission: do not ask friends to upvote — Reddit detects upvote rings
- Reply to every comment in the first 4 hours
- If a comment asks technical questions — point them to specific SKILL.md files in the repo
- If someone asks for a Showcase example — share Telegraph URLs of detailed case write-ups

## What to avoid

- Don't title with hyperbole ("This will blow your mind", "Game-changing")
- Don't mention paid tier in the body — Reddit treats this as advertising
- Don't link the hosted website (natashabrovkina.com) in the post — only link the GitHub repo
- Don't repost the same content to multiple subreddits within 48 hours (Reddit cross-post detector)
