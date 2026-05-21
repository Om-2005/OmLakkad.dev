# 🌐 Omkumar D. Lakkad — Cyberpunk AI & Full Stack Portfolio

Welcome to the source repository of my high-end, cyberpunk-inspired digital engineering portfolio. Built for tech recruiters and tech enthusiasts, this portfolio represents a futuristic control deck showcasing full-stack capabilities, artificial intelligence integrations, and IoT architecture.

---

## ✨ Features & Subsystems

- **🧠 J.A.R.V.I.S flagships**: Distinct layout for flagship projects featuring glass panels and pulsating indicator badges.
- **⚡ Command Palette**: Quick access terminal triggered via `Ctrl + K` or `Cmd + K` for frictionless keyboard navigation.
- **🎛️ Live Searching & Categorization**: Micro-animated category filters and fuzzy search inputs for project lists.
- **🎨 Glassmorphism & Cyberpunk Styling**: Custom OKLCH color palettes, smooth gradient borders, and animated floating gradient blobs.
- **📱 Responsive Mobile Drawer**: A sliding control drawer for mobile screens built on top of `Framer Motion`.
- **✨ Custom Cyberpunk Cursor**: Dynamic mouse tracking with dual-ring micro-animations on interactive items.
- **🏆 Milestone Timeline**: Dedicated accreditations showcase featuring real-world corporate simulations (Forage) and institutional certifications.

---

## 🛠️ Technology Stack

- **Core Framework**: Next.js 14+ (App Router)
- **Programming Language**: TypeScript (Strict Typings)
- **Styling Pipeline**: Tailwind CSS v4, Vanilla CSS Utility layer
- **Animations Engine**: Framer Motion
- **Design System Elements**: ShadCN UI, Lucide Icons, Google Fonts (Inter)

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js 18+** and **npm** installed on your system.

### 🔧 Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Om-2005/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory by copying the template:
   ```bash
   cp .env.example .env.local
   ```
   Modify `.env.local` to match your specific API keys:
   ```env
   NEXT_PUBLIC_APP_URL=https://omlakkad.dev
   NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
   NEXT_PUBLIC_FORM_ACCESS_KEY=your-access-key-here
   ```

4. **Boot Development Environment**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

5. **Production Build Compilation**
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Deployment Instructions

This Next.js application is fully optimized for single-click hosting on the **Vercel Platform**.

### Option A: Vercel CLI (Recommended)
1. Install Vercel CLI globally: `npm i -g vercel`
2. Run deployment command in the project root: `vercel`
3. Follow the CLI wizard to link the project and deploy.

### Option B: Vercel Git Integration
1. Push your local repository to GitHub.
2. Visit the [Vercel Dashboard](https://vercel.com/new).
3. Import your `portfolio` repository.
4. Keep build settings as default (Vercel automatically detects Next.js configurations).
5. Add any required variables from `.env.example` in the "Environment Variables" toggle.
6. Click **Deploy**.

---

## 📝 License

This project is licensed under the terms of the **Om Lakkad Portfolio License (PPL) v1.0**. Feel free to use the structure for learning and reference purposes.
