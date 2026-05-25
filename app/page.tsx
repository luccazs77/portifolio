import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import SkillsSection from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Cursor } from "@/components/cursor"

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
