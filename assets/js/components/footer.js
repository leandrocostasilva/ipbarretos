class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<footer class="contact" id="contato">' +
        '<div class="wrap">' +
          '<div class="contact-intro">' +
            "<h2>Desde 1924 servindo ao Senhor</h2>" +
            "<p>Acompanhe-nos e entre em contato por algum dos nossos canais</p>" +
          "</div>" +
          '<div class="channel-grid">' +
            '<a class="channel-card" href="https://wa.me/5517999990000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">' +
              '<img src="assets/img/contato-whatsapp.png" alt="">' +
            "</a>" +
            '<a class="channel-card" href="mailto:contato@ipbarretos.com.br" aria-label="E-mail">' +
              '<img src="assets/img/contato-email.png" alt="">' +
            "</a>" +
            '<a class="channel-card" href="https://www.instagram.com/ipbarretos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">' +
              '<img src="assets/img/contato-instagram.svg" alt="">' +
            "</a>" +
            '<a class="channel-card" href="https://www.youtube.com/@ipbarretos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">' +
              '<img src="assets/img/contato-youtube.svg" alt="">' +
            "</a>" +
          "</div>" +
          '<p class="site-end">Primeira Igreja Presbiteriana de Barretos · 2026</p>' +
        "</div>" +
      "</footer>";
  }
}

customElements.define("site-footer", SiteFooter);
