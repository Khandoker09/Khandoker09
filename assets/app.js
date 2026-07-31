(() => {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) {
    document.body.insertAdjacentHTML("afterbegin", '<div class="data-error">The content file could not be loaded. Check content/site-data.js.</div>');
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const safeUrl = (url = "") => {
    const value = String(url).trim();
    if (!value) return "";
    return /^(https?:|mailto:|assets\/|#)/i.test(value) ? value : "";
  };

  const setText = (selector, value) => {
    $$(selector).forEach((element) => { element.textContent = value || ""; });
  };

  const p = data.profile;
  setText("[data-name]", p.name);
  setText("[data-short-name]", p.shortName);
  setText("[data-footer-name]", p.name);
  setText("[data-role]", p.role);
  setText("[data-headline]", p.headline);
  setText("[data-introduction]", p.introduction);
  setText("[data-affiliation]", p.affiliation);
  setText("[data-location]", p.location);
  setText("[data-availability]", p.availability);
  setText("[data-contact-intro]", `Based at ${p.affiliation}. ${p.availability}`);
  setText("[data-year]", new Date().getFullYear());

  const emailLink = $("[data-email-link]");
  if (emailLink && p.email) emailLink.href = `mailto:${p.email}`;

  const focusRoot = $("[data-research-focus]");
  focusRoot.innerHTML = data.researchFocus.map((item, index) => `
    <article class="focus-card">
      <span class="card-number">0${index + 1}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");

  const workRoot = $("[data-current-work]");
  workRoot.innerHTML = data.currentWork.map((item) => `
    <article class="work-item">
      <p class="work-area">${escapeHtml(item.area)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `).join("");

  const enabledCredentials = data.credentials.filter((item) => item.enabled);
  if (enabledCredentials.length) {
    const section = $("[data-credentials-section]");
    section.hidden = false;
    $("[data-credentials]").innerHTML = enabledCredentials.map((item) => {
      const url = safeUrl(item.verificationUrl);
      return `
        <article class="credential-card">
          <p class="credential-type">${escapeHtml(item.type)}</p>
          <h3>${escapeHtml(item.name)}</h3>
          <dl>
            ${item.issuer ? `<div><dt>Authority</dt><dd>${escapeHtml(item.issuer)}</dd></div>` : ""}
            ${item.scope ? `<div><dt>Scope</dt><dd>${escapeHtml(item.scope)}</dd></div>` : ""}
            ${item.issued ? `<div><dt>Issued</dt><dd>${escapeHtml(item.issued)}</dd></div>` : ""}
            ${item.validUntil ? `<div><dt>Valid until</dt><dd>${escapeHtml(item.validUntil)}</dd></div>` : ""}
            ${item.identifier ? `<div><dt>Identifier</dt><dd>${escapeHtml(item.identifier)}</dd></div>` : ""}
          </dl>
          ${item.note ? `<p class="credential-note">${escapeHtml(item.note)}</p>` : ""}
          ${url ? `<a href="${url}" target="_blank" rel="noreferrer">Verify credential <span aria-hidden="true">↗</span></a>` : ""}
        </article>
      `;
    }).join("");
  }

  const postersRoot = $("[data-posters]");
  postersRoot.innerHTML = data.posters.map((poster) => {
    const image = safeUrl(poster.image);
    const pdf = safeUrl(poster.pdf);
    const external = safeUrl(poster.external);
    return `
      <article class="poster-card">
        <a class="poster-image" href="${pdf || external || "#"}" target="_blank" rel="noreferrer" aria-label="Open poster: ${escapeHtml(poster.title)}">
          <img src="${image}" alt="Preview of poster titled ${escapeHtml(poster.title)}" loading="lazy" />
        </a>
        <div class="poster-content">
          <p class="poster-meta">${escapeHtml(poster.year)} · ${escapeHtml(poster.event)}</p>
          <h3>${escapeHtml(poster.title)}</h3>
          <p>${escapeHtml(poster.summary)}</p>
          <p class="authors">${escapeHtml(poster.authors)}</p>
          <div class="inline-links">
            ${pdf ? `<a href="${pdf}" target="_blank" rel="noreferrer">View PDF</a>` : ""}
            ${external ? `<a href="${external}" target="_blank" rel="noreferrer">Conference record</a>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");

  const contributionRoot = $("[data-conference-contributions]");
  contributionRoot.innerHTML = data.conferenceContributions.map((item) => {
    const url = safeUrl(item.url);
    return `
      <article class="contribution-item">
        <span>${escapeHtml(item.year)}</span>
        <div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.venue)}</p>
        </div>
        ${url ? `<a href="${url}" target="_blank" rel="noreferrer" aria-label="Open conference record">↗</a>` : ""}
      </article>
    `;
  }).join("");

  const publicationRoot = $("[data-publications]");
  publicationRoot.innerHTML = data.publications.map((item) => {
    const url = safeUrl(item.url);
    return `
      <article class="publication-item">
        <span>${escapeHtml(item.year)}</span>
        <div>
          <p class="publication-type">${escapeHtml(item.type)}</p>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.venue)}</p>
        </div>
        ${url ? `<a href="${url}" target="_blank" rel="noreferrer" aria-label="Open publication">↗</a>` : ""}
      </article>
    `;
  }).join("");

  const projectRoot = $("[data-projects]");
  projectRoot.innerHTML = data.projects.map((item) => {
    const url = safeUrl(item.url);
    const tags = item.technologies.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("");
    return `
      <article class="project-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <ul>${tags}</ul>
        ${url ? `<a href="${url}" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>` : ""}
      </article>
    `;
  }).join("");

  const educationRoot = $("[data-education]");
  educationRoot.innerHTML = data.education.map((item) => `
    <article class="timeline-item">
      <p>${escapeHtml(item.year)}</p>
      <div>
        <h3>${escapeHtml(item.degree)}</h3>
        <h4>${escapeHtml(item.institution)}</h4>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </article>
  `).join("");

  const skillsRoot = $("[data-skills]");
  skillsRoot.innerHTML = Object.entries(data.skills).map(([group, items]) => `
    <section class="skill-group">
      <h4>${escapeHtml(group)}</h4>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `).join("");

  const contactItems = [
    ["Email", p.email ? `mailto:${p.email}` : ""],
    ["Google Scholar", p.links.scholar],
    ["GitHub", p.links.github],
    ["LinkedIn", p.links.linkedin],
    ["ResearchGate", p.links.researchgate]
  ].filter(([, url]) => safeUrl(url));

  $("[data-contact-links]").innerHTML = contactItems.map(([label, url]) => `
    <a href="${safeUrl(url)}" ${url.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
      <span>${escapeHtml(label)}</span><span aria-hidden="true">↗</span>
    </a>
  `).join("");

  const menuButton = $("[data-menu-button]");
  const navigation = $("[data-navigation]");
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
  $$("a", navigation).forEach((link) => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  }));
})();
