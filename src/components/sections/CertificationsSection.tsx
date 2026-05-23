"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Award, Trophy, Sparkles, Server, Cpu, GraduationCap, Building2, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

const listContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function CertificationsSection() {
  const { certifications, achievements } = PORTFOLIO_DATA;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "aws":
        return <Server className="h-5 w-5 text-orange-500" />;
      case "forage simulations":
        return <Building2 className="h-5 w-5 text-blue-500" />;
      case "academic & institutional":
      default:
        return <GraduationCap className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-16 max-w-7xl mx-auto px-4 md:px-8 lg:px-12"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold tracking-tight group cursor-default">
            Accreditations & Milestones
            <motion.span 
              initial={{ width: "0%" }}
              whileInView={{ width: ["0%", "100%", "100%", "0%"] }}
              viewport={{ once: false }}
              transition={{ duration: 4, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/2 h-1.5 bg-primary rounded-full -translate-x-1/2 group-hover:!w-full transition-all duration-300"
            />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive registry of professional certifications, enterprise simulations, and academic highlights.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Timeline of Certifications (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-white/10 pb-4 uppercase tracking-wider">
              <Award className="h-6 w-6 text-primary glow-text" />
              Certifications & Simulations
            </h3>

            <motion.div
              className="space-y-10"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {certifications?.map((certGroup, idx) => (
                <motion.div key={idx} variants={listItemVariants} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl glass-panel border border-white/10">
                      {getCategoryIcon(certGroup.category)}
                    </div>
                    <h4 className="text-md font-extrabold tracking-widest text-muted-foreground uppercase font-mono">{certGroup.category}</h4>
                  </div>

                  <div className="grid gap-3">
                    {certGroup.items.map((item, itemIdx) => {
                      const hasLink = !!item.link;
                      const cardContent = (
                        <motion.div
                          whileHover={{ scale: hasLink ? 1.015 : 1 }}
                          whileTap={{ scale: hasLink ? 0.97 : 1 }}
                          className={`flex items-center justify-between gap-4 py-[20.73px] px-5 rounded-2xl border glass-panel transition-all duration-300 group ${hasLink
                            ? "hover:border-primary/40 hover:shadow-[0_0_20px_rgba(var(--primary),0.06)] cursor-pointer"
                            : "cursor-not-allowed opacity-70"
                            }`}
                        >
                          <div className="space-y-0.5">
                            <span className="text-[15px] font-mono text-primary font-bold uppercase tracking-widest">{item.issuer}</span>
                            <h5 className="font-extrabold text-foreground text-sm md:text-[15px] leading-snug group-hover:text-primary transition-colors">{item.title}</h5>
                          </div>
                          {hasLink && (
                            <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0" />
                          )}
                        </motion.div>
                      );
                      if (hasLink) {
                        return (
                          <a key={itemIdx} href={item.link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                            {cardContent}
                          </a>
                        );
                      }
                      return <div key={itemIdx}>{cardContent}</div>;
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Key Achievements Timeline (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-white/10 pb-4 uppercase tracking-wider">
              <Trophy className="h-6 w-6 text-primary glow-text" />
              Key Achievements
            </h3>

            <motion.div
              className="grid gap-4"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {achievements?.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  variants={listItemVariants}
                  whileTap={{ scale: 0.97 }}
                  className="glass-panel rounded-2xl p-6 flex items-start gap-4 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Milestone {idx + 1}</p>
                    <span className="font-bold text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border border-primary/20 text-center space-y-4 relative overflow-hidden hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default group"
            >
              <div className="text-5xl">🧠</div>
              <h4 className="font-extrabold text-xl text-foreground tracking-tight">Active Professional Stature</h4>
              <p className="text-md text-muted-foreground leading-relaxed font-medium">
                Consistently pursuing emerging paradigms in distributed database engines, predictive models, and microelectronics to deploy end-to-end user-centric products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6.5 rounded-2xl glass-panel border border-white/10 space-y-4 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-default group"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </div>
                <h4 className="font-extrabold text-xs text-foreground tracking-wider uppercase font-mono">Expertise Index</h4>
              </div>

              <div className="space-y-6">
                {[
                  { name: "Full Stack Engineering", value: 90, color: "bg-primary" },
                  { name: "Cloud & Solutions Architecture", value: 85, color: "bg-orange-500" },
                  { name: "Agentic AI & LLM Workflows", value: 88, color: "bg-purple-500" },
                  { name: "IoT & Embedded Systems", value: 90, color: "bg-green-500" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground font-semibold">
                      <span>{item.name}</span>
                      <span className="text-foreground">{item.value}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono text-muted-foreground/60 leading-relaxed pt-4 border-t border-white/5">
                Index updated dynamically based on completed coursework, industry simulations, and hardware deployments.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
