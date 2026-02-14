"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Braces, Database, BrainCircuit } from "lucide-react"

const roles = ["Resourceful Engineer", "Solution Oriented", "Fast Learner"]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
          if (charIndex + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setDisplayText(currentRole.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
          if (charIndex - 1 === 0) {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(262 83% 58%) 1px, transparent 1px), linear-gradient(90deg, hsl(262 83% 58%) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-3/5 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Terminal-style label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent">
              {"data_analytics_engineer"}
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-foreground">{"Hi, I'm "}</span>
            <span className="bg-gradient-to-r from-primary via-chart-3 to-accent bg-clip-text text-transparent">
              Prisha
            </span>
            <br />
            <span className="text-foreground">Singhania</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I believe data has the power to unlock smarter decisions and
            meaningful change and I{"'"}m excited to be part of that journey.
          </p>

          {/* Typing animation */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2 font-mono backdrop-blur-sm">
            <span className="text-xs text-muted-foreground">{">"}</span>
            <span className="text-sm font-semibold text-primary">
              {displayText}
              <span className="animate-pulse text-accent">{"_"}</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="#projects"
              className="group relative overflow-hidden rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 -translate-x-full bg-accent/20 transition-transform group-hover:translate-x-0" />
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social icons */}
          <div className="mt-10 flex items-center justify-center gap-3 md:justify-start">
            {[
              { href: "https://www.linkedin.com/in/prisha-singhania-ab9448224/", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { href: "https://github.com/prishadsinghania", label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
              { href: "https://medium.com/@prishadsinghania", label: "Medium", path: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/10"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Image with floating tech icons */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            {/* Floating icons */}
            <div className="animate-float absolute -top-6 -left-6 z-20 rounded-xl border border-border bg-secondary/80 p-3 shadow-lg backdrop-blur-sm">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <div className="animate-float-slow absolute -top-4 -right-8 z-20 rounded-xl border border-border bg-secondary/80 p-3 shadow-lg backdrop-blur-sm" style={{ animationDelay: "1s" }}>
              <Database className="h-6 w-6 text-accent" />
            </div>
            <div className="animate-float absolute -bottom-4 -left-8 z-20 rounded-xl border border-border bg-secondary/80 p-3 shadow-lg backdrop-blur-sm" style={{ animationDelay: "2s" }}>
              <Braces className="h-6 w-6 text-chart-3" />
            </div>

            {/* Code snippet decoration */}
            <div className="animate-float-slow absolute -right-12 bottom-8 z-20 hidden rounded-lg border border-border bg-secondary/80 px-3 py-2 font-mono text-[10px] text-muted-foreground shadow-lg backdrop-blur-sm sm:block" style={{ animationDelay: "0.5s" }}>
              <span className="text-primary">{"import"}</span>{" "}
              <span className="text-accent">{"data"}</span>
              <br />
              <span className="text-chart-3">{"model"}</span>
              <span className="text-muted-foreground">{".fit()"}</span>
            </div>

            {/* Glowing ring */}
            <div className="absolute -inset-4 animate-pulse-glow rounded-full border-2 border-primary/20" />
            <div className="absolute -inset-8 animate-pulse-glow rounded-full border border-accent/10" style={{ animationDelay: "1.5s" }} />

            {/* Profile image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/40 shadow-2xl shadow-primary/20 sm:h-80 sm:w-80">
              <Image
                src="/images/profile.jpg"
                alt="Prisha Singhania"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section" className="group flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  )
}
