"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/constants/data";
import { Terminal, ArrowUpRight, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isRightsOpen, setIsRightsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="relative border-t border-white/10 bg-background/60 backdrop-blur-sm md:backdrop-blur-xl py-16 mt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col gap-12 max-w-7xl">

          {/* Footer Top Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-10">
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="#" className="flex items-center gap-2.5 text-primary group" onClick={(e) => scrollToSection(e, "#hero")}>
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <Terminal className="h-5 w-5 glow-text" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                  OmLakkad
                  <span className="text-primary">.dev</span>
                </span>
              </a>
              <p className="text-sm font-semibold text-muted-foreground">Architecting scalable digital intelligence.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {PORTFOLIO_DATA.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-bold tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Bottom Metadata */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <button
                onClick={() => setIsRightsOpen(true)}
                className="text-center text-sm font-semibold text-muted-foreground md:text-left font-mono hover:text-primary transition-colors cursor-pointer"
              >
                &copy; {currentYear} OmLakkad.dev. All rights reserved.
              </button>
              <p className="text-xs font-mono text-muted-foreground/50">V 2.1.0</p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold tracking-wider text-muted-foreground hover:text-primary transition-all duration-300 uppercase font-mono inline-flex items-center gap-2 group"
              >
                <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" /> GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold tracking-wider text-muted-foreground hover:text-primary transition-all duration-300 uppercase font-mono inline-flex items-center gap-2 group"
              >
                <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Rights Modal */}
      <AnimatePresence>
        {isRightsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRightsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg glass-panel border border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.1)] rounded-3xl p-8 z-[101]"
            >
              <button
                onClick={() => setIsRightsOpen(false)}
                className="absolute right-6 top-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Copyright & Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    &copy; {currentYear} OmLakkad.dev. All rights reserved.
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed pt-2">
                    This website and its associated designs, components, and concepts are the exclusive property of Omkumar Lakkad. Any unauthorized reproduction, distribution, or derivative works without explicit permission are strictly prohibited.
                  </p>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setIsRightsOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground font-semibold text-sm transition-colors uppercase tracking-wider"
                  >
                    Understood
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
