// ───────────────────────────────────────────────────────────────────────────
// Projects — add a new object here when a project is ready. That's it.
// status: "live" (has a working demo) | "wip" (in progress)
// demo: URL or null. If null, the button shows "Demo soon".
// ───────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    emoji: "🤖",
    title: "Telegram Lead Bot + Admin Panel",
    description:
      "aiogram 3 bot collects leads via a step-by-step dialog (FSM) and a FastAPI admin panel shows a stats dashboard and lead management. Single Docker container, deployable to Railway/Oracle.",
    tags: ["Python", "aiogram 3", "FastAPI", "SQLite", "Docker"],
    github: "https://github.com/yusizer/telegram-lead-bot-admin",
    demo: null, // ← paste the Railway/Oracle public URL here once deployed
    status: "live",
  },
  {
    emoji: "🔐",
    title: "FastAPI REST API (JWT + CRUD)",
    description:
      "Auth with JWT, full CRUD for posts, PostgreSQL, Docker. Auto-generated Swagger UI as the live demo.",
    tags: ["FastAPI", "PostgreSQL", "JWT", "Docker", "Pytest"],
    github: null,
    demo: null,
    status: "wip",
  },
  {
    emoji: "🕸️",
    title: "Web Scraper + Dashboard",
    description:
      "Scrapes prices from any site, stores them, and shows a table + history on a simple web frontend.",
    tags: ["BeautifulSoup", "FastAPI", "Scrapy", "Vercel"],
    github: null,
    demo: null,
    status: "wip",
  },
  {
    emoji: "⚡",
    title: "n8n Automation Workflow",
    description:
      "Form → Google Sheets → email → Telegram post. Self-hosted n8n, recorded demo walkthrough.",
    tags: ["n8n", "Automation", "Google Sheets", "Railway"],
    github: null,
    demo: null,
    status: "wip",
  },
  {
    emoji: "🌐",
    title: "Personal Portfolio Site",
    description:
      "This site — a fast, static portfolio deployed on Vercel. Always online, lists every project with live demo links.",
    tags: ["HTML", "CSS", "JS", "Vercel"],
    github: null, // ← add this repo's URL after pushing
    demo: null, // ← set to the Vercel domain after deploy
    status: "wip",
  },
];

const SKILLS = [
  "Python", "FastAPI", "aiogram 3", "Telegram bots", "SQLAlchemy",
  "PostgreSQL", "SQLite", "JWT auth", "Docker", "REST API",
  "Web scraping", "BeautifulSoup", "Scrapy", "n8n", "Automation",
  "Git", "Railway", "Vercel", "Linux / VPS",
];

function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map((p) => {
    const isLive = p.status === "live";
    const badge = isLive
      ? '<span class="badge badge--live">● Live</span>'
      : '<span class="badge badge--wip">In progress</span>';

    const githubLink = p.github
      ? `<a class="link--accent" href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>`
      : `<a class="muted">Code soon</a>`;

    const demoLink = p.demo
      ? `<a class="link--accent" href="${p.demo}" target="_blank" rel="noopener">Live demo ↗</a>`
      : `<a class="muted">Demo soon</a>`;

    return `
      <article class="card">
        <div class="card__top">
          <span class="card__emoji">${p.emoji}</span>
          ${badge}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="card__links">${githubLink}${demoLink}</div>
      </article>`;
  }).join("");
}

function renderSkills() {
  document.getElementById("skill-chips").innerHTML = SKILLS.map(
    (s) => `<span class="chip">${s}</span>`
  ).join("");
}

function renderStats() {
  document.getElementById("stat-projects").textContent = PROJECTS.length;
  document.getElementById("stat-live").textContent = PROJECTS.filter(
    (p) => p.status === "live"
  ).length;
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
renderSkills();
renderStats();
