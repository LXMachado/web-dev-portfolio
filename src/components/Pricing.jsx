import React from "react"

const tiers = [
  {
    name: "Starter Web Presence",
    price: "From $400 AUD",
    description: "Best for lean teams who need a polished, conversion-ready marketing site.",
    highlights: [
      "Up to 5 core sections",
      "Mobile-first design",
      "Basic SEO + analytics",
      "Contact form + lead capture",
    ],
  },
  {
    name: "Professional Web App",
    price: "From $1,800 AUD",
    description: "Ideal for service businesses and product teams who need workflows and data.",
    highlights: [
      "Frontend + backend build",
      "Forms, dashboards, or portals",
      "Integrations (email, CRM, CMS)",
      "Deployment + documentation",
    ],
    featured: true,
  },
  {
    name: "Custom Systems",
    price: "From $3,500 AUD",
    description: "For complex products, automation, and multi-system integrations.",
    highlights: [
      "Discovery + architecture",
      "Custom API integrations",
      "Auth + admin tooling",
      "Performance + scalability",
    ],
  },
]

const Pricing = () => {
  const handleStart = () => {
    const section = document.getElementById("contact")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="section-shell">
      <div className="section-header">
        <h2 className="section-title">Clear starting points</h2>
        <p className="section-subtitle">
          Pricing anchors scope and speed. Every project includes a custom plan and transparent milestones.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className={`pricing-card ${tier.featured ? "is-featured" : ""}`}>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-ink">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="pricing-badge">Most popular</span>
                )}
              </div>
              <p className="mt-4 text-3xl font-heading font-semibold text-slate-900 dark:text-ink">
                {tier.price}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-ink-muted/90">
                {tier.description}
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.highlights.map((item) => (
                <li key={item} className="pricing-item">
                  <span className="pricing-dot" aria-hidden="true"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="button-primary mt-8 w-full justify-center" onClick={handleStart}>
              Start here
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
