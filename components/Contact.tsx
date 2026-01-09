"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous connecteriez un service d'envoi d'email ou une API
    alert("Merci pour votre message ! (Simulation)");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Parlons de votre projet</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Vous avez une idée ambitieuse ? Vous cherchez un expert pour renforcer votre équipe ? 
              N&apos;hésitez pas à me contacter pour discuter de vos besoins.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@alexisremy.dev" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@alexisremy.dev
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-muted-foreground">France (Disponible en Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted/30 p-8 rounded-2xl border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
              >
                Envoyer le message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
