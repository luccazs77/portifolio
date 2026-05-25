"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:dev@email.com", label: "Email" },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSending(false)
    setFormState({ name: "", email: "", message: "" })
    alert("Mensagem enviada com sucesso!")
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <span
          className={`text-primary font-mono text-sm mb-4 block transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          05. E agora?
        </span>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Vamos conversar
        </h2>
        <p
          className={`text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia
          ou quer apenas dizer oi, minha caixa de entrada está sempre aberta!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`max-w-md mx-auto space-y-4 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Seu email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Sua mensagem"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 placeholder:text-muted-foreground resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50"
          >
            {isSending ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </form>

        {/* Info */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span>dev@email.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>São Paulo, Brasil</span>
          </div>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {socials.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
