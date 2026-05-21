"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[150px] -z-10 rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full glass-panel p-8 md:p-12 rounded-3xl space-y-8 relative z-10"
      >
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20 animate-pulse">
            <Terminal className="h-12 w-12 text-primary glow-text" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-6xl font-extrabold tracking-tighter text-gradient">404</h1>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Route Non-Existent</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The requested digital coordinate does not exist. The navigation array has failed to resolve this vector.
          </p>
        </div>

        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90 glow-effect text-primary-foreground inline-flex items-center justify-center gap-2">
              <Home className="w-5 h-5" /> Retrace Coordinates
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
