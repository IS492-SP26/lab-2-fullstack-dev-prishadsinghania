"use client"

import { useState, useEffect, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"

interface FeedbackItem {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

function StarRating({
  rating,
  onRate,
  interactive = false,
}: {
  rating: number
  onRate?: (r: number) => void
  interactive?: boolean
}) {
  const [hover, setHover] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRate?.(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
          className={`transition-transform ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
          aria-label={`Rate ${star} stars`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={(hover || rating) >= star ? "#ff6b35" : "none"}
            stroke={(hover || rating) >= star ? "#ff6b35" : "#8888a0"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function Feedback() {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const supabase = createClient()

  const fetchFeedbacks = useCallback(async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setFeedbacks(data)
    }
  }, [supabase])

  useEffect(() => {
    fetchFeedbacks()

    // Real-time subscription
    const channel = supabase
      .channel("feedback-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback" },
        (payload) => {
          setFeedbacks((prev) => [payload.new as FeedbackItem, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!name.trim() || !message.trim() || rating === 0) {
      setError("Please fill in all fields and select a rating.")
      return
    }

    setSubmitting(true)

    const { error: insertError } = await supabase.from("feedback").insert({
      name: name.trim(),
      message: message.trim(),
      rating,
    })

    if (insertError) {
      setError("Failed to submit feedback. Please try again.")
      setSubmitting(false)
      return
    }

    setName("")
    setMessage("")
    setRating(0)
    setSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="feedback" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">05.</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Feedback</h2>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-2 font-mono text-sm text-primary">{"// send_feedback.tsx"}</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {"I'd love to hear from you! Feel free to share your thoughts, feedback, or just say hello."}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="feedback-name" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    {"// name"}
                  </label>
                  <input
                    id="feedback-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="feedback-message" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                    {"// message"}
                  </label>
                  <textarea
                    id="feedback-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your feedback message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs text-muted-foreground">
                    {"// rating"}
                  </label>
                  <StarRating rating={rating} onRate={setRating} interactive />
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}

                {submitted && (
                  <p className="text-sm text-chart-3">Thank you for your feedback!</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Feedback"}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                {"I'd love to hear from you! Feel free to reach out for collaborations, feedback, or just to say hello."}
              </p>
              <div className="flex flex-col gap-2 font-mono text-sm">
                <a href="tel:+12173908989" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  (217) 390-8989
                </a>
                <a href="mailto:prishadsinghania@gmail.com" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  prishadsinghania@gmail.com
                </a>
              </div>
              <div className="mt-2 flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground">{"// connect"}</span>
                <a href="https://github.com/prishadsinghania" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/prisha-singhania-data-analytics/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://medium.com/@prishadsinghania" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Feedback list */}
          <div>
            <h3 className="mb-6 font-mono text-sm text-muted-foreground">
              {"// recent_feedback "}
              <span className="text-primary">({feedbacks.length})</span>
            </h3>

            {feedbacks.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 py-16 text-center">
                <svg className="mb-4 text-muted-foreground/30" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <p className="text-sm text-muted-foreground">No feedback yet. Be the first!</p>
              </div>
            ) : (
              <div className="flex max-h-[600px] flex-col gap-4 overflow-y-auto pr-2">
                {feedbacks.map((fb) => (
                  <div
                    key={fb.id}
                    className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{fb.name}</h4>
                        <p className="font-mono text-xs text-muted-foreground">{formatDate(fb.created_at)}</p>
                      </div>
                      <StarRating rating={fb.rating} />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{fb.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
