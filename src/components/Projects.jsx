import React from "react"

const projects = [
  {
    name: "Tinnie House Records",
    summary: "Modern web application for showcasing electronic music catalog with seamless audio playback experience.",
    problem: "Needed a polished, responsive platform to showcase artists, releases, and audio previews without relying on external services.",
    solution: "Built a static React application with built-in music player, dark mode support, and Netlify Forms integration for contact functionality.",
    result: "Delivered a fast, accessible music catalog with inline audio previews and streamlined release promotion capabilities.",
    stack: "React, TypeScript, Vite, Tailwind CSS, shadcn/ui",
    link: "https://github.com/LXMachado/tinnie-house-revamp",
  },
  {
    name: "E-Commerce Platform",
    summary: "Full-stack e-commerce solution with modern React frontend and Laravel API backend.",
    problem: "Needed a scalable online store with seamless user experience and robust admin controls.",
    solution: "Built a complete e-commerce platform with product management, cart functionality, and secure checkout.",
    result: "Delivered a fast, responsive shopping experience with streamlined inventory management.",
    stack: "React, Laravel, Tailwind CSS, MySQL",
    link: "https://github.com/LXMachado/e-commerce-React-laravel-tailwind",
  },
  {
    name: "Nazkatech Headless Shopify",
    summary: "Headless e-commerce storefront leveraging Shopify's backend with a custom frontend.",
    problem: "Required a unique brand experience beyond standard Shopify themes.",
    solution: "Implemented a headless architecture with custom UI components and optimized performance.",
    result: "Achieved faster page loads and a tailored shopping experience that stands out.",
    stack: "Next.js, Shopify Storefront API, Tailwind CSS",
    link: "https://github.com/LXMachado/nazkatech-headless-shopify",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="section-header">
        <h2 className="section-title">Featured case studies</h2>
        <p className="section-subtitle">
          A few recent builds focused on clarity, speed, and measurable business outcomes.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="case-card">
            <div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-ink">
                {project.name}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-ink-muted/90">
                {project.summary}
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-ink-muted/90">
                <p><span className="case-label">Problem:</span> {project.problem}</p>
                <p><span className="case-label">Solution:</span> {project.solution}</p>
                <p><span className="case-label">Result:</span> {project.result}</p>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-500 dark:text-ink-muted">
                {project.stack}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary mt-6 w-full justify-center"
            >
              View build details
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
