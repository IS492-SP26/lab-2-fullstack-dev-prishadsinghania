"use client"

import { Palette, Music, Plane, Code, GraduationCap, Briefcase } from "lucide-react"

const interests = [
  { icon: Palette, label: "Craftwork", color: "text-primary" },
  { icon: Music, label: "Dance", color: "text-chart-3" },
  { icon: Plane, label: "Travel", color: "text-accent" },
  { icon: Code, label: "Coding", color: "text-chart-5" },
]

const timeline = [
  {
    icon: GraduationCap,
    title: "MS in Information Management",
    subtitle: "University of Illinois, Urbana-Champaign",
    period: "Current",
  },
  {
    icon: GraduationCap,
    title: "BE in Electronics & Telecommunication",
    subtitle: "University of Mumbai",
    period: "Completed",
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    subtitle: "Python, SQL, Database Management, Data Warehousing",
    period: "Professional",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-accent">{"01."}</span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              About Me
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Left content */}
          <div className="space-y-6 md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              I am currently pursuing a Master of Science in Information
              Management at the University of Illinois at Urbana-Champaign. My
              Bachelor{"'"}s degree in Electronics and Telecommunication
              Engineering, along with my previous internship experience, has
              provided me with a solid foundation in Python, SQL, Database
              Management, and Data Warehousing techniques.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am passionate about generating useful insights using raw data,
              that spur corporate innovation and expansion. I am always eager to
              embrace new skills and experiences.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I am not troubleshooting python scripts, creating dashboards,
              or completing assignments, I like to utilize my time by doing
              craftwork, or just dancing around.
            </p>

            {/* Terminal-style Beyond the Resume */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-chart-3/60" />
                <span className="h-3 w-3 rounded-full bg-chart-4/60" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  beyond_resume.md
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Beyond the Resume
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "I hold a 7-year certification in Bharatnatyam, a classical Indian dance form that I am deeply passionate about and love performing.",
                    "I have completed 6 years of training in classical Carnatic Indian singing, a practice I cherish deeply.",
                    "My managers have often referred to me as a 'curious mind,' recognizing my eagerness to learn new things and my inquisitiveness about understanding the 'why' behind them.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 font-mono text-xs text-primary">
                        {"//"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-8 md:col-span-2">
            {/* Education timeline */}
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Journey
              </h3>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.subtitle}
                      </p>
                      <span className="mt-1 inline-block rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-accent">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests grid */}
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                What I Enjoy
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  >
                    <item.icon
                      className={`h-7 w-7 transition-transform group-hover:scale-110 ${item.color}`}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
