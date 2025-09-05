// Simple section wrapper to keep consistent spacing and max-width
import type { ReactNode } from "react"

export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {title ? (
          <h2 className="mb-6 text-white text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
