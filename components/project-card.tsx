"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  github?: string
  status?: string // e.g., "In Progress", "Research"
}

export function ProjectCard({ title, description, github, status }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="group rounded-lg border border-neutral-800 bg-neutral-950 p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
        {status ? (
          <span className="rounded border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-300">
            {status}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{description}</p>
      <div className="mt-4 flex items-center gap-3">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-sm text-neutral-300">GitHub: Coming soon</span>
        )}
      </div>
    </motion.article>
  )
}
