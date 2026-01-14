import { motion } from 'framer-motion'

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold">Education & Certificates</motion.h2>
      <div className="mt-8 grid gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
          <div className="text-neutral-200 font-medium">Ordinary Level</div>
          <div className="text-neutral-400 mt-1">KHS</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
          <div className="text-neutral-200 font-medium">Advanced Level</div>
          <div className="text-neutral-400 mt-1">KASS</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
          <div className="text-neutral-200 font-medium">Certificate</div>
          <div className="text-neutral-400 mt-1">Machine Learning concepts using Python</div>
        </motion.div>
      </div>
    </div>
  )
}
