(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!header || !toggle || !nav) return;

  function closeSubs() {
    nav.querySelectorAll(".nav-sub[open]").forEach(function (el) {
      el.removeAttribute("open");
    });
  }

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    closeSubs();
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    if (open) closeNav();
    else {
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });

  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) closeNav();
  });
})();
