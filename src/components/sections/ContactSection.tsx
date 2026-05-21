"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

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

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "415c166e-df44-4287-9225-3a2a3dde456d",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        alert(result.message || "Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to transmit. Please email directly to omlakkad0@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute left-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-16 max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold tracking-tight group cursor-default">
            Initiate Connection
            <motion.span 
              initial={{ width: "0%" }}
              whileInView={{ width: ["0%", "100%", "100%", "0%"] }}
              viewport={{ once: false }}
              transition={{ duration: 4, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              className="absolute -bottom-2 left-1/2 h-1.5 bg-primary rounded-full -translate-x-1/2 group-hover:!w-full transition-all duration-300"
            />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Have an application design, IoT blueprint, or a career opportunity? Transmit your data payload below.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Form (Col 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-10 relative group flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            
            <form className="space-y-6 relative z-10 flex flex-col flex-1" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold tracking-widest text-muted-foreground uppercase font-mono">Identity (Name)</label>
                  <input 
                    id="name" 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-14 px-4 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30 font-semibold" 
                    placeholder="e.g. Omkumar Lakkad" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-muted-foreground uppercase font-mono">Transmission Route (Email)</label>
                  <input 
                    id="email" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-14 px-4 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30 font-semibold" 
                    placeholder="e.g. omlakkad0@gmail.com" 
                  />
                </div>
              </div>
              <div className="space-y-2 flex-1 flex flex-col">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-muted-foreground uppercase font-mono">Data Payload (Message)</label>
                <textarea 
                  id="message" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full flex-1 min-h-[180px] p-4 rounded-xl border border-white/10 bg-background/50 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30 resize-none font-medium leading-relaxed" 
                  placeholder="Draft your digital transmission here..." 
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg" 
                  className="w-full rounded-xl h-14 text-md font-bold tracking-wider bg-primary hover:bg-primary/90 glow-effect text-primary-foreground group transition-all uppercase"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Broadcasting Signal...</span>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Transmit Signal
                    </>
                  )}
                </Button>
              </div>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center space-y-4 z-20 border border-primary/20"
                >
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20 animate-bounce">
                    <CheckCircle className="h-10 w-10 text-primary glow-text" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Payload Transmitted</h4>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Transmission handshake successful. The system has cached your coordinate package.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social Links & Info (Col 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b border-white/10 pb-4 uppercase tracking-wider">Direct Coordinates</h3>
              
              <div className="grid gap-4">
                <a href={PORTFOLIO_DATA.personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl glass-panel hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground tracking-wide">GitHub Network</p>
                    <p className="text-xs font-mono text-muted-foreground">Explore my repositories</p>
                  </div>
                </a>

                <a href={PORTFOLIO_DATA.personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl glass-panel hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground tracking-wide">Professional Profile</p>
                    <p className="text-xs font-mono text-muted-foreground">Connect on LinkedIn</p>
                  </div>
                </a>

                <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className="flex items-center gap-4 p-5 rounded-2xl glass-panel hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-105 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground tracking-wide">Direct Email</p>
                    <p className="text-xs font-mono text-muted-foreground">{PORTFOLIO_DATA.personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel cursor-default border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground tracking-wide">Physical Core</p>
                    <p className="text-xs font-mono text-muted-foreground">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Send className="w-24 h-24" />
              </div>
              <h4 className="font-extrabold text-lg mb-2 relative z-10 uppercase tracking-wider">Operational Status</h4>
              <p className="text-sm text-muted-foreground relative z-10 leading-relaxed font-semibold">
                Available for engineering positions, technical contracts, and AI-IoT collaborations. Global remote operations supported.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
