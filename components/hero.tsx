"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [typed, setTyped] = useState("")
  const fullText = "data_analytics_engineer"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6">
            <div className="font-mono text-sm text-primary">
              {typed}
              <span className="animate-pulse-glow">_</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {"Hi, I'm "}
              <span className="text-primary">Prisha</span>
              <br />
              <span className="text-primary">Singhania</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I believe data has the power to unlock smarter decisions and
              meaningful change and I{"'"}m excited to be part of that journey.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
              </a>
              <a
                href="#feedback"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-mono text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 font-mono text-xs text-muted-foreground animate-float">
              scroll
              <svg className="ml-1 inline" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </div>
          </div>

          {/* Profile Photo - public/images/prisha.jpg inside circle */}
          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl opacity-60" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 shadow-[0_0_40px_rgba(0,212,255,0.15)] md:h-72 md:w-72 lg:h-80 lg:w-80">
              <Image
                src="/images/prisha.jpg"
                alt="Prisha Singhania"
                width={320}
                height={320}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
