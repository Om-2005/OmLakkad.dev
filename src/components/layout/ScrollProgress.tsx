"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary transform-origin-0 z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{ touchAction: "manipulation" }}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full glass-panel flex items-center justify-center text-primary z-[200] hover:bg-primary/20 transition-colors ${!isVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}
