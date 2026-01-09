"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Feather, Repeat } from "lucide-react";

const principles = [
  {
    title: "Clean Code",
    description: "Le code est lu bien plus souvent qu'il n'est écrit. Je m'efforce de produire un code lisible, maintenable et auto-documenté pour faciliter la collaboration et l'évolution future.",
    icon: Feather,
  },
  {
    title: "S.O.L.I.D.",
    description: "L'application stricte des principes SOLID garantit une architecture logicielle robuste, modulaire et extensible, réduisant la dette technique sur le long terme.",
    icon: ShieldCheck,
  },
  {
    title: "K.I.S.S. & DRY",
    description: "Keep It Simple, Stupid. Je privilégie la simplicité et l'efficacité, en évitant la sur-ingénierie tout en ne me répétant jamais (Don't Repeat Yourself).",
    icon: Repeat,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Philosophie de Code</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La technique n&apos;est rien sans rigueur. Mon approche du développement repose sur des fondations solides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/20 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-6 text-primary">
                <item.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
