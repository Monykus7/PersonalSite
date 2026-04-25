# Personal Portfolio Website — Build Plan
**Aditya Mahesh | Github Pages

---

## Overview

Build a single-page personal portfolio website modeled after [swapnilogale.github.io](https://swapnilogale.github.io/). The site should be clean, professional, and scroll-based with a sticky nav, hero section, and clearly delineated content sections. Deploy via GitHub Pages.

**Stack:** React + TypeScript + Tailwind CSS + Vite  
**Hosting:** GitHub Pages (via `gh-pages` branch or `/docs` folder)  
**Design inspiration:** swapnilogale.github.io — sticky top nav with anchor links, dark header with name/photo, scrollable single-page layout with clearly separated sections

---

## Section Map

Modeled after the reference site, map these sections to Aditya's content:

| Reference Section | Aditya's Version |
|---|---|
| About | Short bio + current role (QML Researcher @ UMD FIRE) |
| Skills | Languages, Frameworks, Developer Tools (from resume) |
| Projects | TerpSpark, Floradex, Relay (Hackathon winner) |
| Experience | QML Researcher, FRC Software Lead, Quant Research Intern |
| Education | UMD B.S. CS (Machine Learning), May 2028 |

No "Presentations" or "Open Source" sections needed — replace with a **Hackathon Wins** badge or callout on the Projects section.

---

## File & Folder Structure

```
aditya-portfolio/
├── public/
│   └── headshot.jpg              # Add your photo here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Education.tsx
│   ├── data/
│   │   └── content.ts            # All text/data in one place — easy to update
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Phase 1 — Project Setup

```bash
npm create vite@latest aditya-portfolio -- --template react-ts
cd aditya-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-scroll  # for smooth anchor scrolling
```

Configure `tailwind.config.ts` to scan `./src/**/*.{ts,tsx}`.

In `vite.config.ts`, set `base: '/your-repo-name/'` if deploying to GitHub Pages under a repo (not a custom domain).

---

## Phase 2 — Content Data File

Create `src/data/content.ts` with all site content as typed constants. This makes future updates easy without touching JSX.

```ts
export const personalInfo = {
  name: "Aditya Mahesh",
  phone: "949-439-2906",
  email: "adityamahesh16@gmail.com",
  linkedin: "https://linkedin.com/in/YOUR_HANDLE",
  github: "https://github.com/YOUR_HANDLE",
  tagline: "CS @ UMD | ML | Quantum Computing | Full-Stack",
};

export const about = `
  Junior at the University of Maryland studying Computer Science with a focus on Machine Learning.
  Currently conducting Quantum Machine Learning research under Professor Shabnam Jabeen at the 
  FIRE program, running real quantum computations on IonQ hardware. I build full-stack AI 
  applications and love working at the intersection of research and engineering.
`;

export const skills = {
  languages: ["Java", "Python", "C", "Bash", "SQL", "JavaScript", "TypeScript", "R", "MATLAB", "HTML", "CSS", "LaTeX"],
  frameworks: ["React", "PyTorch", "Flask", "Scikit-Learn", "OpenCV", "Tailwind", "Bootstrap", "JUnit", "SSE"],
  tools: ["Git", "Docker", "AWS-CLI", "EC2", "Azure Cosmos DB", "Firebase", "pandas", "NumPy", "SciPy", "Matplotlib"],
};

export const projects = [
  {
    title: "Relay",
    subtitle: "Clinical Handoff AI | 🏆 1st Place — Anthropic Hackathon (Health & Wellness Track)",
    description:
      "A clinical handoff documentation assistant for nursing shift changes. Nurses dictate or type handoff notes; Relay structures them into SBAR format with flags and open loops using an LLM backend. Built with React, FastAPI, NVIDIA NIM, and Supabase Postgres.",
    tags: ["React", "FastAPI", "Python", "NVIDIA NIM", "Supabase", "Web Speech API"],
    github: "https://github.com/Monykus7/Relay",
    highlight: true, // renders a badge/ribbon
  },
  {
    title: "TerpSpark",
    subtitle: "Multi-Agent Debate Engine | Apr 2026",
    description:
      "A Visionary-Critic-Judge multi-agent debate engine with pluggable LLM routing for adversarial stress-testing and brainstorming. Features real-time SSE token streaming with user interjections and persistent session state in Azure Cosmos DB.",
    tags: ["Python", "React", "Azure Cosmos DB", "Firebase", "SSE"],
    github: "", // add if public
    highlight: false,
  },
  {
    title: "Floradex",
    subtitle: "Plant Disease Analysis AI | Apr 2025",
    description:
      "Full-stack web app that classifies common crop diseases from user-uploaded images using a custom CNN in PyTorch (98% accuracy). Includes secure user authentication and encrypted data storage.",
    tags: ["PyTorch", "Flask", "JavaScript", "Tailwind CSS", "CNN"],
    github: "", // add if public
    highlight: false,
  },
];

export const experience = [
  {
    role: "Quantum Machine Learning Researcher",
    org: "First Year Innovation and Research Experience — UMD",
    location: "College Park, MD",
    dates: "Sep 2024 – Present",
    bullets: [
      "Conducting QML research under Professor Shabnam Jabeen using IonQ hardware for real quantum entanglement and computations.",
      "Designing quantum compression algorithms integrating IBM's Qiskit API with PyTorch; circuits achieved 93% accuracy with theoretically exponential speedup over classical compression.",
      "Running models on containers and clusters.",
    ],
  },
  {
    role: "Software Engineering Lead",
    org: "Portola First Robotics Competition",
    location: "Irvine, CA",
    dates: "Oct 2020 – Jun 2024",
    bullets: [
      "Built a WPILib-based algorithm improving robot performance by 40% rotational speed and 30% battery efficiency.",
      "Trained 27 team members in Java programming, increasing team contribution by 60%.",
      "Hosted presentations and webinars to judges and program newcomers.",
    ],
  },
  {
    role: "Quantitative Research Intern",
    org: "Rapid Conn Inc — LumiCharge",
    location: "Lake Forest, CA",
    dates: "Jun 2021 – Aug 2021",
    bullets: [
      "Designed a go-to-market plan projected to increase flagship LED lamp sales by 10%.",
      "Implemented web scraping pipelines to find vendors, increasing lead generation by 20%.",
      "Configured Excel macros to categorize scraped advertiser data for the product launch.",
    ],
  },
];

export const education = [
  {
    school: "University of Maryland, College Park",
    degree: "B.S. Computer Science (Machine Learning)",
    minors: "Minors: Computational Finance, Robotics",
    dates: "Expected May 2028",
    coursework: [
      "Data Structures & Algorithms", "Systems Programming", "Artificial Intelligence",
      "Data Science", "Discrete Structures", "Applied Probability & Statistics",
      "Linear Algebra", "Calculus", "Differential Equations",
    ],
  },
];
```

---

## Phase 3 — Components

### `Navbar.tsx`
- Sticky top bar with dark background
- Site name on the left (clicking scrolls to top)
- Anchor links on the right: About · Skills · Projects · Experience · Education
- Use `react-scroll`'s `<Link>` with `smooth={true}` and `offset={-64}`
- Mobile: collapse to a hamburger menu

### `Hero.tsx`
- Full-width dark section (same look as reference site header)
- Circular headshot photo on the left, name + tagline on the right
- Contact row: email · phone · LinkedIn icon · GitHub icon
- Brief one-liner beneath name (e.g., "CS @ UMD · ML Researcher · Full-Stack Builder")

### `About.tsx`
- Simple two-column layout: short bio paragraph on the left, current role/affiliation callout card on the right
- Keep it to 3–4 sentences max

### `Skills.tsx`
- Three grouped tag-cloud lists: Languages, Frameworks, Developer Tools
- Use pill-shaped badges (Tailwind: `rounded-full bg-gray-100 text-sm px-3 py-1`)
- Match the reference site's clean grouped list style

### `Projects.tsx`
- Card grid (2 columns on desktop, 1 on mobile)
- Each card: title, subtitle, description, tag pills, GitHub link button
- **Relay card gets a special "🏆 Hackathon Winner" banner/ribbon** — use a yellow or gold ribbon in the top-right corner of the card
- Relay card should be visually differentiated (slightly larger, or border highlight)

### `Experience.tsx`
- Timeline-style layout (left border line with dots, reference site style)
- Each entry: Role (bold), Org + Location, Date range, bullet list
- Most recent entry at the top

### `Education.tsx`
- Single card for UMD
- Degree, minor, expected graduation
- Relevant coursework as pills/tags

### `Footer.tsx`
- Minimal: name · email · GitHub · LinkedIn
- "Built with React & Tailwind" credit

---

## Phase 4 — Styling

Use Tailwind utility classes throughout. Key design tokens to match reference site aesthetic:

```
Background (dark sections): bg-gray-900 or bg-slate-800
Background (light sections): bg-white or bg-gray-50
Accent color: Pick one — indigo-600 / violet-600 / sky-600 (use consistently)
Section headings: text-2xl font-bold text-gray-800 border-b pb-2
Body text: text-gray-600 text-base leading-relaxed
Tag pills: bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full px-3 py-1
```

Each section should alternate between `bg-white` and `bg-gray-50` for visual separation, exactly like the reference site.

---

## Phase 5 — Responsive Design

- Mobile-first: single column for all sections
- `md:` breakpoint: two columns for Projects and Skills
- Navbar hamburger on mobile (`sm:hidden` / `md:flex`)
- Headshot in Hero: full width on mobile, side-by-side on desktop

---

## Phase 6 — Deployment to GitHub Pages

1. Install the deploy tool:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/aditya-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/aditya-portfolio/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. In the GitHub repo settings → Pages → set source to `gh-pages` branch.

---

## Cursor-Specific Notes

- Start by generating `content.ts` in full — all other components just import from it, so Cursor can reference the types throughout.
- Generate one component at a time and ask Cursor to keep styling consistent with already-generated components.
- Use this prompt pattern with Cursor for each component:
  > "Generate `Projects.tsx` using the data from `content.ts`. Use Tailwind CSS. Match the card layout described in the build plan. Make the Relay card visually distinct with a hackathon winner badge. No external component libraries."
- After all components exist, do a final pass: "Review all components for consistent spacing, font sizes, and color usage."

---

## Checklist

- [ ] Repo initialized with Vite + React + TS + Tailwind
- [ ] `content.ts` fully populated
- [ ] `Navbar.tsx` — sticky, anchor links, mobile hamburger
- [ ] `Hero.tsx` — photo, name, tagline, contact links
- [ ] `About.tsx` — bio paragraph
- [ ] `Skills.tsx` — three grouped tag clouds
- [ ] `Projects.tsx` — cards with Relay highlighted
- [ ] `Experience.tsx` — timeline with 3 entries
- [ ] `Education.tsx` — UMD card with coursework tags
- [ ] `Footer.tsx` — minimal links
- [ ] Mobile responsive pass
- [ ] `vite.config.ts` base path set
- [ ] Deployed to GitHub Pages
- [ ] Custom domain configured (optional)
