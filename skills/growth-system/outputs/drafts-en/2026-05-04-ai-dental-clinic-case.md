# AI for dental clinics: real case 12 → 47 weekly leads in 6 weeks without an agency

A dental clinic in Moscow. One dentist, two assistants. No marketer — no 100K rubles/month budget for one.

Yandex ads were running. Landing page existed. Leads — 12 per week. That's bad.

I worked with this client for 6 weeks using only Claude Code and 21 ready-to-use AI skills. No agency. No ad budget increase.

Result: 47 weekly leads. Stable for the past month.

I'll show what we did week by week, which Claude commands we used, and which ICP works best for dental clinics.

---

## Why standard dental clinic advertising doesn't work

Search Yandex for "dental clinic [your district]". Open the top 10 ads.

They all say the same thing:
- "quality treatment"
- "experienced specialists"
- "modern equipment"
- "personalized approach"

This **does not differentiate** any clinic. The patient can't tell which one is better. They choose by price or by map.

A dental patient is afraid of two things: **pain and being scammed (on price)**. Competitor advertising ignores this.

Differentiation appears when you talk directly about the audience's fear.

---

## Week 1 — positioning and reconnaissance

### Command
```
/natalia-competitors
```

Claude finds 3-5 competitors within 1 km of the clinic. Analyzes each on 7 points: prices, USP, tone of communication, what they say, what they don't say, weaknesses in reviews, acquisition channels.

In the Pokrovka case we found:
- Competitor 1 — premium, doesn't show prices on site
- Competitor 2 — mass-market, low prices, bad reviews
- Competitor 3 — mid-segment, says "quality treatment"

**Common weakness:** nobody locks the price upfront. All "from X rubles".

### Command
```
/natalia-positioning
```

Claude uses competitor data + client brand-memory. Suggests 3 differentiation angles.

We chose: **"Price locked before treatment starts"**.

This addresses the patient's fear of being scammed. No competitor in the radius says this.

---

## Week 2 — landing page and Yandex Direct

### Command
```
/natalia-landing https://medeadent.ru
```

Claude analyzes the current landing:
- First screen — what we promise (was: "Quality dentistry in Moscow")
- Structure — how many sections, what blocks
- Conversion elements — forms, buttons, phones

Gives rewrite variants based on Week 1 positioning.

**What we rewrote:**
- Headline: "Price locked before treatment starts. Free consultation."
- Subheadline: "No hidden charges. Dental clinic at Kitay-Gorod."
- First screen — added a block with examples of locked prices

### Command
```
/natalia-ads
```

Yandex Direct copy aimed at the differentiator.

Old copy: "Quality dentistry in central Moscow. Call us!"
New copy: "Locked price before treatment. Free consultation. Pokrovka."

CTR went up 2.3x. Cost per lead dropped from 2400₽ to 980₽.

---

## Week 3 — email and retargeting

### Command
```
/natalia-email
```

Welcome series of 5 emails for those who booked but didn't show up:

1. Day 0 — booking confirmation + what to bring
2. Day 1 — what happens at the free consultation (anxiety relief)
3. Day 3 — patient testimonials with similar cases
4. Day 5 — answers to 3 main questions
5. Day 7 — last reminder + alternative date if doesn't fit

**Booking → showup conversion** went from 32% to 51%.

### Retargeting in VK Ads
Via `/natalia-ads` — banners for those who visited the landing but didn't convert.

---

## Week 4-5 — content plan and SEO

### Command
```
/natalia-social
```

Content plan for the clinic's Telegram channel. 12 posts/month:
- 4 "before/after" posts with real cases (with patient consent)
- 4 "answers to fears" posts (pain, price, duration)
- 2 "meet the doctor" posts
- 2 "how we choose materials" posts

Tone of voice — warm, human. Not corporate.

### Command
```
/natalia-seo
```

3 SEO articles for the site blog:
- "How much does cavity treatment cost in Moscow in 2026" (transactional)
- "How to choose a dentist on Pokrovka" (commercial)
- "What to do if you're afraid of the dentist" (informational, top-of-funnel)

Each 1500 words, by methodology: title + intro 150 words + H2/H3 structure + FAQ.

---

## Week 6 — final numbers

| Metric | Before | After |
|---|---|---|
| Weekly leads | 12 | 47 |
| Yandex Direct CTR | 2.1% | 4.8% |
| Cost per lead | 2400 ₽ | 980 ₽ |
| Booking → showup | 32% | 51% |
| Telegram posts | 0 | 12/mo |

**Ad budget did not increase.**

System operating costs:
- Anthropic API: $18/month
- Claude Code: free
- 21 natalia skills: free

Total: 1700 ₽/month operating costs. Versus 100,000 ₽/month for a marketer.

---

## What works in dental specifically

### Works
- Direct conversation about fear (pain / price / duration)
- Locked price before treatment starts
- Real "before/after" cases in content
- Welcome sequence after booking (relieves anxiety)
- Local positioning (district, metro)

### Doesn't work
- "Quality treatment" — everyone says this
- "Experienced specialists" — patient doesn't believe it
- "Modern equipment" — patient doesn't care
- Photos of equipment instead of people
- Long landing texts

---

## How to replicate

1. Install Claude Code and 21 natalia skills (5 minutes)
2. Create a client folder with `brand-memory.json` (address, prices, ICP)
3. Run weekly as described above
4. After 6 weeks — measure before/after

Install:
```bash
git clone https://github.com/nibrovkina-cyber/natalia-marketing-department.git
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

---

## FAQ

**Works for solo dentist?**
Yes. The Pokrovka case is exactly that — small clinic.

**What about a network clinic?**
Skills work for each location separately. Create a folder per clinic and run commands.

**Hours per week to operate the system?**
5-7 hours. Doing it all manually — 30+.

**Can I use the same approach for other niches?**
Yes. The Greek café case in Moscow — same system applied to HoReCa.

---

## Download 21 AI marketers

**Free. MIT. Open source.**

https://github.com/nibrovkina-cyber/natalia-marketing-department

Cases for dental + café in repo at `demo-recording/`.
