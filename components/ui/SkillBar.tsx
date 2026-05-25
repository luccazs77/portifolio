"use client";
import { useEffect, useState, useRef, type ReactNode } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  icon: ReactNode;
  delay?: number;
}

const SkillBar = ({ name, percentage, icon, delay = 0 }: SkillBarProps) => {
  const [progress, setProgress] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
      // Animate counter
      const duration = 1000;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const ratio = Math.min(elapsed / duration, 1);
        setDisplayPercent(Math.round(ratio * percentage));
        if (ratio < 1) {
          animRef.current = requestAnimationFrame(animate);
        }
      };
      animRef.current = requestAnimationFrame(animate);
    }, 200 + delay);
    return () => {
      clearTimeout(timer);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [percentage, delay]);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="flex items-center gap-3 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-12 h-12 shrink-0 flex items-center justify-center transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"}`}>
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={isHovered ? 4 : 3}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{
              filter: isHovered
                ? "drop-shadow(0 0 10px hsl(168 80% 50% / 0.8))"
                : "drop-shadow(0 0 4px hsl(168 80% 50% / 0.4))",
            }}
          />
        </svg>
        <div className={`text-primary z-10 transition-all duration-300 ${isHovered ? "drop-shadow-[0_0_12px_hsl(168_80%_50%/0.9)]" : "drop-shadow-[0_0_6px_hsl(168_80%_50%/0.5)]"}`}>
          {icon}
        </div>

        {/* Tooltip on hover */}
        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-card border border-border text-primary text-xs font-bold px-2 py-0.5 rounded transition-all duration-200 pointer-events-none whitespace-nowrap ${isHovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-1"}`}>
          {displayPercent}%
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <span className={`text-xs font-mono transition-colors duration-300 ${isHovered ? "text-primary" : "text-muted-foreground"}`}>
        {displayPercent}%
      </span>
    </div>
  );
};

export default SkillBar;
