const skillCategories = [
  {
    title: "Languages & Frameworks",
    count: 7,
    skills: ["Python", "SQL", "R", "C#", "HTML", "CSS3", "asp.NET"],
  },
  {
    title: "Tools & Technologies",
    count: 11,
    skills: ["AWS", "Tableau", "Power BI", "Excel", "NumPy", "Pandas", "neo4j", "MySQL", "LLMs", "Git", "MATLAB"],
  },
  {
    title: "Big Data Techniques",
    count: 4,
    skills: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "Apache Hive"],
  },
  {
    title: "Skills in Progress",
    count: 4,
    skills: ["Databricks", "Heroku", "Snowflake", "Looker Studio"],
  },
]

const allSkills = skillCategories.flatMap((c) => c.skills)

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Skills & Technologies</h2>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </div>

        {/* Marquee */}
        <div className="relative mb-16 overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee gap-4">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={i}
                className="shrink-0 rounded-lg border border-border bg-secondary px-4 py-2 font-mono text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-bold text-primary">
                  {cat.count}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
