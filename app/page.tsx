"use client"

import { useCallback } from "react"
import { SiteNavbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { ContactLinks } from "@/components/contact-links"
import { motion } from "framer-motion"

export default function Page() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <main className="bg-neutral-950 text-white-900">
      <SiteNavbar />
      <Hero onViewWork={() => scrollTo("projects")} />

      <Section id="about" title="About Me">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl text-base leading-relaxed text-neutral-300"
        >
          I am a 2nd year Computer Science student from India, deeply passionate about building at the intersection of
          Machine Learning, Blockchain, and real-world problem solving. Over the past year, I’ve explored projects
          ranging from AI-based crowd management systems to accreditation process automation with blockchain
          (AccrediFlow). I actively participate in hackathons like Digibit, HackHeritage, and IdeaTex, where I’ve won
          and placed in the top ranks, and I regularly attend workshops to stay updated with the latest in tech. One of
          my favorite experiences was participating in a Cypher event at Jadavpur University’s Srijan 2025, where I was
          a finalist — an event that deepened my interest in cryptography and blockchain security. Beyond academics, I’m
          equally driven by music — as a violinist, I’ve learned the value of discipline and creativity, qualities I
          bring into my tech projects as well. I see ETHGlobal Pragma as the perfect next step to connect with fellow
          builders, push my boundaries, and contribute to the Web3 ecosystem.
        </motion.p>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-5 sm:grid-cols-2">
          <ProjectCard
            title="AccrediFlow"
            description="Web-based accreditation process automation using AI and blockchain."
            github="https://github.com/RIMOOFFICIAL06/accrediflow-proj"
          />
          <ProjectCard
            title="Medico-Bot"
            description="Conceptual design of an AI-driven healthcare assistant recommending tests, predicting anomalies, and connecting patients with doctors."
            status="Under progress"
          />
          <ProjectCard
            title="AI-Based Crowd Management (Research Project)"
            description="Early-stage work on real-time monitoring, congestion prediction, and smart exit guidance using ML."
            status="Under progress"
          />
        </div>
      </Section>

      <Section id="hackathons" title="Hackathons & Achievements">
        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="list-inside list-disc space-y-2 text-neutral-300"
        >
          <li>Winner at Digibit 2025</li>
          <li>1st Runner-up at IdeaTex 2025 (Google Developers Group) for proposing a blockchain-based solution</li>
          <li>Built projects at HackHeritage 2025 (36-hour hackathon)</li>
        </motion.ul>
      </Section>

      <Section id="contact" title="Contact">
        <div className="space-y-4">
          <ContactLinks />
          <div className="rounded-md border border-neutral-800 p-4 text-sm text-neutral-300">
            <span className="block font-medium text-neutral-100">ENS Domain</span>
            <span>Coming soon — space reserved for your ENS address.</span>
          </div>
        </div>
      </Section>

      <footer className="px-4 pb-10 pt-6">
        <div className="mx-auto max-w-5xl text-xs text-neutral-300">
          © {new Date().getFullYear()} Ritamvar Sen. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
