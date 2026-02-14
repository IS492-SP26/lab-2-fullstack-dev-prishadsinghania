"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp, Cpu, BarChart3, BrainCircuit, LineChart, FileText, HandMetal } from "lucide-react"

const projects = [
  {
    title: "ML Deployment with AWS",
    description: "Deployed a real-time multi-class classification model on AWS SageMaker with full pipeline integration.",
    accomplishments: [
      "Built and tuned a multi-class classification model for mobile price prediction using Python and Scikit-learn",
      "Deployed the model on AWS SageMaker with real-time inference via S3, IAM, and Boto3 integration",
    ],
    tags: ["Python", "AWS SageMaker", "Scikit-learn"],
    icon: Cpu,
    accent: "from-primary to-chart-3",
    link: "https://github.com/prishadsinghania/Azure-Deployed-Real-Estate-Price-Prediction",
  },
  {
    title: "Music Genre Classifier",
    description: "CRNN model implementation to identify the Genre of an audio file.",
    accomplishments: [
      "Developed a CRNN model, achieving 78.13% classification accuracy on a 10-class music genre dataset",
      "Pre-processed images, optimized model performance and accelerated training using Keras, TensorFlow",
    ],
    tags: ["Python", "Keras", "TensorFlow"],
    icon: BrainCircuit,
    accent: "from-chart-3 to-accent",
    link: "https://github.com/prishadsinghania",
  },
  {
    title: "Fashion Market Analysis",
    description: "Analysis of Dataset in R to generate insights for stakeholders.",
    accomplishments: [
      "Cleaned and prepared datasets, addressing missing values, identifiers, and outliers",
      "Evaluated Logistic Regression, ANOVA, Multiple Linear Regression models for important characteristics",
    ],
    tags: ["R", "Statistics", "Data Analysis"],
    icon: BarChart3,
    accent: "from-accent to-chart-5",
    link: "https://github.com/prishadsinghania/Fast-Fashion_Supply-Chain-Analysis",
  },
  {
    title: "Melody Metrics",
    description: "Spotify and YouTube Data Visualization in Power BI for insights.",
    accomplishments: [
      "Created Power BI dashboards to analyze music trends on Spotify and YouTube with advanced visuals",
      "Used DAX to create metrics like Total Engagement for audience and artist performance analysis",
    ],
    tags: ["Power BI", "DAX", "Data Viz"],
    icon: LineChart,
    accent: "from-chart-5 to-primary",
    link: "https://github.com/prishadsinghania/Melody-Metrics-Dashboard-PowerBI",
  },
  {
    title: "10K Risk Analysis (Item 1A)",
    description: "NLP-driven analysis of Item 1A risk disclosures in SEC 10-K filings from 2015-2024.",
    accomplishments: [
      "Built NLP pipeline for topic modeling and sentiment analysis of SEC 10-K Item 1A risk disclosures across sectors",
      "Generated cross-sector insights on readability, risk trends, and disclosure patterns over a 10-year period",
    ],
    tags: ["Python", "NLP", "Jupyter"],
    icon: FileText,
    accent: "from-primary to-accent",
    link: "https://github.com/prishadsinghania/10K-Risk-Analysis-Item1A",
  },
  {
    title: "Sign Language Detector",
    description: "A Python model which uses built-in webcam to detect gestures.",
    accomplishments: [
      "Developed a program integrated with webcam functionality to detect and translate sign language into text",
      "Optimized image recognition algorithms to ensure real-time, accurate conversion of gestures to text",
    ],
    tags: ["Python", "CV", "ML"],
    icon: HandMetal,
    accent: "from-chart-3 to-primary",
    link: "https://github.com/prishadsinghania",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-accent">{"02."}</span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              My Projects
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border sm:block" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.accent} opacity-60 transition-opacity group-hover:opacity-100`} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground">
              {project.title}
            </h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex-shrink-0 text-muted-foreground opacity-0 transition-all hover:text-primary group-hover:opacity-100"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Expandable accomplishments */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          {expanded ? "Hide" : "Show"} details
          {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>

        {expanded && (
          <ul className="mt-3 space-y-2">
            {project.accomplishments.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <span className="mt-1.5 font-mono text-primary">{">"}</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          View on GitHub
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
