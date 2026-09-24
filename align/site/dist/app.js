const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const header = document.querySelector('.header');
const mobile = matchMedia('(max-width: 700px)');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
  nav.classList.toggle('open', open);
}
header.classList.add('nav-ready');
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;
  const destination = new URL(link.href);
  setMenu(false);
  if (destination.pathname === location.pathname && destination.hash) {
    document.getElementById(destination.hash.slice(1))?.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
document.addEventListener('click', e => {
  if (!header.contains(e.target)) setMenu(false);
});
header.addEventListener('focusout', e => {
  if (!header.contains(e.relatedTarget)) setMenu(false);
});
mobile.addEventListener('change', () => {
  const focusWasInNav = nav.contains(document.activeElement);
  setMenu(false);
  if (mobile.matches && focusWasInNav) menu.focus();
  else if (!mobile.matches && document.activeElement === menu) nav.querySelector('a').focus();
});
nav.querySelectorAll('a').forEach(link => {
  if (new URL(link.href).pathname === location.pathname && !new URL(link.href).hash) {
    link.setAttribute('aria-current', 'page');
  }
});

// Section navigation follows the content in view, not a stale URL fragment.
const servicesSection = document.querySelector('#services');
if (servicesSection) {
  const servicesLinks = [...document.querySelectorAll('a[href="/#services"]')];
  let servicesActive = null;
  let servicesFrame = null;
  function updateServicesHighlight() {
    servicesFrame = null;
    const headerBottom = Math.max(0, header.getBoundingClientRect().bottom);
    const readingLine = headerBottom + (innerHeight - headerBottom) * 0.25;
    const bounds = servicesSection.getBoundingClientRect();
    const active = bounds.top <= readingLine && bounds.bottom > readingLine;
    if (active === servicesActive) return;
    servicesLinks.forEach(link => {
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    servicesActive = active;
  }
  function scheduleServicesHighlight() {
    if (servicesFrame === null) servicesFrame = requestAnimationFrame(updateServicesHighlight);
  }
  addEventListener('scroll', scheduleServicesHighlight, { passive: true });
  addEventListener('resize', scheduleServicesHighlight);
  addEventListener('hashchange', scheduleServicesHighlight);
  addEventListener('pageshow', scheduleServicesHighlight);
  updateServicesHighlight();
}

// Follow the stage nearest the reading position without intercepting touch scrolling.
const stageList = document.querySelector('.stage-list');
if (stageList) {
  const stages = [...stageList.children];
  const compactChart = matchMedia('(max-width: 1000px)');
  let currentStage = null;
  let frame = null;
  function updateStage() {
    frame = null;
    let nextStage = null;
    if (compactChart.matches) {
      const headerBottom = Math.max(0, header.getBoundingClientRect().bottom);
      const readingLine = headerBottom + (innerHeight - headerBottom) * 0.35;
      const distances = stages.map(stage => Math.abs(stage.getBoundingClientRect().top + 20 - readingLine));
      nextStage = stages[distances.indexOf(Math.min(...distances))];
    }
    if (nextStage === currentStage) return;
    currentStage?.removeAttribute('aria-current');
    nextStage?.setAttribute('aria-current', 'step');
    currentStage = nextStage;
  }
  function scheduleStageUpdate() {
    if (frame === null) frame = requestAnimationFrame(updateStage);
  }
  stageList.classList.add('scroll-tracked');
  addEventListener('scroll', scheduleStageUpdate, { passive: true });
  addEventListener('resize', scheduleStageUpdate);
  compactChart.addEventListener('change', scheduleStageUpdate);
  updateStage();
}


// A neutral follows the journey as the visitor reads the starting-point options.
const journey = document.querySelector('.pathways-art');
if (journey) {
  const route = journey.querySelector('.neutral-route');
  const dot = journey.querySelector('.pathways-dot');
  const section = journey.closest('.pathways');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const desktopJourney = matchMedia('(min-width: 701px)');
  const rows = [...section.querySelectorAll('nav > a')];
  const navy = [...journey.querySelectorAll('g[fill="#17324d"] circle')];
  const sage = [...journey.querySelectorAll('g[fill="#6f8f72"] circle')];
  const connections = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  connections.setAttribute('stroke', '#6f8f72');
  connections.setAttribute('stroke-width', '1.5');
  journey.insertBefore(connections, journey.firstChild);
  let journeyFrame = null;
  let geometryKey = "";
  let displayedY = null;
  let previousTime = 0;
  function updateJourney() {
    journeyFrame = null;
    if (!desktopJourney.matches) return;
    const bounds = section.querySelector('nav').getBoundingClientRect();
    const width = journey.getBoundingClientRect().width;
    if (!width) return;
    const scale = 240 / width;
    const height = bounds.height * scale;

    const centers = rows.map(row => {
      const rect = row.getBoundingClientRect();
      return (rect.top - bounds.top + rect.height / 2) * scale;
    });
    const nextKey = [width, height, ...centers].join(',');
    if (nextKey !== geometryKey) {
    geometryKey = nextKey;
    displayedY = null;
    journey.style.height = bounds.height + 'px';
    journey.setAttribute('viewBox', '0 0 240 ' + height);
    connections.replaceChildren();
    centers.forEach((y, i) => {
      const spread = [48, 66, 86][i];
      const offset = i === 1 ? 12 : 0;
      [[navy[i], 120 - spread, y - offset], [sage[i], 120 + spread, y + offset]].forEach(([circle, x, cy]) => {
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', '30');
      });
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      line.setAttribute('fill', 'none');
      line.setAttribute('d', i === 2
        ? 'M64 ' + y + ' H96 M144 ' + y + ' H176'
        : 'M' + (150 - spread) + ' ' + (y - offset) + ' L' + (90 + spread) + ' ' + (y + offset));
      if (i === 1) line.setAttribute('stroke-dasharray', '4 5');
      connections.append(line);
    });
    route.setAttribute('d', 'M120 ' + centers[0] + ' L120 ' + centers[2]);
    }
    const readingLine = innerHeight * 0.5;
    const y = reducedMotion.matches ? centers[0] : Math.max(centers[0], Math.min(centers[2], (readingLine - bounds.top) * scale));
    dot.setAttribute('cx', '120');
    const now = performance.now();
    const elapsed = Math.min(64, now - previousTime || 16);
    previousTime = now;
    displayedY = displayedY === null || reducedMotion.matches ? y : displayedY + (y - displayedY) * (1 - Math.exp(-elapsed / 85));
    if (Math.abs(y - displayedY) < 0.15) displayedY = y;
    dot.setAttribute('cy', displayedY);
    const active = centers.reduce((best, center, i) => Math.abs(center - displayedY) < Math.abs(centers[best] - displayedY) ? i : best, 0);
    rows.forEach((row, i) => row.classList.toggle('journey-active', i === active));
    if (displayedY !== y) scheduleJourney();
  }
  function scheduleJourney() {
    if (journeyFrame === null) journeyFrame = requestAnimationFrame(updateJourney);
  }
  addEventListener('scroll', scheduleJourney, { passive: true });
  addEventListener('resize', scheduleJourney);
  addEventListener('pageshow', scheduleJourney);
  reducedMotion.addEventListener('change', scheduleJourney);
  desktopJourney.addEventListener('change', scheduleJourney);
  new ResizeObserver(scheduleJourney).observe(section.querySelector('nav'));
  updateJourney();
}

// Reveal whole text blocks once, preserving selection and screen-reader order.
// Nothing is hidden in CSS: without JavaScript or with reduced motion, all copy is visible.
const quietMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const entranceObserver = new IntersectionObserver(entries => {
    const groups = new Map();
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entranceObserver.unobserve(entry.target);
      if (quietMotion.matches) return;
      const illustration = entry.target.matches('.board-art');
      const section = entry.target.closest('section');
      const order = groups.get(section) || 0;
      groups.set(section, order + 1);
      entry.target.animate([
        { transform: illustration ? 'translateY(16px) scale(.985)' : 'translateY(9px)', opacity: illustration ? .6 : .7 },
        { transform: 'translateY(0) scale(1)', opacity: 1 }
      ], {
        duration: illustration ? 900 : 520,
        delay: illustration ? 0 : Math.min(order * 55, 165),
        easing: 'cubic-bezier(.2,.7,.3,1)',
        fill: 'backwards'
      });
    });
  }, { threshold: .12, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('main h1, main h2, main h3, main p, main .eyebrow, main .board-art').forEach(element => entranceObserver.observe(element));
  quietMotion.addEventListener('change', () => {
    if (quietMotion.matches) document.getAnimations().forEach(animation => animation.cancel());
  });
}

// Scrub vector strokes with native scrolling. No pinning or scroll interception.
const scrollIllustrations = [...document.querySelectorAll('.scroll-art')].map(element => ({
  element,
  paths: [...element.querySelectorAll('[data-draw]')],
  markers: [...element.querySelectorAll('[data-reveal]')]
}));
if (scrollIllustrations.length) {
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let illustrationFrame = null;
  const clamp = value => Math.max(0, Math.min(1, value));
  function renderIllustrations() {
    illustrationFrame = null;
    scrollIllustrations.forEach(({ element, paths, markers }) => {
      const bounds = element.getBoundingClientRect();
      const progress = motionPreference.matches ? 1 : clamp((innerHeight * .92 - bounds.top) / (innerHeight * .55 + bounds.height * .3));
      paths.forEach(path => {
        path.style.strokeDasharray = '1';
        path.style.strokeDashoffset = String(1 - progress);
      });
      markers.forEach(marker => {
        marker.style.opacity = String(motionPreference.matches ? 1 : clamp((progress - Math.min(.92, Number(marker.dataset.reveal))) / .08));
      });
    });
  }
  function scheduleIllustrations() {
    if (illustrationFrame === null) illustrationFrame = requestAnimationFrame(renderIllustrations);
  }
  addEventListener('scroll', scheduleIllustrations, { passive: true });
  addEventListener('resize', scheduleIllustrations);
  addEventListener('pageshow', scheduleIllustrations);
  motionPreference.addEventListener('change', scheduleIllustrations);
  renderIllustrations();
}

