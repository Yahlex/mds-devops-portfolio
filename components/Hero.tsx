"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Layers } from "lucide-react";
import Link from "next/link";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex-grow flex items-center">
        <div className="w-full max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/50 text-accent-foreground text-sm font-semibold mb-4 border border-accent">
                Fullstack Developer Junior • 4 Ans d'Expérience
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Architecturer le <span className="text-primary">Web</span> & <br />
                Maîtriser la <span className="text-secondary">Donnée</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Je conçois des solutions robustes et scalables. De l'intégration pixel-perfect (Tailwind, SCSS) à l'architecture serveur complexe (Node.js, Next.js), en passant par l'écosystème WINDEV.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                >
                  Me Contacter <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#stack"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border text-lg font-medium rounded-md text-foreground bg-background hover:bg-accent transition-all hover:-translate-y-1"
                >
                  Voir ma Stack
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-square"
            >
              {/* Abstract Representation of Code/Architecture */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-border backdrop-blur-md p-10 flex flex-col justify-between shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-background/60 rounded-xl border border-border/50 shadow-sm"
                  >
                    <Code2 className="text-primary h-10 w-10" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Frontend</h3>
                      <p className="text-sm text-muted-foreground">Next.js, React, Tailwind, SCSS</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-background/60 rounded-xl border border-border/50 ml-8 shadow-sm"
                  >
                    <Server className="text-secondary h-10 w-10" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Backend</h3>
                      <p className="text-sm text-muted-foreground">Node.js, Python, SQL/NoSQL</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-background/60 rounded-xl border border-border/50 shadow-sm"
                  >
                    <Layers className="text-foreground h-10 w-10" />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Application</h3>
                      <p className="text-sm text-muted-foreground">WINDEV, WEBDEV, WLangage</p>
                    </div>
                  </motion.div>
                </div>
                <div className="text-right mt-4">
                  <p className="font-mono text-sm text-primary">{'<CleanCode />'}</p>
                  <p className="font-mono text-sm text-secondary">{'<SolidPrinciples />'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <TechMarquee />
      </div>
    </section>
  );
}
