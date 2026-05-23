"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Database, Cpu, BrainCircuit } from "lucide-react";

// Stagger variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="w-6 h-6 text-primary" />,
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend & Cloud Systems",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "MongoDB", level: 88 },
        { name: "REST APIs", level: 95 },
        { name: "Authentication", level: 90 },
        { name: "AWS Fundamentals", level: 85 },
      ],
    },
    {
      title: "AI & Automation",
      icon: <BrainCircuit className="w-6 h-6 text-pink-500" />,
      glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      items: [
        { name: "AI Integrations", level: 92 },
        { name: "Prompt Engineering", level: 96 },
        { name: "Automation Agents", level: 90 },
        { name: "Python", level: 85 },
      ],
    },
    {
      title: "IoT & Mobile",
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
      items: [
        { name: "Arduino", level: 90 },
        { name: "IoT Systems", level: 88 },
        { name: "Android Dev (Java)", level: 82 },
        { name: "Embedded C/C++", level: 89 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-16 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold tracking-tight group cursor-default">
            Technical Arsenal
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: ["0%", "100%", "100%", "0%"] }}
              viewport={{ once: false }}
              transition={{ duration: 4, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/2 h-1.5 bg-primary rounded-full -translate-x-1/2 group-hover:!w-full transition-all duration-300"
            />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive mapping of technologies I deploy to compile scalable, high-performance systems.
          </p>
        </div>

        {/* Stagger reveal grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
              className={`glass-panel rounded-3xl p-8 space-y-8 relative overflow-hidden group transition-all duration-500 hover:border-primary/20 ${category.glow}`}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/10 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
                </div>
              </div>

              <div className="space-y-5">
                {category.items.map((skill, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold tracking-wide text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      <span className="font-mono">{skill.name}</span>
                      <span className="font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: j * 0.05, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
