"use client"

import { useState } from "react"

type Tab = "experience" | "education"

const experiences = [
  {
    type: "experience" as Tab,
    current: true,
    title: "Data Analytics Engineer Intern",
    company: "Redlegg",
    location: "Illinois, USA",
    date: "Jun 2025 - Present",
    bullets: [
      "Processed and validated 5M+ SIEM/EDR records through XSOAR pipelines, improving data accuracy and accelerating client reporting by 20%",
      "Automated monthly reports with Python and Power Apps, saving 40+ hours/month and providing timely insights",
      "Built Power BI and Power Platform dashboards enhanced with Microsoft Copilot, enabling self-service analytics and real-time KPI tracking, reducing ad-hoc reporting requests by 30%",
    ],
    tags: ["Power BI", "Python", "Power Apps", "XSOAR", "Copilot"],
  },
  {
    type: "experience" as Tab,
    current: false,
    title: "Data Engineer Freelance Intern",
    company: "Fortifai Inc.",
    location: "Remote, USA",
    date: "Jun - Sep 2025",
    bullets: [
      "Linked GPT-based web scrapers with LLM summarization to extract ERP table documentation and generate structured Excel sheets, accelerating audit preparation",
      "Built synthetic datasets simulating fraud scenarios, enabling robust testing of ML-based fraud detection models",
      "Analyzed 200+ SAP and Oracle ERP tables across Procure-to-Pay, Order-to-Cash, and Payroll cycles, detecting fraud and leakage risks that improved compliance monitoring by 15%",
    ],
    tags: ["SAP", "Oracle ERP", "LLMs", "GPT", "ML"],
  },
  {
    type: "experience" as Tab,
    current: false,
    title: "Data Analyst Intern",
    company: "Moksha Softlabs Private Limited",
    location: "Mumbai, India",
    date: "Jul - Dec 2023",
    bullets: [
      "Streamlined data pipelines using Hadoop and Spark while leading a 5-member intern team, delivering projects on time",
      "Developed a Python-based encryption module that strengthened password security and met client audit standards",
      "Optimized backend operations by enhancing SQL queries, ASP.NET integration, and database performance, reducing system latency",
    ],
    tags: ["SQL", "ASP.NET", "Python", "Hadoop", "Spark"],
  },
]

const education = [
  {
    type: "education" as Tab,
    current: false,
    title: "MS in Information Management",
    company: "University of Illinois, Urbana-Champaign",
    location: "Illinois, USA",
    date: "2024 - 2025",
    bullets: [
      "Gained expertise in advanced data engineering and AI-driven solutions",
      "Focused on data analytics, machine learning, and information systems",
    ],
    tags: [],
  },
  {
    type: "education" as Tab,
    current: false,
    title: "BE in Electronics & Telecommunication",
    company: "University of Mumbai",
    location: "Mumbai, India",
    date: "2019 - 2023",
    bullets: [
      "Developed skills in data warehousing techniques and analytical problem-solving",
      "Built a strong foundation in engineering principles, Python, SQL, and database management",
    ],
    tags: [],
  },
]

export function Journey() {
  const [activeTab, setActiveTab] = useState<Tab>("experience")

  const items = activeTab === "experience" ? experiences : education

  return (
    <section id="journey" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">My Journey</h2>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </div>

        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          A timeline of my professional experience and education, from engineering foundations to data-driven problem solving.
        </p>

        {/* Tabs */}
        <div className="mb-10 flex gap-4">
          <button
            onClick={() => setActiveTab("experience")}
            className={`rounded-lg px-5 py-2.5 font-mono text-sm font-semibold transition-all ${
              activeTab === "experience"
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`rounded-lg px-5 py-2.5 font-mono text-sm font-semibold transition-all ${
              activeTab === "education"
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
          {items.map((item, i) => (
            <div key={i} className="relative animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Dot */}
              <div className={`absolute -left-6 top-2 h-3 w-3 rounded-full border-2 ${
                item.current
                  ? "border-primary bg-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                  : "border-muted-foreground bg-background"
              }`} />

              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {item.current && (
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">CURRENT</span>
                  )}
                  <span className="rounded bg-secondary px-2 py-0.5 font-mono text-xs uppercase text-muted-foreground">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="font-mono text-sm text-primary">{item.company}</p>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>

                {item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
