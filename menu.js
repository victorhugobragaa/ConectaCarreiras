(function () {
  const root = document.getElementById("site-menu");
  if (!root) return;

  const active = root.dataset.active || "dashboard";
  const auth = root.dataset.auth === "true";
  const profilePhoto = root.dataset.profilePhoto || "IMAGENS/FOTO_PERFIL.png";

  const icons = {
    dashboard:
      '<img src="https://img.icons8.com/material-sharp/24/888D96/dashboard-layout.png" alt="" aria-hidden="true">',
    vagas:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
    trilha:
      '<img src="https://img.icons8.com/material-rounded/24/888D96/journey.png" alt="" aria-hidden="true">',
    avaliacoes:
      '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8 6.8 19.5l1-5.8-4.2-4.1 5.8-.8L12 3.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="9" r="3" stroke="currentColor" stroke-width="2.4"/><path d="M6.8 19c1-3.1 3.3-4.7 5.2-4.7s4.2 1.6 5.2 4.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  };

  const menuItems = [
    ["dashboard", "Dashboard", "dashboard.html"],
    ["vagas", "Vagas", "vagas.html"],
    ["trilha", "Trilha", "trilha.html"],
    ["avaliacoes", "Avaliações", "avaliacoes.html"],
  ];

  const nav = menuItems
    .map(([key, label, href]) => {
      const activeClass = key === active ? " is-active" : "";
      return `<a class="site-menu__item${activeClass}" href="${href}">${icons[key]}${label}</a>`;
    })
    .join("");

  const actions = auth
    ? `<div class="site-menu__notify-wrap"><button type="button" class="site-menu__icon-button site-menu__notify-trigger" aria-label="Abrir notificações" aria-haspopup="true" aria-expanded="false">${icons.bell}<span class="site-menu__notify-dot" aria-hidden="true"></span></button><div class="site-menu__notification-menu" role="menu" aria-label="Notificações"><div class="site-menu__notification-head">Notificações</div><a class="site-menu__notification-item" href="vagas.html" role="menuitem"><span class="site-menu__notification-mark"></span><strong>Nova vaga ideal para você</strong><span>Estágio em Design de UI/UX na Simpress combina com seu perfil.</span><small>Agora há pouco</small></a><a class="site-menu__notification-item" href="vagas.html" role="menuitem"><span class="site-menu__notification-mark"></span><strong>Evolução de candidatura</strong><span>Sua candidatura avançou para triagem pelo RH.</span><small>Hoje</small></a><a class="site-menu__notification-item" href="vagas.html" role="menuitem"><span class="site-menu__notification-mark"></span><strong>Processo seletivo encerrado</strong><span>Uma vaga salva foi encerrada pela empresa.</span><small>Ontem</small></a></div></div><div class="site-menu__profile-wrap"><button type="button" class="site-menu__icon-button site-menu__profile-trigger" aria-label="Abrir menu do perfil" aria-haspopup="true" aria-expanded="false"><img class="site-menu__profile-photo" src="${profilePhoto}" alt="Perfil"></button><div class="site-menu__profile-menu" role="menu" aria-label="Menu do perfil"><a class="site-menu__profile-item" href="perfil.html" role="menuitem"><img width="20" height="20" src="https://img.icons8.com/ios/50/resume.png" alt="resume" /> Meu perfil</a><a class="site-menu__profile-item" href="#" role="menuitem"><img width="20" height="20" src="https://img.icons8.com/ios/50/settings--v1.png" alt="settings--v1" /> Configurações</a><a class="site-menu__profile-item" href="#" role="menuitem"><img width="20" height="20" src="https://img.icons8.com/ios/50/help--v1.png" alt="help--v1" /> Central de Ajuda</a><a class="site-menu__profile-item" href="login.html" role="menuitem"><img width="16" height="16" src="https://img.icons8.com/small/16/exit.png" alt="exit" /> Sair</a></div></div>`
    : '<a class="site-menu__login" href="login.html">Login</a>';

  root.innerHTML = `
    <header class="site-menu">
      <a class="site-menu__brand" href="#" aria-label="Conecta Carreiras">
        <img class="site-menu__brand-logo" src="IMAGENS/LOGO.png" alt="Conecta Carreiras">
      </a>
      <nav class="site-menu__nav" aria-label="Menu principal">${nav}</nav>
      <div class="site-menu__actions">${actions}</div>
    </header>
  `;

  const profileTrigger = root.querySelector(".site-menu__profile-trigger");
  const profileMenu = root.querySelector(".site-menu__profile-menu");
  const notifyTrigger = root.querySelector(".site-menu__notify-trigger");
  const notifyMenu = root.querySelector(".site-menu__notification-menu");

  const closeNotifications = () => {
    if (!notifyTrigger || !notifyMenu) return;
    notifyMenu.classList.remove("is-open");
    notifyTrigger.setAttribute("aria-expanded", "false");
  };

  if (notifyTrigger && notifyMenu) {
    notifyTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      profileMenu?.classList.remove("is-open");
      profileTrigger?.setAttribute("aria-expanded", "false");
      const isOpen = notifyMenu.classList.toggle("is-open");
      notifyTrigger.setAttribute("aria-expanded", String(isOpen));
    });

    notifyMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeNotifications();
      }
    });
  }

  if (profileTrigger && profileMenu) {
    const closeMenu = () => {
      profileMenu.classList.remove("is-open");
      profileTrigger.setAttribute("aria-expanded", "false");
    };

    profileTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      closeNotifications();
      const isOpen = profileMenu.classList.toggle("is-open");
      profileTrigger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
      if (!root.contains(event.target)) {
        closeMenu();
        closeNotifications();
      }
    });

    profileMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });
  }
})();

