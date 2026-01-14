import { motion } from 'framer-motion'

const projects = [
  {
    title: 'School Material Management System',
    stack: ['React', 'Node.js', 'MongoDB'],
    desc: 'End-to-end system to manage school materials, inventory, and workflows with a modern React frontend and Node.js backend.',
    image: null,
  },
  {
    title: 'Imbabura – Solar Stove Purchasing System',
    stack: ['React', 'Node.js'],
    desc: 'A solar-stove buying and description platform supporting catalog, orders, and streamlined user experience.',
    image: null,
  }
]

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold">Projects</motion.h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-xl border border-neutral-200 bg-white/70 shadow-sm overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:supports-[backdrop-filter]:bg-neutral-900/30"
            onMouseMove={(e) => {
              const target = e.currentTarget
              const rect = target.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              target.style.setProperty('--x', `${x}px`)
              target.style.setProperty('--y', `${y}px`)
            }}
          >
            <div className="relative">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.15), transparent 40%)',
              }} />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{p.title}</h3>
                <div className="flex gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-xs dark:bg-neutral-800 dark:text-neutral-300">{s}</span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">{p.desc}</p>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="p-5 pt-4 flex gap-3">
              <a href="#" className="text-sm text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300">View details</a>
              <a href="#" className="text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300">Source</a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
