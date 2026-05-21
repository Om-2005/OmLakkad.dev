"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime exception captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-destructive/5 blur-[150px] -z-10 rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full glass-panel border-destructive/20 p-8 md:p-12 rounded-3xl space-y-8 relative z-10"
      >
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-destructive/10 border border-destructive/20 animate-bounce">
            <AlertCircle className="h-12 w-12 text-destructive glow-text" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tighter text-destructive">EXCEPTION</h1>
          <h2 className="text-xl font-bold tracking-tight text-foreground">Core Subsystem Fault</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A fatal exception was encountered while rendering this component. The subsystem environment collapsed.
          </p>
          {error.digest && (
            <code className="block text-xs font-mono bg-destructive/10 text-destructive/80 p-2 rounded border border-destructive/20 mt-2 select-all">
              ID: {error.digest}
            </code>
          )}
        </div>

        <div className="pt-4">
          <Button onClick={reset} size="lg" className="w-full rounded-xl bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <RotateCcw className="mr-2 w-5 h-5 animate-spin" /> Reboot Environment
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
