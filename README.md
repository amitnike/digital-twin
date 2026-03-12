## Amit Naikwadi — Personal Site

This is a small, single-page personal site for **Amit Naikwadi**, built with **Next.js (App Router)** and **Tailwind CSS**.

It presents an "enterprise meets edgy" profile for Principal / Staff+ engineering roles in fintech, distributed systems, and cloud-native platforms.

### Walkthrough video

- **Demo & overview**: [Digital Twin walkthrough (Loom)](https://www.loom.com/share/61fa1a4c80794476800f309b1f3bf20b)

The video shows how the site looks and how the **Digital Twin** chat behaves when answering questions about Amit&apos;s career, impact, skills, and leadership style.

### Prerequisites

- Node.js (LTS recommended) installed locally

### Install dependencies

```bash
npm install
```

### Run the site locally

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### How the Digital Twin chat works

- **Front-end**: The `DigitalTwinChat` client component renders a chat UI and sends each user message (plus recent history) to the `/api/digital-twin` API route.
- **API route**: `/api/digital-twin` runs server-side and calls the OpenRouter Chat Completions API with the model `openai/gpt-oss-120b:free` (and a fallback model if the free one is rate-limited).
- **Prompting**: The API uses a structured system prompt so responses are written in Amit&apos;s first-person voice, focused on his real career experience and impact.
- **Security**: The `OPENROUTER_API_KEY` is read from `.env` on the server only and is never exposed to the browser.

