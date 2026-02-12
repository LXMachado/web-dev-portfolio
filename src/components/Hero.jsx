import React, { Suspense, lazy, useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

const HeroCanvas = lazy(() => import("./HeroCanvas"))

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = shouldReduceMotion ? {} : {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const imageVariants = shouldReduceMotion ? {} : {
    hidden: { scale: 0.8, rotateY: -180 },
    visible: {
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  }

  return (
    <motion.section
      className="relative isolate overflow-hidden px-6 py-24 sm:px-10 sm:py-28"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="hero"
    >
      <div className="absolute inset-0 -z-30 bg-noise bg-[length:120px_120px] opacity-20" aria-hidden="true"></div>
      <div className="absolute inset-x-0 -top-40 -z-40 h-96 blur-3xl" aria-hidden="true">
        <div className="mx-auto h-full max-w-4xl animate-gradient-pan rounded-full bg-gradient-to-r from-sky-500/40 via-indigo-500/30 to-purple-500/40 opacity-60"></div>
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:min-h-[70vh] lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-1 w-full space-y-8 text-left lg:order-none"
          variants={itemVariants}
        >
          <motion.span
            className="hero-kicker"
            variants={itemVariants}
          >
            Product-ready websites & web apps
          </motion.span>
          <motion.h1
            className="text-5xl font-heading font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05] xl:text-[4.75rem] dark:text-ink"
            variants={itemVariants}
          >
            I build digital experiences that turn visitors into clients.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-[1.9] dark:text-ink/75"
            variants={itemVariants}
          >
            I help businesses ship fast, high-performing websites and web apps. Clear scope, clear pricing, and delivery you can count on.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="button-primary"
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              onClick={() => scrollToSection("pricing")}
            >
              Start a project
            </motion.button>
            <motion.button
              type="button"
              className="button-secondary"
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              onClick={() => scrollToSection("projects")}
            >
              View case studies
            </motion.button>
          </motion.div>
          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            <span className="stat-pill">Full-stack delivery</span>
            <span className="stat-pill">Fast turnaround</span>
            <span className="stat-pill">Clear communication</span>
          </motion.div>
        </motion.div>
        {isClient && (
          <motion.div
            className="order-2 flex w-full items-center justify-center lg:order-none"
            variants={imageVariants}
          >
            <div className="relative aspect-square w-full max-w-sm sm:max-w-md">
              <Suspense fallback={<div className="absolute inset-0 bg-slate-200/80 dark:bg-slate-900/60" aria-hidden="true" />}>
                <HeroCanvas reduceMotion={shouldReduceMotion} />
              </Suspense>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default Hero
