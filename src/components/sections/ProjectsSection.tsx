"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, MonitorPlay } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      return matchesCategory;
    });
  }, [projects, activeCategory]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-28 relative min-h-screen">
      <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-16 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-start gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <h2 className="relative inline-block text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap group cursor-default">
              Featured Work
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: ["0%", "100%", "100%", "0%"] }}
                viewport={{ once: false }}
                transition={{ duration: 4, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
                className="absolute -bottom-2 left-1/2 h-1.5 bg-primary rounded-full -translate-x-1/2 group-hover:!w-full transition-all duration-300"
              />
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg whitespace-nowrap">Architectural achievements and digital experiments.</p>
          </div>

          <div className="flex flex-nowrap gap-2 overflow-x-auto max-w-full pb-2 scrollbar-none">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold whitespace-nowrap transition-all duration-300 border uppercase tracking-wider ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border-primary/50"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground border-white/5"
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isFlagship = project.flagship;
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className={`group glass-panel rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:border-primary/40 ${isFlagship
                      ? "md:col-span-2 lg:col-span-2 border border-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-gradient-to-br from-primary/5 to-purple-500/5"
                      : "hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                    }`}
                  onClick={() => openModal(project)}
                >
                  <div className={`${isFlagship ? "aspect-[21/9]" : "aspect-[4/3]"} bg-muted/20 relative overflow-hidden flex items-center justify-center border-b border-white/5`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent z-10" />

                    <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }} />

                    {isFlagship && (
                      <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-primary/20 border border-primary/50 rounded-xl backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        SYSTEM FLAGSHIP
                      </div>
                    )}

                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-6 py-3 bg-background/80 backdrop-blur-md rounded-xl border border-white/10 font-bold tracking-wide uppercase text-sm">Analyze Architecture</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-6 flex-1 flex flex-col relative z-20">
                    <div className="space-y-3">
                      <p className="text-primary font-mono text-xs tracking-widest uppercase font-bold">{project.category}</p>
                      <h3 className="font-extrabold text-2xl tracking-tight group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-md font-medium line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="text-xs font-mono font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-black/20 dark:border-white/10 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col border border-primary/20"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-md"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="w-full h-48 sm:h-72 bg-muted/30 relative flex-shrink-0">
                <div className="w-full h-full bg-cover bg-top" style={{ backgroundImage: `url(${selectedProject.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              <div className="p-6 sm:p-10 -mt-16 relative z-10 flex-1 overflow-y-auto space-y-8">
                <div className="space-y-2">
                  <p className="text-primary font-mono text-sm tracking-widest uppercase font-bold">{selectedProject.category}</p>
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{selectedProject.title}</h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b border-white/10 pb-2 uppercase tracking-wide">
                    <MonitorPlay className="w-5 h-5 text-primary animate-pulse" /> Decoded Overview
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                  {selectedProject.details && selectedProject.details.length > 0 && (
                    <ul className="space-y-3 pl-1 pt-4">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground animate-fadeIn">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 mt-2" />
                          <span className="leading-relaxed font-medium text-sm sm:text-md">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b border-white/10 pb-2 uppercase tracking-wide">
                    <Code2 className="w-5 h-5 text-primary" /> Integrated Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-secondary/30 rounded-xl text-sm font-semibold border border-black/20 dark:border-white/10 font-mono text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
