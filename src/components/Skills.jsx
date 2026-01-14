import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Languages & Core',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Solidity'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Laravel', 'Flutter', 'Framer Motion'],
  },
  {
    title: 'Databases',
    items: ['MongoDB (NoSQL)', 'MySQL (SQL)'],
  },
  {
    title: 'ML & Data',
    items: ['Pandas', 'Seaborn', 'Matplotlib'],
  },
  {
    title: 'Design & Tools',
    items: ['Figma', 'GitHub', 'GitLab', 'Vercel', 'DevOps basics'],
  },
  {
    title: 'Soft skills',
    items: ['Fluent English', 'Teamwork', 'Leadership'],
  },
]

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold">Skills</motion.h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-neutral-200 bg-white/70 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="text-neutral-900 dark:text-neutral-200 font-medium">{g.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-700 text-sm dark:bg-neutral-800 dark:text-neutral-300">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
