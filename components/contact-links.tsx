"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function ContactLinks() {
  return (
    <ul className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <li className="w-full sm:w-auto">
        <a
          href="https://github.com/RIMOOFFICIAL06"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-100 transition hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">GitHub</span>
          <span aria-hidden="true">GitHub</span>
        </a>
      </li>
      <li className="w-full sm:w-auto">
        <a
          href="https://www.linkedin.com/in/rimo06/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-100 transition hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">LinkedIn</span>
          <span aria-hidden="true">LinkedIn</span>
        </a>
      </li>
      <li className="w-full sm:w-auto">
        <a
          href="mailto:rimoofficial06@gmail.com"
          aria-label="Email rimoofficial06 at gmail dot com"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-100 transition hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Email</span>
          <span aria-hidden="true">Email</span>
        </a>
      </li>
    </ul>
  )
}
