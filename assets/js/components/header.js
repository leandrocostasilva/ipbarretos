function pageName() {
  var page = location.pathname.split("/").pop() || "index.html";
  return page === "" || page === "/" ? "index.html" : page;
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    var page = pageName();
    var onVideos = page === "videos.html" || page === "cultos.html" || page === "estudos.html";

    this.innerHTML =
      '<a class="skip-link" href="#conteudo">Ir para o conteúdo</a>' +
      '<header class="site-header">' +
        '<div class="wrap">' +
          '<a class="brand" href="index.html">' +
            '<img src="assets/img/logo.png" alt="Primeira Igreja Presbiteriana de Barretos">' +
          "</a>" +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu-principal">Menu</button>' +
          '<nav class="site-nav" id="menu-principal" aria-label="Principal">' +
            "<ul>" +
              '<li><a class="nav-link" href="index.html#a-igreja">A igreja</a></li>' +
              '<li><a class="nav-link" href="index.html#atividades">Atividades</a></li>' +
              "<li>" +
                '<details class="nav-sub"' + (onVideos ? ' data-current="true"' : "") + ">" +
                  "<summary>Vídeos</summary>" +
                  '<div class="nav-sub-panel">' +
                    '<a href="videos.html"' + (page === "videos.html" ? ' aria-current="page"' : "") + ">Todos</a>" +
                    '<a href="cultos.html"' + (page === "cultos.html" ? ' aria-current="page"' : "") + ">Cultos</a>" +
                    '<a href="estudos.html"' + (page === "estudos.html" ? ' aria-current="page"' : "") + ">Estudos</a>" +
                  "</div>" +
                "</details>" +
              "</li>" +
              '<li><a class="nav-link" href="#contato">Contato</a></li>' +
            "</ul>" +
          "</nav>" +
        "</div>" +
      "</header>";

    var header = this.querySelector(".site-header");
    var toggle = this.querySelector(".nav-toggle");
    var nav = this.querySelector(".site-nav");

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
      if (toggle.getAttribute("aria-expanded") === "true") closeNav();
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
  }
}

customElements.define("site-header", SiteHeader);
