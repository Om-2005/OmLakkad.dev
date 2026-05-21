import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omkumar D. Lakkad | AI & Software Engineer Portfolio",
    short_name: "Omkumar Dev",
    description: "Cyberpunk-inspired portfolio of Omkumar D. Lakkad showcasing Full Stack development, AI Integrations, and IoT Innovation.",
    start_url: "/",
    display: "standalone",
    background_color: "#030014",
    theme_color: "#00d2ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
