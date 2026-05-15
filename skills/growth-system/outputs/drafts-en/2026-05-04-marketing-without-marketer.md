# How to do marketing without a marketer: step-by-step system for small business

A marketer in Russia costs 100-200K rubles per month. An agency — 150-500K. A small business doesn't have that money.

But marketing is needed. Without it — no leads, no growth, competitors win.

I worked as a marketer for five years. Then I saw 90% of tasks closed by AI agents on Claude. Built 21 ready-to-use skills in open-source — positioning, copywriting, landing, email, ads, SEO. Free, MIT.

In this article: a step-by-step system to close the work of a marketing department with one person + Claude. Real cases for dental and café. What to do in week 1 and what results to expect after a month.

---

## Why a 100K marketer is an outdated model

In the classic version, a marketer does:
- Strategy and positioning (once a year)
- Copywriting (constantly)
- SMM (constantly)
- SEO articles (per plan)
- Ads (setup + management)
- Email campaigns
- Competitor analysis

These are different skills. One person rarely does all of them well.

What changes with AI:
- Strategy → prompt + methodology (Schwartz/Ogilvy/Hopkins)
- Copywriting → skill `/natalia-copy` in 5 minutes vs 3 hours
- SMM → content plan + atomizer
- SEO → structure + draft in 1 hour vs a day
- Ads → ad copy in minutes
- Email → ready welcome sequence in an hour

A marketer becomes a system operator, not an executor.

---

## What you need to do marketing yourself

### Technical minimum
- Claude Code (free)
- Anthropic API key ($5-30/month)
- 5-10 hours per week

### Methodological minimum
Read in general terms:
- Schwartz "Breakthrough Advertising" — 5 awareness levels
- Ogilvy "Confessions of an Advertising Man" — headlines
- Hopkins "Scientific Advertising" — verifiable claims

You don't need to read fully. Knowing what's inside the methodology is enough — Claude applies it for you.

### File minimum
- Client folder with brand-memory (address, prices, ICP, what to say and what's forbidden)
- 21 Skills from natalia-marketing-department in `~/.claude/skills/`

---

## Week 1: where to start

### Day 1 — install and positioning (2 hours)

Install Claude Code. Clone repo:

```bash
git clone https://github.com/nibrovkina-cyber/natalia-marketing-department.git
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

Create a client folder with `brand-memory.json` — write address, prices, ICP, what to say and what's forbidden.

Run:
```
/natalia-positioning
```

In 15 minutes you get a strategic brief — positioning angle vs competitors, target audience by Schwartz levels, three key messages.

### Day 2 — competitor recon (1 hour)

```
/natalia-competitors
```

Claude finds 3-5 competitors in your niche, analyzes them on 7 points: positioning, prices, audience, weaknesses, strengths, content, conversion.

### Day 3 — landing (3 hours)

```
/natalia-landing https://your-current-site.com
```

Audit of the current page. Indicates what to rewrite. Gives rewrite variants based on Day 1 positioning.

### Day 4 — lead magnet (2 hours)

```
/natalia-leadmagnet
```

Claude suggests 3 lead magnet variants for your audience + full build of the chosen one (PDF / checklist / template).

### Day 5 — content plan (1 hour)

```
/natalia-social
```

Monthly content plan for Telegram and/or VK. With topics, formats, posting schedule.

### Day 6-7 — analysis and plan

You look at what got done. What works — keep. What doesn't — rework via the same skills.

---

## Real case: dental clinic on Pokrovka, Moscow

Network of two locations on Kitay-Gorod. One dentist, two assistants. No marketer.

**Before:** 12 leads/week. Templated landing. Yandex ads with copied competitor copy.

**6-week process:**
1. `/natalia-competitors` — found 3 competitors within 1 km. Their weakness: all say "quality treatment", nobody locks prices upfront
2. `/natalia-positioning` — differentiator: "price locked before treatment starts"
3. `/natalia-landing` — rewrote first screen and pricing block
4. `/natalia-ads` — Yandex Direct copy on this differentiator
5. `/natalia-email` — welcome sequence for booked patients

**After:** 47 leads/week. No ad budget increase. No agency.

---

## Real case: Greek café in Moscow

One owner. Doing SMM himself, burning out. Was about to hire SMM person at 30K/month.

**Process:**
1. `/natalia-brand` — tone of voice (warm, homely, no corporate)
2. `/natalia-social` — monthly content plan VK + Telegram
3. `/natalia-atomizer` — each long post → 5 short + 3 reels + 2 stories

**Result:** 4 hours/week on content vs 20. Didn't hire SMM person — saved 30K/month.

---

## What to do in the first month

### Week 1 — strategy
- Positioning
- Competitor recon
- Landing
- Lead magnet
- Content plan

### Week 2 — publication
- Launch the content plan
- Publish the rewritten landing
- Configure email via `/natalia-email`

### Week 3 — ads
- `/natalia-ads` for VK Ads / Yandex Direct
- A/B headline tests

### Week 4 — analysis
- `/natalia-funnel` — find drop-off points in funnel
- Adjust what doesn't work

---

## FAQ

**Can I do this without marketing education?**
Yes. Skills are written so they apply methodology for you. You only edit final texts in your voice.

**How many hours per week is realistic?**
5-10 hours. Doing it all manually — 30-40 hours.

**What if business is seasonal?**
Off-season — write SEO articles via `/natalia-seo`. In-season — ads and content.

**What about services, not products?**
All skills work for services. Dental, coaching, legal services — there are cases.

**When do I see results?**
First leads — 2-4 weeks. Stable flow — 6-8 weeks. Math of SEO + content marketing, not magic.

---

## Download 21 AI marketers

**Open source. MIT. Free.**

https://github.com/nibrovkina-cyber/natalia-marketing-department

Install 5 minutes. First client brief — 15 minutes. A 100K-per-month marketer — no longer needed.
