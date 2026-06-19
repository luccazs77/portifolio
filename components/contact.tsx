"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, MessageCircle, Github, Instagram, Linkedin } from "lucide-react"

const whatsappNumber = "5598981787408"
const whatsappMessage = encodeURIComponent(
  "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
)

const socials = [
  { icon: Github, href: "https://github.com/luccazs77", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/perdo-lucaas/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/luccazs__/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:dev@email.com", label: "Email" },
]

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
       
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

        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-[0_12px_40px_-16px_rgba(37,211,102,0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_16px_44px_-14px_rgba(37,211,102,0.9)]"
          >
            <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Conversar pelo WhatsApp
          </a>
        </div>

        {/* Info */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span>pedrolucasdacosta@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>São Luiz, MA Brasil</span>
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
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
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
