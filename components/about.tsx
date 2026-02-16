export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">About Me</h2>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am currently pursuing a Master of Science in Information Management at the
              University of Illinois at Urbana-Champaign. My Bachelor{"'"}s degree in Electronics
              and Telecommunication Engineering, along with my previous internship experience,
              has provided me with a solid foundation in Python, SQL, Database Management,
              and Data Warehousing techniques.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I am passionate about generating useful insights using raw data, that spur
              corporate innovation and expansion. I am always eager to embrace new skills
              and experiences.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              When I am not troubleshooting python scripts, creating dashboards, or completing
              assignments, I like to utilize my time by doing craftwork, or just dancing around.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Beyond the Resume */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm text-primary">
                {"// beyond_resume.md"}
              </h3>
              <h4 className="mb-4 text-lg font-semibold text-foreground">Beyond the Resume</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">{"//"}</span>
                  <span>My managers have often referred to me as a {"'"}curious mind,{"'"} recognizing my eagerness to learn new things and my inquisitiveness about understanding the {"'"}why{"'"} behind them.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">{"//"}</span>
                  <span>I have completed 6 years of training in classical Carnatic Indian singing, a practice I cherish deeply.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">{"//"}</span>
                  <span>I hold a 7-year certification in Bharatnatyam, a classical Indian dance form that I am deeply passionate about and love performing.</span>
                </li>
              </ul>
            </div>

            {/* What I Enjoy */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 text-lg font-semibold text-foreground">What I Enjoy</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Craftwork", icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 2.25C6.2 2.66 3.19 4.26 1 6.62m14.59 7.75L9.75 20.75" },
                  { name: "Dance", icon: "M12 2v20M2 12h20" },
                  { name: "Travel", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2" },
                  { name: "Coding", icon: "m16 18 6-6-6-6M8 6l-6 6 6 6" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>
                    {item.name}
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
