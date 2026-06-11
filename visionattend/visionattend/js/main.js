// ============================================
// VisionAttend 4.0 — Shared JS Utilities
// ============================================

// Live clock
function startClock(selector = '#live-clock') {
  const el = document.querySelector(selector);
  if (!el) return;
  const days   = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  function tick() {
    const n = new Date();
    el.textContent = `${days[n.getDay()]} · ${n.getDate()} ${months[n.getMonth()]} ${n.getFullYear()} · ${n.toTimeString().slice(0,8)}`;
  }
  tick();
  setInterval(tick, 1000);
}

// Nav active highlight
function initNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    if (item.dataset.page === page) item.classList.add('active');
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// Alert dismiss
function initAlerts() {
  document.querySelectorAll('.alert-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.alert-banner')?.remove());
  });
}

// Dismiss toast
function showToast(msg, type = 'info', duration = 3000) {
  const colors = { info:'var(--cyan)', success:'var(--green)', warning:'var(--amber)', error:'var(--red)' };
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:24px;right:24px;z-index:9999;
    background:#0d1e35;border:1px solid ${colors[type]};
    border-radius:8px;padding:12px 18px;
    font-family:'JetBrains Mono',monospace;font-size:12px;
    color:${colors[type]};
    animation:fadeUp .3s ease;
    max-width:320px;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// Number counter animation
function animateCount(el, target, duration = 1200) {
  const start = 0;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  let startTime = null;
  requestAnimationFrame(step);
}

// Init all on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  startClock('#live-clock');
  initNav();
  initAlerts();
  // Animate stat numbers
  document.querySelectorAll('[data-count]').forEach(el => {
    animateCount(el, parseInt(el.dataset.count));
  });
});
