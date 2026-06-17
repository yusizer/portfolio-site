# Portfolio Site 🌐

Static personal portfolio — the always-on front door that lists every project
with links to GitHub and live demos. Deployed on **Vercel** (free, never sleeps).

> **Live:** _<добавь Vercel-домен после деплоя>_

## What's here

- `index.html` — single-page layout: hero, projects, skills, contact.
- `style.css` — styling (dark theme, responsive grid).
- `script.js` — **projects + skills live here as arrays**. Add a project = add
  one object to `PROJECTS`. Set `demo` to the public URL once a project is
  deployed; `status: "live"` flips its badge from "In progress" to "● Live".

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python -m http.server 5500
# → http://localhost:5500
```

## Deploy to Vercel (free, permanent)

1. Push this folder to a GitHub repo (e.g. `portfolio-site`).
2. On https://vercel.com → **Add New → Project → Import** the repo.
3. Framework preset: **Other** (plain static). No build command, no output dir.
4. **Deploy** → you get `portfolio-site.vercel.app`.
5. (Optional) **Settings → Domains** to add a custom domain.

Vercel's free tier never sleeps, so clients can visit anytime.

## Adding a finished project

Edit `script.js`:

```js
{
  emoji: "🤖",
  title: "Telegram Lead Bot + Admin Panel",
  description: "...",
  tags: ["Python", "FastAPI", ...],
  github: "https://github.com/yusizer/telegram-lead-bot-admin",
  demo: "https://your-railway-domain.up.railway.app",  // ← once deployed
  status: "live",
}
```

Commit + push → Vercel auto-redeploys.
