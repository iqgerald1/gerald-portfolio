export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-900/80 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 text-sm text-neutral-400">
        © {new Date().getFullYear()} Gerald NEMEYIMANA. All rights reserved.
      </div>
    </footer>
  )
}
