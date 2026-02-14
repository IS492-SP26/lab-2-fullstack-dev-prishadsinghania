"use client"

import { Code, Wrench, Server, Loader } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Python", "SQL", "R", "C#", "HTML", "CSS3", "asp.NET"],
    color: "border-primary/30 hover:border-primary text-primary",
    iconColor: "text-primary",
    bg: "bg-primary/5",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["AWS", "Tableau", "Power BI", "Excel", "NumPy", "Pandas", "neo4j", "MySQL", "LLMs", "Git", "MATLAB"],
    color: "border-accent/30 hover:border-accent text-accent",
    iconColor: "text-accent",
    bg: "bg-accent/5",
  },
  {
    title: "Big Data Techniques",
    icon: Server,
    skills: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "Apache Hive"],
    color: "border-chart-3/30 hover:border-chart-3 text-chart-3",
    iconColor: "text-chart-3",
    bg: "bg-chart-3/5",
  },
  {
    title: "Skills in Progress",
    icon: Loader,
    skills: ["Databricks", "Heroku", "Snowflake", "Looker Studio"],
    color: "border-chart-5/30 hover:border-chart-5 text-chart-5",
    iconColor: "text-chart-5",
    bg: "bg-chart-5/5",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-accent">{"03."}</span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {"Skills & Technologies"}
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        {/* Tech marquee */}
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="animate-marquee flex whitespace-nowrap">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="mx-3 font-mono text-sm text-muted-foreground/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-5 py-3">
                  <Icon className={`h-5 w-5 ${category.iconColor}`} />
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {category.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 p-5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-all hover:scale-105 ${category.color} ${category.bg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
