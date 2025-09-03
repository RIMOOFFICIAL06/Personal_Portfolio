"use client"

import type React from "react"
import { useCallback } from "react"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string // hash id
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
]

export function SiteNavbar() {
  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#hero" onClick={(e) => onNavClick(e, "#hero")} className="font-semibold text-cyan-400">
          Ritamvar Sen
        </a>
        <nav>
          <ul className="flex items-center gap-4 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                  className="rounded px-2 py-1 text-neutral-300 transition-colors hover:text-cyan-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
