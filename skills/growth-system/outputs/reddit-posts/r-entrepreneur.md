# Reddit r/Entrepreneur submission

**Subreddit:** r/Entrepreneur
**Best post time:** Wednesday or Thursday, 14:00-16:00 ET
**Post type:** Text post (journey + numbers + lessons format)
**Tone:** founder-to-founder; transparent about pre-revenue; build-in-public framing

⚠️ r/Entrepreneur **loves transparent journey posts** with real numbers and honest reflections. Hates polish-only marketing posts. Lead with the founder story, not the product.

---

## Title (3 variants)

**A (recommended):**
```
Open-sourced 21 AI marketing agents instead of charging for them. Here's the bet (and the numbers so far).
```

**B:**
```
6 months building a marketing AI tool. Pre-revenue. Just open-sourced it. Walking through why.
```

**C:**
```
The build-in-public dilemma: why I gave away the IP I worked on for 6 months
```

A is best — concrete (21 agents, open-source), promises numbers, signals self-aware about strategy.

---

## Post body

```
Six months ago I started building a marketing AI tool. Yesterday I open-sourced 21 of the 22 components instead of charging for them. Walking through why and what I expect to happen next.

CONTEXT

I've been a marketer for 5+ years, mostly direct response copywriting for small businesses in Russia. The business pattern I kept seeing: small business owners who couldn't afford a marketer ($2,200/month locally) but desperately needed one. The hosted-marketer market is winner-take-all at the high end (big agencies own enterprise) and a wasteland at the low end (Fiverr-style content mills).

When Anthropic released Claude Skills in October 2025 (a markdown-based prompt-encapsulation pattern), I saw a way to industrialize what marketers do for one client and replicate it across many. Spent six months building 21 specialized "agents" — each one a Claude Skill that does one specific marketing task: positioning, copywriting, landing pages, email sequences, SEO, ads.

Methodology under the hood is Ogilvy / Schwartz / Hopkins — three direct response classics with 70+ years of testing. Not new. The new thing is encoding the methodology in a form that AI can apply consistently across thousands of clients without re-explaining.

THE PRE-REVENUE PROBLEM

I had three paths to monetize:

1. **Sell the SKILL.md files directly** — $50-200 per skill, $2K-4K for the bundle. Plausible. But marketers who'd buy them already know the methodology, so they wouldn't need them. Marketers who don't know the methodology can't evaluate whether the SKILL.md files are good. Adverse selection.

2. **Hosted SaaS only** — build a UI, charge $50-200/mo subscription, keep the prompts proprietary. Standard playbook. Problem: I have no audience. Without an audience, no signups. Without signups, no usage data to improve the product. Six-month chicken-and-egg.

3. **Open-source the prompts, charge for the convenience layer** — give away the SKILL.md files (the IP), charge for the hosted UI that wraps them with brand-memory storage, team mode, no API key required. Vercel / Supabase / PostHog playbook.

I picked #3 yesterday. The skills are now MIT-licensed at github.com/nibrovkina-cyber/natalia-marketing-department. The hosted version with the UI launches this summer at natashabrovkina.com.

THE BET

Open-source as distribution. Each skill is a marketing channel I didn't have to pay for:

- Someone searches "claude skills marketing" → finds the repo
- Someone reads a Telegraph article I publish from one of the skills → links back to the repo
- Someone forks the repo for a different niche (B2B SaaS, legal, fitness) → adds a marketing channel I didn't have

The hosted product becomes the convenience layer for people who don't want to install Claude Code locally. They pay because installing locally + managing API keys + maintaining brand-memory across sessions is tedious. The hosted version gives them a UI where they sign in, drop in a brand book, and run the same skills they could run locally — but without the operations work.

CURRENT STATE (TRANSPARENT NUMBERS)

- GitHub stars: small (mostly friends, organic just starting)
- Hosted waitlist: 0 paying customers (UI not launched)
- Real client work: 3 (one paid case study, two pro bono showcase)
- Real outcomes verified: dental clinic 12 → 47 weekly leads in 6 weeks; marketing agency +58% conversion in 60 days; Greek café content production 20h/week → 4h/week
- Operating cost: ~$50/month (Anthropic API + domain + Vercel free tier)
- Revenue: $0

I'm not pretending this is a success story. It's an in-progress build-in-public bet that distribution and trust will compound faster than a closed model. We'll see in 6 months.

WHAT I'M LEARNING

1. **Open-source is harder than it looks for solo founders.** Each commit is also a marketing artifact. Each issue is a customer-research interview. You can't "ship and move on" — every public action has compounding effects that need to be planned for.

2. **Methodology is the moat, not the prompts.** Anyone can copy a SKILL.md file. Almost no one can read Ogilvy's *Confessions of an Advertising Man*, Schwartz's *Breakthrough Advertising*, and Hopkins's *Scientific Advertising* and synthesize a coherent system. The skills are the implementation; the methodology is the unpaid R&D that took me 5 years.

3. **Audience-first changes everything.** I started thinking "build a tool, find users." Open-sourcing forced me to think "find users, build for them." The repo is now publishing weekly content (essays, case studies, video) that grows audience independent of product launches. The skills get used because there's an audience asking how to use them.

4. **Pre-revenue is uncomfortable but clarifying.** Without revenue, you can't lie to yourself about what's working. Every signal is honest: stars from real users, comments from real readers, forks from real builders. The metrics that don't matter (impressions, vanity follow-counts) become obvious noise.

QUESTIONS I'M ASKING MYSELF

- How long do I run pre-revenue before pivoting to paid-first? (My answer: 6 months from open-source date, then re-evaluate)
- Do I open-source the hosted version's UI too? (My current answer: no — the convenience layer is the moat for the paid tier)
- Do I take outside money? (Currently no — the unit economics work bootstrapped if hosted converts at standard SaaS rates)
- What if the hosted version flops? (The skills are still useful as a personal portfolio; the methodology essays grow my audience as a marketer; net negative outcome is still net positive over my baseline)

If you've open-sourced your work and have advice — I'm reading every comment.

If you're considering open-source vs closed for your own product — happy to walk through tradeoffs in your specific context.

Repo: github.com/nibrovkina-cyber/natalia-marketing-department
```

---

## Engagement strategy

r/Entrepreneur has long-form readers who write detailed comments. Reply with depth, not one-liners.

In the first 4 hours:
- Reply to every comment within an hour
- For "how does it work" questions, give 3-bullet specific answers
- For "have you considered X alternative monetization" → engage with their specific suggestion, don't dismiss
- For "this won't work because Y" → acknowledge the risk honestly, name what would have to be true for it to fail

What to avoid:
- Don't sound defensive about pre-revenue — that's the whole point of the post
- Don't link to the hosted website in body or replies — only the GitHub repo
- Don't post to r/Entrepreneur if the r/SmallBusiness post is still active (within 48 hours) — Reddit's cross-sub detector will flag it

If it goes well:
- Cross-post the same content (with adjusted framing) to r/SaaS or r/IndieHackers after 48 hours
- Save it as a "Show HN follow-up" once you submit there

If it goes poorly:
- Reflect on which parts of the framing didn't land
- The audience exists — sometimes the timing doesn't, that's not signal about the product
