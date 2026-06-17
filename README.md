# Portfolio Site 🌐

A conversion-focused, trust-building portfolio for a freelance Python / Telegram-bot /
automation developer. Static (HTML + CSS + vanilla JS), deployed on **Vercel** —
free tier, never sleeps, so clients can visit any time.

> **Live:** https://portfolio-site-jade-beta.vercel.app

Built on research into what actually converts freelance clients in 2025–2026 (outcome-first
copy, case studies with metrics, fixed-price packages, a "how I work" section, security &
trust block, FAQ that kills objections, a contact form instead of a bare email).

## Structure

```
portfolio-site/
├── index.html                            # one-page: hero → services → work → process → pricing → FAQ → security → about → contact
├── projects/
│   └── telegram-lead-bot-admin.html      # case-study page (6-part: context → problem → solution → outcome → tradeoffs → CTA)
├── style.css                             # design system (light/dark, Space Grotesk + JetBrains Mono, Telegram-blue accent)
└── script.js                             # data arrays + interactions (scroll-spy, reveal, FAQ accordion, theme toggle, form)
```

## Run locally

```bash
python -m http.server 5500
# → http://localhost:5500
```

## Deploy to Vercel (free, permanent)

1. Push this folder to a GitHub repo (e.g. `portfolio-site`).
2. https://vercel.com → **Add New → Project → Import** the repo.
3. Framework preset: **Other** (plain static). No build command, no output dir.
4. **Deploy** → you get `portfolio-site.vercel.app`.
5. (Optional) **Settings → Domains** for a custom domain.

Vercel's free tier never sleeps → clients can visit any time.

## Before launch — 4 things to fill in

1. **Contact form (Formspree)** — `script.js` → `FORMSPREE_ID`.
   Create a free form at https://formspree.io, copy its ID (the `f/xxxxxxx` part),
   and replace `"your-form-id"`. Until then the form falls back to opening the user's
   email client prefilled, so it never looks broken.

2. **Project live-demo URLs** — `script.js` → `PROJECTS[].demo`.
   Set each project's `demo` to its deployed URL (Railway/Oracle/Vercel) once it's live.
   A project flips from "In progress" to "● Live" via `status: "live"`.

3. **Case-study demo link** — `projects/telegram-lead-bot-admin.html` → `DEMO_URL`
   (the "Open admin demo →" button). Replace with the Railway/Oracle public URL;
   it's auto-disabled until then.

4. **Availability line** — `index.html` hero badge:
   "Available — accepting 2 projects for July 2026". Update or remove if it goes stale
   (a stale availability signal is a trust killer).

## Adding a finished project

In `script.js`, add an object to `PROJECTS`:

```js
{
  emoji: "🤖",
  title: "Telegram Lead Bot + Admin Panel",
  metric: { num: "30 sec", label: "first response vs 4 hours manual" },
  blurb: "...",
  tags: ["Python", "aiogram 3", "FastAPI", "SQLite", "Docker"],
  github: "https://github.com/yusizer/telegram-lead-bot-admin",
  demo: "https://your-railway-domain.up.railway.app",  // ← once deployed
  caseStudy: "projects/telegram-lead-bot-admin.html",   // ← if you wrote a case study
  status: "live",
}
```

For a full case study, copy `projects/telegram-lead-bot-admin.html` as a template
and edit the 6 sections. Commit + push → Vercel auto-redeploys.

## Adding testimonials (when you have real ones)

The research is clear: anonymous or invented testimonials destroy trust. Don't add fake
ones. When a real client gives a review, add a small testimonials section — each with
**name, role, company, the specific problem, the outcome, and a LinkedIn link** as the
trust anchor. Fiverr reviews (with buyer usernames) are already third-party-verified and
make the strongest social proof.

## Design notes (why it looks this way)

- **One distinctive font pairing** (Space Grotesk + JetBrains Mono) — avoids the
  generic Inter/Roboto "AI slop" look.
- **One accent** (Telegram blue `#229ED9`) + light default with a dark toggle
  (business buyers trust clean light; devs appreciate dark).
- **Restraint + one or two subtle details**: staggered fade-up reveals, scroll-spy nav,
  hover dim-siblings on the project grid, count-up-ready stats. No constant motion.
- **Fast & responsive** — static, no framework, &lt;3s load; the portfolio's own speed
  is a trust signal.
