"use client"

import { useState } from "react"

const projects = [
  {
    title: "ML Deployment with AWS",
    description: "Deployed a real-time multi-class classification model on AWS SageMaker with full pipeline integration.",
    details: "Built an end-to-end ML pipeline using AWS SageMaker for model training, deployment, and real-time inference. Integrated S3 for data storage, CloudWatch for monitoring, and API Gateway for serving predictions.",
    tags: ["Python", "AWS SageMaker", "Scikit-learn"],
    github: "https://github.com/prishadsinghania",
  },
  {
    title: "Music Genre Classifier",
    description: "CRNN model implementation to identify the Genre of an audio file.",
    details: "Implemented a Convolutional Recurrent Neural Network combining CNNs for feature extraction from mel-spectrograms with RNNs for temporal sequence modeling, achieving high accuracy across multiple music genres.",
    tags: ["Python", "Keras", "TensorFlow"],
    github: "https://github.com/prishadsinghania",
  },
  {
    title: "Fashion Market Analysis",
    description: "Analysis of Dataset in R to generate insights for stakeholders.",
    details: "Performed comprehensive exploratory data analysis on fashion retail data using R, creating statistical models and visualizations to identify market trends, consumer behavior patterns, and actionable business insights.",
    tags: ["R", "Statistics", "Data Analysis"],
    github: "https://github.com/prishadsinghania/Fast-Fashion_Supply-Chain-Analysis",
  },
  {
    title: "Melody Metrics",
    description: "Spotify and YouTube Data Visualization in Power BI for insights.",
    details: "Created interactive Power BI dashboards analyzing Spotify and YouTube music data, utilizing DAX measures for complex calculations and data modeling to uncover streaming trends and artist performance metrics.",
    tags: ["Power BI", "DAX", "Data Viz"],
    github: "https://github.com/prishadsinghania/Melody-Metrics-Dashboard-PowerBI",
  },
  {
    title: "10K Risk Analysis (Item 1A)",
    description: "NLP-driven analysis of Item 1A risk disclosures in SEC 10-K filings from 2015-2024.",
    details: "Applied Natural Language Processing techniques to analyze risk factor disclosures in SEC 10-K filings, identifying trends in corporate risk reporting over a decade using text mining and sentiment analysis.",
    tags: ["Python", "NLP", "Jupyter"],
    github: "https://github.com/prishadsinghania/10K-Risk-Analysis-Item1A",
  },
  {
    title: "Sign Language Detector",
    description: "A Python model which uses built-in webcam to detect gestures.",
    details: "Developed a real-time sign language detection system using computer vision and machine learning, leveraging OpenCV for hand tracking and a trained classifier for gesture recognition through webcam input.",
    tags: ["Python", "CV", "ML"],
    github: "https://github.com/prishadsinghania",
  },
]

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">My Projects</h2>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7V5a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              {expanded === i && (
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground/80 animate-fade-in-up">{project.details}</p>
              )}

              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="mb-4 self-start font-mono text-xs text-primary transition-colors hover:text-accent"
              >
                {expanded === i ? "Hide details" : "Show details"}
              </button>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                View on GitHub
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
