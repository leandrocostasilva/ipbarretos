import "./components/header.js";
import "./components/footer.js";

function measureChrome() {
  var header = document.querySelector("site-header");
  var footer = document.querySelector("site-footer");
  if (header) {
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }
  if (footer) {
    document.documentElement.style.setProperty("--footer-h", footer.offsetHeight + "px");
  }
}

function goToHash() {
  var id = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (!id) return;
  var target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView();
}

measureChrome();
requestAnimationFrame(function () {
  measureChrome();
  goToHash();
});

window.addEventListener("resize", measureChrome);
window.addEventListener("hashchange", goToHash);
