"use client"

import { Github, Instagram, Linkedin } from "lucide-react"

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
]

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Pedro Luccazs &copy; {new Date().getFullYear()} 
          
        </p>

       
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

     
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
