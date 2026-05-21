"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-44 h-44"
          >
            {/* Outer spinning ring — no text, just the arc border */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 176 176"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="88" cy="88" r="70"
                fill="none"
                stroke="oklch(0.65 0.25 260)"
                strokeWidth="2"
                strokeDasharray="90 350"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Inner counter-spinning purple ring */}
            <div
              className="absolute rounded-full border-b-2 border-purple-500 animate-spin"
              style={{
                width: "112px",
                height: "112px",
                animationDirection: "reverse",
                animationDuration: "2s",
              }}
            />

            {/* Static name in center — does NOT rotate */}
            <div className="flex flex-col items-center justify-center z-10 select-none">
              <span className="text-base font-extrabold font-mono tracking-widest text-primary glow-text leading-tight">
                OMKUMAR
              </span>
              <span className="text-base font-extrabold font-mono tracking-widest text-primary glow-text leading-tight">
                LAKKAD
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 font-mono text-sm text-muted-foreground uppercase tracking-widest"
          >
            Initializing Portfolio Environment...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
