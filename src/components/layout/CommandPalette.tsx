"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Briefcase, Mail, Award, X } from "lucide-react";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile]);

  const commands = [
    { name: "View Projects", icon: <Briefcase className="w-4 h-4" />, action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Contact Me", icon: <Mail className="w-4 h-4" />, action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "View Certifications", icon: <Award className="w-4 h-4" />, action: () => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Download Resume", icon: <FileText className="w-4 h-4" />, action: () => window.open("/Certificate/Om_Lakkad_Web_ATS.pdf", "_blank") },
  ];

  const filteredCommands = commands.filter((cmd) => 
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  if (isMobile) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl glass-panel rounded-2xl overflow-hidden shadow-2xl border border-primary/20 z-10 mx-4 flex flex-col"
            >
              <div className="flex items-center px-4 border-b border-white/10">
                <Search className="w-5 h-5 text-muted-foreground mr-2" />
                <input 
                  autoFocus
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-14 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button onClick={() => setIsOpen(false)} className="p-1 rounded-md hover:bg-white/10 text-muted-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredCommands.length > 0 ? (
                  <div className="space-y-1">
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Suggestions</p>
                    {filteredCommands.map((cmd, i) => (
                      <button 
                        key={i}
                        onClick={() => {
                          cmd.action();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors text-left text-sm font-medium"
                      >
                        {cmd.icon}
                        {cmd.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="p-4 text-sm text-muted-foreground text-center">No results found.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
