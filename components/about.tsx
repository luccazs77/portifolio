"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "10+", label: "Projetos entregues" },
 
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex items-center gap-4 mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            Sobre mim
          </h2>
          <div
            className={`flex-1 h-px bg-border transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Sou um desenvolvedor apaixonado por criar{" "}
              <span className="text-foreground font-medium">interfaces acessíveis</span> e{" "}
              <span className="text-foreground font-medium">pixel-perfect</span> que combinam design
              cuidadoso com engenharia robusta.
            </p>
            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Meu trabalho está na interseção entre design e desenvolvimento, criando experiências que
              não apenas parecem ótimas, mas são meticulosamente construídas para{" "}
              <span className="text-primary">performance</span> e{" "}
              <span className="text-primary">usabilidade</span>.
            </p>
            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Atualmente focado em construir produtos digitais escaláveis, trabalhando com equipes
              multidisciplinares para implementar as melhores práticas em{" "}
              <span className="text-foreground font-medium">acessibilidade web</span>.
            </p>

          
            <div
              className={`pt-6 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm text-muted-foreground mb-4">Tecnologias que trabalho:</p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${600 + index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

         
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
              
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <span className="text-4xl md:text-5xl font-bold text-primary block mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
