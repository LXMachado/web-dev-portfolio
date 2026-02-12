import React from "react"

const services = [
  {
    title: "High-converting marketing sites",
    description:
      "Launch a polished site that clarifies your offer, builds trust, and turns visitors into leads.",
  },
  {
    title: "Product-ready web apps",
    description:
      "From dashboards to portals, I build reliable frontends and APIs that grow with your business.",
  },
  {
    title: "Automations + integrations",
    description:
      "Connect tools, APIs, and workflows to save time and keep data flowing across your stack.",
  },
  {
    title: "Ongoing improvements",
    description:
      "Monthly iteration, performance tuning, and new features so your product never stalls.",
  },
]

const Services = () => {
  const handleClick = () => {
    const section = document.getElementById("pricing")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="section-shell">
      <div className="section-header">
        <h2 className="section-title">Services built for outcomes</h2>
        <p className="section-subtitle">
          I help founders, teams, and growing businesses ship digital work that sells, scales, and stays reliable.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={handleClick}>
            <div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-ink">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-ink-muted/90">
                {service.description}
              </p>
            </div>
            <span className="service-cta">See what this includes →</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
