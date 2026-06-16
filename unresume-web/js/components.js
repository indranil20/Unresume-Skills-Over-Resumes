/* Shared Navbar + Footer + Sidebar — injected on every page */

// ── Helpers ──────────────────────────────────────────────
function currentPage() { return location.pathname.split('/').pop() || 'index.html'; }
function isActive(href) { return currentPage() === href ? 'nav-active' : ''; }

// ── Navbar (public pages) ─────────────────────────────────
function renderNavbar() {
  const el = document.getElementById('navbar');
  if (!el) return;
  el.innerHTML = `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/unresume-logo.png" alt="Unresume" class="logo-img">
      </a>

      <div class="nav-links" id="navLinks">
        <a href="jobs.html" class="nav-link ${isActive('jobs.html')}">Jobs</a>
        <a href="browse-candidates.html" class="nav-link ${isActive('browse-candidates.html')}">Browse</a>
        <a href="leaderboard.html" class="nav-link ${isActive('leaderboard.html')}">Leaderboard</a>
        <a href="portfolio-gallery.html" class="nav-link ${isActive('portfolio-gallery.html')}">Portfolio</a>
        <a href="about.html" class="nav-link ${isActive('about.html')}">About</a>
      </div>

      <div class="nav-actions" id="navActions">
        <a href="login.html" class="btn-ghost" style="padding:8px 16px;font-size:13.5px;">Sign In</a>
        <a href="register.html" class="btn-primary" style="padding:8px 18px;font-size:13.5px;">Get Started</a>
      </div>

      <button class="nav-hamburger" id="navToggle" onclick="toggleMobileNav()">
        <span class="material-symbols-rounded" id="hamburgerIcon">menu</span>
      </button>
    </div>

    <div class="nav-mobile" id="navMobile">
      <a href="jobs.html" class="nav-mobile-link">Jobs</a>
      <a href="browse-candidates.html" class="nav-mobile-link">Browse Candidates</a>
      <a href="leaderboard.html" class="nav-mobile-link">Leaderboard</a>
      <a href="portfolio-gallery.html" class="nav-mobile-link">Portfolio Gallery</a>
      <a href="about.html" class="nav-mobile-link">About</a>
      <a href="contact.html" class="nav-mobile-link">Contact</a>
      <div style="display:flex;flex-direction:column;gap:8px;padding-top:8px;border-top:1px solid var(--border);">
        <a href="login.html" class="btn-ghost" style="justify-content:center;">Sign In</a>
        <a href="register.html" class="btn-primary" style="justify-content:center;">Get Started</a>
      </div>
    </div>
  </nav>`;
}

function toggleMobileNav() {
  const mob = document.getElementById('navMobile');
  const icon = document.getElementById('hamburgerIcon');
  mob.classList.toggle('open');
  icon.textContent = mob.classList.contains('open') ? 'close' : 'menu';
}

// ── Footer (public pages) ─────────────────────────────────
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <a href="index.html" class="footer-logo" style="margin-bottom:14px">
            <img src="images/unresume-logo.png" alt="Unresume" class="logo-img-sm" style="height:36px">
          </a>
          <p class="footer-tagline">Skills over resumes — the future of skill-based hiring.</p>
        </div>
        <div class="footer-links-grid">
          <div class="footer-col">
            <div class="footer-col-title">Platform</div>
            <a href="jobs.html" class="footer-link">Browse Jobs</a>
            <a href="browse-candidates.html" class="footer-link">Find Candidates</a>
            <a href="leaderboard.html" class="footer-link">Leaderboard</a>
            <a href="portfolio-gallery.html" class="footer-link">Portfolio</a>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Join</div>
            <a href="register.html" class="footer-link">As Candidate</a>
            <a href="register-company.html" class="footer-link">As Company</a>
            <a href="register-academy.html" class="footer-link">As Academy</a>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Company</div>
            <a href="about.html" class="footer-link">About</a>
            <a href="contact.html" class="footer-link">Contact</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© 2025 Unresume. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ── Sidebar (dashboard pages) ─────────────────────────────
const sidebarConfig = {
  candidate: {
    name: 'Jay Desai', initials: 'JD',
    gradient: 'linear-gradient(135deg,#5b6cf5,#8040d8)',
    badge: 'Candidate',
    accent: '#5b6cf5',
    accentBg: 'rgba(91,108,245,.12)',
    nav: [
      { icon:'dashboard',  label:'Dashboard',  href:'candidate-dashboard.html' },
      { icon:'task_alt',   label:'My Tasks',   href:'task-workplace.html' },
      { icon:'photo_library', label:'Portfolio', href:'candidate-profile.html' },
      { icon:'chat',       label:'Messages',   href:'chat.html' },
      { icon:'dynamic_feed', label:'Feed',     href:'feed.html' },
      { icon:'leaderboard', label:'Leaderboard', href:'leaderboard.html' },
    ],
  },
  hr: {
    name: 'Emily Ross', initials: 'ER',
    gradient: 'linear-gradient(135deg,#00c4ff,#5b6cf5)',
    badge: 'HR',
    accent: '#5b6cf5',
    accentBg: 'rgba(91,108,245,.12)',
    nav: [
      { icon:'dashboard',   label:'Dashboard',   href:'hr-dashboard.html' },
      { icon:'group',       label:'Candidates',  href:'browse-candidates.html' },
      { icon:'work',        label:'Job Listings', href:'jobs.html' },
      { icon:'chat',        label:'Messages',    href:'chat.html' },
    ],
  },
  interviewer: {
    name: 'Mark Wilson', initials: 'MW',
    gradient: 'linear-gradient(135deg,#8040d8,#5b6cf5)',
    badge: 'Interviewer',
    accent: '#8040d8',
    accentBg: 'rgba(128,64,216,.12)',
    nav: [
      { icon:'dashboard',  label:'Dashboard',    href:'interviewer-dashboard.html' },
      { icon:'add_task',   label:'Create Task',  href:'task-create.html' },
      { icon:'rate_review', label:'Review Queue', href:'interviewer-dashboard.html' },
    ],
  },
  academy: {
    name: 'NextGen Academy', initials: 'NA',
    gradient: 'linear-gradient(135deg,#8040d8,#00c4ff)',
    badge: 'Academy',
    accent: '#8040d8',
    accentBg: 'rgba(128,64,216,.12)',
    nav: [
      { icon:'dashboard', label:'Dashboard',  href:'academy-dashboard.html' },
      { icon:'group',     label:'Students',   href:'academy-dashboard.html' },
      { icon:'work',      label:'Placements', href:'placements.html' },
    ],
  },
};

function renderSidebar(role = 'candidate') {
  const el = document.getElementById('sidebar');
  if (!el) return;
  const cfg = sidebarConfig[role] || sidebarConfig.candidate;
  const cur = currentPage();

  const navItems = cfg.nav.map(item => {
    const active = cur === item.href;
    return `<a href="${item.href}" class="sidebar-item ${active ? 'sidebar-active' : ''}" style="${active ? `background:${cfg.accentBg};border-left:3px solid ${cfg.accent};color:${cfg.accent};` : ''}">
      <span class="material-symbols-rounded sidebar-icon">${item.icon}</span>
      <span class="sidebar-label">${item.label}</span>
    </a>`;
  }).join('');

  el.innerHTML = `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <img src="images/unresume-logo.png" alt="Unresume" class="logo-img-sm">
    </div>

    <div class="sidebar-badge" style="background:${cfg.accentBg};border:1px solid ${cfg.accent}33;color:${cfg.accent};">
      ${cfg.badge} Panel
    </div>

    <nav class="sidebar-nav">
      ${navItems}
    </nav>

    <div class="sidebar-bottom">
      <div class="sidebar-user">
        <div class="sidebar-avatar" style="background:${cfg.gradient};">${cfg.initials}</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${cfg.name}</div>
          <div class="sidebar-user-role">${cfg.badge}</div>
        </div>
        <a href="login.html" class="sidebar-logout" title="Sign out">
          <span class="material-symbols-rounded" style="font-size:18px;">logout</span>
        </a>
      </div>
    </div>
  </aside>`;
}

// ── Init on load ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();

  // Dashboard pages declare: <div id="sidebar" data-role="candidate"></div>
  const sidebar = document.getElementById('sidebar');
  if (sidebar) renderSidebar(sidebar.dataset.role || 'candidate');
});
