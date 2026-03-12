const careerTimeline = [
  {
    role: "Principal Engineer",
    period: "Jan 2024 – Present",
    company: "Mastercard — Customer Asset Management Platform",
    impact: [
      "Architected a greenfield Asset Management API for global 8‑digit BIN compliance, enabling 100+ issuer integrations on time.",
      "Designed a distributed batch integration layer with Spring Batch and Apache Kafka, cutting cross‑system data propagation from hours to minutes.",
      "Established engineering standards (ADRs, automated tests, code review gates) across a 6‑engineer team, reducing post‑release defects and PR cycle time."
    ]
  },
  {
    role: "Lead Engineer",
    period: "Nov 2018 – Dec 2023",
    company: "Mastercard — Customer Information Management API (CCM)",
    impact: [
      "Delivered a Kafka‑based real‑time synchronisation framework serving 15+ consumer applications with sub‑second consistency.",
      "Led automation and CI/CD initiatives that halved regression test cycles and eliminated 80% of manual release effort.",
      "Owned 20+ production releases over 5 years with zero Severity‑1 incidents attributable to release failures."
    ]
  },
  {
    role: "Senior Consultant Specialist",
    period: "Jun 2013 – Oct 2018",
    company: "HSBC — Digital Security Platform",
    impact: [
      "Delivered 8 digital‑security features end‑to‑end, contributing to four consecutive zero‑defect quarterly releases (RISE Award 2016).",
      "Introduced observability with Splunk and AppDynamics, reducing mean time to detect incidents by 35%.",
      "Resolved authentication bottlenecks through database optimisation, improving login response times by ~40% for millions of users."
    ]
  },
  {
    role: "Consultant Specialist",
    period: "Aug 2010 – May 2013",
    company: "HSBC — eCare Platform",
    impact: [
      "Designed the core application skeleton for a major framework modernisation, delivered ahead of a 3.5‑month deadline.",
      "Built configuration‑driven Jenkins pipelines for one‑click deployments across four environments, cutting deployment prep time by 60%."
    ]
  },
  {
    role: "Senior Software Engineer",
    period: "Jul 2005 – Jul 2010",
    company: "HSBC — P2G Internet Banking",
    impact: [
      "Designed and built core P2G payment modules in Java/Spring MVC, processing thousands of government payments daily.",
      "Created operational runbooks that reduced support resolution times by 40% and became the standard for an 8‑person team."
    ]
  }
];

const certifications = [
  "Certified Kubernetes Application Developer (CKA) — CNCF",
  "AWS Certified Solutions Architect — Associate",
  "AWS Certified Developer — Associate",
  "Certified Scrum Master (CSM)"
];

const skills = [
  "Distributed Systems & Microservices",
  "Event‑Driven Architecture (Apache Kafka)",
  "Cloud‑Native Platforms (PCF, AWS)",
  "API‑First Design & Governance",
  "High Availability & Fault Tolerance",
  "CI/CD, Test Automation & Quality Engineering",
  "Observability (Splunk, AppDynamics, Dynatrace)"
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-slate-600/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 md:px-10 lg:px-16">
        {/* Top nav / name badge */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="gradient-border rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
              Principal Engineer · Fintech · Cloud‑Native
            </div>
          </div>
          <div className="hidden items-center gap-4 text-xs text-slate-300/80 md:flex">
            <span>Pune, India</span>
            <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span>Open to Principal / Staff+ roles</span>
          </div>
        </header>

        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Amit <span className="text-brand-100">Naikwadi</span>
              </h1>
              <p className="max-w-xl text-balance text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
                PRINCIPAL ENGINEER · DISTRIBUTED SYSTEMS · FINTECH & CLOUD‑NATIVE PLATFORMS
              </p>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-200 sm:text-base">
                Principal Engineer with 20 years building mission‑critical, high‑scale distributed systems at{" "}
                <span className="font-semibold text-slate-50">Mastercard</span> and{" "}
                <span className="font-semibold text-slate-50">HSBC</span>. I design and lead cloud‑native
                platforms that turn regulatory pressure, scale constraints, and legacy complexity into resilient,
                observable, and continuously‑deployable systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:amit.naikwadi84@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-elevated shadow-brand-500/40 transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <span>Let&apos;s talk</span>
                <span className="text-xs">↗</span>
              </a>
              <a
                href="https://linkedin.com/in/amit-naikwadi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-400/80 hover:bg-slate-900"
              >
                <span>LinkedIn</span>
              </a>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                <span>Driving platform strategy & engineering excellence</span>
              </div>
            </div>
          </div>

          {/* Hero side panel */}
          <aside className="space-y-4">
            <div className="gradient-border rounded-3xl bg-slate-900/60 p-5 shadow-elevated">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                ABOUT ME
              </p>
              <p className="text-sm leading-relaxed text-slate-200">
                I specialise in taking <span className="font-semibold">complex, regulated fintech systems</span>{" "}
                and reshaping them into <span className="font-semibold">composable, observable platforms</span>.
                My focus is equal parts architecture and execution — turning strategy into battle‑tested APIs,
                data pipelines, and automation that teams can ship and operate with confidence.
              </p>
            </div>

            <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  EXPERIENCE
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">20<span className="text-sm align-top">+</span></p>
                <p className="mt-1 text-slate-300">years building enterprise platforms</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  IMPACT
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  99.9% availability, 10% fewer incidents, 50% faster test cycles, and 80% less manual release effort across
                  critical fintech systems.
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* Career journey */}
        <section id="career" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Career Journey
              </h2>
              <p className="max-w-2xl text-sm text-slate-300">
                A two‑decade journey from full‑stack engineer to Principal Engineer, consistently shipping{" "}
                <span className="font-semibold text-slate-100">high‑stakes, zero‑defect</span> platforms in banking and payments.
              </p>
            </div>
            <div className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
              Mastercard · HSBC · Global Scale Platforms
            </div>
          </div>

          <div className="relative mt-3 grid gap-5 md:grid-cols-[minmax(0,2.3fr)_minmax(0,1.7fr)]">
            {/* Timeline */}
            <div className="space-y-4">
              {careerTimeline.map((entry, idx) => (
                <article
                  key={entry.role + entry.period}
                  className="relative rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.65)] ring-1 ring-slate-900/70"
                >
                  <div className="absolute left-0 top-6 -translate-x-4">
                    <div className="h-2 w-2 rounded-full bg-accent-500 shadow-[0_0_14px_rgba(236,72,153,0.95)]" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {entry.role}
                    </h3>
                    <p className="text-xs text-slate-400">{entry.period}</p>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    {entry.company}
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-slate-200 sm:text-[0.8rem]">
                    {entry.impact.map(point => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {idx === 0 && (
                    <div className="mt-3 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[0.68rem] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                      Currently shaping Mastercard&apos;s global customer asset platform
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Skills / Certifications */}
            <div className="space-y-4">
              <div className="gradient-border rounded-3xl bg-slate-950/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Core Strengths
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-[0.7rem] font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Certifications
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-200 sm:text-[0.8rem]">
                  {certifications.map(cert => (
                    <li key={cert} className="flex gap-2">
                      <span className="mt-1 h-1 w-3 flex-shrink-0 rounded-full bg-brand-500" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  What I&apos;m looking for
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Principal or Staff+ roles where I can own{" "}
                  <span className="font-semibold">platform and architecture strategy</span>, mentor engineering teams,
                  and partner with product and business stakeholders to deliver{" "}
                  <span className="font-semibold">globally scalable, compliant</span> systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / contact */}
        <footer className="mt-4 flex flex-col gap-3 border-t border-slate-800/70 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-slate-200">Contact</span>
            <a
              href="mailto:amit.naikwadi84@gmail.com"
              className="text-slate-300 hover:text-slate-100"
            >
              amit.naikwadi84@gmail.com
            </a>
            <span>·</span>
            <span>+91-9766323825</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-500">Built with Next.js & Tailwind CSS</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

