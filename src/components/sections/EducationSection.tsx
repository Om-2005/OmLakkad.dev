"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[130px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-16 max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500 group cursor-default pb-2">
            Education
            <motion.span 
              initial={{ width: "0%" }}
              whileInView={{ width: ["0%", "100%", "100%", "0%"] }}
              viewport={{ once: false }}
              transition={{ duration: 4, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              className="absolute bottom-0 left-1/2 h-1.5 bg-gradient-to-r from-primary to-pink-500 rounded-full -translate-x-1/2 group-hover:!w-full transition-all duration-300"
            />
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Foundations of an engineering mind.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-primary/40 via-purple-500/20 to-transparent hidden md:block" />

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {education?.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0 hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl glass-panel border border-primary/30 flex items-center justify-center bg-primary/10 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                    {edu.icon === "college"
                      ? <GraduationCap className="w-7 h-7 text-primary" />
                      : <BookOpen className="w-7 h-7 text-purple-400" />
                    }
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-panel rounded-3xl p-7 border border-white/10 hover:border-primary/30 transition-all duration-500 group space-y-5">

                  {/* Top row: Degree + Year */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      {/* Mobile icon */}
                      <div className="md:hidden w-10 h-10 rounded-xl glass-panel border border-primary/30 flex items-center justify-center mb-3 bg-primary/10">
                        {edu.icon === "college"
                          ? <GraduationCap className="w-5 h-5 text-primary" />
                          : <BookOpen className="w-5 h-5 text-purple-400" />
                        }
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>
                      {edu.university && (
                        <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                          {edu.university}
                        </p>
                      )}
                    </div>

                    {/* Year badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-sm font-mono text-muted-foreground shrink-0 self-start">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span className="font-bold tracking-wider">{edu.years}</span>
                    </div>
                  </div>

                  {/* Focus / Specialisation */}
                  {edu.focus && (
                    <div className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-sm text-primary font-semibold font-mono">
                      🎯 {edu.focus}
                    </div>
                  )}

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1.5 text-xs font-mono font-bold bg-white/5 border border-white/8 rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/20 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
