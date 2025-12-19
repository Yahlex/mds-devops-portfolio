"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", desc: "Bibliothèque UI", pros: "Composants réutilisables, Écosystème riche", cons: "Courbe d'apprentissage" },
      { name: "Next.js 16", desc: "Framework React", pros: "SSR/SSG, SEO optimisé, Routing puissant", cons: "Complexité accrue" },
      { name: "TypeScript", desc: "JS Typé", pros: "Sécurité du code, Autocomplétion, Maintenance", cons: "Configuration initiale" },
      { name: "Tailwind CSS", desc: "CSS Utility-first", pros: "Développement rapide, Design System cohérent", cons: "HTML verbeux" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", desc: "Runtime JS", pros: "Non-bloquant, Même langage Front/Back", cons: "Calculs intensifs limités" },
      { name: "Python", desc: "Langage Polyvalent", pros: "Syntaxe claire, IA/Data Science", cons: "Moins performant que C++" },
      { name: "PHP", desc: "Langage Web", pros: "Déploiement facile, Large support", cons: "Incohérences historiques" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", desc: "SGBD Relationnel", pros: "Robuste, ACID, Extensible", cons: "Configuration complexe" },
      { name: "MongoDB", desc: "NoSQL Document", pros: "Schéma flexible, Scalabilité horizontale", cons: "Pas de jointures natives" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", desc: "Conteneurisation", pros: "Environnements iso, Déploiement fiable", cons: "Overhead système" },
      { name: "Git", desc: "Version Control", pros: "Standard industrie, Branching model", cons: "Commandes complexes" },
    ],
  },
  {
    category: "PC SOFT",
    items: [
      { name: "WINDEV", desc: "AGL Windows", pros: "Développement ultra-rapide (RAD)", cons: "Écosystème fermé" },
      { name: "WEBDEV", desc: "AGL Web", pros: "Intégration native HFSQL", cons: "Flexibilité frontend limitée" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stack Technique</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un écosystème complet pour répondre à tous les besoins. Survolez les cartes pour découvrir les détails.
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((skillGroup, groupIndex) => (
            <div key={skillGroup.category}>
              <h3 className="text-2xl font-semibold text-primary mb-6 border-l-4 border-primary pl-4">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroup.items.map((item, index) => (
                  <FlipCard key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ item, index }: { item: any, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-64 w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative h-full w-full transition-all duration-500 transform-style-3d"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full bg-background rounded-xl border border-border shadow-sm flex flex-col items-center justify-center p-6 backface-hidden">
          <h4 className="text-xl font-bold text-foreground mb-2">{item.name}</h4>
          <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
          <div className="mt-4 w-12 h-1 bg-primary/20 rounded-full group-hover:w-24 transition-all duration-300"></div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full bg-primary/5 rounded-xl border border-primary/20 shadow-md flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
          <h4 className="text-lg font-bold text-primary mb-4">{item.name}</h4>
          <div className="space-y-3 w-full text-sm">
            <div>
              <span className="font-semibold text-foreground block mb-1">Avantages:</span>
              <p className="text-muted-foreground">{item.pros}</p>
            </div>
            <div>
              <span className="font-semibold text-foreground block mb-1">Inconvénients:</span>
              <p className="text-muted-foreground">{item.cons}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
