import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold">Contact</motion.h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onSubmit={async (e) => {
            e.preventDefault()
            if (status === 'loading') return
            setStatus('loading')
            try {
              const form = e.currentTarget
              const data = new FormData(form)
              const res = await fetch('https://formspree.io/f/your-id', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: data,
              })
              if (res.ok) {
                setStatus('success')
                form.reset()
              } else {
                setStatus('error')
              }
            } catch (err) {
              setStatus('error')
            }
          }}
          className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30"
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-neutral-300 mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded-md bg-neutral-950/60 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-3 py-2 rounded-md bg-neutral-950/60 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full px-3 py-2 rounded-md bg-neutral-950/60 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" placeholder="How can I help?" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 transition-colors disabled:opacity-60" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-green-400">Thanks! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please try again later.</p>
            )}
          </div>
        </motion.form>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
          <div className="text-neutral-300">Email: <a className="text-cyan-400 hover:underline" href="mailto:geraldnemeyimana1@gmail.com">geraldnemeyimana1@gmail.com</a></div>
          <div className="text-neutral-300 mt-2">Phone: <a className="text-cyan-400 hover:underline" href="tel:0726313510">0726313510</a></div>
          <div className="text-neutral-300 mt-2">LinkedIn: <a className="text-cyan-400 hover:underline" href="#" target="_blank" rel="noreferrer">View profile</a></div>
          <div className="text-neutral-300 mt-2">GitHub: <a className="text-cyan-400 hover:underline" href="#" target="_blank" rel="noreferrer">View repositories</a></div>
        </motion.div>
      </div>
    </div>
  )
}
