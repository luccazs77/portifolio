import {
  Atom, // React
  Globe, // Next.js
  FileCode2, // TypeScript
  Braces, // JavaScript
  Code2, // HTML/CSS
  Wind, // Tailwind
  Server, // Node.js
  Plug, // REST APIs
  GitBranch, // Git
  Figma, // Figma
  Monitor, // VS Code
  Container, // Docker
  RefreshCw, // CI/CD
  TestTube, // Testing
} from "lucide-react";
import SkillBar from "./ui/SkillBar";

const frontEnd = [
  { name: "React", percentage: 95, icon: <Atom size={20} /> },
  { name: "Next.js", percentage: 90, icon: <Globe size={20} /> },
  { name: "TypeScript", percentage: 88, icon: <FileCode2 size={20} /> },
  { name: "JavaScript", percentage: 95, icon: <Braces size={20} /> },
  { name: "HTML/CSS", percentage: 98, icon: <Code2 size={20} /> },
  { name: "Tailwind CSS", percentage: 92, icon: <Wind size={20} /> },
];

const backEnd = [
  { name: "Node.js", percentage: 80, icon: <Server size={20} /> },
  { name: "REST APIs", percentage: 85, icon: <Plug size={20} /> },
];

const tools = [
  { name: "Git", percentage: 90, icon: <GitBranch size={20} /> },
  { name: "Figma", percentage: 85, icon: <Figma size={20} /> },
  { name: "VS Code", percentage: 95, icon: <Monitor size={20} /> },
  { name: "Docker", percentage: 65, icon: <Container size={20} /> },
  { name: "CI/CD", percentage: 70, icon: <RefreshCw size={20} /> },
  { name: "Testing", percentage: 75, icon: <TestTube size={20} /> },
];

const SkillCategory = ({
  title,
  skills,
  baseDelay,
}: {
  title: string;
  skills: typeof frontEnd;
  baseDelay: number;
}) => (
  <div>
    <h3 className="text-lg font-bold text-primary mb-6">{title}</h3>
    <div className="space-y-5">
      {skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          {...skill}
          delay={baseDelay + i * 100}
        />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary text-sm font-mono">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Habilidades
          </h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SkillCategory title="Front-End" skills={frontEnd} baseDelay={0} />
          <SkillCategory title="Back-End" skills={backEnd} baseDelay={600} />
          <SkillCategory title="Ferramentas" skills={tools} baseDelay={800} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
