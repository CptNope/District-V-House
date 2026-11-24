/* District V House — shared site script. Every block checks that its elements exist. */
(() => {
  const PHOTO = f => `../assets/photos/${f.replace(/%20/g, '-')}`;
  const SEASONS = {
    holiday: { name: 'Christmas 2026: the North Pole', panes: [
      ['Christmas%202026.jpeg', 'A room of white and gold Christmas trees and displays at District V House', 'Christmas 2026: the North Pole'],
      ['IMG_7144.jpeg', 'A doorway wrapped in red and green Christmas decorations at District V House', 'Room after room of Christmas'],
      ['IMG_5077.jpeg', 'Fresh greenery, flowers and red bows for the Wreath Bar at District V House', 'The Wreath Bar is back']]},
    winter: { name: 'Winter at House', panes: [
      ['ig_17860035543479994.jpg', 'District V House in the snow, with frosted trees by the front steps', 'Winter in Manchaug'],
      ['ig_18254721616138552.jpg', 'A red plaid sofa with pillows and throws among evergreen trees', 'Cozy, collected rooms'],
      ['ig_17952417656201515.jpg', 'An armchair on a layered rug beside a gallery wall', 'Antique &amp; vintage']]},
    garden: { name: 'Garden at House', panes: [
      ['IMG_9309.jpeg', 'A bright white room with paper lanterns and the HOUSE counter', 'Fresh finds every week'],
      ['IMG_6458.jpeg', 'Woven baskets, plants and vintage desks in a sunny room', 'Handmade &amp; artisan'],
      ['ig_18045139399402348.jpg', 'Shelves of plants, frames and home accents', 'Plants, art &amp; accents']]},
    harvest: { name: 'Harvest at House', panes: [
      ['IMG_5509.jpeg', 'A dining room with rattan chairs and a round wooden table', 'Furniture &amp; lighting'],
      ['ig_17853283607910728.jpg', 'A painted blue armoire beside a round table and a rocking horse', 'Collected, not catalogued'],
      ['ig_17920208909635230.jpg', 'A vintage dining table with antlers, chalkboards and old frames', 'Old &amp; new, side by side']]}
  };
  const root = document.documentElement;
  const $ = s => document.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Season: the window (home) repaints; other pages just take the colours ──
  const win = $('.window');
  const imgs = [...document.querySelectorAll('[data-slot]')];
  const caps = [...document.querySelectorAll('[data-cap]')];
  function paint(key){
    if (!imgs.length) return;
    SEASONS[key].panes.forEach(([f, alt, cap], i) => { imgs[i].src = PHOTO(f); imgs[i].alt = alt; caps[i].innerHTML = cap; });
    const n = $('#season-name'); if (n) n.textContent = SEASONS[key].name;
  }
  function restyle(key, animate){
    document.querySelectorAll('.swatch').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.season === key)));
    if (!animate || reduce || !win){ root.dataset.season = key; paint(key); return; }
    win.classList.add('dim');
    setTimeout(() => {
      root.dataset.season = key; paint(key);
      const done = () => win.classList.remove('dim');
      Promise.all(imgs.map(im => im.decode ? im.decode().catch(() => {}) : null)).then(() => setTimeout(done, 80));
      setTimeout(done, 1400);
    }, 520);
  }
  document.querySelectorAll('.swatch').forEach(b => b.addEventListener('click', () => {
    restyle(b.dataset.season, true);
    if (win && window.scrollY > win.offsetHeight * .6 && !reduce) win.scrollIntoView({ behavior: 'smooth' });
  }));

  // ── Small-screen menu ──
  const mb = $('#menu-btn'), mn = $('#mnav');
  if (mb && mn){
    const setMenu = open => { mn.hidden = !open; mb.setAttribute('aria-expanded', String(open)); };
    mb.addEventListener('click', () => setMenu(mn.hidden));
    mn.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mn.hidden){ setMenu(false); mb.focus(); } });
  }

  // ── Quick-action dock: hidden while the page's own directions buttons are in view ──
  const dock = $('#dock');
  if (dock && 'IntersectionObserver' in window){
    const watch = [...document.querySelectorAll('[data-dock-hide]')];
    const seen = new Map(watch.map(el => [el, false]));
    const io = new IntersectionObserver(es => {
      es.forEach(e => seen.set(e.target, e.target.matches('.btn') ? e.intersectionRatio > .95 : e.isIntersecting));
      dock.classList.toggle('show', ![...seen.values()].some(Boolean));
    }, { threshold: [0, .5, 1] });
    watch.forEach(el => io.observe(el));
    if (!watch.length) dock.classList.add('show');
    // keyboard focus never sits under the dock (WCAG 2.4.11)
    document.addEventListener('focusin', e => {
      if (dock.contains(e.target) || getComputedStyle(dock).display === 'none') return;
      const r = e.target.getBoundingClientRect(), top = innerHeight - dock.offsetHeight;
      if (r.bottom > top - 8) window.scrollBy({ top: r.bottom - top + 24, behavior: 'instant' });
    });
  }

  // ── Entrances: each section's parts rise in once (off for reduced motion; visible without JS) ──
  if (!reduce && 'IntersectionObserver' in window){
    root.classList.add('motion');
    const parts = document.querySelectorAll('main > section:not(.window):not(.page-hero) :is(h2, h3, p, blockquote, ul, ol, figure, .actions, .made-here, .swatches, .wreath, address, table, form, details)');
    const count = new WeakMap();
    parts.forEach(el => { const sec = el.closest('section'); const i = count.get(sec) || 0; count.set(sec, i + 1); el.classList.add('rise'); el.style.setProperty('--d', Math.min(i, 6) * 75 + 'ms'); });
    const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); rio.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    parts.forEach(el => rio.observe(el));
  }

  // ── Real time in Sutton, MA ──
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: 'numeric', month: 'numeric', year: 'numeric', hourCycle: 'h23' });
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map(x => [x.type, x.value]));
  const dayIdx = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[p.weekday];
  const hour = (+p.hour % 24) + (+p.minute) / 60, month = +p.month;
  const yr = $('#yr'); if (yr) yr.textContent = p.year;
  restyle(month >= 11 ? 'holiday' : month <= 3 ? 'winter' : month <= 7 ? 'garden' : 'harvest', false);

  const HOURS = { 4: [10, 17], 5: [10, 17], 6: [10, 17], 0: [11, 16] };
  const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const t12 = h => (h > 12 ? h - 12 : h) + (h >= 12 ? ' pm' : ' am');
  const today = HOURS[dayIdx];
  const open = today && hour >= today[0] && hour < today[1];
  let nextLabel = '';
  if (!open){
    for (let k = 0; k < 8; k++){
      const d = (dayIdx + k) % 7, h = HOURS[d];
      if (!h || (k === 0 && hour >= h[0])) continue;
      nextLabel = (k === 0 ? 'today' : k === 1 ? 'tomorrow' : DAY[d]) + ' at ' + t12(h[0]);
      break;
    }
  }
  const set = (sel, text) => { const el = $(sel); if (el) el.textContent = text; };
  const sign = $('#sign');
  if (sign){
    sign.dataset.state = open ? 'open' : 'closed';
    set('#sign-word', open ? 'Open' : 'Closed');
    set('#sign-sub', open ? 'until ' + t12(today[1]) : 'Opens ' + nextLabel);
    if (!reduce) requestAnimationFrame(() => sign.classList.add('swing'));
  }
  set('#today-hours', open ? 'Open now until ' + t12(today[1]) : 'Opens ' + nextLabel);
  set('#today-sub', 'Thursday–Saturday 10–5 · Sunday 11–4');
  document.querySelectorAll(`.hours tr[data-d="${dayIdx}"]`).forEach(r => r.classList.add('today'));

  // ── Contact form: no server, so it writes the email for the visitor ──
  const form = $('#contact-form');
  if (form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const f = new FormData(form);
      const email = String(f.get('email') || '').trim();
      const err = $('#contact-error');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        err.textContent = 'Please enter your email address so we can write back, for example name@example.com.';
        form.email.setAttribute('aria-invalid', 'true'); form.email.focus(); return;
      }
      err.textContent = ''; form.email.removeAttribute('aria-invalid');
      const body = `${f.get('message') || ''}\n\n${f.get('name') || ''}\n${email}`;
      location.href = 'mailto:districtvdesign@gmail.com?subject=' + encodeURIComponent('Message from the website') + '&body=' + encodeURIComponent(body);
      $('#contact-done').textContent = 'Your email app should open with the message ready to send. If it does not, write to districtvdesign@gmail.com.';
    });
  }
})();
