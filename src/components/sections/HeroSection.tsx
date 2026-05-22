"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Terminal, Code2, Database, Cpu, Eye, Brain, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";

const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center p-6 glass-panel rounded-2xl w-full hover:bg-primary/5 transition-colors border border-white/5">
      <h4 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tighter">
        {count}+
      </h4>
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center">{label}</p>
    </div>
  );
};

export function HeroSection() {
  const titles = [
    "Full Stack Engineer",
    "AI Application Builder",
    "IoT Innovator",
    "React Developer",
    "Problem Solver"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16">

      {/* Background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center">

          {/* Text Content */}
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl">
            <div className="space-y-4 w-full flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.1] font-extrabold tracking-tighter"
              >
                Hi, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 animate-gradient">Omkumar D. Lakkad</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide mt-6"
              >
                Full Stack Developer · AI Engineer · IoT Innovator
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold flex items-center gap-3 mt-4"
              >
                <span className="text-muted-foreground">&gt;</span>
                <div className="flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTitleIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary"
                    >
                      {titles[currentTitleIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-1 h-8 bg-primary rounded ml-1"
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mt-6"
              >
                I build scalable web apps, intelligent AI-powered tools, and IoT innovations. Passionate about React, Node.js, MongoDB, and modern AI integrations.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 w-full pt-4"
            >
              <Button size="lg" className="rounded-xl h-12 px-6 text-sm sm:text-base bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0 text-white group shadow-lg shadow-primary/20 transition-all" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Projects
              </Button>
              <a href="/Certificate/Om_Lakkad_Web_ATS.pdf" download="Om_Lakkad_Web_ATS.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-xl h-12 px-6 text-sm sm:text-base border-white/10 hover:bg-white/5 text-foreground group transition-all">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </Button>
              </a>
              <Button variant="ghost" size="lg" className="rounded-xl h-12 px-6 text-sm sm:text-base hover:bg-white/5 text-foreground group transition-all" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-20 pt-12 border-t border-white/5"
        >
          {PORTFOLIO_DATA.stats?.map((stat, i) => (
            <AnimatedCounter key={i} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
