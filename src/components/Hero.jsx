import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
            Software Developer
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I am Gerald NEMEYIMANA, a freelance software developer and project analyst. I craft modern web and mobile experiences with React, Node.js, Laravel, Python, and Flutter. I care about clean architecture, performance, and delightful UX.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-colors ring-0 hover:ring-2 hover:ring-cyan-500/30">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-neutral-700 hover:border-neutral-600 text-neutral-200">Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-1">
            <div className="h-full w-full rounded-2xl bg-white border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
