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

