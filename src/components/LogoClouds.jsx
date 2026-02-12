import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const LogoClouds = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-shell"
      id="toolkit"
    >
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="section-header">
        <h2 className="section-title">Built with a modern toolkit</h2>
        <p className="section-subtitle">
          I choose stacks that are fast, stable, and easy to maintain long-term.
        </p>
      </motion.div>
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mt-12">
        <div className="wrap flex flex-wrap justify-center gap-10 xl:gap-32">
          <img className="w-28 grayscale" src="/images/logo/javascript.svg" alt="JavaScript" />
          <img className="w-28 grayscale" src="/images/logo/react.svg" alt="React" />
          <img className="w-28 grayscale" src="/images/logo/nodejs.svg" alt="Node.js" />
          <img className="w-28 grayscale" src="/images/logo/tailwind.svg" alt="Tailwind" />
          <img className="w-28 grayscale" src="/images/logo/vite.svg" alt="Vite" />
          <img className="w-28 grayscale" src="/images/logo/postgresql.svg" alt="PostgreSQL" />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default LogoClouds
