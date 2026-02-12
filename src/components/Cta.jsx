import React from "react"

const Cta = () => {
  const handleClick = () => {
    const section = document.getElementById("contact")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="section-shell">
      <div className="cta-panel">
        <div>
          <h2 className="text-3xl font-heading font-semibold text-slate-900 sm:text-4xl dark:text-ink">
            Ready to ship your next project?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-ink-muted/90">
            Share a brief overview and I will respond with next steps and availability within 24 hours.
          </p>
        </div>
        <button className="button-primary" onClick={handleClick}>
          Book a call
        </button>
      </div>
    </section>
  )
}

export default Cta
