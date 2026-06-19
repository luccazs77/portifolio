"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Skill = {
  name: string
  description: string
  logos: string[]
  featured?: boolean
}

const skills: Skill[] = [
  {
    name: "React",
    description: "Interfaces componentizadas, performáticas e fáceis de evoluir.",
    logos: ["/skills/react.svg"],
    featured: true,
  },
  {
    name: "Next.js",
    description: "Aplicações modernas com renderização otimizada e boas práticas.",
    logos: ["/skills/nextjs.svg"],
    featured: true,
  },
  {
    name: "TypeScript",
    description: "Código mais seguro, previsível e preparado para crescer.",
    logos: ["/skills/typescript.svg"],
  },
  {
    name: "JavaScript",
    description: "Experiências interativas com uma base sólida de linguagem.",
    logos: ["/skills/javascript.svg"],
  },
  {
    name: "HTML & CSS",
    description: "Estruturas semânticas, acessíveis e responsivas.",
    logos: ["/skills/html5.svg", "/skills/css.svg"],
  },
  {
    name: "Tailwind CSS",
    description: "Layouts consistentes e desenvolvimento visual ágil.",
    logos: ["/skills/tailwindcss.svg"],
  },
  {
    name: "Docker",
    description: "Ambientes consistentes e aplicações executadas em containers.",
    logos: ["/skills/docker.svg"],
  },
  {
    name: "GitHub Actions",
    description: "Automação de testes, builds e processos de integração contínua.",
    logos: ["/skills/github-actions.svg"],
  },
  
]

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-center gap-4">
          
          <h2
            className={`text-3xl font-bold transition-all delay-100 duration-700 md:text-4xl ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
          >
            Habilidades
          </h2>
          <div
            className={`ml-2 h-px flex-1 origin-left bg-border transition-all delay-200 duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </div>

        <p
          className={`mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Tecnologias que uso para construir interfaces rápidas, acessíveis e
          levar aplicações com segurança até produção.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            return (
              <article
                key={skill.name}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_50px_-24px_oklch(0.75_0.15_180/0.45)] ${
                  skill.featured ? "border-primary/25" : "border-border"
                } ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 80}ms` }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 min-w-12 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-border bg-background/70 px-2 transition-all duration-300 group-hover:border-primary/40 group-hover:scale-105">
                    {skill.logos.map((logo) => (
                      <Image
                        key={logo}
                        src={logo}
                        alt={`Logo ${skill.name}`}
                        width={26}
                        height={26}
                        className="h-6 w-6 object-contain"
                      />
                    ))}
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
