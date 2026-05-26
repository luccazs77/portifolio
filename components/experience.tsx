"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [

  {
    period: "2025 — 2026",
    title: "Assistente de Inovação",
    company: "Oxygeni Hub",
    companyUrl: "#",
    description:
      "Criei websites responsivos e landing pages para diversos clientes. Colaborei com designers para traduzir mockups em código funcional.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Tailwind CSS","Node.js","TypeScript"],
  },
  {
    period: "2024 — 2026",
    title: "Mentor do Incode Tech School",
    company: "Oxygeni Hub",
    companyUrl: "#",
    description:
      "Como mentor na Incode Tech School, desenvolvendo ainda mais minhas capacidades de comunicação e trabalho em equipe.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Python"],
  },
   {
    period: "2024 — 2025",
    title: "Jovem Aprendiz",
    company: "Oxygeni Hub",
    companyUrl: "#",
    description:
      "Criei websites responsivos e landing pages para diversos clientes. Colaborei com designers para traduzir mockups em código funcional.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Tailwind CSS","Node.js","TypeScript"],
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden bg-card/30"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex items-center gap-4 mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            Experiência
          </h2>
          <div
            className={`flex-1 h-px bg-border transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </div>

        
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={exp.companyUrl}
                className="block p-6 rounded-xl transition-all duration-300 hover:bg-card border border-transparent hover:border-border"
              >
                <div className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-8">
                
                  <span className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </span>

                  <div>
                    
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                      <span className="text-muted-foreground font-normal">·</span>
                      <span className="text-primary">{exp.company}</span>
                      <ExternalLink
                        className={`w-4 h-4 transition-all duration-300 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 -translate-y-0"
                            : "opacity-0 -translate-x-1 translate-y-1"
                        }`}
                      />
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>

              {/* Animated Line */}
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-primary rounded-full transition-all duration-300 ${
                  hoveredIndex === index ? "h-full opacity-100" : "h-0 opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Resume Link */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            Ver currículo completo
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
