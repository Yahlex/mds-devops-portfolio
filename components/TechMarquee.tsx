"use client";

import { motion } from "framer-motion";
import { 
  Code2, Server, Database, Globe, Cpu, 
  Layout, Smartphone, Cloud, Terminal, Layers 
} from "lucide-react";

const technologies = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "Tailwind", icon: Layout },
  { name: "Python", icon: Code2 },
  { name: "Docker", icon: Cloud },
  { name: "PostgreSQL", icon: Database },
  { name: "WINDEV", icon: Smartphone },
  { name: "Clean Arch", icon: Layers },
  { name: "SOLID", icon: Cpu },
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-background/50 border-y border-border py-6 backdrop-blur-sm">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              {technologies.map((tech, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center space-x-2 mx-8 text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  <tech.icon size={24} />
                  <span className="text-lg font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
           {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              {technologies.map((tech, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center space-x-2 mx-8 text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  <tech.icon size={24} />
                  <span className="text-lg font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
