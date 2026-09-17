const profile = {
  name: "Daniil Kulbachnyi",
  initials: "DK",
  location: "Warsaw, Poland",
  education: {
    institution: "Polish-Japanese Academy of Information Technology",
    start: 2025,
    end: 2029,
    field: "Informatics / Computer Science",
  },
  organization: {
    name: "AI Quantum Tech",
    institution: "Polish-Japanese Academy of Information Technology",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/daniil-kulbachnyi-0463b6356/",
    followers: "750+",
    connections: "500+",
  },
  currently: [
    ["Location", "Warsaw, Poland"],
    ["Education", "Polish-Japanese Academy of Information Technology"],
    ["Period", "2025 — 2029"],
    ["Organization", "AI Quantum Tech"],
    ["Focus", "Software / AI / Automation"],
    ["Exploring", "Backend / Cloud / Architecture"],
  ],
  focus: [
    { number: "01", title: "Software engineering", items: ["Java", "Backend Development", "REST APIs", "Software Architecture"] },
    { number: "02", title: "AI & automation", items: ["Artificial Intelligence", "AI Agents", "Automation", "AI Infrastructure"] },
    { number: "03", title: "Systems", items: ["Spring Boot", "Microservices", "Application Security", "Distributed Systems"] },
    { number: "04", title: "Cloud & data", items: ["AWS", "Cloud Architecture", "SQL", "Analytics Engineering"] },
  ],
  technology: [
    { name: "Java", group: "Core", detail: "Backend programming / object-oriented systems" },
    { name: "Python", group: "Core", detail: "Automation / application development" },
    { name: "SQL", group: "Core", detail: "Relational data / structured querying" },
    { name: "Spring Boot", group: "Exploring", detail: "Java backend architecture" },
    { name: "FastAPI", group: "Exploring", detail: "Python API development" },
    { name: "AWS", group: "Exploring", detail: "Cloud infrastructure" },
    { name: "Microservices", group: "Exploring", detail: "Distributed application structure" },
    { name: "AI Agents", group: "Interests", detail: "Agentic workflows / automation" },
    { name: "Architecture", group: "Interests", detail: "How complete systems work" },
  ],
  learning: [
    { number: "01", title: "Complete Guide to Analytics Engineering", note: "Analytics Engineering", duration: "04:00" },
    { number: "02", title: "SQL for AI Projects", note: "Data Exploration → Impact", duration: "01:37" },
    { number: "03", title: "Build REST APIs with FastAPI", note: "REST API Development", duration: "01:11" },
  ],
  languages: [
    ["Ukrainian", "Native"],
    ["Russian", "Native"],
    ["English", "Advanced"],
    ["Polish", "Advanced"],
    ["Spanish", "Elementary"],
  ],
  radar: ["AI Infrastructure", "AWS", "Java", "Spring Boot", "Microservices", "Software Architecture", "Agentic AI", "Cloud Computing", "Backend", "Application Security", "FastAPI", "SQL", "Quantum Computing"],
  journey: [
    { year: "2023", title: "Sumy State University", text: "EU Trade Policy certification" },
    { year: "2025", title: "PJATK", text: "Beginning Informatics studies in Warsaw" },
    { year: "2026", title: "AI Quantum Tech", text: "AI / automation / emerging technologies" },
    { year: "2026", title: "AWS Summit Warsaw", text: "Cloud & AI exploration" },
    { year: "Now", title: "Software engineering", text: "AI / backend / cloud" },
  ],
};

const $ = (selector) => document.querySelector(selector);

function renderData() {
  $("#currently-list").innerHTML = profile.currently.map(([label, value]) => `
    <div class="data-row interactive-row"><span>${label}</span><strong>${value}</strong><span aria-hidden="true">↗</span></div>
  `).join("");

  $("#focus-list").innerHTML = profile.focus.map((item) => `
    <article class="focus-row reveal interactive-row">
      <span class="focus-number">${item.number}</span>
      <h3>${item.title}</h3>
      <p>${item.items.join("<br>")}</p>
      <span class="row-arrow" aria-hidden="true">↗</span>
    </article>
  `).join("");

  $("#tech-grid").innerHTML = profile.technology.map((item) => `
    <article class="tech-item reveal" tabindex="0">
      <span class="tech-group">${item.group}</span>
      <h3>${item.name}</h3>
      <p>${item.detail}</p>
    </article>
  `).join("");

  $("#learning-list").innerHTML = profile.learning.map((item) => `
    <article class="learning-row reveal interactive-row">
      <span>${item.number}</span>
      <div><h3>${item.title}</h3><p>${item.note}</p></div>
      <time>${item.duration}</time>
      <span class="row-arrow" aria-hidden="true">↗</span>
    </article>
  `).join("");

  $("#language-list").innerHTML = profile.languages.map(([language, level], index) => `
    <div class="language-row reveal interactive-row"><span>0${index + 1}</span><strong>${language}</strong><span>${level}</span></div>
  `).join("");

  const radarItems = [...profile.radar, ...profile.radar];
  $("#radar-track").innerHTML = radarItems.map((item) => `<span>${item}</span><i aria-hidden="true">✦</i>`).join("");

  $("#journey-list").innerHTML = profile.journey.map((item, index) => `
    <article class="journey-row reveal">
      <time>${item.year}</time>
      <div><h3>${item.title}</h3><p>${item.text}</p></div>
      <span>${String(index + 1).padStart(2, "0")}</span>
    </article>
  `).join("");
}

function updateWarsawTime() {
  const now = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Warsaw",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  $("#warsaw-time").textContent = now;
}

function initReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13, rootMargin: "0px 0px -5%" });
  revealItems.forEach((item) => observer.observe(item));
}

function initNavigation() {
  const navbar = $("#navbar");
  const button = $(".menu-button");
  const links = $("#nav-links");
  const syncScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
  syncScroll();
  window.addEventListener("scroll", syncScroll, { passive: true });
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("open", !open);
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    button.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  }));
}

function initCursor() {
  if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cursor = $(".cursor");
  document.addEventListener("mousemove", (event) => {
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    cursor.classList.add("active");
  }, { passive: true });
  document.querySelectorAll("a, button, [tabindex], .interactive-row").forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

renderData();
updateWarsawTime();
setInterval(updateWarsawTime, 30000);
initReveal();
initNavigation();
initCursor();
