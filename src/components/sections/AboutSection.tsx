"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Cpu, Database, Cloud, Terminal } from "lucide-react";

export function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const cards = [
    {
      num: "01",
      title: "Full Stack Systems",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      desc: "Architecting high-performance web applications using React, Next.js, and Node.js. Specializing in secure authentication vectors, structured database schemas with MongoDB, and lightning-fast RESTful APIs.",
      glow: "from-primary/20 to-transparent",
    },
    {
      num: "02",
      title: "Agentic AI & LLMs",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      desc: "Bridging human workflows with generative models. Experienced in developing custom automation pipelines, voice-reactive desktop controllers like J.A.R.V.I.S, and context-aware LLM agents.",
      glow: "from-purple-500/20 to-transparent",
    },
    {
      num: "03",
      title: "IoT & Hardware Integration",
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      desc: "Engineering physical-to-digital nodes. Experienced with embedded C/C++, Arduino architectures, sensor arrays, and assistive robotics, including custom accessibility blind navigation aids.",
      glow: "from-green-500/20 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      {/* Background ambient blobs */}
      <div className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="absolute left-0 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-16 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold tracking-tight group cursor-default">
            About Me
            <motion.span 
              initial={{ width: "0%" }}
              whileInView={{ width: ["0%", "100%", "100%", "0%"] }}
              viewport={{ once: false }}
              transition={{ duration: 4, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/2 h-1.5 bg-primary rounded-full -translate-x-1/2 group-hover:!w-full transition-all duration-300"
            />
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 border-b border-white/10 pb-12">
          <div className="flex flex-col lg:w-[45%] lg:sticky lg:top-24">
            {/* Interactive Graphic & Photo */}
            <div className="flex items-center justify-center w-full pb-6 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] max-w-full"
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/20 blur-[40px] opacity-70" />

                {/* Rotating ring */}
                <motion.div
                  animate={isMobile ? {} : { rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-5 rounded-full border border-primary/60 border-dashed border-2"
                />

                {/* Tech Icons - Fixed positions, floating up and down */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 flex justify-center items-center z-20">
                  <motion.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="p-3 bg-background/90 backdrop-blur-md border border-primary/30 rounded-2xl text-primary shadow-lg shadow-primary/20"><Code2 className="w-4 h-4 sm:w-5 sm:h-5" /></motion.div>
                </div>
                <div className="absolute top-1/4 right-3 flex justify-center items-center z-20">
                  <motion.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="p-3 bg-background/90 backdrop-blur-md border border-purple-500/30 rounded-2xl text-purple-500 shadow-lg shadow-purple-500/20"><Brain className="w-4 h-4 sm:w-5 sm:h-5" /></motion.div>
                </div>
                <div className="absolute bottom-1/4 right-3 flex justify-center items-center z-20">
                  <motion.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="p-3 bg-background/90 backdrop-blur-md border border-blue-500/30 rounded-2xl text-blue-500 shadow-lg shadow-blue-500/20"><Cpu className="w-4 h-4 sm:w-5 sm:h-5" /></motion.div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center z-20">
                  <motion.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="p-3 bg-background/90 backdrop-blur-md border border-green-500/30 rounded-2xl text-green-500 shadow-lg shadow-green-500/20"><Database className="w-4 h-4 sm:w-5 sm:h-5" /></motion.div>
                </div>
                <div className="absolute bottom-1/4 left-3 flex justify-center items-center z-20">
                  <motion.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="p-3 bg-background/90 backdrop-blur-md border border-indigo-500/30 rounded-2xl text-indigo-500 shadow-lg shadow-indigo-500/20"><Cloud className="w-4 h-4 sm:w-5 sm:h-5" /></motion.div>
                </div>
                <div className="absolute top-1/4 left-3 flex justify-center items-center z-20">
                  <motion.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="p-3 bg-background/90 backdrop-blur-md border border-rose-500/30 rounded-2xl text-rose-500 shadow-lg shadow-rose-500/20"><Terminal className="w-4 h-4 sm:w-5 sm:h-5" /></motion.div>
                </div>

                {/* Center Photo Container */}
                <div className="absolute inset-[15%] sm:inset-[12%] rounded-full bg-background border border-white/10 flex items-center justify-center p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden relative group bg-gradient-to-tr from-primary/10 to-purple-500/10">
                    <img src="/profile.jpg" alt="Omkumar Lakkad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 sm:pb-10">
                      <span className="font-mono text-sm font-bold text-primary tracking-widest">&lt;engineer /&gt;</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="text-muted-foreground text-md sm:text-lg max-w-3xl leading-relaxed space-y-6 lg:w-[55%]">
            <p>
              Hello, I&apos;m Omkumar Lakkad — a creative Software Engineer, Full Stack Developer, and AI Enthusiast passionate about building modern digital products that combine elegant design, strong performance, and seamless user experience. I specialize in transforming ideas into scalable web applications and intelligent solutions using cutting-edge technologies.
            </p>
            <p>
              I am actively seeking opportunities in Software Engineering where I can apply my technical expertise, creativity, and problem-solving skills to develop impactful real-world products while continuously learning and evolving as a developer in a fast-paced environment.
            </p>
            <p>
              Beyond development, I enjoy exploring emerging technologies, building AI-driven projects, and sharing knowledge with the developer community. I believe great technology should not only function flawlessly but also create meaningful experiences that inspire innovation.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 min-h-[350px]"
            >
              {/* Backlight effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                    {card.icon}
                  </div>
                  <span className="text-5xl font-extrabold font-mono opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 select-none">
                    {card.num}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-md font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
