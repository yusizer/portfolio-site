// Shared across case-study pages: year + theme toggle + demo-link guard.
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (btn) {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
    var sync = function () {
      btn.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
    };
    sync();
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      sync();
    });
  }

  // Disable the "Open admin demo" button on pages where the URL isn't filled in yet.
  var demo = document.getElementById("demo-link");
  if (demo && demo.getAttribute("href") === "DEMO_URL") {
    demo.removeAttribute("href");
    demo.classList.remove("btn--primary");
    demo.classList.add("btn--ghost");
    demo.style.opacity = ".6";
    demo.style.pointerEvents = "none";
    demo.textContent = "Live demo coming soon";
  }
})();
