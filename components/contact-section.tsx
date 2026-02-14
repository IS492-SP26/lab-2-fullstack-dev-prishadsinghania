"use client"

import { useState, type FormEvent } from "react"
import { Mail, Phone, Send, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-accent">{"04."}</span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Feedback
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/30 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-chart-3/60" />
              <span className="h-3 w-3 rounded-full bg-chart-4/60" />
              <span className="h-3 w-3 rounded-full bg-accent/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                send_message.tsx
              </span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 p-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs font-medium text-muted-foreground">
                  {"// name"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs font-medium text-muted-foreground">
                  {"// email"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs font-medium text-muted-foreground">
                  {"// message"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full resize-none rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              {"I'd love to hear from you! Feel free to reach out for collaborations, feedback, or just to say hello."}
            </p>

            <div className="space-y-3">
              <a
                href="tel:2173908989"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">phone</p>
                  <p className="text-sm font-medium text-foreground">(217) 390-8989</p>
                </div>
              </a>

              <a
                href="mailto:prishadsinghania@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">email</p>
                  <p className="text-sm font-medium text-foreground">prishadsinghania@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-3 pt-4">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {"// connect"}
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  { href: "https://github.com/prishadsinghania", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/prisha-singhania-ab9448224/", label: "LinkedIn" },
                  { href: "https://medium.com/@prishadsinghania", label: "Medium" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <span className="text-sm font-medium text-foreground">{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
