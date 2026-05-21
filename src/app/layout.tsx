import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PORTFOLIO_DATA } from "@/constants/data";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { GalaxyBackground } from "@/components/ui/GalaxyBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personalInfo.name} | Full Stack Developer | AI & IoT Engineer`,
  description: `Cyberpunk-inspired engineering portfolio of ${PORTFOLIO_DATA.personalInfo.name}. Specializing in React, Next.js, AI integrations, LLM Agents (J.A.R.V.I.S), and IoT innovation.`,
  keywords: [
    "Omkumar D. Lakkad",
    "Omkumar Lakkad",
    "AI Engineer",
    "Full Stack Developer",
    "IoT Innovator",
    "Next.js Portfolio",
    "React Developer",
    "J.A.R.V.I.S AI Agent",
    "Cyberpunk Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: PORTFOLIO_DATA.personalInfo.name }],
  creator: PORTFOLIO_DATA.personalInfo.name,
  metadataBase: new URL("https://omlakkad.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omlakkad.dev",
    title: `${PORTFOLIO_DATA.personalInfo.name} | Full Stack Developer & AI Engineer`,
    description: `Explore the portfolio of ${PORTFOLIO_DATA.personalInfo.name}, showcasing flagship AI agents, cloud architectures, and IoT automation systems.`,
    siteName: `${PORTFOLIO_DATA.personalInfo.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.personalInfo.name} Portfolio Showcase`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personalInfo.name} | Full Stack Developer & AI Engineer`,
    description: `Explore the portfolio of ${PORTFOLIO_DATA.personalInfo.name}, showcasing flagship AI agents, cloud architectures, and IoT automation systems.`,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlea5b134fcce7efed0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <CommandPalette />
          <GalaxyBackground />

          {/* Animated Background Blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/25 blur-[140px] mix-blend-screen animate-blob" />
            <div className="absolute top-[25%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-500/25 blur-[140px] mix-blend-screen animate-blob-2" />
            <div className="absolute bottom-[-10%] left-[15%] w-[55%] h-[55%] rounded-full bg-pink-500/25 blur-[140px] mix-blend-screen animate-blob-3" />
            <div className="absolute bottom-[30%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[140px] mix-blend-screen animate-blob" style={{ animationDelay: '5s' }} />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
