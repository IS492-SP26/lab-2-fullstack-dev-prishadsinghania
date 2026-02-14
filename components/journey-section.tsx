"use client"

import { useState } from "react"
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronDown } from "lucide-react"

type JourneyItem = {
  type: "work" | "education"
  title: string
  organization: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
  skills?: string[]
}

const journeyItems: JourneyItem[] = [
  {
    type: "work",
    title: "Data Analytics Engineer Intern",
    organization: "Redlegg",
    location: "Illinois, USA",
    period: "Jun 2025 - Present",
    current: true,
    highlights: [
      "Built Power BI and Power Platform dashboards enhanced with Microsoft Copilot, enabling self-service analytics and real-time KPI tracking, reducing ad-hoc reporting requests by 30%",
      "Automated monthly reports with Python and Power Apps, saving 40+ hours/month and providing timely insights",
      "Processed and validated 5M+ SIEM/EDR records through XSOAR pipelines, improving data accuracy and accelerating client reporting by 20%",
    ],
    skills: ["Power BI", "Python", "Power Apps", "XSOAR", "Copilot"],
  },
  {
    type: "work",
    title: "Data Engineer Freelance Intern",
    organization: "Fortifai Inc.",
    location: "Remote, USA",
    period: "Jun - Sep 2025",
    highlights: [
      "Analyzed 200+ SAP and Oracle ERP tables across Procure-to-Pay, Order-to-Cash, and Payroll cycles, detecting fraud and leakage risks that improved compliance monitoring by 15%",
      "Built synthetic datasets simulating fraud scenarios, enabling robust testing of ML-based fraud detection models",
      "Linked GPT-based web scrapers with LLM summarization to extract ERP table documentation and generate structured Excel sheets, accelerating audit preparation",
    ],
    skills: ["SAP", "Oracle ERP", "LLMs", "GPT", "ML"],
  },
  {
    type: "education",
    title: "MS in Information Management",
    organization: "University of Illinois, Urbana-Champaign",
    location: "Illinois, USA",
    period: "2024 - 2025",
    highlights: [
      "Focused on data analytics, machine learning, and information systems",
      "Gained expertise in advanced data engineering and AI-driven solutions",
    ],
  },
  {
    type: "work",
    title: "Data Analyst Intern",
    organization: "Moksha Softlabs Private Limited",
    location: "Mumbai, India",
    period: "Jul - Dec 2023",
    highlights: [
      "Optimized backend operations by enhancing SQL queries, ASP.NET integration, and database performance, reducing system latency",
      "Developed a Python-based encryption module that strengthened password security and met client audit standards",
      "Streamlined data pipelines using Hadoop and Spark while leading a 5-member intern team, delivering projects on time",
    ],
    skills: ["SQL", "ASP.NET", "Python", "Hadoop", "Spark"],
  },
  {
    type: "education",
    title: "BE in Electronics & Telecommunication",
    organization: "University of Mumbai",
    location: "Mumbai, India",
    period: "2019 - 2023",
    highlights: [
      "Built a strong foundation in engineering principles, Python, SQL, and database management",
      "Developed skills in data warehousing techniques and analytical problem-solving",
    ],
  },
]

function TimelineCard({ item, index }: { item: JourneyItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0)
  const isWork = item.type === "work"

  return (
    <div className="group relative flex gap-6 md:gap-10">
      {/* Timeline connector */}
      <div className="relative flex flex-col items-center">
        {/* Dot / Icon */}
        <div
          className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 transition-all duration-300 ${
            item.current
              ? "border-accent bg-accent/20 shadow-lg shadow-accent/20"
              : isWork
                ? "border-primary/50 bg-primary/10 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10"
                : "border-chart-3/50 bg-chart-3/10 group-hover:border-chart-3 group-hover:shadow-lg group-hover:shadow-chart-3/10"
          }`}
        >
          {isWork ? (
            <Briefcase
              className={`h-5 w-5 ${item.current ? "text-accent" : "text-primary"}`}
            />
          ) : (
            <GraduationCap className="h-5 w-5 text-chart-3" />
          )}
          {item.current && (
            <span className="absolute -top-1 -right-1 h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
            </span>
          )}
        </div>
        {/* Vertical line */}
        {index < journeyItems.length - 1 && (
          <div className="w-px flex-1 bg-border" />
        )}
      </div>

      {/* Content card */}
      <div className="mb-10 flex-1 pb-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left"
          aria-expanded={isExpanded}
        >
          <div
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              isExpanded
                ? item.current
                  ? "border-accent/30 bg-accent/5 shadow-lg shadow-accent/5"
                  : isWork
                    ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                    : "border-chart-3/30 bg-chart-3/5 shadow-lg shadow-chart-3/5"
                : "border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
            }`}
          >
            {/* Card header */}
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Type badge + period */}
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-medium ${
                        isWork
                          ? item.current
                            ? "bg-accent/15 text-accent"
                            : "bg-primary/15 text-primary"
                          : "bg-chart-3/15 text-chart-3"
                      }`}
                    >
                      {isWork ? "EXPERIENCE" : "EDUCATION"}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        CURRENT
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      isWork
                        ? item.current
                          ? "text-accent"
                          : "text-primary"
                        : "text-chart-3"
                    }`}
                  >
                    {item.organization}
                  </p>

                  {/* Meta row */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Expand toggle */}
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-all duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`grid transition-all duration-300 ${
                  isExpanded
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {/* Divider */}
                  <div
                    className={`mb-4 h-px ${
                      isWork
                        ? item.current
                          ? "bg-accent/20"
                          : "bg-primary/20"
                        : "bg-chart-3/20"
                    }`}
                  />

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {item.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                            isWork
                              ? item.current
                                ? "bg-accent/60"
                                : "bg-primary/60"
                              : "bg-chart-3/60"
                          }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium ${
                            isWork
                              ? item.current
                                ? "border-accent/20 bg-accent/10 text-accent"
                                : "border-primary/20 bg-primary/10 text-primary"
                              : "border-chart-3/20 bg-chart-3/10 text-chart-3"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24">
      {/* Background accents */}
      <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-accent">{"02."}</span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              My Journey
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A timeline of my professional experience and education, from
          engineering foundations to data-driven problem solving.
        </p>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/15">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              Experience
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-chart-3/15">
              <GraduationCap className="h-3.5 w-3.5 text-chart-3" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              Education
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              Current Role
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12">
          {journeyItems.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
