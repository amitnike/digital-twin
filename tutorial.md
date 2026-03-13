## Tutorial — Amit Naikwadi's Professional Website + Digital Twin (Next.js + Tailwind)

This tutorial is written for a complete beginner UI developer. It explains what was built, where things live in the codebase, and (at a high level) how the “Digital Twin” AI chat works.

---

### Summary (what you have)

- **A professional single-page website** built with **Next.js (App Router)** and **Tailwind CSS**.
- A bold “**enterprise meets edgy**” visual style: dark theme, gradients, glow accents, and modern typography.
- A **career timeline** and **skills/certifications** pulled from the resume content.
- A **Digital Twin chat** (AI chatbot) that answers questions about Amit’s career by calling **OpenRouter** from a server-side API route.

---

### Prerequisites (what you need installed)

- **Node.js** (LTS recommended). This gives you `node` and `npm`.

---

### How to run it locally

From the project folder:

```bash
cd "c:\Users\ADMIN\Cursor_Projects\site"
npm install
npm run dev
```

Then open `http://localhost:3000`.

---

### Project layout (where code is)

At a high level, you’ll mainly work in these folders/files:

- **`app/`**
  - **`app/layout.tsx`**: the global HTML layout for the whole site.
  - **`app/page.tsx`**: the main homepage UI (hero, about, timeline, footer, and the chat section).
  - **`app/globals.css`**: global styling and Tailwind directives.
  - **`app/api/digital-twin/route.ts`**: server-side API endpoint for the AI chat.
- **`components/`**
  - **`components/DigitalTwinChat.tsx`**: the front-end chat UI component.
- **`package.json`**
  - Defines scripts like `npm run dev` and dependencies (Next.js, React, Tailwind, etc.).
- **`tailwind.config.js` / `postcss.config.js`**
  - Tailwind + PostCSS configuration.
- **`.env`**
  - Contains your **`OPENROUTER_API_KEY`** (this should never be committed to Git).

Files you should NOT commit:

- **`.next/`**: Next.js build output/cache.
- **`node_modules/`**: installed packages.
- **`.env`**: secrets.

---

### How the homepage UI is built (`app/page.tsx`)

`app/page.tsx` is a React component (a function) that returns HTML-like UI called **JSX**.

Inside `app/page.tsx` you’ll see:

- **Data arrays at the top** (examples: `careerTimeline`, `skills`, `certifications`)
  - These are plain JavaScript arrays used to render sections.
  - The timeline is displayed by mapping over `careerTimeline`:
    - Each entry becomes a timeline “card” with role, dates, company, and bullet points.
- **Hero section**
  - Name, title, positioning statement, and contact links.
- **About block**
  - A concise “About me” paragraph designed to sound principal/staff level.
- **Career Journey section**
  - Timeline cards + a right sidebar for skills/certs and “What I’m looking for”.
- **Digital Twin chat**
  - Rendered via `<DigitalTwinChat />`
- **Footer**
  - Contact info and a small “Built with …” note.

Tailwind CSS classes (like `bg-slate-950`, `rounded-3xl`, `shadow-elevated`) are used directly in `className`.

---

### How styling works (Tailwind + `app/globals.css`)

This project uses Tailwind, which means:

- Most styling is done inline with **Tailwind utility classes**.
- `app/globals.css` contains:
  - The Tailwind directives:
    - `@tailwind base;`
    - `@tailwind components;`
    - `@tailwind utilities;`
  - A few custom global styles (like the `.gradient-border` effect).

Tailwind theme values (brand/accent colors, shadows) are configured in:

- `tailwind.config.js`

---

### How the Digital Twin chat works (front-end → API → OpenRouter)

The chat has two main parts:

#### 1) Chat UI (front-end): `components/DigitalTwinChat.tsx`

- This is a **Client Component** (it starts with `"use client"`).
- It stores chat messages in React state:
  - `messages`: the conversation (user + assistant)
  - `input`: the current text typed by the user
  - `isThinking`: whether it is waiting for an AI response
- When you submit the form:
  - It calls `fetch("/api/digital-twin", { method: "POST", ... })`
  - It sends:
    - the new user message
    - a small conversation history (so the AI can respond with context)
- It renders the conversation as:
  - right-aligned “user” bubbles
  - left-aligned “assistant” bubbles

Key idea: **the browser never calls OpenRouter directly**. It calls your own `/api/digital-twin` route.

#### 2) Server API route: `app/api/digital-twin/route.ts`

This is server-side code that runs in Node.js when the browser calls `/api/digital-twin`.

What it does:

- Reads `OPENROUTER_API_KEY` from `process.env` (loaded from `.env`)
- Builds a request payload for OpenRouter:
  - `model: "openai/gpt-oss-120b:free"`
  - `messages: [...]` including a **system prompt** that defines:
    - who the Digital Twin is
    - tone and boundaries
    - what it should talk about (career, leadership, engineering impact)
- Calls OpenRouter’s chat completions endpoint:
  - `https://openrouter.ai/api/v1/chat/completions`
- Returns JSON:
  - `{ "reply": "..." }`

Important note about reliability:

- Free models can be **rate-limited** at busy times (HTTP 429).
- The API route includes a **fallback attempt** to keep the chat usable when the free model is saturated.

---

### What to edit if you want to change the content

- **Hero/About wording**
  - Edit text inside `app/page.tsx`
- **Timeline items**
  - Edit the `careerTimeline` array in `app/page.tsx`
- **Skills/Certifications**
  - Edit the `skills` and `certifications` arrays in `app/page.tsx`
- **Digital Twin behavior (tone/accuracy)**
  - Edit `SYSTEM_PROMPT` in `app/api/digital-twin/route.ts`
  - This is where you decide how the assistant should talk and what it should prioritize.

---

### Troubleshooting (common beginner issues)

- **`.next` folder shows in `git status`**
  - Add `.next` to `.gitignore`.
  - If it was previously tracked: `git rm -r --cached .next`
- **PowerShell blocks `npm` scripts**
  - Use **Command Prompt** (`cmd.exe`) or change the PowerShell execution policy for your user.
- **OpenRouter returns 429 rate limit**
  - Wait and retry, or use a fallback/paid model, or BYOK (bring your own key) to increase limits.

---

### 5 upgrade ideas (to make it more impactful & technically appropriate)

1. **Add a “Resume” section + downloadable PDF**
   - Put the PDF in `public/` and link it in the hero.
   - Add a “Download Resume” CTA alongside LinkedIn.

2. **Stream AI responses for a better chat UX**
   - Implement streaming from the API route (Server-Sent Events / streaming responses).
   - The UI can show the message appearing word-by-word for a premium feel.

3. **Add guardrails + structured responses**
   - Add a response format (e.g., “Summary / Evidence / Skills / Outcome”) in the system prompt.
   - Add safety rules: never invent companies/projects; if unsure, say so and ask a clarifying question.

4. **Add analytics + event tracking (privacy-conscious)**
   - Track button clicks (email/LinkedIn) and chat usage events.
   - Helps you measure what recruiters actually engage with.

5. **Make the site multi-page and more “enterprise”**
   - Add routes like:
     - `/about`
     - `/journey`
     - `/leadership`
     - `/architecture`
   - This improves SEO, readability, and makes the portfolio feel larger and more navigable.

