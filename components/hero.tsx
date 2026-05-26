"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
     
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "linear-gradient(135deg, oklch(0.75 0.15 180), oklch(0.6 0.15 200))",
            left: `${mousePosition.x * 30}%`,
            top: `${mousePosition.y * 30}%`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "linear-gradient(135deg, oklch(0.65 0.12 220), oklch(0.75 0.15 180))",
            right: `${(1 - mousePosition.x) * 20}%`,
            bottom: `${(1 - mousePosition.y) * 20}%`,
          }}
        />
      </div>

      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
       
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">Disponívell para novos projetos</span>
        </div>

        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span
            className={`block transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Olá, sou{" Luccazsz "}
            <span className="text-primary relative">
              Dev
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: isVisible ? 0 : 100,
                  }}
                />
              </svg>
            </span>
          </span>
          <span
            className={`block text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Front-End
          </span>
        </h1>

        
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Crio experiências digitais <span className="text-foreground font-medium">acessíveis</span>,{" "}
          <span className="text-foreground font-medium">pixel-perfect</span> e{" "}
          <span className="text-foreground font-medium">performáticas</span> para a web. Especializado em{" "}
          <span className="text-primary">React</span>, <span className="text-primary">Next.js</span> e{" "}
          <span className="text-primary">TypeScript</span>.
        </p>

    
        <div
          className={`flex items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Instagram, href: "#https://mail.google.com/mail/u/0/#inbox", label: "Email" },
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group relative p-3 rounded-full border border-border bg-secondary/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>

       
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
