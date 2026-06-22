"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "OxyDocentes",
    description:
      "O Oxydocentes é uma plataforma de captação de docentes do Grupo CEUMA, criada para tornar o processo de recrutamento e contratação mais ágil, eficiente e organizado.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "REST API", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Mindcheck - Plataforma de Saúde Mental",
    description:
      "Desenvolvimento de uma plataforma de saúde voltada para avaliação e acompanhamento de pacientes, oferecendo recursos para registro, análise e gerenciamento de informações clínicas, proporcionando mais agilidade e eficiência no atendimento médico.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "REST API", "PostgreSQL"],
  },
  {
    title: "Incode Tech School",
    description:
      "Desenvolvimento de uma landing page responsiva para apresentação do programa INCODE TECH SCHOOL, implementando interfaces modernas e intuitivas para exibir informações sobre o curso, cronograma, metodologia, benefícios e demais conteúdos institucionais.",
    image: "",
    technologies: ["React", "TailwindCSS", "Node.js"],
    github: "#",
    live: "https://incode-tech-school.com.br/",
  },
  {
    title: "Aval",
    description:
      "Plataforma de avaliação voltada ao setor de atendimento, responsável por coletar feedbacks dos usuários, medir índices de satisfação e fornecer informações estratégicas para a melhoria contínua da qualidade dos serviços.",
    image: "/projects/social.jpg",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "REST API"],
    github: "#",
    live: "https://aval.oxygeni.com.br/",
  },
  {
    title: "OxyHR",
    description:
      "Aplicativo de rede social com feed em tempo real, sistema de mensagens, notificações push e autenticação OAuth.",
    image: "/projects/social.jpg",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "REST API"],
  },
];

const otherProjects = [
  {
    title: "Oxygeni Hub",
    description:
      "Criação de uma landing page moderna e responsiva para o Oxygeni Hub, com o objetivo de divulgar seus espaços colaborativos, programas de capacitação, cursos e iniciativas de inovação. Além de fornecer informações institucionais, a plataforma permite que usuários realizem reservas de ambientes de forma prática e organizada, melhorando a experiência e a gestão dos espaços.",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Jusc-Juventude",
    description:
      "Plataforma desenvolvida para o JUSC com foco na divulgação das atividades, eventos e projetos do grupo de jovens, além de disponibilizar galerias de fotos e informações sobre ações realizadas e futuras iniciativas da comunidade.",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Previsão do Tempo",
    description:
      "Sistema de gerenciamento de tarefas com drag and drop e sincronização em nuvem.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    github: "#",
  },
  {
    title: "Sistema de Gerenciamento de Leilões",
    description:
      "Plataforma de e-commerce completa com carrinho de compras, pagamentos integrados, dashboard admin e análise de vendas em tempo real.",
    technologies: ["Next.js"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            Projetos
          </h2>
          <div
            className={`flex-1 h-px bg-border transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-xl bg-card border border-border ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                    {/* Placeholder gradient for project image */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, 
                          oklch(0.75 0.15 ${180 + index * 30}) 0%, 
                          oklch(0.55 0.12 ${200 + index * 30}) 100%)`,
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
                    {/* Project Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}
                >
                  <span className="text-primary font-mono text-sm mb-2 block">
                    Projeto em Destaque
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div
                    className={`bg-card border border-border rounded-xl p-6 mb-4 shadow-lg ${
                      index % 2 === 1 ? "lg:-mr-12" : "lg:-ml-12"
                    } relative z-10`}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                  >
                    <a
                      href={project.github}
                      aria-label={`Ver código de ${project.title} no GitHub`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      aria-label={`Ver projeto ${project.title} ao vivo`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Outros projetos interessantes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      aria-label={`Ver código de ${project.title} no GitHub`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        aria-label={`Ver projeto ${project.title} ao vivo`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
