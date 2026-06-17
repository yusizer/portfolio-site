/* ============================================================
   Portfolio — data + interactions
   Add a project = add an object to PROJECTS. That's it.
   ============================================================ */

// ---- Services ----
const SERVICES = [
  {
    icon: "🤖",
    title: "Telegram bots",
    outcome: "Capture leads, book appointments, answer FAQs — automatically, 24/7.",
    points: [
      "Lead-gen & qualification flows",
      "Booking + reminders with calendar sync",
      "AI replies (GPT/Claude) with human handoff",
      "Catalog, cart & payments in-chat",
    ],
    time: "5–7 days to MVP · from $350",
  },
  {
    icon: "📊",
    title: "Admin dashboards",
    outcome: "See stats, manage users, export data — without touching code.",
    points: [
      "FastAPI + clean web admin panel",
      "Stats dashboards & lead management",
      "Role login, CSV export, filters",
      "Mobile-friendly, deployable anywhere",
    ],
    time: "1–2 weeks · from $300",
  },
  {
    icon: "🕸️",
    title: "Scraping & automation",
    outcome: "Fresh data in your inbox every morning, hands-off.",
    points: [
      "Price/competitor/product scraping",
      "n8n workflows: form → Sheets → email → Telegram",
      "Scheduled jobs + data pipelines",
      "Export to Excel / Sheets / API",
    ],
    time: "3–10 days · from $250",
  },
];

// ---- Projects (case-study teasers) ----
// status: "live" | "wip". demo: URL or null. caseStudy: page URL or null.
const PROJECTS = [
  {
    emoji: "🤖",
    title: "Telegram Lead Bot + Admin Panel",
    metric: { num: "30 sec", label: "first response vs 4 hours manual" },
    blurb:
      "aiogram 3 bot collects leads via a step-by-step dialog; a FastAPI admin panel shows a live stats dashboard and lead management. Single Docker container, deployed and ready.",
    tags: ["Python", "aiogram 3", "FastAPI", "SQLite", "Docker"],
    github: "https://github.com/yusizer/telegram-lead-bot-admin",
    demo: null, // ← paste Railway/Oracle public URL once deployed
    caseStudy: "projects/telegram-lead-bot-admin.html",
    status: "live",
  },
  {
    emoji: "🔐",
    title: "FastAPI REST API (JWT + CRUD)",
    metric: { num: "5,000/min", label: "requests handled without slowing your app" },
    blurb:
      "JWT auth, full CRUD, PostgreSQL, Docker. Auto-generated Swagger UI as the live demo so any client can poke the endpoints in 10 seconds.",
    tags: ["FastAPI", "PostgreSQL", "JWT", "Docker", "Pytest"],
    github: "https://github.com/yusizer/fastapi-jwt-crud",
    demo: null,
    caseStudy: null,
    status: "wip",
  },
  {
    emoji: "🕸️",
    title: "Web Scraper + Dashboard",
    metric: { num: "Every morning", label: "fresh competitor prices, zero manual work" },
    blurb:
      "Scrapes prices from any site, stores history, and shows a table + trends on a simple web frontend. Type a URL, get the data.",
    tags: ["BeautifulSoup", "FastAPI", "Scrapy", "Vercel"],
    github: "https://github.com/yusizer/web-scraper-dashboard",
    demo: null,
    caseStudy: null,
    status: "wip",
  },
  {
    emoji: "⚡",
    title: "n8n Automation Workflow",
    metric: { num: "8 hrs/wk", label: "of manual work eliminated" },
    blurb:
      "Form on a site → Google Sheets → email → Telegram post. Self-hosted n8n, with a recorded walkthrough as the demo.",
    tags: ["n8n", "Automation", "Google Sheets", "Railway"],
    github: "https://github.com/yusizer/n8n-lead-automation",
    demo: null,
    caseStudy: null,
    status: "wip",
  },
  {
    emoji: "💬",
    title: "AI Support Chatbot (RAG)",
    metric: { num: "0 API key", label: "needed for the demo — GPT when a key is set" },
    blurb:
      "Retrieval (TF-IDF) over a FAQ knowledge base + optional GPT answers grounded in context. Runs in demo mode with no API key; graceful fallback + human handoff. Web chat UI + FAQ admin.",
    tags: ["FastAPI", "TF-IDF", "OpenAI", "RAG", "SQLite"],
    github: "https://github.com/yusizer/ai-support-chatbot",
    demo: null,
    caseStudy: null,
    status: "wip",
  },
  {
    emoji: "🌐",
    title: "Personal Portfolio Site",
    metric: { num: "24/7", label: "online, loads in under 3s" },
    blurb:
      "This site — a fast, static portfolio on Vercel's free tier. Never sleeps, auto-redeploys on every push, lists every project with live demo links.",
    tags: ["HTML", "CSS", "Vanilla JS", "Vercel"],
    github: "https://github.com/yusizer/portfolio-site",
    demo: "https://portfolio-site-jade-beta.vercel.app",
    caseStudy: null,
    status: "live",
  },
];

// ---- Process ----
const PROCESS = [
  { title: "Discovery call", text: "Free 20-min call. You explain the goal; I ask the right questions and confirm it's a fit." },
  { title: "Fixed scope + quote", text: "Within 48h you get a written scope, a fixed price, and a milestone schedule. No hourly surprises." },
  { title: "Build with demos", text: "Weekly progress demos + milestone sign-offs. You see it working long before delivery." },
  { title: "Launch + support", text: "Deployed to your server, documented, and 30 days of free bug fixes after handoff." },
];

// ---- Pricing (outcome-named, from $X, 2026 market-anchored) ----
const PACKAGES = [
  {
    name: "Lead Capture Bot",
    forWho: "Service businesses & agencies",
    price: "$350",
    priceNote: "from",
    time: "5–7 days",
    features: ["Multi-step qualification", "CRM / Airtable / Sheets sync", "Admin lead view + export", "Telegram lead notifications"],
  },
  {
    name: "Booking & Reminders",
    forWho: "Salons, clinics, consultants",
    price: "$400",
    priceNote: "from",
    time: "~1 week",
    features: ["Calendar slot sync", "Auto reminders (24h + 2h)", "Double-booking prevention", "Admin bookings panel"],
  },
  {
    name: "Shop & Payments",
    forWho: "E-commerce / D2C",
    price: "$600",
    priceNote: "from",
    time: "1–2 weeks",
    features: ["Product catalog + cart", "Stripe / Telegram Payments", "Order dashboard", "Order status notifications"],
    featured: true,
    flag: "Most requested",
  },
  {
    name: "AI Support Bot",
    forWho: "Repetitive FAQs at scale",
    price: "$750",
    priceNote: "from",
    time: "2–3 weeks",
    features: ["GPT / Claude integration", "Custom prompt + memory", "Human handoff fallback", "Conversation logging"],
  },
  {
    name: "Custom / Mini App",
    forWho: "Anything else",
    price: "Custom",
    priceNote: "quote",
    time: "3–6 weeks",
    features: ["Tailored automation or Mini App", "Architecture designed with you", "Full deployment + docs", "Priority support"],
  },
];

// ---- FAQ ----
const FAQ = [
  {
    q: "How much does a Telegram bot cost?",
    a: "Most business bots start at $350–$750 depending on features (lead capture, booking, payments, AI). You get a fixed quote before any work starts — no hourly surprises. See the packages above, or send me your idea for a same-day estimate.",
  },
  {
    q: "How long does it take?",
    a: "A standard lead-gen or booking bot ships in 5–7 days. E-commerce and AI bots take 1–3 weeks. You'll get a milestone schedule up front and progress updates throughout.",
  },
  {
    q: "Who hosts the bot and what does hosting cost?",
    a: "I deploy to your own VPS (DigitalOcean/Hetzner, ~$5–20/month) or a free-tier option where possible. Telegram's Bot API is free with no per-message fees, so your only ongoing cost is the server. I set everything up and hand you the keys.",
  },
  {
    q: "Do I own the code?",
    a: "Yes — 100%. You receive the full source code, deployment access, and documentation. No lock-in, no \"hosting hostage\" situation. If you ever want another developer to take over, you can.",
  },
  {
    q: "What about edits after launch?",
    a: "Every package includes 2 free revision rounds during the build and 30 days of free bug fixes after delivery. After that, small tweaks start at $50, and I offer monthly maintenance ($50–150/mo) if you want ongoing support.",
  },
  {
    q: "Is my customers' data private?",
    a: "Bots only receive what Telegram's API sends — message text, username, user ID, timestamp. I don't retain history longer than needed, nothing goes into model training, and the bot runs on your server under your control. For EU clients I follow GDPR (data access/deletion on request) and can add a privacy policy.",
  },
  {
    q: "I'm not technical — will I be able to manage it?",
    a: "Yes. Bots include a simple admin panel or a Google Sheet/Airtable backend so you can edit FAQs, view leads, and export data without touching code. I do a walkthrough call at handoff.",
  },
  {
    q: "What if I don't like the result?",
    a: "You approve milestones before moving on, and the deposit is refundable if the agreed scope isn't met. I'd rather lose a small job than leave you with something you can't use — my reputation as a new freelancer depends on it.",
  },
];

// ---- Render: services ----
function renderServices() {
  document.getElementById("services-grid").innerHTML = SERVICES.map((s) => `
    <article class="card service reveal">
      <div class="service__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p class="service__outcome">${s.outcome}</p>
      <ul>${s.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      <div class="service__time">${s.time}</div>
    </article>`).join("");
}

// ---- Render: projects ----
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = PROJECTS.map((p) => {
    const isLive = p.status === "live";
    const badge = isLive
      ? '<span class="badge badge--live">● Live</span>'
      : '<span class="badge badge--wip">In progress</span>';
    const github = p.github
      ? `<a class="link--accent" href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>`
      : `<a class="link--muted">Code soon</a>`;
    const demo = p.demo
      ? `<a class="link--accent" href="${p.demo}" target="_blank" rel="noopener">Live demo ↗</a>`
      : `<a class="link--muted">Demo soon</a>`;
    const study = p.caseStudy
      ? `<a class="link--accent" href="${p.caseStudy}">Read case study →</a>`
      : `<a class="link--muted">Case study soon</a>`;
    return `
      <article class="project-card reveal">
        <div class="project-card__top">
          <span class="project-card__emoji">${p.emoji}</span>
          ${badge}
        </div>
        <h3>${p.title}</h3>
        <div class="project-card__metric"><span class="num">${p.metric.num}</span> — ${p.metric.label}</div>
        <p>${p.blurb}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-card__links">${github}${demo}${study}</div>
      </article>`;
  }).join("");

  // dim-siblings hover effect
  grid.querySelectorAll(".project-card").forEach((c) => {
    c.addEventListener("mouseenter", () => grid.classList.add("has-hover"));
    c.addEventListener("mouseleave", () => grid.classList.remove("has-hover"));
  });
}

// ---- Render: process ----
function renderProcess() {
  document.getElementById("process-grid").innerHTML = PROCESS.map((p) => `
    <div class="step reveal"><h3>${p.title}</h3><p>${p.text}</p></div>`).join("");
}

// ---- Render: pricing ----
function renderPricing() {
  document.getElementById("price-grid").innerHTML = PACKAGES.map((p) => `
    <article class="price-card reveal ${p.featured ? "price-card--featured" : ""}">
      ${p.flag ? `<span class="price-card__flag">${p.flag}</span>` : ""}
      <h3>${p.name}</h3>
      <p class="price-card__for">${p.forWho}</p>
      <div class="price-card__price">${p.price} <small>${p.priceNote}</small></div>
      <div class="price-card__time">⏱ ${p.time}</div>
      <ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <a class="btn btn--ghost btn--sm" href="#contact" style="margin-top:auto;">Get a fixed quote</a>
    </article>`).join("");
}

// ---- Render: FAQ ----
function renderFAQ() {
  const list = document.getElementById("faq-list");
  list.innerHTML = FAQ.map((item, i) => `
    <div class="faq__item reveal" data-i="${i}">
      <button class="faq__q" type="button" aria-expanded="false">
        <span>${item.q}</span><span class="pm">+</span>
      </button>
      <div class="faq__a"><div class="faq__a-inner">${item.a}</div></div>
    </div>`).join("");

  list.querySelectorAll(".faq__item").forEach((item) => {
    const btn = item.querySelector(".faq__q");
    const ans = item.querySelector(".faq__a");
    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0";
    });
  });
}

// ---- Scroll-spy nav ----
function initScrollSpy() {
  const links = document.querySelectorAll(".nav__links a[href^='#']");
  const sections = [...links]
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle(
          "active",
          l.getAttribute("href") === "#" + e.target.id
        ));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));
}

// ---- Reveal on scroll ----
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

// ---- Theme toggle ----
function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
  const sync = () => (btn.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙");
  sync();
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    sync();
  });
}

// ---- Contact form (Formspree AJAX, graceful fallback) ----
function initForm() {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-msg");
  const submit = document.getElementById("form-submit");
  // Replace with your Formspree form ID (see README). Until then, falls back to email.
  const FORMSPREE_ID = "your-form-id";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.className = "form__msg";
    msg.textContent = "";

    if (FORMSPREE_ID === "your-form-id") {
      // No Formspree configured — open the user's email client prefilled.
      const data = new FormData(form);
      const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business_type")}\nBudget: ${data.get("budget")}\n\nIdea:\n${data.get("idea")}`;
      window.location.href = `mailto:yusifabdullayev48@gmail.com?subject=${encodeURIComponent("New bot inquiry")}&body=${encodeURIComponent(body)}`;
      msg.className = "form__msg ok";
      msg.textContent = "Opening your email app — or write directly to yusifabdullayev48@gmail.com";
      return;
    }

    submit.disabled = true;
    submit.textContent = "Sending…";
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        msg.className = "form__msg ok";
        msg.textContent = "Thanks! I'll reply within 24 hours.";
      } else {
        throw new Error("bad response");
      }
    } catch {
      msg.className = "form__msg err";
      msg.textContent = "Something went wrong — please email yusifabdullayev48@gmail.com directly.";
    } finally {
      submit.disabled = false;
      submit.textContent = "Send →";
    }
  });
}

// ---- Init ----
document.getElementById("year").textContent = new Date().getFullYear();
renderServices();
renderProjects();
renderProcess();
renderPricing();
renderFAQ();
initTheme();
initReveal();
initScrollSpy();
initForm();
