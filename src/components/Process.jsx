import React from "react"

const steps = [
  {
    title: "Discovery & scope",
    description: "We define goals, users, and success metrics. You get a clear scope and timeline.",
  },
  {
    title: "Design & build",
    description: "I ship in focused milestones, with clear checkpoints and frequent updates.",
  },
  {
    title: "Launch & improve",
    description: "We go live, track performance, and iterate so the site keeps converting.",
  },
]

const Process = () => {
  return (
    <section id="process" className="section-shell">
      <div className="section-header">
        <h2 className="section-title">A simple, reliable process</h2>
        <p className="section-subtitle">
          You always know what is happening, what is next, and how we measure success.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="process-card">
            <span className="process-index">0{index + 1}</span>
            <h3 className="mt-4 text-xl font-heading font-semibold text-slate-900 dark:text-ink">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-ink-muted/90">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
