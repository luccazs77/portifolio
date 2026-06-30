"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Code2, GraduationCap, MapPin } from "lucide-react"

// Coloque sua foto dentro da pasta public e troque o caminho abaixo.
// Exemplo: public/foto-pedro.jpg vira "/foto-pedro.jpg"
const profileImage = "/placeholder-user.jpg"

const quickInfo = [
  { icon: Code2, label: "Front-end Developer" },
  { icon: GraduationCap, label: "Engenharia de Software" },
  { icon: MapPin, label: "São Luís, MA" },
]

const skills = ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Node.js"]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 flex items-center gap-4">
          <h2
            className={`text-3xl font-bold transition-all delay-100 duration-700 md:text-4xl ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
          >
            Sobre mim
          </h2>
          <div
            className={`h-px flex-1 origin-left bg-border transition-all delay-200 duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-center">
          <div
            className={`relative mx-auto w-full max-w-[360px] transition-all delay-200 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="absolute -inset-3 rounded-full border border-primary/25" />
            <div className="absolute -inset-8 rounded-full border border-border/70" />

            <div className="relative aspect-square overflow-hidden rounded-full border border-border bg-card shadow-[0_24px_90px_-52px_oklch(0.75_0.15_180/0.85)]">
              <Image
                src="/ChatGPT Image 30 de jun. de 2026, 15_26_49.png"
                alt="Foto de Pedro Lucas"
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border bg-background/85 px-5 py-4 text-center shadow-xl backdrop-blur">
              <p className="text-sm text-muted-foreground">Pedro Lucas</p>
             
            </div>
          </div>

          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all delay-300 duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-primary">
                Prazer, Pedro Lucas
              </p>

              <h3 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Crio interfaces modernas para ideias que precisam sair do papel.
              </h3>

              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Sou Desenvolvedor Front-end e Assistente de Inovação. Trabalho
                  criando experiências digitais responsivas, bonitas e fáceis de
                  usar, sempre buscando equilíbrio entre visual, performance e
                  clareza.
                </p>
                <p>
                  Curso Engenharia de Software e evoluo na prática com projetos,
                  colaboração em equipe e soluções que geram valor para usuários
                  e organizações.
                </p>
              </div>
            </div>

            <div
              className={`grid gap-3 sm:grid-cols-3 transition-all delay-500 duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {quickInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col gap-6 border-t border-border pt-6 transition-all delay-700 duration-700 lg:flex-row lg:items-center lg:justify-between ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
             

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
