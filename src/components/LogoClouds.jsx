import React from "react"

const LogoClouds = () => {
  return (
    <section className="section-shell" id="toolkit">
      <div className="section-header">
        <h2 className="section-title">Built with a modern toolkit</h2>
        <p className="section-subtitle">
          I choose stacks that are fast, stable, and easy to maintain long-term.
        </p>
      </div>
      <div className="mt-12">
        <div className="wrap flex flex-wrap justify-center gap-10 xl:gap-32">
          <img className="w-28 grayscale" src="/images/logo/javascript.svg" alt="JavaScript" />
          <img className="w-28 grayscale" src="/images/logo/react.svg" alt="React" />
          <img className="w-28 grayscale" src="/images/logo/nodejs.svg" alt="Node.js" />
          <img className="w-28 grayscale" src="/images/logo/tailwind.svg" alt="Tailwind" />
          <img className="w-28 grayscale" src="/images/logo/vite.svg" alt="Vite" />
          <img className="w-28 grayscale" src="/images/logo/postgresql.svg" alt="PostgreSQL" />
        </div>
      </div>
    </section>
  )
}

export default LogoClouds
