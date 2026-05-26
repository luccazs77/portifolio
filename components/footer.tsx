"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por{" "}
          <a href="#" className="text-primary hover:underline">
            Dev
          </a>
        </p>

       
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
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
