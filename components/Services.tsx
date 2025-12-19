"use client";

import { motion } from "framer-motion";
import { Laptop, Search, PenTool } from "lucide-react";

const services = [
  {
    title: "Développement Fullstack",
    description: "Création d'applications web et mobiles sur mesure, performantes et scalables. De la conception de l'interface à la logique serveur complexe.",
    icon: Laptop,
  },
  {
    title: "Audit & Refactoring",
    description: "Analyse approfondie de votre code existant. Identification des goulots d'étranglement, amélioration de la sécurité et mise en conformité avec les standards actuels.",
    icon: Search,
  },
  {
    title: "Architecture Logicielle",
    description: "Conception de systèmes robustes. Choix des technologies, modélisation de bases de données et mise en place de pipelines CI/CD.",
    icon: PenTool,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services Freelance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique au service de vos projets les plus ambitieux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-background rounded-xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="mb-6 text-secondary group-hover:text-primary transition-colors">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
