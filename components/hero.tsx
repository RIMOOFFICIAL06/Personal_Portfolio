"use client"

import { motion } from "framer-motion"

export function Hero({ onViewWork }: { onViewWork: () => void }) {
  return (
    <section id="hero" className="px-4 pb-10 pt-16 sm:pb-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="inline-block rounded px-2 py-1 font-mono text-xs text-cyan-400">
            {"ML × Blockchain • Builder"}
          </span>
          <h1 className="text-pretty text-3xl font-bold leading-tight text-neutral-100 sm:text-4xl md:text-5xl">
            Ritamvar Sen
          </h1>
          <p className="text-lg text-neutral-300">Student | ML & Blockchain Enthusiast</p>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
            {"I build AI & blockchain solutions for real-world problems."}
          </p>

          <pre className="max-w-2xl overflow-x-auto rounded-md border border-neutral-800 bg-neutral-950 p-3 text-sm text-neutral-300">
            {`const stack = ["TypeScript", "Next.js", "Tailwind", "Framer Motion", "Solidity"];
const interests = ["ML", "Blockchain", "Security", "Systems"];
// shipping fast, learning faster`}
          </pre>

          <div>
            <button
              onClick={onViewWork}
              className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-medium text-neutral-950 shadow transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              aria-label="View My Work"
            >
              View My Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
