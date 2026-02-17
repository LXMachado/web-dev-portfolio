import React from "react"

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative isolate overflow-hidden px-6 py-24 sm:px-10 sm:py-28"
      id="hero"
    >
      <div className="absolute inset-0 -z-30 bg-noise bg-[length:120px_120px] opacity-20" aria-hidden="true"></div>
      <div className="absolute inset-x-0 -top-40 -z-40 h-96 blur-3xl" aria-hidden="true">
        <div className="mx-auto h-full max-w-4xl animate-gradient-pan rounded-full bg-gradient-to-r from-sky-500/40 via-indigo-500/30 to-purple-500/40 opacity-60"></div>
      </div>
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-12 lg:min-h-[70vh]">
        <div className="w-full space-y-8 text-center">
          <span className="hero-kicker">
            Product-ready websites & web apps
          </span>
          <h1 className="text-5xl font-heading font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05] xl:text-[4.75rem] dark:text-ink">
            I build digital experiences that turn visitors into clients.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-[1.9] dark:text-ink/75">
            I help businesses ship fast, high-performing websites and web apps. Clear scope, clear pricing, and delivery you can count on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="button-primary"
              onClick={() => scrollToSection("pricing")}
            >
              Start a project
            </button>
            <button
              type="button"
              className="button-secondary"
              onClick={() => scrollToSection("projects")}
            >
              View case studies
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="stat-pill">Full-stack delivery</span>
            <span className="stat-pill">Fast turnaround</span>
            <span className="stat-pill">Clear communication</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
