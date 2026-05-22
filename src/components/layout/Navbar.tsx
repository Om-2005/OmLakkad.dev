"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // ScrollSpy implementation using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger when section occupies the center of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    PORTFOLIO_DATA.navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    const heroEl = document.querySelector("#hero");
    if (heroEl) observer.observe(heroEl);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "py-4"
          : "py-6"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={`mx-auto flex items-center justify-between gap-x-4 flex-nowrap transition-all duration-500 ${isScrolled
            ? "max-w-6xl bg-background/80 backdrop-blur-sm md:backdrop-blur-xl border border-border/30 shadow-2xl rounded-full px-6 py-2.5"
            : "max-w-7xl"
            }`}>

            <a href="#" className="flex items-center gap-2 text-primary group" onClick={(e) => scrollToSection(e, "#hero")}>
              <Terminal className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 glow-text" />
              <span className="font-extrabold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                OmLakkad
                <span className="text-primary">.dev</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-3">
              {PORTFOLIO_DATA.navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-[13px] font-extrabold tracking-wider relative group uppercase transition-colors px-2.5 py-1.5 rounded-full ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
              <button
                className="ml-1 px-4 py-2 rounded-full text-[13px] font-bold bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider whitespace-nowrap"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Initiate
              </button>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-2 p-2 rounded-full border border-white/10 hover:bg-white/5 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
            </div>

            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-foreground hover:text-primary transition-colors focus:outline-none"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}
              <button
                className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm glass-panel border-l border-white/10 z-[101] flex flex-col p-6 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2 text-primary">
                  <Terminal className="h-5 w-5 glow-text" />
                  <span className="font-bold text-lg tracking-tight">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {PORTFOLIO_DATA.navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`text-lg font-bold tracking-wider uppercase border-b border-white/5 pb-4 transition-colors ${isActive ? "text-primary border-primary/20" : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-auto">
                <button
                  className="w-full py-4 rounded-xl text-sm font-bold bg-primary text-primary-foreground transition-all duration-300 glow-effect uppercase tracking-widest"
                  onClick={(e) => scrollToSection(e, "#contact")}
                >
                  Initiate Sequence
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
