# Unresume — Skill-Based Hiring Platform

Unresume is a frontend prototype for a skill-based hiring platform: candidates prove themselves through real tasks instead of resumes, companies hire based on task scores, and academies manage and refer their students to employers.

This is a **static, no-backend prototype** — pure HTML, CSS and vanilla JavaScript. There is no server, no database, and no real authentication. All "data" (jobs, candidates, tasks, conversations) lives in `js/data.js` as in-memory mock data, and any "saved" changes (new students, status updates, referrals, sign-ups) only persist for the current page session — a refresh resets them.

## Tech Stack

- **HTML** — one standalone file per page (no build step, no bundler)
- **CSS** — custom CSS with CSS variables for the design system (no Tailwind/Bootstrap)
- **JavaScript** — vanilla JS only, no framework
- **GSAP 3.12.5** (CDN) — animations on marketing pages (`index.html`, etc.)
- **Google Fonts** — Plus Jakarta Sans (display/headings), Inter (body text), JetBrains Mono (scores/code)
- **Material Symbols Rounded** (CDN) — icon set used throughout

No `npm install` or build step is required. Open any `.html` file directly in a browser, or serve the `unresume-web/` folder with any static file server.

## Folder Structure

```
unresume-web/
├── css/
│   ├── globals.css      # design tokens, dashboard layout, shared components (buttons, cards, popovers, rubric bars)
│   ├── navbar.css        # public navbar/footer, dashboard sidebar, topbar notification/avatar popovers
│   └── home.css           # landing-page-only styles (hero, features, role cards)
├── js/
│   ├── components.js     # injects shared navbar/footer/sidebar into #navbar/#footer/#sidebar placeholders, role-based sidebar config, popover toggle logic
│   └── data.js            # all mock data: getJobs(), getTasks(), getCandidates(), getConversations(), getFeed()
├── images/
│   ├── unresume-logo.png  # main wordmark, used in navbar/sidebar/footer/auth pages
│   ├── logo.png
│   └── favicon.png        # browser tab icon, linked on every page
└── *.html                  # one file per page (see Pages below)
```

## Roles & Modules

The platform serves four roles, each with its own dashboard module (sidebar + topbar layout). The shared sidebar is rendered by `js/components.js` based on a `data-role` attribute:

```html
<div id="sidebar" data-role="candidate"></div>  <!-- or hr / interviewer / academy -->
```

| Role | Color accent | Dashboard | Module pages |
|---|---|---|---|
| **Candidate** | Blue (`#5b6cf5`) | `candidate-dashboard.html` | Jobs, My Tasks, Portfolio, Messages, Feed, Leaderboard, Edit Profile |
| **HR / Company** | Cyan→Blue | `hr-dashboard.html` | Candidates (Browse), Messages, Post Job + Task |
| **Interviewer** | Purple | `interviewer-dashboard.html` | Create Task, Review Queue |
| **Academy** | Purple→Cyan | `academy-dashboard.html` | Students (Manage Students), Jobs (in-module), Placements |

Each role's dashboard pages stay fully **inside their own module** — no role is redirected to a page styled for a different audience. For example, Academy has its own `academy-jobs.html` (list + inline detail + "Refer a Student" panel) instead of using the public `jobs.html`.

## Pages

### Public / marketing (shared navbar + footer, no login required)
- `index.html` — landing page
- `about.html` — company story, team, values
- `contact.html` — contact form + FAQ
- `jobs.html` — public job board (used by Candidates and HR)
- `job-detail.html` — single job listing + "Start Task & Apply"
- `leaderboard.html` — global candidate rankings
- `portfolio-gallery.html` — public showcase of candidate work

### Auth
- `login.html` — role-aware sign in (Candidate / Company / Academy, with HR/Interviewer sub-role)
- `register.html` — role picker (Candidate / Company / Academy)
- `register-candidate.html`, `register-company.html`, `register-academy.html` — per-role multi-step sign-up
- `forgot-password.html` — email-based reset flow (cosmetic, no real email sent)

> **Note:** None of the forms above enforce real authentication. Fields are not required and submitting any of them redirects straight to the matching dashboard — this was intentionally simplified for demo/prototyping purposes.

### Candidate module
- `candidate-dashboard.html` — stats, tasks, activity, score ring
- `task-workplace.html` — task brief, rubric, file submission workspace
- `candidate-profile.html` — public/owner portfolio view (owner = no `?u=` param or `?u=jay-dev`)
- `edit-profile.html` — edit name/username/bio/skills
- `feed.html` — social feed of candidate activity
- `chat.html` — messaging inbox

### HR / Company module
- `hr-dashboard.html` — pipeline funnel, job postings, shortlist
- `browse-candidates.html` — talent search/filter (HR-only; not reachable without login)
- `task-create.html` — task builder for job postings (shared with Interviewer)

### Interviewer module
- `interviewer-dashboard.html` — submissions queue, scoring panel

### Academy module
- `academy-dashboard.html` — student roster, company referral slots, top performers
- `manage-students.html` — add students, issue **Student ID**, status tracking, auto-conversion to **Candidate ID**
- `academy-jobs.html` — in-module job browser with inline "Refer a Student" action
- `placements.html` — per-company / per-student placement visibility toggles

## Key Feature Notes

- **Student ID → Candidate ID system** (`manage-students.html`): Academies add students and issue them a `STU-xxxx` Student ID, shown with a "⚡ Priority Referral" tag. When a student's status is set to **Placed** or **Left Academy**, their access automatically converts to an independent `CAND-xxxx` Candidate ID.
- **Topbar popovers**: every dashboard's notification bell and avatar open a dropdown (`toggleTopbarPopover()` in `components.js`). Renamed from an earlier `togglePopover` name because that collides with the browser's native Popover API (`HTMLElement.prototype.togglePopover`).
- **No real backend**: "Apply", "Refer Student", "Save Draft", "Send Message", etc. are all simulated with a short fake delay (`setTimeout`) and a UI confirmation — there is no network request.

## Design System

Defined as CSS variables in `css/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#09090b` | page background |
| `--bg-elevated` | `#0f0f13` | raised surfaces |
| `--bg-card` | `#13131a` | cards |
| `--brand` | `#5b6cf5` | primary accent (Candidate/HR) |
| `--cyan` | `#00c4ff` | secondary accent |
| `--purple` | `#8040d8` | Interviewer/Academy accent |
| `--text1` / `--text2` / `--text3` / `--text4` | light → dim | text hierarchy |
| `--border` / `--border-light` | — | card/divider borders |

Glassmorphism cards use `rgba(255,255,255,.04)` + `backdrop-filter: blur(24px)` + a 1px translucent border. GSAP-animated sections always use `gsap.set()` + `gsap.to()` (never `gsap.from()`, to avoid invisible content if the CDN is slow/blocked).

## Known Limitations

- No backend, no persistence — all mock data resets on page reload.
- No real authentication/session — role access is enforced only by navigation (no link to a page = "no access"), not by any server-side check.
- Some pages reference fixed/demo identities (e.g. candidate "self" = `jay-dev`) rather than a real logged-in user.
