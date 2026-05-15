# Email with AI: how to write a 5-email welcome sequence in 30 minutes

Email is the most underrated channel. Everyone says "nobody reads emails" — but that's because 99% of emails are written badly.

A good welcome sequence delivers 30-60% open rate in the first week and 5-15% click-through. That's far above the industry average.

I write email sequences via `/natalia-email` — one of 21 AI agents in the open-source natalia-marketing-department repo. Used to take 4-6 hours for a 5-email sequence. Now — 30 minutes.

In this article: how it works, what 5 emails are needed in a welcome sequence, and which Hopkins / Schwartz rules sit inside the skill.

---

## Why a welcome sequence matters more than other emails

When someone leaves an email on a landing — they're hot. After 24 hours the temperature drops. After a week — cold.

A welcome sequence catches that moment. The first email is opened by 50-70%. If you don't hook here — next emails get 5-10% open rate.

**Welcome sequence goals:**
1. Confirm expectation (the lead magnet promised)
2. Relieve anxiety ("I didn't waste my email")
3. Show value (one quick win)
4. Set rhythm (when to write next)
5. First soft pitch

5 emails — the minimum that covers all 5 goals.

---

## Structure of a 5-email welcome sequence

### Email 1 — Confirmation (sent 0 minutes after signup)

**Goal:** deliver the lead magnet, confirm expectation.

**Formula:**
- Subject: "[Lead magnet]: here's the link"
- Open: "Hey [name]. Here's [product]. Open whenever convenient."
- Body: link to lead magnet + 2 lines of context (what it is, how to use)
- CTA: open PDF / watch video

**Length:** 30-50 words. No welcome marathon.

**Why:** the person is waiting for the lead magnet. Give it. No "let me introduce myself, my name is..."

---

### Email 2 — Anxiety relief (24 hours later)

**Goal:** show you won't spam, explain what to expect.

**Formula:**
- Subject: "What I'll send (and won't)"
- Open: "Want to be straight with you — what to expect in this newsletter"
- Body:
  - What will be: 1 email per week / month, specific topics
  - What won't be: spam, course links, daily sales
  - Unsubscribe button in every email (showing you don't hold by force)
- CTA: nothing, or "reply with the topic that interests you"

**Length:** 100-200 words.

**Why:** trust isn't built in a day, but suspicion can be removed. With this email you say "I'm not like the others".

---

### Email 3 — One quick win (3 days later)

**Goal:** give specific value. Not promise, not "expert tips", but **do one action → get a result**.

**Formula:**
- Subject: "[Specific value in 5 minutes]"
- Open: "If you have [pain], here's what you can do right now"
- Body: step-by-step instructions (3-5 steps)
- Screenshot / example
- CTA: try it and reply how it went

**Example for marketing list:** "How to write a landing headline in 5 minutes by Ogilvy". 5 steps, example, done.

**Length:** 200-400 words. Action matters more than text.

**Why:** quick win = the first positive experience from your newsletter. The person remembers: "I get value from this author."

---

### Email 4 — Personal story (5 days later)

**Goal:** context, trust through vulnerability. Here you sell NOT the offer, but yourself as a person.

**Formula:**
- Subject: "How I failed at [specific situation]"
- Open: story with specific detail
- Body:
  - What went wrong
  - What I did
  - What I learned
  - Why it matters for the reader
- CTA: nothing or "had a similar experience?"

**Example:** "In my first year I sent template proposals to clients. Nobody read them. Story of how I rewrote them — and why conversion went up 4x."

**Length:** 400-800 words. Longer than others — it's a story, it needs space.

**Why:** quick win shows you're useful. Story shows you're a person. Without it you're "another expert".

---

### Email 5 — Soft pitch (7 days later)

**Goal:** show you have a paid offer. Don't push.

**Formula:**
- Subject: "If you want to work with me more closely"
- Open: "This week you got [what they got]. If you want more — here's what I have"
- Body:
  - Briefly describe the paid product (50-100 words)
  - Case-result
  - Price
  - Buy button
  - "If not a fit — we'll keep working through the newsletter"
- CTA: one buy button + link to FAQ

**Length:** 300-500 words. Soft, not aggressive.

**Why:** by the 5th email you delivered 4 values. Pitch on email 5 is a fair exchange. If you never pitch — you're charity.

---

## What Hopkins says about email

Hopkins in "Scientific Advertising": **"Every claim must be verifiable. No 'high quality', 'best'."**

Applied to email:

❌ "Get the best results"
✅ "Get open rate from 12% to 41% in 3 weeks"

❌ "Unique methodology"
✅ "Methodology by Ogilvy 1963, applied to VK Ads"

❌ "Simple instruction"
✅ "Instruction in 5 steps, average user does in 7 minutes"

Each paragraph in an email should contain either:
- Specific number
- Specific name (product / client / source)
- Specific time
- Specific example

If none of these — the paragraph can be deleted.

---

## What Schwartz says about email

5 awareness levels in an email sequence:

| Email | Level | Tone |
|---|---|---|
| 1 — Confirmation | Most Aware | Direct |
| 2 — What to expect | Product Aware | Educational |
| 3 — Quick win | Solution Aware | Practical |
| 4 — Story | Problem Aware | Emotional |
| 5 — Soft pitch | Most Aware (again) | Direct |

The sequence moves bottom-up through awareness levels and returns to Most Aware at the end. This gives two conversion peaks: on the first email (hot leads) and on the fifth (warmed up).

---

## How to automate via `/natalia-email`

In natalia-marketing-department there's a ready-made `/natalia-email` skill. It applies everything above.

**What I do:**

```
Run Claude Code → /natalia-email

Claude asks:
1. Who's the audience? (ICP)
2. What lead magnet did they download?
3. What paid product do you sell at the end?
4. Tone of voice?

I answer in 4 lines.

5-10 minutes later I get:
- 5 ready emails
- Subject lines (3 variants each)
- Open / body / CTA
- When to send
- A/B test suggestions
```

Then I edit for 30-60 minutes in my voice. Total 30-60 minutes vs 4-6 hours from scratch.

---

## Real case — dental clinic on Pokrovka

Welcome sequence for those who booked a free consultation but didn't show.

Old situation:
- Booked: 47/week
- Showed up: 32% (15 people)
- Rest forget / scared / find another

What we did via `/natalia-email`:

5 emails (day 0, 1, 3, 5, 7):

1. **Day 0:** "Booking confirmation + what to bring" (passport, insurance)
2. **Day 1:** "What happens at the free consultation" (relieving anxiety — "first we just look, won't do anything")
3. **Day 3:** "Patient testimonials with similar cases" (3 short reviews from those with the same issue)
4. **Day 5:** "Answers to 3 main questions" (will it hurt / how much / can I pay in installments)
5. **Day 7:** "Last reminder + alternative date if doesn't fit"

Booking → showup conversion went from 32% to 51%. No ads, no discounts. Just email.

---

## Email services in Russia

| Service | Price | When to use |
|---|---|---|
| **DashaMail** | 800₽/mo for 5K base | Best for SMB in Russia. Compliant with Russian PD law |
| **Sendsay** | 2900₽/mo | If you need complex segments and automated sequences |
| **Unisender** | from 1990₽/mo | Old, reliable, simple |
| **MailChimp** | $20/mo | Only with international card |
| **Resend** | $0-20/mo | For developers, via API |

For starters take **DashaMail** — Russian support, normal price, PD-152 compliant.

---

## FAQ

**How often to write after the welcome sequence?**
1 time per week. More often — unsubscribes. Less — they forget you.

**Can the welcome sequence be shorter than 5 emails?**
Yes. 3 minimum: confirmation + quick win + soft pitch. 5 is better because it adds trust.

**What if the email is empty — nobody subscribes?**
Lead magnet decides. Without lead magnet — they don't leave email. PDF, checklist, template — something specific.

**How many days after the start of the sequence to send a sales email?**
In welcome sequence — day 7. After the sequence — every 4th email in regular newsletter.

**Normal open rate?**
In welcome sequence — 30-60%. In regular newsletter — 15-25% good, 25-40% excellent.

---

## Download 21 AI agents including `/natalia-email`

**Open source. MIT. Free.**

https://github.com/nibrovkina-cyber/natalia-marketing-department

Welcome sequence of 5 emails — in 30-60 minutes vs 4-6 hours by hand.
